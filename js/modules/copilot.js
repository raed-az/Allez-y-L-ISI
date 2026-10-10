// =====================================================
// COPILOT.JS — Personal Study Copilot
// Assistant LOCAL : recherche dans le syllabus/ressources du projet + QCM
// prédéfinis + règles JS. Ce N'EST PAS une IA générative.
// Extension future : implémenter StudyAI.providers.remote (appel à votre propre
// proxy serveur, qui détient la clé API — jamais de clé dans le frontend).
// =====================================================

ISI.addI18n({
  fr: {
    cp_title: "Personal Study Copilot", cp_sub: "Recherche, fiches de révision, quiz et recommandations.",
    cp_banner: "Assistant LOCAL (recherche + règles), sans IA générative. Les réponses citent leur source dans le syllabus fourni. Les QCM sont des exemples génériques rédigés pour ce projet : ils ne proviennent pas du syllabus officiel.",
    cp_tab_search: "Assistant & recherche", cp_tab_sheets: "Fiches", cp_tab_quiz: "Quiz", cp_tab_results: "Résultats", cp_tab_favs: "Favoris & historique",
    cp_ask: "Posez une question ou cherchez un chapitre…", cp_ask_btn: "Chercher", cp_no_result: "Rien trouvé dans les ressources indexées. Essayez un autre mot-clé, ou choisissez une matière.", cp_results_for: "Résultats pour", cp_source: "Source", cp_open_prepa: "Ouvrir la Prépa", cp_subject: "Matière", cp_all: "Toutes",
    cp_no_gen: "Réponse construite par recherche locale : aucune explication générée.", cp_chapter: "Chapitre", cp_resource: "Ressource",
    cp_sheet_new: "Nouvelle fiche à partir d'un modèle", cp_tpl: "Modèle", cp_tpl_chapter: "Fiche de chapitre", cp_tpl_exercise: "Exercice type", cp_tpl_formula: "Formulaire", cp_chapter_pick: "Chapitre (facultatif)", cp_sheet_create: "Créer la fiche",
    cp_sheet_ref: "Référence syllabus", cp_sheet_none: "Aucune fiche.", cp_sec_def: "Définitions", cp_sec_thm: "Résultats / formules", cp_sec_ex: "Exemples", cp_sec_pit: "Pièges à éviter", cp_sec_stmt: "Énoncé", cp_sec_meth: "Méthode", cp_sec_sol: "Corrigé rédigé par moi", cp_sec_form: "Formules clés", cp_sec_cond: "Conditions d'utilisation",
    cp_quiz_start: "Démarrer un quiz", cp_quiz_check: "Corriger", cp_quiz_again: "Rejouer", cp_quiz_none: "Aucun QCM pour cette matière.", cp_score: "Score", cp_correct: "Bonne réponse", cp_wrong: "Réponse incorrecte", cp_expl: "Explication", cp_unanswered: "Répondez à toutes les questions.", cp_quiz_note: "QCM générique de démonstration (non officiel).",
    cp_res_none: "Aucun résultat. Faites un quiz !", cp_reco: "Chapitres à revoir", cp_reco_none: "Rien à signaler pour l'instant.", cp_reco_why: "taux de réussite", cp_avg: "Moyenne",
    cp_fav: "Favori", cp_hist: "Historique", cp_hist_none: "Aucun historique.", cp_favs_none: "Aucun favori.", cp_clear_hist: "Vider l'historique",
  },
  en: {
    cp_title: "Personal Study Copilot", cp_sub: "Search, revision sheets, quizzes and recommendations.",
    cp_banner: "LOCAL assistant (search + rules), no generative AI. Answers cite their source in the provided syllabus. Quizzes are generic examples written for this project: they do not come from the official syllabus.",
    cp_tab_search: "Assistant & search", cp_tab_sheets: "Sheets", cp_tab_quiz: "Quiz", cp_tab_results: "Results", cp_tab_favs: "Favourites & history",
    cp_ask: "Ask a question or search a chapter…", cp_ask_btn: "Search", cp_no_result: "Nothing found in the indexed resources. Try another keyword or pick a subject.", cp_results_for: "Results for", cp_source: "Source", cp_open_prepa: "Open Prep", cp_subject: "Subject", cp_all: "All",
    cp_no_gen: "Answer built by local search: no generated explanation.", cp_chapter: "Chapter", cp_resource: "Resource",
    cp_sheet_new: "New sheet from a template", cp_tpl: "Template", cp_tpl_chapter: "Chapter sheet", cp_tpl_exercise: "Typical exercise", cp_tpl_formula: "Formula sheet", cp_chapter_pick: "Chapter (optional)", cp_sheet_create: "Create sheet",
    cp_sheet_ref: "Syllabus reference", cp_sheet_none: "No sheet.", cp_sec_def: "Definitions", cp_sec_thm: "Results / formulas", cp_sec_ex: "Examples", cp_sec_pit: "Pitfalls", cp_sec_stmt: "Statement", cp_sec_meth: "Method", cp_sec_sol: "My written solution", cp_sec_form: "Key formulas", cp_sec_cond: "Conditions of use",
    cp_quiz_start: "Start a quiz", cp_quiz_check: "Check", cp_quiz_again: "Play again", cp_quiz_none: "No quiz for this subject.", cp_score: "Score", cp_correct: "Correct", cp_wrong: "Incorrect", cp_expl: "Explanation", cp_unanswered: "Answer all questions.", cp_quiz_note: "Generic demo quiz (unofficial).",
    cp_res_none: "No result. Take a quiz!", cp_reco: "Chapters to review", cp_reco_none: "Nothing to flag for now.", cp_reco_why: "success rate", cp_avg: "Average",
    cp_fav: "Favourite", cp_hist: "History", cp_hist_none: "No history.", cp_favs_none: "No favourites.", cp_clear_hist: "Clear history",
  },
  ar: {
    cp_title: "مساعد المراجعة الشخصي", cp_sub: "بحث وبطاقات مراجعة واختبارات وتوصيات.",
    cp_banner: "مساعد محلي (بحث + قواعد) دون ذكاء اصطناعي توليدي. الإجابات تذكر مصدرها في البرنامج المرفق. الاختبارات أمثلة عامة كُتبت لهذا المشروع: ليست من البرنامج الرسمي.",
    cp_tab_search: "المساعد والبحث", cp_tab_sheets: "البطاقات", cp_tab_quiz: "الاختبار", cp_tab_results: "النتائج", cp_tab_favs: "المفضلة والسجل",
    cp_ask: "اطرح سؤالا أو ابحث عن فصل…", cp_ask_btn: "بحث", cp_no_result: "لا شيء في الموارد المفهرسة. جرّب كلمة أخرى أو اختر مادة.", cp_results_for: "نتائج", cp_source: "المصدر", cp_open_prepa: "فتح التحضيرية", cp_subject: "المادة", cp_all: "الكل",
    cp_no_gen: "إجابة مبنية على بحث محلي: لا شرح مولَّد.", cp_chapter: "فصل", cp_resource: "مورد",
    cp_sheet_new: "بطاقة جديدة من نموذج", cp_tpl: "النموذج", cp_tpl_chapter: "بطاقة فصل", cp_tpl_exercise: "تمرين نموذجي", cp_tpl_formula: "مجموعة قوانين", cp_chapter_pick: "الفصل (اختياري)", cp_sheet_create: "إنشاء البطاقة",
    cp_sheet_ref: "مرجع البرنامج", cp_sheet_none: "لا توجد بطاقات.", cp_sec_def: "تعاريف", cp_sec_thm: "نتائج / قوانين", cp_sec_ex: "أمثلة", cp_sec_pit: "أخطاء شائعة", cp_sec_stmt: "نص التمرين", cp_sec_meth: "الطريقة", cp_sec_sol: "حلي المكتوب", cp_sec_form: "قوانين أساسية", cp_sec_cond: "شروط الاستعمال",
    cp_quiz_start: "بدء اختبار", cp_quiz_check: "تصحيح", cp_quiz_again: "إعادة", cp_quiz_none: "لا اختبار لهذه المادة.", cp_score: "النتيجة", cp_correct: "إجابة صحيحة", cp_wrong: "إجابة خاطئة", cp_expl: "شرح", cp_unanswered: "أجب عن كل الأسئلة.", cp_quiz_note: "اختبار عام تجريبي (غير رسمي).",
    cp_res_none: "لا نتائج. قم باختبار!", cp_reco: "فصول للمراجعة", cp_reco_none: "لا شيء يستدعي التنبيه حاليا.", cp_reco_why: "نسبة النجاح", cp_avg: "المعدل",
    cp_fav: "مفضلة", cp_hist: "السجل", cp_hist_none: "لا سجل.", cp_favs_none: "لا مفضلات.", cp_clear_hist: "مسح السجل",
  },
});

// ---------- Couche « fournisseur » : local aujourd'hui, distant demain ----------
const StudyAI = {
  index: [],
  async build() {
    const sems = await Data.allSemesters(); const idx = [];
    sems.forEach(s => s.ues.forEach(u => u.ecues.forEach(e => e.chapters.forEach(c => {
      const res = []; Object.keys(c.resources || {}).forEach(k => (c.resources[k] || []).forEach(r => res.push({ kind: k, title: r.title || r.name || r.url || k, url: r.url || r.link || "" })));
      idx.push({ id: c.id, subject: e.name, code: e.code, sem: s.semester, ue: u.name, title: c.title, num: c.chapter,
        text: [c.title, ...(c.description || []), ...(c.objectives || [])].join(" "), desc: (c.description || []), res });
    }))));
    this.index = idx;
  },
  norm(s) { return String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); },
  providers: {
    local: {
      search(q, subject) {
        const words = StudyAI.norm(q).split(/[^a-z0-9]+/).filter(w => w.length > 2);
        if (!words.length) return [];
        return StudyAI.index.filter(c => !subject || c.subject === subject).map(c => {
          const hay = StudyAI.norm(c.text + " " + c.subject + " " + c.res.map(r => r.title).join(" "));
          const title = StudyAI.norm(c.title);
          let score = 0; words.forEach(w => { if (title.includes(w)) score += 3; else if (hay.includes(w)) score += 1; });
          return { c, score };
        }).filter(x => x.score > 0).sort((a, b) => b.score - a.score).slice(0, 8).map(x => x.c);
      },
    },
    // remote: { async answer(q) { return fetch("/votre-proxy/ai", {...}); } }  // clé API côté serveur uniquement
  },
  provider: "local",
  search(q, subject) { return this.providers[this.provider].search(q, subject); },
  chaptersByTopic(topic) { const w = this.norm(topic); return this.index.filter(c => this.norm(c.title).includes(w)); },
};

Pages.copilot = async function () {
  const [quizData] = await Promise.all([ISI.demo("quiz"), StudyAI.build()]);
  const subjects = [...new Set(StudyAI.index.map(c => c.subject))];
  const quizSubjects = [...new Set(quizData.questions.map(q => q.subject))];
  const sheets = () => ISI.store.get("cp_sheets", []); const setSheets = (v) => ISI.store.set("cp_sheets", v);
  const favs = () => ISI.store.get("cp_favs", []);
  const hist = () => ISI.store.get("cp_hist", []);
  const pushHist = (type, label) => { const h = hist().filter(x => !(x.type === type && x.label === label)); h.unshift({ type, label, ts: Date.now() }); ISI.store.set("cp_hist", h.slice(0, 40)); };
  const results = () => ISI.store.get("cp_results", []);
  const shuffle = (a) => { const r = a.slice(); for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; };
  const refLine = (c) => `${t("cp_source")} : ${ISI.esc(c.ue)} › ${ISI.esc(c.code)} ${ISI.esc(c.subject)} › ${t("cp_chapter")} ${c.num} — ${ISI.esc(c.title)} (S${c.sem})`;
  const chapterCard = (c) => `<div class="x-list-item"><div class="x-main"><div class="x-title">${ISI.esc(c.title)} ${ISI.chip(ISI.esc(c.subject))}</div><div class="x-muted">${c.desc.slice(0, 2).map(ISI.esc).join(" · ")}</div><div class="x-muted">${refLine(c)}</div>
    ${c.res.length ? `<div>${c.res.slice(0, 4).map(r => `${ISI.chip(t("cp_resource"))} ${ISI.esc(r.title)}`).join(" ")}</div>` : ""}</div>
    <div class="x-actions"><button class="x-icon-btn x-star ${favs().includes(c.id) ? "on" : ""}" data-act="fav" data-id="${c.id}" aria-label="${t("cp_fav")}" aria-pressed="${favs().includes(c.id)}">${favs().includes(c.id) ? "★" : "☆"}</button><a class="btn btn-sm btn-outline" href="#/prepa">${t("cp_open_prepa")}</a></div></div>`;
  const TEMPLATES = {
    chapter: ["cp_sec_def", "cp_sec_thm", "cp_sec_ex", "cp_sec_pit"],
    exercise: ["cp_sec_stmt", "cp_sec_meth", "cp_sec_sol"],
    formula: ["cp_sec_form", "cp_sec_cond", "cp_sec_ex"],
  };

  return ISI.page("copilot", {
    render(st) {
      st.tab = st.tab || "search"; st.q = st.q || ""; st.subj = st.subj || "";
      const tabs = ISI.tabs(["search", "sheets", "quiz", "results", "favs"].map(k => [k, t("cp_tab_" + k)]), st.tab);
      let body = "";
      if (st.tab === "search") {
        const res = st.q ? StudyAI.search(st.q, st.subj) : [];
        body = `<form data-submit="search" class="x-row" role="search" novalidate style="margin-bottom:12px;"><label class="sr-only" for="cp-q">${t("cp_ask")}</label>
          <input id="cp-q" name="q" value="${ISI.esc(st.q)}" placeholder="${t("cp_ask")}" maxlength="80" style="flex:1;min-width:200px;padding:11px 13px;border-radius:8px;border:1px solid var(--border-color);background:var(--bg-input);color:var(--text-primary);">
          <select name="subj" aria-label="${t("cp_subject")}"><option value="">${t("cp_all")}</option>${subjects.map(s => `<option ${s === st.subj ? "selected" : ""}>${ISI.esc(s)}</option>`).join("")}</select>
          <button class="btn btn-primary" type="submit">🔎 ${t("cp_ask_btn")}</button></form>
          ${st.q ? `<div class="card-title">${t("cp_results_for")} « ${ISI.esc(st.q)} »</div><div class="card">${res.length ? res.map(chapterCard).join("") : `<p class="x-muted">${t("cp_no_result")}</p>`}</div><p class="x-muted">${t("cp_no_gen")}</p>` : ISI.empty("🧠", "cp_ask")}`;
      } else if (st.tab === "sheets") {
        const l = sheets();
        body = `<div class="x-grid-2"><div class="card"><div class="card-title">${t("cp_sheet_new")}</div><form data-submit="newsheet" novalidate>
          ${ISI.select("tpl", "cp_tpl", [["chapter", t("cp_tpl_chapter")], ["exercise", t("cp_tpl_exercise")], ["formula", t("cp_tpl_formula")]], "chapter")}
          ${ISI.select("chap", "cp_chapter_pick", [["", "—"], ...StudyAI.index.map(c => [c.id, `${c.subject} — ${c.num}. ${c.title}`])], "")}
          ${ISI.input("title", "x_title", 'required minlength="3" maxlength="80"')}<button class="btn btn-primary" type="submit">${t("cp_sheet_create")}</button></form></div>
          <div>${l.length ? l.map(s => `<div class="card" style="margin-bottom:12px;"><div class="x-row between"><div class="card-title">${ISI.esc(s.title)}</div><div class="x-actions"><button class="x-icon-btn x-star ${favs().includes(s.id) ? "on" : ""}" data-act="fav" data-id="${s.id}" aria-label="${t("cp_fav")}" aria-pressed="${favs().includes(s.id)}">${favs().includes(s.id) ? "★" : "☆"}</button><button class="btn btn-sm btn-ghost" data-act="delsheet" data-id="${s.id}" aria-label="${t("x_delete")}">🗑</button></div></div>
            ${s.ref ? `<div class="info-box x-muted">${t("cp_sheet_ref")} : ${ISI.esc(s.ref)}</div>` : ""}
            ${s.sections.map((sec, i) => `<div class="field"><label for="sh-${s.id}-${i}">${t(sec.k)}</label><textarea id="sh-${s.id}-${i}" rows="3" data-on="sheettext" data-id="${s.id}" data-i="${i}" maxlength="2000">${ISI.esc(sec.v)}</textarea></div>`).join("")}</div>`).join("") : `<p class="x-muted">${t("cp_sheet_none")}</p>`}</div></div>`;
      } else if (st.tab === "quiz") {
        const qz = st.quiz;
        if (!qz) {
          body = `<div class="card"><div class="card-title">${t("cp_quiz_start")}</div><p class="x-muted">${t("cp_quiz_note")}</p><div class="x-row">${quizSubjects.map(s => `<button class="btn btn-secondary" data-act="startquiz" data-s="${ISI.esc(s)}">${ISI.esc(s)}</button>`).join("")}</div></div>`;
        } else {
          const done = qz.checked, score = qz.qs.filter(q => qz.ans[q.id] === q.answer).length;
          body = `<div class="card"><div class="x-row between"><div class="card-title">${ISI.esc(qz.subject)}</div>${ISI.chip(t("cp_quiz_note"), "demo")}</div>
            ${qz.qs.map((q, n) => `<fieldset style="border:0;padding:0;margin:14px 0;"><legend style="font-weight:700;">${n + 1}. ${ISI.esc(ISI.L(q.q, "")) || ISI.esc(q.q[Storage.getLang()] || q.q.fr)}</legend>
              ${q.options.map((o, i) => { const sel = qz.ans[q.id] === i; const cls = done ? (i === q.answer ? "right" : sel ? "wrong" : "") : (sel ? "sel" : ""); return `<button type="button" class="x-opt ${cls}" data-act="pick" data-q="${q.id}" data-i="${i}" aria-pressed="${sel}" ${done ? "disabled" : ""}>${ISI.esc(o[Storage.getLang()] || o.fr)}</button>`; }).join("")}
              ${done ? `<div class="x-status ${qz.ans[q.id] === q.answer ? "ok" : "bad"}" role="status">${qz.ans[q.id] === q.answer ? "✅ " + t("cp_correct") : "❌ " + t("cp_wrong")} — ${t("cp_expl")} : ${ISI.esc(q.explain[Storage.getLang()] || q.explain.fr)}</div>` : ""}</fieldset>`).join("")}
            ${st.quizMsg ? `<div class="x-status warn" role="alert">${st.quizMsg}</div>` : ""}
            ${done ? `<div class="x-big">${t("cp_score")} : ${score}/${qz.qs.length}</div><button class="btn btn-primary" data-act="quizreset">${t("cp_quiz_again")}</button>` : `<button class="btn btn-primary" data-act="checkquiz">${t("cp_quiz_check")}</button>`}</div>`;
        }
      } else if (st.tab === "results") {
        const rs = results();
        const by = {}; rs.forEach(r => { (by[r.subject] = by[r.subject] || { ok: 0, n: 0, topics: {} }); by[r.subject].ok += r.score; by[r.subject].n += r.total; Object.keys(r.wrong || {}).forEach(tp => by[r.subject].topics[tp] = (by[r.subject].topics[tp] || 0) + r.wrong[tp]); });
        const weak = Object.entries(by).filter(([, v]) => v.ok / v.n < 0.7);
        body = rs.length ? `<div class="x-grid-2"><div class="card"><div class="card-title">${t("cp_tab_results")}</div>${rs.slice(0, 20).map(r => `<div class="x-list-item"><div class="x-main">${ISI.esc(r.subject)}<div class="x-muted">${ISI.fmtDateTime(r.ts)}</div></div>${ISI.chip(r.score + "/" + r.total, r.score / r.total >= 0.7 ? "ok" : "warn")}</div>`).join("")}</div>
          <div class="card"><div class="card-title">🔁 ${t("cp_reco")}</div>${weak.length ? weak.map(([s, v]) => `<div style="margin-bottom:10px;"><strong>${ISI.esc(s)}</strong> — ${t("cp_reco_why")} ${Math.round(v.ok / v.n * 100)}%
            ${Object.keys(v.topics).map(tp => { const ch = StudyAI.chaptersByTopic(tp).filter(c => c.subject === s || true); return `<div class="x-muted">${ch.length ? ch.map(c => `→ ${refLine(c)}`).join("<br>") : `→ ${ISI.esc(tp)}`}</div>`; }).join("")}</div>`).join("") : `<p class="x-muted">${t("cp_reco_none")}</p>`}</div></div>` : ISI.empty("📈", "cp_res_none");
      } else {
        const fl = favs(); const favCh = StudyAI.index.filter(c => fl.includes(c.id)); const favSh = sheets().filter(s => fl.includes(s.id));
        body = `<div class="x-grid-2"><div class="card"><div class="card-title">⭐ ${t("cp_tab_favs")}</div>${favCh.map(chapterCard).join("")}${favSh.map(s => `<div class="x-list-item"><div class="x-main">📝 ${ISI.esc(s.title)}</div></div>`).join("")}${favCh.length + favSh.length ? "" : `<p class="x-muted">${t("cp_favs_none")}</p>`}</div>
          <div class="card"><div class="x-row between"><div class="card-title">🕘 ${t("cp_hist")}</div>${hist().length ? `<button class="btn btn-sm btn-ghost" data-act="clearhist">${t("cp_clear_hist")}</button>` : ""}</div>${hist().length ? hist().map(h => `<div class="x-list-item"><div class="x-main">${h.type === "quiz" ? "🧪" : "🔎"} ${ISI.esc(h.label)}<div class="x-muted">${ISI.fmtDateTime(h.ts)}</div></div></div>`).join("") : `<p class="x-muted">${t("cp_hist_none")}</p>`}</div></div>`;
      }
      return `${ISI.header("cp_title", "cp_sub")}${ISI.banner("cp_banner", "info")}${tabs}${body}<div style="margin-top:14px;"><button class="btn btn-ghost btn-sm" data-act="reset">♻ ${t("x_reset_btn")}</button></div>`;
    },
    actions(st, api) {
      return {
        tab(el) { st.tab = el.dataset.id; api.refresh(); },
        search(form) { st.q = form.q.value.trim(); st.subj = form.subj.value; if (st.q) pushHist("search", st.q); api.refresh(); },
        fav(el) { const f = favs(); const i = f.indexOf(el.dataset.id); if (i >= 0) f.splice(i, 1); else f.push(el.dataset.id); ISI.store.set("cp_favs", f); api.refresh(); },
        newsheet(form) {
          const { ok, data } = ISI.readForm(form); if (!ok) return;
          const c = StudyAI.index.find(x => x.id === data.chap);
          const sections = TEMPLATES[data.tpl].map(k => ({ k, v: "" }));
          if (c && data.tpl === "chapter") sections[0].v = ""; // l'utilisateur rédige : on ne remplit pas à sa place
          const l = sheets(); l.unshift({ id: ISI.uid("sh"), title: data.title, tpl: data.tpl, ref: c ? `${c.ue} › ${c.code} ${c.subject} › ${t("cp_chapter")} ${c.num} — ${c.title}` : "", sections }); setSheets(l); ISI.toast("📝", t("x_saved")); api.refresh();
        },
        sheettext(el) { const l = sheets(); const s = l.find(x => x.id === el.dataset.id); if (s) { s.sections[Number(el.dataset.i)].v = el.value; setSheets(l); } },
        delsheet(el) { ISI.confirm(t("x_delete_confirm"), () => { setSheets(sheets().filter(s => s.id !== el.dataset.id)); api.refresh(); }); },
        startquiz(el) { const s = el.dataset.s; st.quiz = { subject: s, qs: shuffle(quizData.questions.filter(q => q.subject === s)), ans: {}, checked: false }; st.quizMsg = ""; api.refresh(); },
        pick(el) { if (st.quiz.checked) return; st.quiz.ans[el.dataset.q] = Number(el.dataset.i); api.refresh(); },
        checkquiz() {
          const qz = st.quiz; if (qz.qs.some(q => qz.ans[q.id] === undefined)) { st.quizMsg = t("cp_unanswered"); return api.refresh(); }
          st.quizMsg = ""; qz.checked = true;
          const wrong = {}; qz.qs.forEach(q => { if (qz.ans[q.id] !== q.answer) wrong[q.topic] = (wrong[q.topic] || 0) + 1; });
          const score = qz.qs.length - Object.values(wrong).reduce((a, b) => a + b, 0);
          const r = results(); r.unshift({ ts: Date.now(), subject: qz.subject, score, total: qz.qs.length, wrong }); ISI.store.set("cp_results", r.slice(0, 100));
          pushHist("quiz", `${qz.subject} ${score}/${qz.qs.length}`); Track.add("quiz"); api.refresh();
        },
        quizreset() { st.quiz = null; api.refresh(); },
        clearhist() { ISI.store.set("cp_hist", []); api.refresh(); },
        reset() { ISI.resetModule(["cp"], () => { st.quiz = null; api.refresh(); }); },
      };
    },
  });
};
