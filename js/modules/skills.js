// =====================================================
// SKILLS.JS — ISI Skill Exchange (entraide entre étudiants)
// Aucune messagerie réelle : tout est LOCAL et SIMULÉ. Les autres étudiants
// sont fictifs. Une séance n'est « réalisée » (et les crédits ne bougent)
// qu'après validation de la contrepartie — ici simulée par un bouton explicite.
// =====================================================

ISI.addI18n({
  fr: {
    sk_title: "ISI Skill Exchange", sk_sub: "Demandez ou proposez de l'aide entre étudiants.",
    sk_banner: "SIMULATION locale : les annonces (hors les vôtres) et les étudiants sont fictifs, rien n'est partagé entre appareils. Les crédits d'entraide sont virtuels, séparés des XP, et ne bougent qu'après une validation (simulée ici). Aucune coordonnée privée n'est affichée.",
    sk_tab_ads: "Annonces", sk_tab_mine: "Mes publications", sk_tab_favs: "Favoris", sk_tab_groups: "Groupes de révision", sk_tab_exch: "Échanges", sk_tab_credits: "Crédits",
    sk_kind_request: "Demande d'aide", sk_kind_offer: "Offre d'aide", sk_kind_session: "Séance d'entraide proposée", sk_new: "Publier une annonce",
    sk_help: "Type d'aide", sk_help_explanation: "Explication de cours", sk_help_exercises: "Exercices", sk_help_revision: "Révision", sk_help_project: "Projet / TP", sk_help_other: "Autre",
    sk_when: "Date et heure (séances proposées)", sk_ph_title: "Titre de l'annonce", sk_ph_desc: "Description (sans coordonnées privées)",
    sk_st_open: "Ouverte", sk_st_accepted: "Acceptée", sk_st_closed: "Clôturée", sk_filter_q: "Mot-clé", sk_none: "Aucune annonce ne correspond.", sk_none_mine: "Vous n'avez rien publié.", sk_none_fav: "Aucun favori.",
    sk_offer_help: "Proposer mon aide", sk_ask_help: "Demander de l'aide", sk_close: "Clôturer", sk_reopen: "Rouvrir", sk_fav: "Favori", sk_by: "par", sk_sim_offer: "Simuler une offre reçue", sk_sim_request: "Simuler une demande reçue",
    sk_group_new: "Créer un groupe de révision", sk_group_name: "Nom du groupe", sk_group_max: "Places max", sk_members: "membres", sk_join: "Rejoindre", sk_leave: "Quitter", sk_group_none: "Aucun groupe.", sk_group_full: "Complet",
    sk_exch_none: "Aucun échange. Proposez ou demandez de l'aide depuis les annonces.", sk_role_helper: "Vous aidez", sk_role_requester: "Vous êtes aidé(e)", sk_ex_proposed: "Proposé", sk_ex_accepted: "Accepté", sk_ex_declared: "Déclarée — en attente de validation", sk_ex_validated: "Validée", sk_ex_cancelled: "Annulé",
    sk_act_accept: "Accepter", sk_act_sim_accept: "Simuler l'acceptation de l'autre étudiant", sk_act_declare: "Déclarer la séance réalisée", sk_act_sim_validate: "Simuler la validation par l'autre étudiant", sk_act_confirm: "Confirmer que la séance a eu lieu", sk_act_cancel: "Annuler",
    sk_credits: "Crédits d'entraide", sk_balance: "Solde", sk_cost: "Coût d'une séance (crédits)", sk_hist_none: "Aucun mouvement.", sk_insufficient: "Crédits insuffisants pour confirmer cette séance.", sk_credit_rules: "Aider (séance validée) = + crédits · être aidé(e) (séance confirmée) = − crédits. Les crédits n'ont aucune valeur monétaire ni scolaire.",
    sk_welcome: "Bonus de bienvenue (démonstration)", sk_credit_help: "Séance d'aide validée", sk_credit_spent: "Séance d'aide reçue", sk_posted: "Annonce publiée.", sk_validated_toast: "Séance validée.", sk_demo_author: "fictif", sk_edit: "Modifier l'annonce",
  },
  en: {
    sk_title: "ISI Skill Exchange", sk_sub: "Ask for or offer help between students.",
    sk_banner: "Local SIMULATION: listings (other than yours) and students are fictional, nothing is shared across devices. Help credits are virtual, separate from XP, and only move after a validation (simulated here). No private contact details are shown.",
    sk_tab_ads: "Listings", sk_tab_mine: "My posts", sk_tab_favs: "Favourites", sk_tab_groups: "Revision groups", sk_tab_exch: "Exchanges", sk_tab_credits: "Credits",
    sk_kind_request: "Help request", sk_kind_offer: "Help offer", sk_kind_session: "Proposed help session", sk_new: "Post a listing",
    sk_help: "Help type", sk_help_explanation: "Lesson explanation", sk_help_exercises: "Exercises", sk_help_revision: "Revision", sk_help_project: "Project / lab", sk_help_other: "Other",
    sk_when: "Date and time (proposed sessions)", sk_ph_title: "Listing title", sk_ph_desc: "Description (no private contact details)",
    sk_st_open: "Open", sk_st_accepted: "Accepted", sk_st_closed: "Closed", sk_filter_q: "Keyword", sk_none: "No listing matches.", sk_none_mine: "You haven't posted anything.", sk_none_fav: "No favourites.",
    sk_offer_help: "Offer my help", sk_ask_help: "Ask for help", sk_close: "Close", sk_reopen: "Reopen", sk_fav: "Favourite", sk_by: "by", sk_sim_offer: "Simulate a received offer", sk_sim_request: "Simulate a received request",
    sk_group_new: "Create a revision group", sk_group_name: "Group name", sk_group_max: "Max seats", sk_members: "members", sk_join: "Join", sk_leave: "Leave", sk_group_none: "No group.", sk_group_full: "Full",
    sk_exch_none: "No exchange. Offer or ask for help from the listings.", sk_role_helper: "You help", sk_role_requester: "You are helped", sk_ex_proposed: "Proposed", sk_ex_accepted: "Accepted", sk_ex_declared: "Declared — awaiting validation", sk_ex_validated: "Validated", sk_ex_cancelled: "Cancelled",
    sk_act_accept: "Accept", sk_act_sim_accept: "Simulate the other student accepting", sk_act_declare: "Declare session done", sk_act_sim_validate: "Simulate validation by the other student", sk_act_confirm: "Confirm the session took place", sk_act_cancel: "Cancel",
    sk_credits: "Help credits", sk_balance: "Balance", sk_cost: "Session cost (credits)", sk_hist_none: "No movement.", sk_insufficient: "Not enough credits to confirm this session.", sk_credit_rules: "Helping (validated session) = + credits · being helped (confirmed session) = − credits. Credits have no monetary or academic value.",
    sk_welcome: "Welcome bonus (demo)", sk_credit_help: "Validated help session", sk_credit_spent: "Help session received", sk_posted: "Listing posted.", sk_validated_toast: "Session validated.", sk_demo_author: "fictional", sk_edit: "Edit listing",
  },
  ar: {
    sk_title: "تبادل المهارات ISI", sk_sub: "اطلب أو اعرض المساعدة بين الطلبة.",
    sk_banner: "محاكاة محلية: الإعلانات (عدا إعلاناتك) والطلبة وهميون ولا يُشارَك شيء بين الأجهزة. رصيد التعاون افتراضي ومنفصل عن نقاط الخبرة ولا يتحرك إلا بعد تأكيد (محاكى هنا). لا تُعرض أي بيانات اتصال خاصة.",
    sk_tab_ads: "الإعلانات", sk_tab_mine: "منشوراتي", sk_tab_favs: "المفضلة", sk_tab_groups: "مجموعات المراجعة", sk_tab_exch: "التبادلات", sk_tab_credits: "الرصيد",
    sk_kind_request: "طلب مساعدة", sk_kind_offer: "عرض مساعدة", sk_kind_session: "حصة تعاون مقترحة", sk_new: "نشر إعلان",
    sk_help: "نوع المساعدة", sk_help_explanation: "شرح درس", sk_help_exercises: "تمارين", sk_help_revision: "مراجعة", sk_help_project: "مشروع / أشغال", sk_help_other: "أخرى",
    sk_when: "التاريخ والوقت (للحصص المقترحة)", sk_ph_title: "عنوان الإعلان", sk_ph_desc: "الوصف (بدون بيانات اتصال خاصة)",
    sk_st_open: "مفتوح", sk_st_accepted: "مقبول", sk_st_closed: "مغلق", sk_filter_q: "كلمة مفتاحية", sk_none: "لا يوجد إعلان مطابق.", sk_none_mine: "لم تنشر شيئا.", sk_none_fav: "لا توجد مفضلات.",
    sk_offer_help: "عرض مساعدتي", sk_ask_help: "طلب المساعدة", sk_close: "إغلاق", sk_reopen: "إعادة فتح", sk_fav: "مفضلة", sk_by: "من", sk_sim_offer: "محاكاة عرض مستلم", sk_sim_request: "محاكاة طلب مستلم",
    sk_group_new: "إنشاء مجموعة مراجعة", sk_group_name: "اسم المجموعة", sk_group_max: "الأماكن القصوى", sk_members: "أعضاء", sk_join: "انضمام", sk_leave: "مغادرة", sk_group_none: "لا توجد مجموعات.", sk_group_full: "ممتلئة",
    sk_exch_none: "لا توجد تبادلات. اعرض أو اطلب المساعدة من الإعلانات.", sk_role_helper: "أنت تساعد", sk_role_requester: "أنت تتلقى المساعدة", sk_ex_proposed: "مقترح", sk_ex_accepted: "مقبول", sk_ex_declared: "مصرّح بها — في انتظار التأكيد", sk_ex_validated: "مؤكدة", sk_ex_cancelled: "ملغى",
    sk_act_accept: "قبول", sk_act_sim_accept: "محاكاة قبول الطالب الآخر", sk_act_declare: "التصريح بإنجاز الحصة", sk_act_sim_validate: "محاكاة تأكيد الطالب الآخر", sk_act_confirm: "تأكيد أن الحصة تمت", sk_act_cancel: "إلغاء",
    sk_credits: "رصيد التعاون", sk_balance: "الرصيد", sk_cost: "كلفة الحصة (رصيد)", sk_hist_none: "لا توجد حركات.", sk_insufficient: "الرصيد غير كاف لتأكيد هذه الحصة.", sk_credit_rules: "المساعدة (حصة مؤكدة) = + رصيد · تلقي المساعدة (حصة مؤكدة) = − رصيد. الرصيد بلا قيمة مالية أو دراسية.",
    sk_welcome: "مكافأة ترحيب (تجريبية)", sk_credit_help: "حصة مساعدة مؤكدة", sk_credit_spent: "حصة مساعدة مستلمة", sk_posted: "تم نشر الإعلان.", sk_validated_toast: "تم تأكيد الحصة.", sk_demo_author: "وهمي", sk_edit: "تعديل الإعلان",
  },
});

Pages.skills = async function () {
  const [demo, subjects] = await Promise.all([ISI.demo("skills"), Data.subjects()]);
  const me = ISI.me();
  const posts = await ISI.seed("sk_posts", async () => demo.posts.map(p => ({ ...p, createdAt: Date.now() - p.daysAgo * 86400000 })));
  await ISI.seed("sk_groups", async () => demo.groups);
  if (!Ledger.has("credits", "welcome")) Ledger.award("credits", "welcome", demo.welcomeCredits, t("sk_welcome"));
  const levelOpts = [["prepa", t("cycle_prepa")], ["licence", t("cycle_licence")], ["mastere", t("cycle_mastere")], ["ingenieur", t("cycle_ingenieur")]];
  const subjOpts = subjects.map(s => [s.name, s.name]);
  const cost = () => ISI.store.get("sk_cost", demo.costPerSession);
  const P = () => ISI.store.get("sk_posts", []); const setP = (v) => ISI.store.set("sk_posts", v);
  const X = () => ISI.store.get("sk_exch", []); const setX = (v) => ISI.store.set("sk_exch", v);
  const G = () => ISI.store.get("sk_groups", []); const setG = (v) => ISI.store.set("sk_groups", v);
  const favs = () => ISI.store.get("sk_favs", []);
  const lvl = (k) => (levelOpts.find(o => o[0] === k) || [k, k])[1];

  const postFormHtml = (p = {}) => `
    ${ISI.select("kind", "x_category", [["request", t("sk_kind_request")], ["offer", t("sk_kind_offer")], ["session", t("sk_kind_session")]], p.kind || "request")}
    ${ISI.input("title", "x_title", `required minlength="4" maxlength="80" placeholder="${t("sk_ph_title")}"`, p.title_fr || p.title || "")}
    ${ISI.textarea("desc", "x_description", `required minlength="10" maxlength="400" placeholder="${t("sk_ph_desc")}"`, p.desc_fr || p.desc || "")}
    <div class="x-field-row">${ISI.select("subject", "x_subject", subjOpts, p.subject)}${ISI.select("level", "x_level", levelOpts, p.level || "prepa")}
    ${ISI.select("help", "sk_help", ["explanation", "exercises", "revision", "project", "other"].map(k => [k, t("sk_help_" + k)]), p.help || "explanation")}</div>
    ${ISI.input("when", "sk_when", 'type="datetime-local"', p.when || "")}`;

  function validatePost(d) {
    if (ISI.hasPrivateInfo(d.title + " " + d.desc)) { ISI.toast("🔒", t("x_err_private")); return false; }
    return true;
  }

  function startExchange(post, role, withName, api) {
    const l = X(); if (l.some(e => e.postId === post.id && e.status !== "cancelled" && e.status !== "validated" && e.role === role)) return;
    l.unshift({ id: ISI.uid("ex"), postId: post.id, title: ISI.L(post, "title") || post.title, role, withName, status: "proposed", cost: cost(), ts: Date.now() });
    setX(l); ISI.toast("🤝", t("sk_ex_proposed")); api.refresh();
  }
  function setStatus(id, status, api) { const l = X(); const e = l.find(x => x.id === id); if (e) { e.status = status; e.ts = Date.now(); } setX(l); api.refresh(); }
  function validate(e, api) {
    if (e.role === "helper") {
      const r = Ledger.award("credits", `exch:${e.id}`, e.cost, `${t("sk_credit_help")} — ${e.title}`);
      if (r.ok) Track.add("help");
    } else {
      const r = Ledger.award("credits", `exch:${e.id}`, -e.cost, `${t("sk_credit_spent")} — ${e.title}`);
      if (!r.ok && r.reason === "insufficient") { ISI.toast("⚠️", t("sk_insufficient")); return; }
    }
    setStatus(e.id, "validated", api); ISI.toast("✅", t("sk_validated_toast"));
  }

  const card = (p, st) => {
    const mine = p.authorId === me.id, fav = favs().includes(p.id);
    return `<div class="x-list-item"><div class="x-main">
      <div class="x-title">${ISI.esc(p.demo ? ISI.L(p, "title") : (p.title_fr || p.title))}</div>
      <div>${ISI.chip(t("sk_kind_" + p.kind))}${ISI.chip(ISI.esc(p.subject))}${ISI.chip(lvl(p.level))}${ISI.chip(t("sk_help_" + p.help))}${ISI.chip(t("sk_st_" + p.status), p.status === "open" ? "ok" : "demo")}${p.demo ? ISI.chip(t("x_fictive"), "demo") : ""}</div>
      <p style="margin:6px 0;">${ISI.esc(p.demo ? ISI.L(p, "desc") : (p.desc_fr || p.desc))}</p>
      <div class="x-muted">${t("sk_by")} ${ISI.esc(mine ? me.name : p.authorName)} · ${ISI.fmtDate(p.createdAt)}${p.when ? ` · 📅 ${ISI.fmtDateTime(p.when)}` : ""}</div>
      <div class="x-muted">${t("x_contact_sim")}</div></div>
      <div class="x-actions"><button class="x-icon-btn x-star ${fav ? "on" : ""}" data-act="fav" data-id="${p.id}" aria-pressed="${fav}" aria-label="${t("sk_fav")}">${fav ? "★" : "☆"}</button>
      ${mine ? `<button class="btn btn-sm btn-outline" data-act="editpost" data-id="${p.id}">✎ ${t("x_edit")}</button>
         <button class="btn btn-sm btn-outline" data-act="togglepost" data-id="${p.id}">${p.status === "closed" ? t("sk_reopen") : t("sk_close")}</button>
         ${p.status !== "closed" ? `<button class="btn btn-sm btn-secondary" data-act="simin" data-id="${p.id}">🧪 ${p.kind === "request" ? t("sk_sim_offer") : t("sk_sim_request")}</button>` : ""}
         <button class="btn btn-sm btn-ghost" data-act="delpost" data-id="${p.id}" aria-label="${t("x_delete")}">🗑</button>`
        : p.status === "open" ? `<button class="btn btn-sm btn-primary" data-act="${p.kind === "request" ? "helpfor" : "askfor"}" data-id="${p.id}">${p.kind === "request" ? t("sk_offer_help") : t("sk_ask_help")}</button>` : ""}</div></div>`;
  };

  return ISI.page("skills", {
    render(st) {
      st.tab = st.tab || "ads"; st.f = st.f || { q: "", subject: "", level: "", kind: "", help: "" };
      const tabs = ISI.tabs(["ads", "mine", "favs", "groups", "exch", "credits"].map(k => [k, t("sk_tab_" + k)]), st.tab);
      let body = "";
      if (st.tab === "ads" || st.tab === "favs" || st.tab === "mine") {
        const f = st.f; let list = P().slice().sort((a, b) => b.createdAt - a.createdAt);
        if (st.tab === "mine") list = list.filter(p => p.authorId === me.id);
        else if (st.tab === "favs") list = list.filter(p => favs().includes(p.id));
        else list = list.filter(p => p.status !== "closed");
        const q = f.q.toLowerCase();
        list = list.filter(p => (!f.subject || p.subject === f.subject) && (!f.level || p.level === f.level) && (!f.kind || p.kind === f.kind) && (!f.help || p.help === f.help) &&
          (!q || `${p.title_fr || p.title} ${p.desc_fr || p.desc} ${p.title_en || ""} ${p.subject}`.toLowerCase().includes(q)));
        body = `
          ${st.tab === "ads" ? `<div class="card" style="margin-bottom:14px;"><div class="card-title">✍ ${t("sk_new")}</div><form data-submit="newpost" novalidate>${postFormHtml()}<button class="btn btn-primary" type="submit">${t("x_add")}</button></form></div>` : ""}
          <div class="card" style="margin-bottom:14px;"><div class="x-field-row">
            <div class="field"><label for="fq">${t("sk_filter_q")}</label><input id="fq" data-on="fq" value="${ISI.esc(f.q)}" maxlength="40"></div>
            ${ISI.select("fsub", "x_subject", [["", t("x_all")], ...subjOpts], f.subject, 'data-on="fsub"')}${ISI.select("flvl", "x_level", [["", t("x_all")], ...levelOpts], f.level, 'data-on="flvl"')}
            ${ISI.select("fkind", "x_category", [["", t("x_all")], ["request", t("sk_kind_request")], ["offer", t("sk_kind_offer")], ["session", t("sk_kind_session")]], f.kind, 'data-on="fkind"')}
            ${ISI.select("fhelp", "sk_help", [["", t("x_all")], ...["explanation", "exercises", "revision", "project", "other"].map(k => [k, t("sk_help_" + k)])], f.help, 'data-on="fhelp"')}</div></div>
          <div class="card">${list.length ? list.map(p => card(p, st)).join("") : `<p class="x-muted">${t(st.tab === "mine" ? "sk_none_mine" : st.tab === "favs" ? "sk_none_fav" : "sk_none")}</p>`}</div>`;
      } else if (st.tab === "groups") {
        const gs = G();
        body = `<div class="x-grid-2"><div class="card"><div class="card-title">${t("sk_group_new")}</div><form data-submit="newgroup" novalidate>${ISI.input("name", "sk_group_name", 'required minlength="3" maxlength="50"')}
          <div class="x-field-row">${ISI.select("subject", "x_subject", subjOpts, "")}${ISI.input("max", "sk_group_max", 'type="number" min="2" max="20" required', "6")}</div>${ISI.textarea("desc", "x_description", 'maxlength="200"')}<button class="btn btn-primary" type="submit">${t("x_add")}</button></form></div>
          <div class="card">${gs.length ? gs.map(g => { const inG = g.members.includes(me.id), full = g.members.length >= g.max; return `<div class="x-list-item"><div class="x-main"><div class="x-title">${ISI.esc(g.name)} ${g.demo ? ISI.chip(t("x_fictive"), "demo") : ""}</div><div class="x-muted">${ISI.esc(g.subject)} · ${g.members.length}/${g.max} ${t("sk_members")}</div><div class="x-muted">${ISI.esc(g.desc || "")}</div></div>
            <div class="x-actions">${inG ? `<button class="btn btn-sm btn-outline" data-act="leave" data-id="${g.id}">${t("sk_leave")}</button>` : `<button class="btn btn-sm btn-primary" data-act="join" data-id="${g.id}" ${full ? "disabled" : ""}>${full ? t("sk_group_full") : t("sk_join")}</button>`}
            ${g.owner === me.id ? `<button class="btn btn-sm btn-ghost" data-act="delgroup" data-id="${g.id}" aria-label="${t("x_delete")}">🗑</button>` : ""}</div></div>`; }).join("") : `<p class="x-muted">${t("sk_group_none")}</p>`}</div></div>`;
      } else if (st.tab === "exch") {
        const l = X();
        body = `<div class="card">${l.length ? l.map(e => `<div class="x-list-item"><div class="x-main"><div class="x-title">${ISI.esc(e.title)}</div><div class="x-muted">${t("sk_role_" + e.role)} · ${ISI.esc(e.withName)} ${ISI.chip(t("x_fictive"), "demo")} · ${ISI.fmtDateTime(e.ts)}</div>${ISI.chip(t("sk_ex_" + e.status), e.status === "validated" ? "ok" : e.status === "cancelled" ? "bad" : "warn")} <span class="x-muted">${e.cost} ${t("sk_credits").toLowerCase()}</span></div>
          <div class="x-actions">${e.status === "proposed" ? (e.role === "helper" ? `<button class="btn btn-sm btn-secondary" data-act="exacc" data-id="${e.id}">🧪 ${t("sk_act_sim_accept")}</button>` : `<button class="btn btn-sm btn-primary" data-act="exacc" data-id="${e.id}">${t("sk_act_accept")}</button>`) : ""}
          ${e.status === "accepted" ? (e.role === "helper" ? `<button class="btn btn-sm btn-primary" data-act="exdecl" data-id="${e.id}">${t("sk_act_declare")}</button>` : `<button class="btn btn-sm btn-primary" data-act="exconf" data-id="${e.id}">${t("sk_act_confirm")}</button>`) : ""}
          ${e.status === "declared" ? `<button class="btn btn-sm btn-secondary" data-act="exval" data-id="${e.id}">🧪 ${t("sk_act_sim_validate")}</button>` : ""}
          ${["proposed", "accepted", "declared"].includes(e.status) ? `<button class="btn btn-sm btn-ghost" data-act="excancel" data-id="${e.id}">${t("sk_act_cancel")}</button>` : ""}</div></div>`).join("") : `<p class="x-muted">${t("sk_exch_none")}</p>`}</div>`;
      } else if (st.tab === "credits") {
        const h = Ledger.entries("credits");
        body = `<div class="x-grid-2"><div class="card"><div class="x-muted">🤝 ${t("sk_balance")}</div><div class="x-big">${Ledger.balance("credits")}</div><p class="x-muted">${t("sk_credit_rules")}</p>
          <form data-submit="setcost" class="x-row" novalidate><div style="width:170px">${ISI.input("cost", "sk_cost", 'type="number" min="1" max="5" required', cost())}</div><button class="btn btn-secondary" type="submit" style="align-self:center">${t("x_save")}</button></form></div>
          <div class="card">${h.length ? h.slice(0, 40).map(e => `<div class="x-list-item"><div class="x-main"><div class="x-title">${ISI.esc(e.label)}</div><div class="x-muted">${ISI.fmtDateTime(e.ts)}</div></div>${ISI.chip((e.pts > 0 ? "+" : "") + e.pts, e.pts > 0 ? "ok" : "bad")}</div>`).join("") : `<p class="x-muted">${t("sk_hist_none")}</p>`}</div></div>`;
      }
      return `${ISI.header("sk_title", "sk_sub")}${ISI.banner("sk_banner")}${tabs}${body}<div style="margin-top:14px;"><button class="btn btn-ghost btn-sm" data-act="reset">♻ ${t("x_reset_btn")}</button></div>`;
    },
    actions(st, api) {
      const find = (id) => P().find(p => p.id === id);
      const upd = (id, fn) => { const l = P(); const p = l.find(x => x.id === id); if (p) fn(p); setP(l); api.refresh(); };
      return {
        tab(el) { st.tab = el.dataset.id; api.refresh(); },
        fq(el) { st.f.q = el.value; const pos = el.selectionStart; api.refresh(); const n = document.getElementById("fq"); if (n) { n.focus(); n.setSelectionRange(pos, pos); } },
        fsub(el) { st.f.subject = el.value; api.refresh(); }, flvl(el) { st.f.level = el.value; api.refresh(); }, fkind(el) { st.f.kind = el.value; api.refresh(); }, fhelp(el) { st.f.help = el.value; api.refresh(); },
        newpost(form) {
          const { ok, data } = ISI.readForm(form); if (!ok || !validatePost(data)) return;
          const l = P(); l.unshift({ id: ISI.uid("sk"), kind: data.kind, subject: data.subject, level: data.level, help: data.help, status: "open", authorId: me.id, authorName: me.name, title: data.title, desc: data.desc, when: data.when || "", createdAt: Date.now() });
          setP(l); Track.add("post"); ISI.toast("📢", t("sk_posted")); st.tab = "mine"; api.refresh();
        },
        editpost(el) {
          const p = find(el.dataset.id); if (!p) return;
          ISI.formModal(t("sk_edit"), postFormHtml(p), (d) => { if (!validatePost(d)) return false; upd(p.id, x => Object.assign(x, { kind: d.kind, subject: d.subject, level: d.level, help: d.help, title: d.title, desc: d.desc, when: d.when || "" })); ISI.toast("✅", t("x_saved")); });
        },
        togglepost(el) { upd(el.dataset.id, p => { p.status = p.status === "closed" ? "open" : "closed"; }); },
        delpost(el) { ISI.confirm(t("x_delete_confirm"), () => { setP(P().filter(p => p.id !== el.dataset.id)); ISI.toast("🗑", t("x_deleted")); api.refresh(); }); },
        fav(el) { const f = favs(); const i = f.indexOf(el.dataset.id); if (i >= 0) f.splice(i, 1); else f.push(el.dataset.id); ISI.store.set("sk_favs", f); api.refresh(); },
        helpfor(el) { const p = find(el.dataset.id); if (p) startExchange(p, "helper", p.authorName, api); },
        askfor(el) { const p = find(el.dataset.id); if (p) startExchange(p, "requester", p.authorName, api); },
        simin(el) { const p = find(el.dataset.id); if (!p) return; const names = (demo.groups[0].members.concat(["demo-stu-10"])); const who = "Étudiant fictif " + names[Math.floor(Math.random() * names.length)].slice(-2);
          startExchange(p, p.kind === "request" ? "requester" : "helper", who, api); st.tab = "exch"; api.refresh(); },
        exacc(el) { setStatus(el.dataset.id, "accepted", api); },
        exdecl(el) { setStatus(el.dataset.id, "declared", api); },
        exval(el) { const e = X().find(x => x.id === el.dataset.id); if (e) validate(e, api); },
        exconf(el) { const e = X().find(x => x.id === el.dataset.id); if (e) validate(e, api); },
        excancel(el) { ISI.confirm(t("x_delete_confirm"), () => setStatus(el.dataset.id, "cancelled", api)); },
        newgroup(form) { const { ok, data } = ISI.readForm(form); if (!ok || ISI.hasPrivateInfo(data.name + data.desc)) { if (ok) ISI.toast("🔒", t("x_err_private")); return; } const l = G(); l.unshift({ id: ISI.uid("g"), name: data.name, subject: data.subject, level: "prepa", max: Number(data.max), members: [me.id], desc: data.desc, owner: me.id }); setG(l); api.refresh(); },
        join(el) { const l = G(); const g = l.find(x => x.id === el.dataset.id); if (g && g.members.length < g.max && !g.members.includes(me.id)) g.members.push(me.id); setG(l); api.refresh(); },
        leave(el) { const l = G(); const g = l.find(x => x.id === el.dataset.id); if (g) g.members = g.members.filter(m => m !== me.id); setG(l); api.refresh(); },
        delgroup(el) { ISI.confirm(t("x_delete_confirm"), () => { setG(G().filter(g => g.id !== el.dataset.id)); api.refresh(); }); },
        setcost(form) { const { ok, data } = ISI.readForm(form); if (!ok) return; ISI.store.set("sk_cost", Number(data.cost)); ISI.toast("✅", t("x_saved")); api.refresh(); },
        reset() { ISI.resetModule(["sk"], () => { Ledger.clear("credits"); location.reload(); }); },
      };
    },
  });
};
