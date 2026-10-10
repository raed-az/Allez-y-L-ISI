// =====================================================
// EXAM.JS — Exam Survival Mode
// - Chapitres : ceux du syllabus fourni (data/prepa). Les statuts sont ceux de
//   la page Prépa existante (Storage progress) → synchronisés, rien n'est dupliqué.
// - Pour les autres matières : chapitres PERSONNELS créés par l'utilisateur.
// - Temps de révision = temps DÉCLARÉ (non vérifié).
// =====================================================

ISI.addI18n({
  fr: {
    ex_title: "Exam Survival Mode", ex_sub: "Organisez vos révisions : évaluations, chapitres, planning et concentration.",
    ex_banner: "Les chapitres officiels viennent du syllabus de la Prépa Intégrée fourni dans le projet. Pour toute autre matière, créez vos propres chapitres (ils sont marqués « personnel »). Le temps de révision est déclaré par vous, non vérifié.",
    ex_tab_dash: "Tableau de bord", ex_tab_evals: "Évaluations", ex_tab_chapters: "Chapitres", ex_tab_plan: "Planning", ex_tab_focus: "Concentration", ex_tab_ex: "Exercices", ex_tab_rem: "Rappels", ex_tab_hist: "Historique",
    ex_next_eval: "Prochaine évaluation", ex_none_eval: "Aucune évaluation à venir. Ajoutez-en une dans l'onglet Évaluations.", ex_days: "j", ex_hours: "h", ex_min: "min", ex_past: "Passée",
    ex_eval_new: "Nouvelle évaluation", ex_eval_title: "Intitulé (ex. DS Algèbre 1)", ex_eval_subject: "Matière", ex_eval_custom: "Autre matière (saisie libre)", ex_eval_date: "Date et heure", ex_eval_type: "Type", ex_type_exam: "Examen", ex_type_ds: "Devoir surveillé", ex_type_cc: "Contrôle continu", ex_type_other: "Autre", ex_eval_none: "Aucune évaluation.",
    ex_pick_subject: "Matière du syllabus", ex_sem: "Semestre", ex_ch_none: "Aucun chapitre pour cette matière dans le syllabus fourni. Ajoutez vos chapitres personnels.", ex_ch_add: "Ajouter un chapitre personnel", ex_ch_title: "Titre du chapitre", ex_personal: "personnel", ex_official: "syllabus",
    ex_st_not: "Non commencé", ex_st_prog: "En cours", ex_st_done: "Maîtrisé", ex_conf: "Confiance (1–5)", ex_mastered_n: "maîtrisés",
    ex_plan_new: "Générer un planning", ex_plan_eval: "Évaluation visée", ex_plan_hours: "Heures de révision par jour", ex_plan_busy: "Heures déjà occupées par d'autres tâches (par jour)", ex_plan_chapters: "Chapitres à préparer", ex_plan_go: "Proposer un planning", ex_plan_choose: "Choisissez une évaluation à venir et au moins un chapitre.",
    ex_plan_overload: "⚠ Planning surchargé : {n} session(s) ne tiennent pas avant l'évaluation. Ajoutez des heures ou réduisez les chapitres.", ex_plan_ok: "Planning généré : {n} sessions de {m} min sur {d} jour(s). Modifiable ci-dessous.", ex_plan_light: "Veille d'examen allégée volontairement (repos).",
    ex_plan_list: "Mon planning", ex_plan_empty: "Aucune tâche planifiée.", ex_move: "Déplacer", ex_task_add: "Ajouter une tâche manuelle", ex_task_label: "Tâche", ex_task_date: "Jour", ex_sessions: "session(s)", ex_clear_plan: "Vider le planning",
    ex_focus_label: "Concentration", ex_focus_len: "Durée (min)", ex_break_len: "Pause (min)", ex_start: "Démarrer", ex_pause: "Pause", ex_resume: "Reprendre", ex_reset: "Réinitialiser", ex_mode_focus: "Concentration", ex_mode_break: "Pause",
    ex_focus_what: "Sur quoi travaillez-vous ? (facultatif)", ex_focus_done: "Session terminée ! Prenez une pause.", ex_break_done: "Pause terminée.", ex_focus_cap: "Plafond de 6 sessions comptées pour les missions aujourd'hui : pensez à vous reposer.",
    ex_decl_add: "Déclarer du temps de révision", ex_decl_min: "Minutes", ex_decl_ok: "Temps ajouté (déclaré).",
    ex_exo_add: "Ajouter un exercice à refaire", ex_exo_title: "Exercice", ex_exo_none: "Aucun exercice à refaire.", ex_done: "Fait",
    ex_rem_new: "Nouveau rappel local", ex_rem_text: "Texte du rappel", ex_rem_when: "Date et heure", ex_rem_none: "Aucun rappel.", ex_rem_note: "Les rappels se déclenchent uniquement lorsque l'application est ouverte dans le navigateur.", ex_rem_notif: "Activer les notifications du navigateur", ex_rem_fired: "Rappel", ex_rem_past: "date passée",
    ex_hist_none: "Aucune session enregistrée.", ex_declared: "temps déclaré", ex_week: "Cette semaine", ex_today: "Aujourd'hui", ex_total_min: "Minutes déclarées", ex_sessions_n: "Sessions", ex_tasks_today: "Tâches du jour", ex_no_tasks_today: "Aucune tâche aujourd'hui.", ex_by_subject: "Temps par matière (déclaré)",
  },
  en: {
    ex_title: "Exam Survival Mode", ex_sub: "Organise your revision: assessments, chapters, plan and focus.",
    ex_banner: "Official chapters come from the Integrated Prep syllabus provided in the project. For any other subject, create your own chapters (marked “personal”). Revision time is self-declared, not verified.",
    ex_tab_dash: "Dashboard", ex_tab_evals: "Assessments", ex_tab_chapters: "Chapters", ex_tab_plan: "Plan", ex_tab_focus: "Focus", ex_tab_ex: "Exercises", ex_tab_rem: "Reminders", ex_tab_hist: "History",
    ex_next_eval: "Next assessment", ex_none_eval: "No upcoming assessment. Add one in the Assessments tab.", ex_days: "d", ex_hours: "h", ex_min: "min", ex_past: "Past",
    ex_eval_new: "New assessment", ex_eval_title: "Title (e.g. Algebra 1 test)", ex_eval_subject: "Subject", ex_eval_custom: "Other subject (free text)", ex_eval_date: "Date and time", ex_eval_type: "Type", ex_type_exam: "Exam", ex_type_ds: "Supervised test", ex_type_cc: "Continuous assessment", ex_type_other: "Other", ex_eval_none: "No assessment.",
    ex_pick_subject: "Syllabus subject", ex_sem: "Semester", ex_ch_none: "No chapter for this subject in the provided syllabus. Add your personal chapters.", ex_ch_add: "Add a personal chapter", ex_ch_title: "Chapter title", ex_personal: "personal", ex_official: "syllabus",
    ex_st_not: "Not started", ex_st_prog: "In progress", ex_st_done: "Mastered", ex_conf: "Confidence (1–5)", ex_mastered_n: "mastered",
    ex_plan_new: "Generate a plan", ex_plan_eval: "Target assessment", ex_plan_hours: "Revision hours per day", ex_plan_busy: "Hours already taken by other tasks (per day)", ex_plan_chapters: "Chapters to prepare", ex_plan_go: "Suggest a plan", ex_plan_choose: "Choose an upcoming assessment and at least one chapter.",
    ex_plan_overload: "⚠ Overloaded plan: {n} session(s) don't fit before the assessment. Add hours or reduce chapters.", ex_plan_ok: "Plan generated: {n} sessions of {m} min over {d} day(s). Editable below.", ex_plan_light: "Day before the assessment deliberately lighter (rest).",
    ex_plan_list: "My plan", ex_plan_empty: "No planned task.", ex_move: "Move", ex_task_add: "Add a manual task", ex_task_label: "Task", ex_task_date: "Day", ex_sessions: "session(s)", ex_clear_plan: "Clear plan",
    ex_focus_label: "Focus", ex_focus_len: "Length (min)", ex_break_len: "Break (min)", ex_start: "Start", ex_pause: "Pause", ex_resume: "Resume", ex_reset: "Reset", ex_mode_focus: "Focus", ex_mode_break: "Break",
    ex_focus_what: "What are you working on? (optional)", ex_focus_done: "Session complete! Take a break.", ex_break_done: "Break over.", ex_focus_cap: "Cap of 6 sessions counted for missions today: remember to rest.",
    ex_decl_add: "Declare revision time", ex_decl_min: "Minutes", ex_decl_ok: "Time added (declared).",
    ex_exo_add: "Add an exercise to redo", ex_exo_title: "Exercise", ex_exo_none: "No exercise to redo.", ex_done: "Done",
    ex_rem_new: "New local reminder", ex_rem_text: "Reminder text", ex_rem_when: "Date and time", ex_rem_none: "No reminder.", ex_rem_note: "Reminders only fire while the app is open in the browser.", ex_rem_notif: "Enable browser notifications", ex_rem_fired: "Reminder", ex_rem_past: "past date",
    ex_hist_none: "No session recorded.", ex_declared: "declared time", ex_week: "This week", ex_today: "Today", ex_total_min: "Declared minutes", ex_sessions_n: "Sessions", ex_tasks_today: "Today's tasks", ex_no_tasks_today: "No task today.", ex_by_subject: "Time per subject (declared)",
  },
  ar: {
    ex_title: "وضع النجاة في الامتحانات", ex_sub: "نظّم مراجعتك: التقييمات والفصول والمخطط والتركيز.",
    ex_banner: "الفصول الرسمية مأخوذة من برنامج السنة التحضيرية المدمجة المرفق بالمشروع. لأي مادة أخرى أنشئ فصولك الخاصة (مميزة بـ «شخصي»). وقت المراجعة تصريحي وغير موثق.",
    ex_tab_dash: "لوحة القيادة", ex_tab_evals: "التقييمات", ex_tab_chapters: "الفصول", ex_tab_plan: "المخطط", ex_tab_focus: "التركيز", ex_tab_ex: "التمارين", ex_tab_rem: "التذكيرات", ex_tab_hist: "السجل",
    ex_next_eval: "التقييم القادم", ex_none_eval: "لا يوجد تقييم قادم. أضف واحدا في تبويب التقييمات.", ex_days: "ي", ex_hours: "س", ex_min: "د", ex_past: "منتهٍ",
    ex_eval_new: "تقييم جديد", ex_eval_title: "العنوان (مثال: فرض الجبر 1)", ex_eval_subject: "المادة", ex_eval_custom: "مادة أخرى (نص حر)", ex_eval_date: "التاريخ والوقت", ex_eval_type: "النوع", ex_type_exam: "امتحان", ex_type_ds: "فرض مراقب", ex_type_cc: "مراقبة مستمرة", ex_type_other: "آخر", ex_eval_none: "لا توجد تقييمات.",
    ex_pick_subject: "مادة من البرنامج", ex_sem: "السداسي", ex_ch_none: "لا توجد فصول لهذه المادة في البرنامج المرفق. أضف فصولك الشخصية.", ex_ch_add: "إضافة فصل شخصي", ex_ch_title: "عنوان الفصل", ex_personal: "شخصي", ex_official: "برنامج",
    ex_st_not: "لم يبدأ", ex_st_prog: "قيد الإنجاز", ex_st_done: "متقن", ex_conf: "الثقة (1–5)", ex_mastered_n: "متقنة",
    ex_plan_new: "إنشاء مخطط", ex_plan_eval: "التقييم المستهدف", ex_plan_hours: "ساعات المراجعة يوميا", ex_plan_busy: "ساعات مشغولة بمهام أخرى (يوميا)", ex_plan_chapters: "الفصول المراد تحضيرها", ex_plan_go: "اقتراح مخطط", ex_plan_choose: "اختر تقييما قادما وفصلا واحدا على الأقل.",
    ex_plan_overload: "⚠ مخطط مثقل: {n} حصة لا تتسع قبل التقييم. أضف ساعات أو قلّل الفصول.", ex_plan_ok: "تم إنشاء المخطط: {n} حصص من {m} د على {d} يوم. قابل للتعديل أدناه.", ex_plan_light: "اليوم السابق للتقييم مخفف عمدا (راحة).",
    ex_plan_list: "مخططي", ex_plan_empty: "لا توجد مهام مبرمجة.", ex_move: "نقل", ex_task_add: "إضافة مهمة يدوية", ex_task_label: "المهمة", ex_task_date: "اليوم", ex_sessions: "حصة", ex_clear_plan: "مسح المخطط",
    ex_focus_label: "التركيز", ex_focus_len: "المدة (د)", ex_break_len: "الاستراحة (د)", ex_start: "ابدأ", ex_pause: "إيقاف", ex_resume: "استئناف", ex_reset: "إعادة", ex_mode_focus: "تركيز", ex_mode_break: "استراحة",
    ex_focus_what: "على ماذا تعمل؟ (اختياري)", ex_focus_done: "انتهت الجلسة! خذ استراحة.", ex_break_done: "انتهت الاستراحة.", ex_focus_cap: "الحد 6 جلسات محتسبة للمهام اليوم: تذكّر أن ترتاح.",
    ex_decl_add: "تصريح بوقت مراجعة", ex_decl_min: "دقائق", ex_decl_ok: "تمت إضافة الوقت (تصريحي).",
    ex_exo_add: "إضافة تمرين لإعادته", ex_exo_title: "التمرين", ex_exo_none: "لا توجد تمارين لإعادتها.", ex_done: "تم",
    ex_rem_new: "تذكير محلي جديد", ex_rem_text: "نص التذكير", ex_rem_when: "التاريخ والوقت", ex_rem_none: "لا توجد تذكيرات.", ex_rem_note: "التذكيرات تعمل فقط والتطبيق مفتوح في المتصفح.", ex_rem_notif: "تفعيل إشعارات المتصفح", ex_rem_fired: "تذكير", ex_rem_past: "تاريخ منتهٍ",
    ex_hist_none: "لا توجد جلسات مسجلة.", ex_declared: "وقت تصريحي", ex_week: "هذا الأسبوع", ex_today: "اليوم", ex_total_min: "الدقائق المصرح بها", ex_sessions_n: "الجلسات", ex_tasks_today: "مهام اليوم", ex_no_tasks_today: "لا مهام اليوم.", ex_by_subject: "الوقت حسب المادة (تصريحي)",
  },
});

const Exam = {
  ecues: [],
  async load() {
    const sems = await Data.allSemesters(); this.ecues = [];
    sems.forEach(s => s.ues.forEach(u => u.ecues.forEach(e => this.ecues.push({ code: e.code, name: e.name, semester: s.semester, chapters: e.chapters || [] }))));
  },
  // ----- stockage -----
  evals() { return ISI.store.get("exam_evals", []); }, setEvals(v) { ISI.store.set("exam_evals", v); },
  tasks() { return ISI.store.get("exam_tasks", []); }, setTasks(v) { ISI.store.set("exam_tasks", v); },
  custom() { return ISI.store.get("exam_custom_ch", []); }, setCustom(v) { ISI.store.set("exam_custom_ch", v); },
  conf() { return ISI.store.get("exam_conf", {}); },
  exos() { return ISI.store.get("exam_exos", []); }, setExos(v) { ISI.store.set("exam_exos", v); },
  rems() { return ISI.store.get("exam_rems", []); }, setRems(v) { ISI.store.set("exam_rems", v); },
  hist() { return ISI.store.get("exam_hist", []); },
  cfg() { return { focus: 25, brk: 5, ...ISI.store.get("exam_cfg", {}) }; },
  timer() { return ISI.store.get("exam_timer", null); }, setTimer(v) { if (v) ISI.store.set("exam_timer", v); else ISI.store.remove("exam_timer"); },
  status(id) { return (Storage.getProgress()[id]) || "not-started"; },
  chaptersOf(code) {
    const e = this.ecues.find(x => x.code === code);
    const off = (e ? e.chapters : []).map(c => ({ id: c.id, title: `${c.chapter}. ${c.title}`, official: true }));
    const cu = this.custom().filter(c => c.subject === code).map(c => ({ id: c.id, title: c.title, official: false }));
    return [...off, ...cu];
  },
  chapterLabel(id) {
    for (const e of this.ecues) { const c = e.chapters.find(x => x.id === id); if (c) return `${e.name} — ${c.title}`; }
    const cu = this.custom().find(x => x.id === id); return cu ? cu.title : id;
  },
  record(minutes, label, subject, source = "timer") {
    const h = this.hist(); h.unshift({ id: ISI.uid("s"), ts: Date.now(), minutes, label: label || "", subject: subject || "", source });
    ISI.store.set("exam_hist", h.slice(0, 300));
  },
  // Compte à rebours lisible
  countdown(ts) {
    const ms = ts - Date.now(); if (ms <= 0) return null;
    const d = Math.floor(ms / 86400000), h = Math.floor(ms % 86400000 / 3600000), m = Math.floor(ms % 3600000 / 60000);
    return `${d}${t("ex_days")} ${h}${t("ex_hours")} ${m}${t("ex_min")}`;
  },
  // Planificateur : priorise chapitres peu maîtrisés, répartit sur les jours, plafonne la charge, allège la veille.
  plan({ evalItem, chapterIds, hoursPerDay, busyPerDay, focusMin, brkMin }) {
    const conf = this.conf();
    const start = new Date(); start.setHours(0, 0, 0, 0);
    const end = new Date(evalItem.date); end.setHours(0, 0, 0, 0);
    const days = []; for (let d = new Date(start); d < end; d.setDate(d.getDate() + 1)) days.push(ISI.dayKey(new Date(d)));
    const avail = Math.max(0, hoursPerDay - busyPerDay) * 60;
    let cap = Math.min(8, Math.floor(avail / (focusMin + brkMin)));
    const items = chapterIds.map(id => {
      const c = conf[id] || 3, mastered = this.status(id) === "done";
      const n = mastered ? 1 : ({ 1: 4, 2: 3, 3: 2, 4: 1, 5: 1 }[c]);
      return { id, n, prio: (6 - c) + (mastered ? -3 : 0) };
    }).sort((a, b) => b.prio - a.prio);
    const queue = []; let left = true, round = 0;
    while (left) { left = false; items.forEach(it => { if (round < it.n) { queue.push(it.id); left = true; } }); round++; }
    const S = queue.length;
    if (!days.length || cap <= 0) return { tasks: [], overflow: S, days: days.length, perDay: 0, sessions: 0 };
    const caps = days.map((_, i) => (i === days.length - 1 && days.length > 1) ? Math.max(1, Math.floor(cap / 2)) : cap);
    const total = caps.reduce((a, b) => a + b, 0), placed = Math.min(S, total);
    // répartition proportionnelle aux capacités
    const per = caps.map(() => 0); let rem = placed;
    while (rem > 0) { let moved = false; for (let i = 0; i < per.length && rem > 0; i++) if (per[i] < caps[i]) { per[i]++; rem--; moved = true; } if (!moved) break; }
    const tasks = []; let qi = 0;
    days.forEach((day, i) => {
      const counts = {};
      for (let k = 0; k < per[i]; k++) { const id = queue[qi++]; counts[id] = (counts[id] || 0) + 1; }
      Object.keys(counts).forEach(id => tasks.push({ id: ISI.uid("t"), date: day, chapterId: id, label: this.chapterLabel(id), sessions: counts[id], evalId: evalItem.id, done: false }));
    });
    return { tasks, overflow: S - placed, days: days.length, perDay: cap, sessions: placed, light: days.length > 1 };
  },
};

Pages.exam = async function () {
  await Exam.load();
  const st0 = ISI.state.exam = ISI.state.exam || {};
  const optSubjects = () => Exam.ecues.filter(e => !st0.sem || e.semester === st0.sem).map(e => [e.code, `${e.code} — ${e.name}`]);
  const fmtMS = (ms) => { const s = Math.max(0, Math.ceil(ms / 1000)); return `${ISI.pad(Math.floor(s / 60))}:${ISI.pad(s % 60)}`; };

  function finishTimer(auto) {
    const tm = Exam.timer(); if (!tm) return;
    if (tm.mode === "focus") {
      Exam.record(tm.minutes, tm.what, tm.subject, "timer");
      const counted = Track.add("focus");
      ISI.toast("🎯", t("ex_focus_done") + (counted ? "" : " " + t("ex_focus_cap")));
      Exam.setTimer({ mode: "break", minutes: Exam.cfg().brk, running: false, remaining: Exam.cfg().brk * 60000, what: tm.what, subject: tm.subject });
    } else { ISI.toast("☕", t("ex_break_done")); Exam.setTimer(null); }
    if (window.Notification && Notification.permission === "granted") { try { new Notification(t("ex_title"), { body: tm.mode === "focus" ? t("ex_focus_done") : t("ex_break_done") }); } catch (e) {} }
  }
  // Un minuteur arrivé à échéance pendant que la page était fermée est finalisé une seule fois.
  (function settle() { const tm = Exam.timer(); if (tm && tm.running && tm.endTs <= Date.now()) finishTimer(true); })();

  // Rappels locaux : vérifiés pendant que la page est ouverte
  function checkReminders() {
    const l = Exam.rems(); let ch = false;
    l.forEach(r => { if (!r.fired && new Date(r.when).getTime() <= Date.now()) {
      r.fired = true; ch = true; ISI.toast("⏰", `${t("ex_rem_fired")} : ${r.text}`);
      if (window.Notification && Notification.permission === "granted") { try { new Notification(t("ex_rem_fired"), { body: r.text }); } catch (e) {} } } });
    if (ch) Exam.setRems(l);
  }

  return ISI.page("exam", {
    render(st) {
      st.tab = st.tab || "dash"; st.sem = st.sem || 1; st0.sem = st.sem;
      st.subject = st.subject || (optSubjects()[0] || [""])[0];
      const tabs = ISI.tabs([["dash", "📊 " + t("ex_tab_dash")], ["evals", "📆 " + t("ex_tab_evals")], ["chapters", "📚 " + t("ex_tab_chapters")], ["plan", "🗓 " + t("ex_tab_plan")], ["focus", "⏱ " + t("ex_tab_focus")], ["ex", "🔁 " + t("ex_tab_ex")], ["rem", "⏰ " + t("ex_tab_rem")], ["hist", "🕘 " + t("ex_tab_hist")]], st.tab);
      const evals = Exam.evals().slice().sort((a, b) => new Date(a.date) - new Date(b.date));
      const upcoming = evals.filter(e => new Date(e.date) > Date.now());
      let body = "";
      if (st.tab === "dash") {
        const hist = Exam.hist(), today = ISI.dayKey(), wk = ISI.weekKey();
        const mins = (f) => hist.filter(f).reduce((a, h) => a + h.minutes, 0);
        const dayOf = (h) => ISI.dayKey(new Date(h.ts));
        const bySub = {}; hist.filter(h => ISI.weekKey(new Date(h.ts)) === wk).forEach(h => { const k = h.subject || "—"; bySub[k] = (bySub[k] || 0) + h.minutes; });
        const maxSub = Math.max(1, ...Object.values(bySub));
        const todayTasks = Exam.tasks().filter(x => x.date === today);
        const nx = upcoming[0];
        const allIds = Exam.ecues.flatMap(e => e.chapters.map(c => c.id)); const masteredN = allIds.filter(id => Exam.status(id) === "done").length;
        body = `
          <div class="x-grid-2"><div class="card"><div class="card-title">⏳ ${t("ex_next_eval")}</div>${nx ? `<div class="x-big">${Exam.countdown(new Date(nx.date).getTime())}</div><div>${ISI.esc(nx.title)} · ${ISI.esc(nx.subjectLabel || "")}</div><div class="x-muted">${ISI.fmtDateTime(nx.date)}</div>` : `<p class="x-muted">${t("ex_none_eval")}</p>`}</div>
          <div class="card"><div class="card-title">✅ ${t("ex_tasks_today")}</div>${todayTasks.length ? todayTasks.map(x => `<div class="x-list-item"><div class="x-main ${x.done ? "x-muted" : ""}">${x.done ? "✓ " : ""}${ISI.esc(x.label)} · ${x.sessions} ${t("ex_sessions")}</div><div class="x-actions"><button class="btn btn-sm btn-outline" data-act="taskdone" data-id="${x.id}">${x.done ? "↺" : "✓"}</button></div></div>`).join("") : `<p class="x-muted">${t("ex_no_tasks_today")}</p>`}</div></div>
          <div class="x-grid"><div class="stat-mini"><div class="stat-value">${mins(h => dayOf(h) === today)}</div><div class="stat-label">${t("ex_today")} (${t("ex_min")}, ${t("ex_declared")})</div></div>
            <div class="stat-mini"><div class="stat-value">${mins(h => ISI.weekKey(new Date(h.ts)) === wk)}</div><div class="stat-label">${t("ex_week")} (${t("ex_min")})</div></div>
            <div class="stat-mini"><div class="stat-value">${hist.length}</div><div class="stat-label">${t("ex_sessions_n")}</div></div>
            <div class="stat-mini"><div class="stat-value">${masteredN}/${allIds.length}</div><div class="stat-label">${t("ex_st_done")} (${t("ex_official")})</div></div></div>
          <div class="card"><div class="card-title">${t("ex_by_subject")}</div>${Object.keys(bySub).length ? Object.entries(bySub).map(([k, v]) => `<div style="margin:8px 0;"><div class="x-row between"><span>${ISI.esc(k)}</span><span class="x-muted">${v} min</span></div>${ISI.bar(v / maxSub * 100, k)}</div>`).join("") : `<p class="x-muted">${t("ex_hist_none")}</p>`}</div>`;
      } else if (st.tab === "evals") {
        body = `<div class="x-grid-2"><div class="card"><div class="card-title">${t("ex_eval_new")}</div>
          <form data-submit="addeval" novalidate>${ISI.input("title", "ex_eval_title", 'required minlength="3" maxlength="80"')}
            ${ISI.select("subject", "ex_eval_subject", [["", "—"], ...Exam.ecues.map(e => [e.code, `${e.code} — ${e.name}`])], "")}
            ${ISI.input("custom", "ex_eval_custom", 'maxlength="60"')}
            <div class="x-field-row">${ISI.input("date", "ex_eval_date", 'type="datetime-local" required')}${ISI.select("type", "ex_eval_type", [["exam", t("ex_type_exam")], ["ds", t("ex_type_ds")], ["cc", t("ex_type_cc")], ["other", t("ex_type_other")]], "ds")}</div>
            <button class="btn btn-primary" type="submit">${t("x_add")}</button></form></div>
          <div class="card">${evals.length ? evals.map(e => { const cd = Exam.countdown(new Date(e.date).getTime()); return `<div class="x-list-item"><div class="x-main"><div class="x-title">${ISI.esc(e.title)} ${ISI.chip(t("ex_type_" + e.type))}</div><div class="x-muted">${ISI.esc(e.subjectLabel || "")} · ${ISI.fmtDateTime(e.date)}</div>${cd ? `<div>⏳ ${cd}</div>` : ISI.chip(t("ex_past"), "demo")}</div><div class="x-actions"><button class="btn btn-sm btn-ghost" data-act="deleval" data-id="${e.id}" aria-label="${t("x_delete")}">🗑</button></div></div>`; }).join("") : `<p class="x-muted">${t("ex_eval_none")}</p>`}</div></div>`;
      } else if (st.tab === "chapters") {
        const chs = Exam.chaptersOf(st.subject), conf = Exam.conf();
        body = `<div class="x-field-row">${ISI.select("sem", "ex_sem", [[1, "S1"], [2, "S2"]], st.sem, 'data-on="setsem"')}${ISI.select("subj", "ex_pick_subject", optSubjects(), st.subject, 'data-on="setsubj"')}</div>
          <div class="card">${chs.length ? chs.map(c => { const s = Exam.status(c.id); return `<div class="x-list-item"><div class="x-main"><div class="x-title">${ISI.esc(c.title)}</div>${ISI.chip(c.official ? t("ex_official") : t("ex_personal"), c.official ? "" : "demo")}</div>
            <div class="x-actions"><select data-on="setstatus" data-id="${ISI.esc(c.id)}" aria-label="${ISI.esc(c.title)}">${[["not-started", "ex_st_not"], ["in-progress", "ex_st_prog"], ["done", "ex_st_done"]].map(([v, k]) => `<option value="${v}" ${s === v ? "selected" : ""}>${t(k)}</option>`).join("")}</select>
            <select data-on="setconf" data-id="${ISI.esc(c.id)}" aria-label="${t("ex_conf")}">${[1, 2, 3, 4, 5].map(n => `<option value="${n}" ${(conf[c.id] || 3) === n ? "selected" : ""}>${"★".repeat(n)}</option>`).join("")}</select>
            ${c.official ? "" : `<button class="btn btn-sm btn-ghost" data-act="delch" data-id="${c.id}" aria-label="${t("x_delete")}">🗑</button>`}</div></div>`; }).join("") : `<p class="x-muted">${t("ex_ch_none")}</p>`}</div>
          <form data-submit="addch" class="x-row card" style="margin-top:12px;" novalidate><div style="flex:1;min-width:200px;">${ISI.input("title", "ex_ch_title", 'required minlength="2" maxlength="80"')}</div><button class="btn btn-secondary" type="submit">${t("ex_ch_add")}</button></form>`;
      } else if (st.tab === "plan") {
        const tasks = Exam.tasks().slice().sort((a, b) => a.date.localeCompare(b.date));
        const planChs = Exam.chaptersOf(st.subject);
        body = `${st.planMsg ? `<div class="x-status ${st.planMsg.kind}" role="status">${st.planMsg.text}</div>` : ""}
          <div class="x-grid-2"><div class="card"><div class="card-title">${t("ex_plan_new")}</div>
          <form data-submit="genplan" novalidate>
            ${ISI.select("evalId", "ex_plan_eval", upcoming.map(e => [e.id, `${e.title} (${ISI.fmtDate(e.date)})`]), "")}
            ${ISI.select("subj", "ex_pick_subject", optSubjects(), st.subject, 'data-on="setsubj"')}
            <fieldset style="border:0;padding:0;margin:0 0 12px;"><legend class="x-muted">${t("ex_plan_chapters")}</legend>${planChs.map(c => `<label style="display:flex;gap:8px;align-items:center;margin:4px 0;"><input type="checkbox" name="ch_${ISI.esc(c.id)}" ${Exam.status(c.id) === "done" ? "" : "checked"}> ${ISI.esc(c.title)} ${ISI.chip("★".repeat(Exam.conf()[c.id] || 3))}</label>`).join("") || `<span class="x-muted">${t("ex_ch_none")}</span>`}</fieldset>
            <div class="x-field-row">${ISI.input("hours", "ex_plan_hours", 'type="number" min="0.5" max="8" step="0.5" required', "2")}${ISI.input("busy", "ex_plan_busy", 'type="number" min="0" max="8" step="0.5" required', "0")}</div>
            <button class="btn btn-primary" type="submit" ${upcoming.length ? "" : "disabled"}>${t("ex_plan_go")}</button></form></div>
          <div class="card"><div class="card-title">${t("ex_task_add")}</div><form data-submit="addtask" novalidate>${ISI.input("label", "ex_task_label", 'required minlength="2" maxlength="80"')}${ISI.input("date", "ex_task_date", 'type="date" required', ISI.dayKey())}${ISI.input("sessions", "ex_sessions", 'type="number" min="1" max="8" required', "1")}<button class="btn btn-secondary" type="submit">${t("x_add")}</button></form></div></div>
          <div class="card"><div class="x-row between"><div class="card-title">${t("ex_plan_list")}</div>${tasks.length ? `<button class="btn btn-sm btn-ghost" data-act="clearplan">🗑 ${t("ex_clear_plan")}</button>` : ""}</div>
            ${tasks.length ? tasks.map(x => `<div class="x-list-item"><div class="x-main ${x.done ? "x-muted" : ""}"><div class="x-title">${x.done ? "✓ " : ""}${ISI.esc(x.label)}</div><div class="x-muted">${ISI.fmtDate(x.date)} · ${x.sessions} ${t("ex_sessions")}</div></div>
              <div class="x-actions"><input type="date" value="${x.date}" data-on="movetask" data-id="${x.id}" aria-label="${t("ex_move")}"><button class="btn btn-sm btn-outline" data-act="taskdone" data-id="${x.id}" aria-label="${t("ex_done")}">${x.done ? "↺" : "✓"}</button><button class="btn btn-sm btn-ghost" data-act="deltask" data-id="${x.id}" aria-label="${t("x_delete")}">🗑</button></div></div>`).join("") : `<p class="x-muted">${t("ex_plan_empty")}</p>`}</div>`;
      } else if (st.tab === "focus") {
        const cfg = Exam.cfg(), tm = Exam.timer();
        const remaining = tm ? (tm.running ? tm.endTs - Date.now() : tm.remaining) : cfg.focus * 60000;
        body = `<div class="x-grid-2"><div class="card" style="text-align:center;"><div class="x-chip">${tm ? t("ex_mode_" + tm.mode) : t("ex_mode_focus")}</div>
          <div class="x-countdown" id="ex-clock" role="timer" aria-live="off">${fmtMS(remaining)}</div>
          <form data-submit="startfocus" class="x-stack" novalidate>
            ${tm ? "" : `${ISI.input("what", "ex_focus_what", 'maxlength="80"')}${ISI.select("subj", "x_subject", [["", "—"], ...optSubjects()], "")}`}
            <div class="x-row" style="justify-content:center;">
              ${!tm ? `<button class="btn btn-primary" type="submit">▶ ${t("ex_start")}</button>` : tm.running ? `<button class="btn btn-outline" type="button" data-act="pausefocus">⏸ ${t("ex_pause")}</button>` : `<button class="btn btn-primary" type="button" data-act="resumefocus">▶ ${t("ex_resume")}</button>`}
              ${tm ? `<button class="btn btn-ghost" type="button" data-act="resetfocus">↺ ${t("ex_reset")}</button>` : ""}</div></form></div>
          <div class="card"><div class="card-title">⚙ ${t("ex_focus_label")}</div><form data-submit="savecfg" class="x-field-row" novalidate>${ISI.input("focus", "ex_focus_len", 'type="number" min="1" max="90" required', cfg.focus)}${ISI.input("brk", "ex_break_len", 'type="number" min="1" max="30" required', cfg.brk)}<div class="field" style="align-self:end"><button class="btn btn-secondary" type="submit">${t("x_save")}</button></div></form>
            <div class="card-title" style="margin-top:12px;">${t("ex_decl_add")}</div><form data-submit="declare" class="x-field-row" novalidate>${ISI.input("minutes", "ex_decl_min", 'type="number" min="5" max="600" required', "30")}${ISI.select("subj", "x_subject", [["", "—"], ...optSubjects()], "")}<div class="field" style="align-self:end"><button class="btn btn-secondary" type="submit">${t("x_add")}</button></div></form></div></div>`;
      } else if (st.tab === "ex") {
        const exos = Exam.exos();
        body = `<div class="x-grid-2"><div class="card"><div class="card-title">${t("ex_exo_add")}</div><form data-submit="addexo" novalidate>${ISI.input("title", "ex_exo_title", 'required minlength="3" maxlength="100"')}${ISI.select("subj", "x_subject", [["", "—"], ...optSubjects()], st.subject)}<button class="btn btn-primary" type="submit">${t("x_add")}</button></form></div>
          <div class="card">${exos.length ? exos.map(x => `<div class="x-list-item"><div class="x-main ${x.done ? "x-muted" : ""}"><div class="x-title">${x.done ? "✓ " : ""}${ISI.esc(x.title)}</div><div class="x-muted">${ISI.esc(x.subject || "")}</div></div><div class="x-actions"><button class="btn btn-sm btn-outline" data-act="exodone" data-id="${x.id}">${x.done ? "↺" : "✓"}</button><button class="btn btn-sm btn-ghost" data-act="delexo" data-id="${x.id}" aria-label="${t("x_delete")}">🗑</button></div></div>`).join("") : `<p class="x-muted">${t("ex_exo_none")}</p>`}</div></div>`;
      } else if (st.tab === "rem") {
        const rems = Exam.rems().slice().sort((a, b) => new Date(a.when) - new Date(b.when));
        body = `<p class="x-muted">${t("ex_rem_note")}</p><div class="x-grid-2"><div class="card"><div class="card-title">${t("ex_rem_new")}</div><form data-submit="addrem" novalidate>${ISI.input("text", "ex_rem_text", 'required minlength="2" maxlength="100"')}${ISI.input("when", "ex_rem_when", 'type="datetime-local" required')}<div class="x-row"><button class="btn btn-primary" type="submit">${t("x_add")}</button>${window.Notification && Notification.permission === "default" ? `<button class="btn btn-outline" type="button" data-act="notif">🔔 ${t("ex_rem_notif")}</button>` : ""}</div></form></div>
          <div class="card">${rems.length ? rems.map(r => `<div class="x-list-item"><div class="x-main"><div class="x-title">${ISI.esc(r.text)}</div><div class="x-muted">${ISI.fmtDateTime(r.when)} ${r.fired ? ISI.chip("✓", "ok") : ""}</div></div><div class="x-actions"><button class="btn btn-sm btn-ghost" data-act="delrem" data-id="${r.id}" aria-label="${t("x_delete")}">🗑</button></div></div>`).join("") : `<p class="x-muted">${t("ex_rem_none")}</p>`}</div></div>`;
      } else if (st.tab === "hist") {
        const h = Exam.hist();
        body = h.length ? `<div class="card">${h.slice(0, 60).map(x => `<div class="x-list-item"><div class="x-main"><div class="x-title">${x.minutes} min ${ISI.chip(t("ex_declared"), "demo")}</div><div class="x-muted">${ISI.fmtDateTime(x.ts)} · ${ISI.esc(x.subject || "")} ${ISI.esc(x.label || "")}</div></div></div>`).join("")}</div>` : ISI.empty("🕘", "ex_hist_none");
      }
      return `${ISI.header("ex_title", "ex_sub")}${ISI.banner("ex_banner", "info")}${tabs}${body}<div style="margin-top:14px;"><button class="btn btn-ghost btn-sm" data-act="reset">♻ ${t("x_reset_btn")}</button></div>`;
    },
    actions(st, api) {
      const dlg = (arr, set, id) => set(arr().filter(x => x.id !== id));
      return {
        tab(el) { st.tab = el.dataset.id; st.planMsg = null; api.refresh(); },
        setsem(el) { st.sem = Number(el.value); st.subject = (optSubjects()[0] || [""])[0]; st0.sem = st.sem; api.refresh(); },
        setsubj(el) { st.subject = el.value; api.refresh(); },
        addeval(form) {
          const { ok, data } = ISI.readForm(form); if (!ok) return;
          const e = Exam.ecues.find(x => x.code === data.subject);
          const l = Exam.evals(); l.push({ id: ISI.uid("ev"), title: data.title, subject: data.subject, subjectLabel: data.custom || (e ? e.name : ""), date: data.date, type: data.type }); Exam.setEvals(l);
          ISI.toast("📆", t("x_saved")); api.refresh();
        },
        deleval(el) { ISI.confirm(t("x_delete_confirm"), () => { dlg(Exam.evals.bind(Exam), Exam.setEvals.bind(Exam), el.dataset.id); api.refresh(); }); },
        setstatus(el) { Storage.setChapterStatus(el.dataset.id, el.value); ISI.toast("📚", t("x_saved")); },
        setconf(el) { const c = Exam.conf(); c[el.dataset.id] = Number(el.value); ISI.store.set("exam_conf", c); },
        addch(form) { const { ok, data } = ISI.readForm(form); if (!ok) return; const l = Exam.custom(); l.push({ id: ISI.uid("cu"), subject: st.subject, title: data.title }); Exam.setCustom(l); api.refresh(); },
        delch(el) { ISI.confirm(t("x_delete_confirm"), () => { Exam.setCustom(Exam.custom().filter(c => c.id !== el.dataset.id)); api.refresh(); }); },
        genplan(form) {
          const { ok, data } = ISI.readForm(form); if (!ok) return;
          const ev = Exam.evals().find(e => e.id === data.evalId);
          const ids = Exam.chaptersOf(st.subject).filter(c => data["ch_" + c.id]).map(c => c.id);
          if (!ev || !ids.length) { st.planMsg = { kind: "warn", text: t("ex_plan_choose") }; return api.refresh(); }
          const cfg = Exam.cfg();
          const r = Exam.plan({ evalItem: ev, chapterIds: ids, hoursPerDay: Number(data.hours), busyPerDay: Number(data.busy), focusMin: cfg.focus, brkMin: cfg.brk });
          const keep = Exam.tasks().filter(x => x.evalId !== ev.id); Exam.setTasks([...keep, ...r.tasks]);
          Track.add("plan");
          st.planMsg = r.overflow > 0 ? { kind: "warn", text: t("ex_plan_overload", { n: r.overflow }) } : { kind: "ok", text: t("ex_plan_ok", { n: r.sessions, m: cfg.focus, d: r.days }) + (r.light ? " " + t("ex_plan_light") : "") };
          api.refresh();
        },
        addtask(form) { const { ok, data } = ISI.readForm(form); if (!ok) return; const l = Exam.tasks(); l.push({ id: ISI.uid("t"), date: data.date, label: data.label, sessions: Number(data.sessions), done: false, manual: true }); Exam.setTasks(l); api.refresh(); },
        taskdone(el) { const l = Exam.tasks(); const x = l.find(y => y.id === el.dataset.id); if (x) x.done = !x.done; Exam.setTasks(l); api.refresh(); },
        deltask(el) { ISI.confirm(t("x_delete_confirm"), () => { Exam.setTasks(Exam.tasks().filter(x => x.id !== el.dataset.id)); api.refresh(); }); },
        movetask(el) { if (!el.value) return; const l = Exam.tasks(); const x = l.find(y => y.id === el.dataset.id); if (x) x.date = el.value; Exam.setTasks(l); api.refresh(); },
        clearplan() { ISI.confirm(t("x_delete_confirm"), () => { Exam.setTasks([]); api.refresh(); }); },
        savecfg(form) { const { ok, data } = ISI.readForm(form); if (!ok) return; ISI.store.set("exam_cfg", { focus: Number(data.focus), brk: Number(data.brk) }); ISI.toast("⚙", t("x_saved")); api.refresh(); },
        startfocus(form) {
          const d = ISI.readForm(form).data, cfg = Exam.cfg();
          Exam.setTimer({ mode: "focus", minutes: cfg.focus, running: true, endTs: Date.now() + cfg.focus * 60000, what: d.what || "", subject: d.subj || "" }); api.refresh();
        },
        pausefocus() { const tm = Exam.timer(); if (!tm) return; tm.remaining = Math.max(0, tm.endTs - Date.now()); tm.running = false; Exam.setTimer(tm); api.refresh(); },
        resumefocus() { const tm = Exam.timer(); if (!tm) return; tm.endTs = Date.now() + tm.remaining; tm.running = true; Exam.setTimer(tm); api.refresh(); },
        resetfocus() { Exam.setTimer(null); api.refresh(); },
        declare(form) { const { ok, data } = ISI.readForm(form); if (!ok) return; Exam.record(Number(data.minutes), "", data.subj, "manual"); ISI.toast("⏱", t("ex_decl_ok")); api.refresh(); },
        addexo(form) { const { ok, data } = ISI.readForm(form); if (!ok) return; const l = Exam.exos(); l.unshift({ id: ISI.uid("x"), title: data.title, subject: data.subj, done: false }); Exam.setExos(l); api.refresh(); },
        exodone(el) { const l = Exam.exos(); const x = l.find(y => y.id === el.dataset.id); if (x) x.done = !x.done; Exam.setExos(l); api.refresh(); },
        delexo(el) { ISI.confirm(t("x_delete_confirm"), () => { Exam.setExos(Exam.exos().filter(x => x.id !== el.dataset.id)); api.refresh(); }); },
        addrem(form) { const { ok, data } = ISI.readForm(form); if (!ok) return; const l = Exam.rems(); l.push({ id: ISI.uid("r"), text: data.text, when: data.when, fired: new Date(data.when).getTime() <= Date.now() }); Exam.setRems(l); api.refresh(); },
        delrem(el) { Exam.setRems(Exam.rems().filter(x => x.id !== el.dataset.id)); api.refresh(); },
        notif() { if (window.Notification) Notification.requestPermission().then(() => api.refresh()); },
        reset() { ISI.resetModule(["exam"], () => api.refresh()); },
      };
    },
    bind(root, st, api) {
      checkReminders();
      ISI.interval(() => {
        checkReminders();
        const tm = Exam.timer();
        const clock = document.getElementById("ex-clock");
        if (tm && tm.running) {
          const left = tm.endTs - Date.now();
          if (clock) clock.textContent = fmtMS(left);
          if (left <= 0) { finishTimer(false); api.refresh(); }
        }
      }, 500);
    },
  });
};
