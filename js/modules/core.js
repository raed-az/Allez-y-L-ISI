// =====================================================
// MODULES/CORE.JS — Socle commun des modules « Campus »
// (stockage, i18n étendu, ledger anti-doublon, helpers UI)
// 100 % frontend. Rien ici ne constitue une preuve ou une
// donnée officielle : tout est local, non vérifié.
// =====================================================

const ISI = {
  SCHEMA: 1,
  state: {},      // état d'interface (mémoire, non persistant) par module
  _timers: [],
  _leave: [],
  _queue: [],

  // ---------- Sécurité d'affichage ----------
  esc(v) {
    return String(v === undefined || v === null ? "" : v)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  },
  uid(prefix = "id") {
    return prefix + "_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  },

  // ---------- Stockage (préfixe x_ pour ne jamais toucher aux clés existantes) ----------
  store: {
    get(k, f) { return Storage.get("x_" + k, f); },
    set(k, v) { return Storage.set("x_" + k, v); },
    remove(k) { Storage.remove("x_" + k); },
    keys() {
      const out = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith(STORAGE_PREFIX + "x_")) out.push(k.slice((STORAGE_PREFIX + "x_").length));
      }
      return out;
    }
  },

  // ---------- Migration prudente : ne supprime jamais rien ----------
  migrate() {
    const v = this.store.get("schema", 0);
    if (v < 1) { this.store.set("schema", 1); }
    // Futures migrations : if (v < 2) { ...transformer sans écraser... }
  },

  // ---------- i18n : fusion des dictionnaires de modules ----------
  addI18n(dict) {
    ["fr", "en", "ar"].forEach(l => {
      if (dict[l]) Object.assign(I18N[l], dict[l]);
    });
  },
  // Choix du champ localisé dans un objet de données (title_fr / title_en / title_ar)
  L(obj, field) {
    if (!obj) return "";
    const lang = Storage.getLang();
    return obj[field + "_" + lang] || obj[field + "_fr"] || obj[field] || "";
  },

  // ---------- Identité locale ----------
  me() {
    const s = (typeof App !== "undefined" && App.session) || {};
    return {
      id: (s.profile && s.profile.id) || "guest",
      name: s.fullName || "Invité",
      role: s.role || Storage.getRole() || "student",
      group: Storage.getGroup() || (s.profile && s.profile.group) || null,
    };
  },

  // ---------- Dates ----------
  pad(n) { return String(n).padStart(2, "0"); },
  dayKey(d = new Date()) { return `${d.getFullYear()}-${this.pad(d.getMonth() + 1)}-${this.pad(d.getDate())}`; },
  weekKey(d = new Date()) {
    const t0 = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    const dayNum = t0.getUTCDay() || 7;
    t0.setUTCDate(t0.getUTCDate() + 4 - dayNum);
    const y0 = new Date(Date.UTC(t0.getUTCFullYear(), 0, 1));
    const wk = Math.ceil((((t0 - y0) / 86400000) + 1) / 7);
    return `${t0.getUTCFullYear()}-W${this.pad(wk)}`;
  },
  fmtDateTime(ts) {
    const lang = Storage.getLang();
    try { return new Date(ts).toLocaleString(lang === "ar" ? "ar-TN" : lang === "en" ? "en-GB" : "fr-FR", { dateStyle: "short", timeStyle: "short" }); }
    catch (e) { return new Date(ts).toISOString(); }
  },
  fmtDate(ts) {
    const lang = Storage.getLang();
    try { return new Date(ts).toLocaleDateString(lang === "ar" ? "ar-TN" : lang === "en" ? "en-GB" : "fr-FR"); }
    catch (e) { return String(ts); }
  },
  toMin(hhmm) { const [h, m] = String(hhmm).split(":").map(Number); return h * 60 + (m || 0); },
  fromMin(m) { return `${this.pad(Math.floor(m / 60))}:${this.pad(m % 60)}`; },

  // ---------- Timers (nettoyés à chaque changement de route) ----------
  interval(fn, ms) { const id = setInterval(fn, ms); this._timers.push(id); return id; },
  onLeave(fn) { this._leave.push(fn); },
  clearTimers() {
    this._timers.forEach(clearInterval); this._timers = [];
    const l = this._leave; this._leave = [];
    l.forEach(fn => { try { fn(); } catch (e) { console.warn(e); } });
  },

  // ---------- Rendu par module (re-rendu local sans perdre le scroll) ----------
  // ISI.page("id", { render(st) -> html, bind(root, st, api) })
  page(id, def) {
    this.state[id] = this.state[id] || {};
    const st = this.state[id];
    const api = {
      refresh: () => {
        const root = document.getElementById("mod-" + id);
        if (!root) return;
        const y = window.scrollY;
        root.innerHTML = def.render(st);
        translateStaticDom(root);
        ISI.wire(root, def.actions ? def.actions(st, api) : {});
        if (def.bind) def.bind(root, st, api);
        window.scrollTo({ top: y, behavior: "auto" });
      },
      st,
    };
    this._queue.push(() => {
      const root = document.getElementById("mod-" + id);
      if (!root) return;
      root.innerHTML = def.render(st);
      translateStaticDom(root);
      ISI.wire(root, def.actions ? def.actions(st, api) : {});
      if (def.bind) def.bind(root, st, api);
    });
    return `<div id="mod-${id}" class="x-module"></div>`;
  },
  flush() {
    const q = this._queue; this._queue = [];
    q.forEach(fn => { try { fn(); } catch (e) { console.error("Module render error", e); } });
  },

  // ---------- Délégation d'événements ----------
  // data-act="nom"  -> actions[nom](el, event)
  // <form data-submit="nom"> -> actions[nom](formEl, event) ; <input data-on="nom"> -> input/change
  wire(root, actions) {
    // Les écouteurs ne sont attachés QU'UNE fois par racine ; seules les actions courantes sont remplacées
    // (sinon chaque re-rendu local doublerait les gestionnaires).
    root._xActions = actions;
    if (root._xWired) return;
    root._xWired = true;
    const act = () => root._xActions || {};
    root.addEventListener("click", (e) => {
      const el = e.target.closest("[data-act]");
      if (!el || !root.contains(el)) return;
      const fn = act()[el.getAttribute("data-act")];
      if (fn) fn(el, e);
    });
    root.addEventListener("keydown", (e) => {
      if ((e.key === "Enter" || e.key === " ") && e.target.matches("[role=button][data-act]")) {
        e.preventDefault(); e.target.click();
      }
    });
    root.addEventListener("submit", (e) => {
      const form = e.target.closest("form[data-submit]");
      if (!form) return;
      e.preventDefault();
      const fn = act()[form.getAttribute("data-submit")];
      if (fn) fn(form, e);
    });
    const onInput = (e) => {
      const el = e.target.closest("[data-on]");
      if (!el) return;
      const fn = act()[el.getAttribute("data-on")];
      if (fn) fn(el, e);
    };
    root.addEventListener("input", onInput);
    root.addEventListener("change", onInput);
  },

  // ---------- Formulaires : validation + erreurs accessibles ----------
  // Retourne { ok, data }. Utilise required/minlength/maxlength/min/max natifs + data-label.
  readForm(form) {
    form.querySelectorAll(".x-err").forEach(n => n.remove());
    form.querySelectorAll("[aria-invalid]").forEach(n => n.removeAttribute("aria-invalid"));
    const data = {}; let ok = true; let first = null;
    form.querySelectorAll("input,select,textarea").forEach(el => {
      if (!el.name) return;
      let v = el.type === "checkbox" ? el.checked : el.value;
      if (typeof v === "string") v = v.trim();
      data[el.name] = v;
      let msg = "";
      if (el.required && (v === "" || v === false)) msg = t("x_err_required");
      else if (typeof v === "string" && el.minLength > 0 && v.length > 0 && v.length < el.minLength) msg = t("x_err_min", { n: el.minLength });
      else if (el.type === "number" && v !== "") {
        const n = Number(v);
        if (isNaN(n) || (el.min !== "" && n < Number(el.min)) || (el.max !== "" && n > Number(el.max))) msg = t("x_err_range", { a: el.min, b: el.max });
      }
      if (msg) {
        ok = false; el.setAttribute("aria-invalid", "true");
        const span = document.createElement("div");
        span.className = "x-err field-error"; span.setAttribute("role", "alert"); span.textContent = msg;
        el.insertAdjacentElement("afterend", span);
        if (!first) first = el;
      }
    });
    if (first) first.focus();
    return { ok, data };
  },

  // ---------- Modale de confirmation (actions destructrices) ----------
  confirm(message, onYes, opts = {}) {
    App.openModal(`
      <div class="modal-header"><h3>${ISI.esc(opts.title || t("x_confirm_title"))}</h3></div>
      <div class="modal-body"><p>${ISI.esc(message)}</p></div>
      <div class="modal-footer">
        <button class="btn btn-ghost" data-close-modal>${t("x_cancel")}</button>
        <button class="btn ${opts.danger === false ? "btn-primary" : "btn-primary x-danger"}" id="x-confirm-yes">${ISI.esc(opts.yes || t("x_confirm_yes"))}</button>
      </div>`);
    const yes = document.getElementById("x-confirm-yes");
    if (yes) { yes.addEventListener("click", () => { App.closeModal(); onYes(); }); yes.focus(); }
  },

  toast(icon, msg) { App.showToast(icon, ISI.esc(msg)); },

  // ---------- Export CSV (neutralise l'injection de formules) ----------
  csv(rows, filename) {
    const cell = (v) => {
      let s = String(v === undefined || v === null ? "" : v);
      if (/^[=+\-@\t\r]/.test(s)) s = "'" + s;
      return /[",\n\r;]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
    };
    const text = "\uFEFF" + rows.map(r => r.map(cell).join(",")).join("\r\n");
    const blob = new Blob([text], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = filename;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    return text;
  },

  // ---------- Composants visuels ----------
  banner(key, kind = "warning") {
    return `<div class="${kind}-box x-banner" role="note"><strong>🧪 ${t("x_demo_label")}</strong> — ${t(key)}</div>`;
  },
  header(titleKey, subKey) {
    return `<div class="page-header"><h1>${t(titleKey)}</h1></div>${subKey ? `<p class="x-sub">${t(subKey)}</p>` : ""}`;
  },
  tabs(list, active, act = "tab") {
    return `<div class="x-tabs" role="tablist">${list.map(([id, label]) =>
      `<button role="tab" aria-selected="${id === active}" class="x-tab ${id === active ? "active" : ""}" data-act="${act}" data-id="${id}">${label}</button>`).join("")}</div>`;
  },
  empty(emoji, msgKey) {
    return `<div class="empty-state"><div class="empty-emoji">${emoji}</div><p>${t(msgKey)}</p></div>`;
  },
  bar(pct, label = "", color = "") {
    const p = Math.max(0, Math.min(100, Math.round(pct)));
    return `<div class="x-bar" role="progressbar" aria-valuenow="${p}" aria-valuemin="0" aria-valuemax="100" aria-label="${ISI.esc(label)}"><div class="x-bar-fill" style="width:${p}%;${color ? "background:" + color : ""}"></div></div>`;
  },
  chip(text, cls = "") { return `<span class="x-chip ${cls}">${text}</span>`; },
  input(name, labelKey, attrs = "", value = "") {
    return `<div class="field"><label for="f-${name}">${t(labelKey)}</label><input id="f-${name}" name="${name}" value="${ISI.esc(value)}" ${attrs} /></div>`;
  },
  textarea(name, labelKey, attrs = "", value = "") {
    return `<div class="field"><label for="f-${name}">${t(labelKey)}</label><textarea id="f-${name}" name="${name}" rows="3" ${attrs}>${ISI.esc(value)}</textarea></div>`;
  },
  select(name, labelKey, options, selected = "", attrs = "") {
    return `<div class="field"><label for="f-${name}">${t(labelKey)}</label><select id="f-${name}" name="${name}" ${attrs}>${
      options.map(([v, l]) => `<option value="${ISI.esc(v)}" ${String(v) === String(selected) ? "selected" : ""}>${ISI.esc(l)}</option>`).join("")}</select></div>`;
  },

  // ---------- Téléchargement/Import JSON de sauvegarde ----------
  exportAll() {
    const dump = {};
    this.store.keys().forEach(k => { dump[k] = this.store.get(k); });
    const blob = new Blob([JSON.stringify({ app: "allez-y-isi", schema: this.SCHEMA, exportedAt: new Date().toISOString(), data: dump }, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = "allez-y-isi-donnees-locales.json";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  },

  // ---------- Réinitialisation des données de démonstration (avec confirmation) ----------
  // Ne touche que les clés x_<module>* ; jamais les données du site d'origine.
  resetModule(prefixes, after) {
    ISI.confirm(t("x_reset_confirm"), () => {
      this.store.keys().forEach(k => { if (prefixes.some(p => k === p || k.startsWith(p + "_"))) this.store.remove(k); });
      ISI.toast("♻️", t("x_reset_done"));
      if (after) after();
    });
  },

  // ---------- Chargement de données de démonstration ----------
  async demo(name) {
    const d = await Data.load(`./data/demo/${name}.json`);
    return d || {};
  },

  // Données de démonstration : initialisées une seule fois, jamais ré-écrasées.
  async seed(key, loader) {
    let v = this.store.get(key, null);
    if (v === null) { v = await loader(); this.store.set(key, v); }
    return v;
  },
};

// ---------------------------------------------------------------
// LEDGERS séparés : xp / eco / credits — chacun avec son historique.
// Anti-doublon : une même action (key) ne rapporte qu'une fois.
// Signature simple : détecte une modification accidentelle du stockage,
// mais N'EST PAS une protection (tout est modifiable côté navigateur).
// ---------------------------------------------------------------
const Ledger = {
  KINDS: ["xp", "eco", "credits"],
  _sig(obj) {
    const s = JSON.stringify(obj) + "|isi-local-v1";
    let h = 0x811c9dc5;
    for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193); }
    return (h >>> 0).toString(16);
  },
  _load() {
    const l = ISI.store.get("ledger", null) || { xp: [], eco: [], credits: [] };
    const sig = ISI.store.get("ledger_sig", null);
    l._verified = sig === null ? true : sig === this._sig({ xp: l.xp, eco: l.eco, credits: l.credits });
    return l;
  },
  _save(l) {
    const clean = { xp: l.xp, eco: l.eco, credits: l.credits };
    ISI.store.set("ledger", clean);
    ISI.store.set("ledger_sig", this._sig(clean));
  },
  entries(kind) { return this._load()[kind] || []; },
  balance(kind) { return this.entries(kind).reduce((a, e) => a + e.pts, 0); },
  verified() { return this._load()._verified; },
  has(kind, key) { return this.entries(kind).some(e => e.key === key); },
  // Retourne { ok, dup, reason }
  award(kind, key, pts, label, meta = {}) {
    const l = this._load();
    if (!this.KINDS.includes(kind)) return { ok: false, reason: "kind" };
    if (l[kind].some(e => e.key === key)) return { ok: false, dup: true };
    if (kind === "credits" && pts < 0 && this.balance("credits") + pts < 0) return { ok: false, reason: "insufficient" };
    l[kind].unshift({ id: ISI.uid("l"), key, pts, label, ts: Date.now(), ...meta });
    if (l[kind].length > 400) l[kind].length = 400;
    this._save(l);
    return { ok: true };
  },
  clear(kind) { const l = this._load(); l[kind] = []; this._save(l); },
  // Rapprochement : réécrit la signature (à utiliser si l'utilisateur accepte l'état actuel)
  accept() { const l = this._load(); this._save(l); },
};

// ---------------------------------------------------------------
// ÉVÉNEMENTS (alimentent missions/badges) avec plafond quotidien
// afin de ne pas encourager le sur-travail ni le « farming ».
// ---------------------------------------------------------------
const DAILY_CAPS = { focus: 6, quiz: 5, read: 10, vote: 10, eco: 5, help: 3, post: 5, plan: 3 };
const Track = {
  add(evt, n = 1) {
    const all = ISI.store.get("events", []);
    const day = ISI.dayKey();
    const today = all.filter(e => e.e === evt && e.d === day).length;
    if (DAILY_CAPS[evt] && today >= DAILY_CAPS[evt]) return false;
    all.push({ e: evt, d: day, w: ISI.weekKey(), ts: Date.now() });
    if (all.length > 1500) all.splice(0, all.length - 1500);
    ISI.store.set("events", all);
    return true;
  },
  count(evt, period) {
    const all = ISI.store.get("events", []);
    const d = ISI.dayKey(), w = ISI.weekKey();
    return all.filter(e => e.e === evt && (period === "daily" ? e.d === d : period === "weekly" ? e.w === w : true)).length;
  },
};

// Rend la fonction ISI.clearTimers accessible aux scripts qui l'appellent avant que le module soit chargé
window.ISI = ISI; window.Ledger = Ledger; window.Track = Track;

ISI.addI18n({
  fr: {
    x_demo_label: "Démonstration", x_confirm_title: "Confirmation", x_cancel: "Annuler", x_confirm_yes: "Confirmer",
    x_err_required: "Ce champ est obligatoire.", x_err_min: "Minimum {n} caractères.", x_err_range: "Valeur hors limites ({a}–{b}).",
    x_reset_confirm: "Réinitialiser les données locales de ce module ? Cette action est irréversible. Les autres fonctionnalités du site ne sont pas touchées.",
    x_reset_done: "Données du module réinitialisées.", x_reset_btn: "Réinitialiser les données de démonstration",
    x_delete: "Supprimer", x_edit: "Modifier", x_save: "Enregistrer", x_add: "Ajouter", x_close: "Fermer", x_search: "Rechercher",
    x_all: "Tous", x_none: "Aucun", x_export_csv: "Exporter en CSV", x_back: "Retour", x_yes: "Oui", x_no: "Non",
    x_fictive: "fictif", x_local_only: "Local à cet appareil", x_simulated: "Simulé", x_demo_data: "Données de démonstration (fictives)",
    x_delete_confirm: "Supprimer cet élément ? Action irréversible.", x_deleted: "Élément supprimé.", x_saved: "Enregistré.",
    x_status: "Statut", x_category: "Catégorie", x_subject: "Matière", x_group: "Groupe", x_level: "Niveau", x_date: "Date", x_description: "Description", x_title: "Titre",
    x_export_all: "Exporter mes données locales (JSON)", x_cap_reached: "Plafond quotidien atteint pour cette activité (anti-abus et bien-être).",
    x_not_official: "Contenu non officiel, indépendant de l'administration de l'ISI.",
  },
  en: {
    x_demo_label: "Demo", x_confirm_title: "Confirmation", x_cancel: "Cancel", x_confirm_yes: "Confirm",
    x_err_required: "This field is required.", x_err_min: "Minimum {n} characters.", x_err_range: "Value out of range ({a}–{b}).",
    x_reset_confirm: "Reset this module's local data? This cannot be undone. The rest of the site is not affected.",
    x_reset_done: "Module data reset.", x_reset_btn: "Reset demo data",
    x_delete: "Delete", x_edit: "Edit", x_save: "Save", x_add: "Add", x_close: "Close", x_search: "Search",
    x_all: "All", x_none: "None", x_export_csv: "Export as CSV", x_back: "Back", x_yes: "Yes", x_no: "No",
    x_fictive: "fictional", x_local_only: "Local to this device", x_simulated: "Simulated", x_demo_data: "Demo data (fictional)",
    x_delete_confirm: "Delete this item? This cannot be undone.", x_deleted: "Item deleted.", x_saved: "Saved.",
    x_status: "Status", x_category: "Category", x_subject: "Subject", x_group: "Group", x_level: "Level", x_date: "Date", x_description: "Description", x_title: "Title",
    x_export_all: "Export my local data (JSON)", x_cap_reached: "Daily cap reached for this activity (anti-abuse and wellbeing).",
    x_not_official: "Unofficial content, independent from ISI administration.",
  },
  ar: {
    x_demo_label: "نسخة تجريبية", x_confirm_title: "تأكيد", x_cancel: "إلغاء", x_confirm_yes: "تأكيد",
    x_err_required: "هذا الحقل إجباري.", x_err_min: "الحد الأدنى {n} أحرف.", x_err_range: "القيمة خارج النطاق ({a}–{b}).",
    x_reset_confirm: "إعادة تعيين البيانات المحلية لهذه الوحدة؟ لا يمكن التراجع. بقية الموقع لا تتأثر.",
    x_reset_done: "تمت إعادة تعيين بيانات الوحدة.", x_reset_btn: "إعادة تعيين البيانات التجريبية",
    x_delete: "حذف", x_edit: "تعديل", x_save: "حفظ", x_add: "إضافة", x_close: "إغلاق", x_search: "بحث",
    x_all: "الكل", x_none: "لا شيء", x_export_csv: "تصدير CSV", x_back: "رجوع", x_yes: "نعم", x_no: "لا",
    x_fictive: "وهمي", x_local_only: "محلي على هذا الجهاز", x_simulated: "محاكاة", x_demo_data: "بيانات تجريبية (وهمية)",
    x_delete_confirm: "حذف هذا العنصر؟ لا يمكن التراجع.", x_deleted: "تم الحذف.", x_saved: "تم الحفظ.",
    x_status: "الحالة", x_category: "الفئة", x_subject: "المادة", x_group: "المجموعة", x_level: "المستوى", x_date: "التاريخ", x_description: "الوصف", x_title: "العنوان",
    x_export_all: "تصدير بياناتي المحلية (JSON)", x_cap_reached: "تم بلوغ الحد اليومي لهذا النشاط (منع الإساءة والعناية بالصحة).",
    x_not_official: "محتوى غير رسمي ومستقل عن إدارة المعهد.",
  },
});

// ---------- Modale-formulaire (édition) ----------
ISI.formModal = function (title, bodyHtml, onSubmit, submitLabel) {
  App.openModal(`
    <div class="modal-header"><h3>${ISI.esc(title)}</h3><button class="modal-close" data-close-modal aria-label="${t("x_close")}">✕</button></div>
    <form id="x-modal-form" novalidate><div class="modal-body">${bodyHtml}</div>
    <div class="modal-footer"><button type="button" class="btn btn-ghost" data-close-modal>${t("x_cancel")}</button><button type="submit" class="btn btn-primary">${ISI.esc(submitLabel || t("x_save"))}</button></div></form>`);
  const f = document.getElementById("x-modal-form");
  f.addEventListener("submit", (e) => { e.preventDefault(); const r = ISI.readForm(f); if (r.ok && onSubmit(r.data, f) !== false) App.closeModal(); });
};

// ---------- Vie privée : détecte e-mails / numéros de téléphone dans un texte public ----------
ISI.hasPrivateInfo = function (text) {
  const s = String(text || "");
  if (/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/.test(s)) return true;
  const digits = s.replace(/[\s.\-()]/g, "");
  return /(\+?\d{8,})/.test(digits);
};
ISI.addI18n({
  fr: { x_err_private: "Ne publiez pas d'e-mail ni de numéro de téléphone : utilisez la messagerie simulée de la plateforme.", x_contact_sim: "Contact via la plateforme (simulé) — aucune coordonnée n'est affichée." },
  en: { x_err_private: "Do not post emails or phone numbers: use the platform's simulated messaging.", x_contact_sim: "Contact through the platform (simulated) — no personal details shown." },
  ar: { x_err_private: "لا تنشر بريدا إلكترونيا أو رقم هاتف: استعمل المراسلة المحاكاة للمنصة.", x_contact_sim: "التواصل عبر المنصة (محاكاة) — لا تُعرض أي بيانات شخصية." },
});

ISI.migrate();
