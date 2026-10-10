// =====================================================
// SIMULATOR.JS — University Life Simulator
// Les cours officiels (emploi du temps) sont en LECTURE SEULE : jamais déplacés
// ni modifiés. Seuls vos éléments personnels bougent. Les indicateurs sont
// calculés à partir des horaires, durées et priorités que VOUS saisissez.
// =====================================================

ISI.addI18n({
  fr: {
    sim_title: "University Life Simulator", sim_sub: "Testez votre semaine : charge, conflits, équilibre.",
    sim_banner: "Les cours (verrouillés 🔒) viennent de votre emploi du temps et ne sont jamais modifiés. Les calculs reposent uniquement sur les éléments que vous saisissez : ce sont des estimations indicatives, pas des conseils personnalisés.",
    sim_tab_week: "Semaine", sim_tab_items: "Éléments", sim_tab_compare: "Comparer les plannings",
    sim_plan: "Planning", sim_new_plan: "Nouveau planning vide", sim_dup: "Dupliquer", sim_rename: "Renommer", sim_del: "Supprimer ce planning", sim_name: "Nom du planning",
    sim_add: "Ajouter un élément", sim_type: "Type", sim_t_homework: "Devoir", sim_t_exam: "Contrôle / examen", sim_t_revision: "Révision", sim_t_task: "Tâche personnelle", sim_day: "Jour", sim_start: "Début", sim_end: "Fin", sim_prio: "Priorité (1–3)", sim_item_title: "Intitulé",
    sim_err_time: "L'heure de fin doit suivre l'heure de début.", sim_course: "Cours", sim_none: "Aucun élément personnel.",
    sim_m_course: "Heures de cours", sim_m_study: "Heures personnelles", sim_m_load: "Charge pondérée par priorité", sim_m_max: "Journée la plus chargée", sim_m_balance: "Équilibre (0–100)", sim_m_conf: "Conflits horaires", sim_m_free: "Temps libre (08h–18h)",
    sim_conflict: "Conflit horaire", sim_overload: "Journée > 8 h d'activités : envisagez d'alléger.", sim_balanced: "Répartition plutôt équilibrée.",
    sim_move_to: "Déplacer vers", sim_preview: "Aperçu du déplacement", sim_before: "Avant", sim_after: "Après", sim_better: "Plus équilibré", sim_worse: "Moins équilibré", sim_same: "Sans changement notable", sim_apply: "Appliquer", sim_cancel: "Annuler",
    sim_suggest: "Suggérer un jour", sim_suggest_res: "Jour suggéré : {d} (équilibre {a} → {b}, conflits {c}). À vous de décider.", sim_suggest_none: "Aucun jour ne fait mieux que l'actuel.",
    sim_compare_none: "Créez un second planning (Dupliquer) pour comparer.", sim_export: "Exporter le planning (CSV)", sim_saved: "Planning enregistré localement.", sim_save: "Enregistrer le planning",
  },
  en: {
    sim_title: "University Life Simulator", sim_sub: "Test your week: load, conflicts, balance.",
    sim_banner: "Courses (locked 🔒) come from your timetable and are never modified. Calculations only use items you enter: they are indicative estimates, not personalised advice.",
    sim_tab_week: "Week", sim_tab_items: "Items", sim_tab_compare: "Compare plans",
    sim_plan: "Plan", sim_new_plan: "New empty plan", sim_dup: "Duplicate", sim_rename: "Rename", sim_del: "Delete this plan", sim_name: "Plan name",
    sim_add: "Add an item", sim_type: "Type", sim_t_homework: "Homework", sim_t_exam: "Test / exam", sim_t_revision: "Revision", sim_t_task: "Personal task", sim_day: "Day", sim_start: "Start", sim_end: "End", sim_prio: "Priority (1–3)", sim_item_title: "Title",
    sim_err_time: "End time must be after start time.", sim_course: "Course", sim_none: "No personal item.",
    sim_m_course: "Course hours", sim_m_study: "Personal hours", sim_m_load: "Priority-weighted load", sim_m_max: "Busiest day", sim_m_balance: "Balance (0–100)", sim_m_conf: "Time conflicts", sim_m_free: "Free time (8am–6pm)",
    sim_conflict: "Time conflict", sim_overload: "Day > 8 h of activities: consider lightening it.", sim_balanced: "Fairly balanced distribution.",
    sim_move_to: "Move to", sim_preview: "Move preview", sim_before: "Before", sim_after: "After", sim_better: "More balanced", sim_worse: "Less balanced", sim_same: "No notable change", sim_apply: "Apply", sim_cancel: "Cancel",
    sim_suggest: "Suggest a day", sim_suggest_res: "Suggested day: {d} (balance {a} → {b}, conflicts {c}). Your call.", sim_suggest_none: "No day does better than the current one.",
    sim_compare_none: "Create a second plan (Duplicate) to compare.", sim_export: "Export plan (CSV)", sim_saved: "Plan saved locally.", sim_save: "Save plan",
  },
  ar: {
    sim_title: "محاكي الحياة الجامعية", sim_sub: "اختبر أسبوعك: الحمل والتعارضات والتوازن.",
    sim_banner: "الدروس (المقفلة 🔒) من جدولك ولا تُعدَّل أبدا. الحسابات تعتمد فقط على العناصر التي تدخلها: هي تقديرات إرشادية وليست نصائح شخصية.",
    sim_tab_week: "الأسبوع", sim_tab_items: "العناصر", sim_tab_compare: "مقارنة المخططات",
    sim_plan: "المخطط", sim_new_plan: "مخطط فارغ جديد", sim_dup: "نسخ", sim_rename: "إعادة تسمية", sim_del: "حذف هذا المخطط", sim_name: "اسم المخطط",
    sim_add: "إضافة عنصر", sim_type: "النوع", sim_t_homework: "واجب", sim_t_exam: "اختبار / امتحان", sim_t_revision: "مراجعة", sim_t_task: "مهمة شخصية", sim_day: "اليوم", sim_start: "البداية", sim_end: "النهاية", sim_prio: "الأولوية (1–3)", sim_item_title: "العنوان",
    sim_err_time: "يجب أن يكون وقت النهاية بعد البداية.", sim_course: "درس", sim_none: "لا توجد عناصر شخصية.",
    sim_m_course: "ساعات الدروس", sim_m_study: "الساعات الشخصية", sim_m_load: "الحمل المرجح بالأولوية", sim_m_max: "أكثر الأيام ازدحاما", sim_m_balance: "التوازن (0–100)", sim_m_conf: "تعارضات التوقيت", sim_m_free: "الوقت الحر (8 ص – 6 م)",
    sim_conflict: "تعارض في التوقيت", sim_overload: "يوم يتجاوز 8 ساعات من الأنشطة: فكّر في تخفيفه.", sim_balanced: "توزيع متوازن نسبيا.",
    sim_move_to: "نقل إلى", sim_preview: "معاينة النقل", sim_before: "قبل", sim_after: "بعد", sim_better: "أكثر توازنا", sim_worse: "أقل توازنا", sim_same: "دون تغيير ملحوظ", sim_apply: "تطبيق", sim_cancel: "إلغاء",
    sim_suggest: "اقتراح يوم", sim_suggest_res: "اليوم المقترح: {d} (التوازن {a} ← {b}، التعارضات {c}). القرار لك.", sim_suggest_none: "لا يوجد يوم أفضل من الحالي.",
    sim_compare_none: "أنشئ مخططا ثانيا (نسخ) للمقارنة.", sim_export: "تصدير المخطط (CSV)", sim_saved: "تم حفظ المخطط محليا.", sim_save: "حفظ المخطط",
  },
});

const SIM_DAYS = ["monday", "tuesday", "wednesday", "thursday", "friday"];
const Sim = {
  overlap(a, b) { return a.day === b.day && a.s < b.e && b.s < a.e; },
  metrics(courses, items) {
    const ev = [...courses.map(c => ({ ...c, p: 0 })), ...items.map(i => ({ day: i.day, s: ISI.toMin(i.start), e: ISI.toMin(i.end), p: i.priority, kind: i.type }))];
    const perDay = SIM_DAYS.map(d => ev.filter(x => x.day === d).reduce((a, x) => a + (x.e - x.s) / 60, 0));
    const mean = perDay.reduce((a, b) => a + b, 0) / perDay.length;
    const sd = Math.sqrt(perDay.reduce((a, b) => a + (b - mean) ** 2, 0) / perDay.length);
    let conflicts = 0; for (let i = 0; i < ev.length; i++) for (let j = i + 1; j < ev.length; j++) if (this.overlap(ev[i], ev[j])) conflicts++;
    const free = SIM_DAYS.map(d => { const w = ev.filter(x => x.day === d).map(x => [Math.max(480, x.s), Math.min(1080, x.e)]).filter(([a, b]) => b > a).sort((a, b) => a[0] - b[0]); let occ = 0, end = 480; w.forEach(([a, b]) => { const s0 = Math.max(a, end); if (b > s0) { occ += b - s0; end = b; } }); return (600 - occ) / 60; }).reduce((a, b) => a + b, 0);
    const own = items.reduce((a, i) => a + (ISI.toMin(i.end) - ISI.toMin(i.start)) / 60, 0);
    return { perDay, course: courses.reduce((a, c) => a + (c.e - c.s) / 60, 0), own, load: items.reduce((a, i) => a + (ISI.toMin(i.end) - ISI.toMin(i.start)) / 60 * i.priority, 0),
      maxDay: Math.max(...perDay), balance: Math.max(0, Math.round(100 - 25 * sd - 8 * conflicts)), conflicts, free };
  },
};

Pages.simulator = async function () {
  const tt = await Data.timetable();
  const courses = tt.filter(s => SIM_DAYS.includes(s.day)).map(s => ({ day: s.day, s: ISI.toMin(s.start), e: ISI.toMin(s.end), title: s.subject, room: s.room, kind: "course" }));
  const store = () => { let d = ISI.store.get("sim_plans", null); if (!d) { d = { active: "p1", plans: [{ id: "p1", name: "Plan A", items: [] }] }; ISI.store.set("sim_plans", d); } return d; };
  const save = (d) => ISI.store.set("sim_plans", d);
  const fmt1 = (n) => (Math.round(n * 10) / 10).toString();

  return ISI.page("simulator", {
    render(st) {
      st.tab = st.tab || "week";
      const d = store(); const plan = d.plans.find(p => p.id === d.active) || d.plans[0];
      const m = Sim.metrics(courses, plan.items);
      const tabs = ISI.tabs([["week", "📅 " + t("sim_tab_week")], ["items", "➕ " + t("sim_tab_items")], ["compare", "⚖ " + t("sim_tab_compare")]], st.tab);
      const planBar = `<div class="x-row" style="margin-bottom:12px;"><label for="sim-plan" class="x-muted">${t("sim_plan")}</label><select id="sim-plan" data-on="setplan">${d.plans.map(p => `<option value="${p.id}" ${p.id === plan.id ? "selected" : ""}>${ISI.esc(p.name)}</option>`).join("")}</select>
        <button class="btn btn-sm btn-outline" data-act="newplan">＋ ${t("sim_new_plan")}</button><button class="btn btn-sm btn-outline" data-act="dup">⧉ ${t("sim_dup")}</button><button class="btn btn-sm btn-outline" data-act="rename">✎ ${t("sim_rename")}</button>${d.plans.length > 1 ? `<button class="btn btn-sm btn-ghost" data-act="delplan">🗑 ${t("sim_del")}</button>` : ""}</div>`;
      const metr = (mm) => `<div class="x-grid">${[["sim_m_course", fmt1(mm.course) + " h"], ["sim_m_study", fmt1(mm.own) + " h"], ["sim_m_load", fmt1(mm.load)], ["sim_m_max", fmt1(mm.maxDay) + " h"], ["sim_m_balance", mm.balance], ["sim_m_conf", mm.conflicts], ["sim_m_free", fmt1(mm.free) + " h"]].map(([k, v]) => `<div class="stat-mini"><div class="stat-value">${v}</div><div class="stat-label">${t(k)}</div></div>`).join("")}</div>`;
      let body = "";
      if (st.tab === "week") {
        const hints = []; m.perDay.forEach((h, i) => { if (h > 8) hints.push(`${t("day_" + SIM_DAYS[i])} : ${t("sim_overload")}`); });
        body = `${metr(m)}${hints.length ? hints.map(h => `<div class="x-status warn">⚠ ${h}</div>`).join("") : `<div class="x-status ok">${t("sim_balanced")}</div>`}
          <div class="x-week" style="margin-top:12px;">${SIM_DAYS.map(dk => {
            const evs = [...courses.filter(c => c.day === dk).map(c => ({ ...c, locked: true })), ...plan.items.filter(i => i.day === dk).map(i => ({ day: dk, s: ISI.toMin(i.start), e: ISI.toMin(i.end), title: i.title, kind: i.type, id: i.id }))].sort((a, b) => a.s - b.s);
            return `<div class="x-day"><h4>${t("day_" + dk)} <span class="x-muted">${fmt1(m.perDay[SIM_DAYS.indexOf(dk)])} h</span></h4>${evs.map(e => { const cf = evs.some(o => o !== e && Sim.overlap(e, o)); return `<div class="x-block ${e.locked ? "course" : e.kind} ${cf ? "conflict" : ""}">${e.locked ? "🔒 " : ""}<strong>${ISI.fmtMin ? "" : ""}${ISI.fromMin(e.s)}–${ISI.fromMin(e.e)}</strong> ${ISI.esc(e.title)}${cf ? ` <span class="x-chip bad">${t("sim_conflict")}</span>` : ""}</div>`; }).join("")}</div>`; }).join("")}</div>`;
      } else if (st.tab === "items") {
        const pv = st.preview;
        body = `<div class="x-grid-2"><div class="card"><div class="card-title">${t("sim_add")}</div><form data-submit="additem" novalidate>${ISI.input("title", "sim_item_title", 'required minlength="2" maxlength="60"')}
          <div class="x-field-row">${ISI.select("type", "sim_type", ["homework", "exam", "revision", "task"].map(k => [k, t("sim_t_" + k)]), "revision")}${ISI.select("day", "sim_day", SIM_DAYS.map(k => [k, t("day_" + k)]), "monday")}${ISI.input("priority", "sim_prio", 'type="number" min="1" max="3" required', "2")}</div>
          <div class="x-field-row">${ISI.input("start", "sim_start", 'type="time" required', "18:00")}${ISI.input("end", "sim_end", 'type="time" required', "19:30")}</div><button class="btn btn-primary" type="submit">${t("x_add")}</button></form></div>
          <div class="card">${plan.items.length ? plan.items.map(i => `<div class="x-list-item"><div class="x-main"><div class="x-title">${ISI.esc(i.title)} ${ISI.chip(t("sim_t_" + i.type))}${ISI.chip("P" + i.priority)}</div><div class="x-muted">${t("day_" + i.day)} ${i.start}–${i.end}</div>
            <div class="x-row"><label class="x-muted" for="mv-${i.id}">${t("sim_move_to")}</label><select id="mv-${i.id}" data-on="preview" data-id="${i.id}"><option value="">—</option>${SIM_DAYS.filter(x => x !== i.day).map(x => `<option value="${x}">${t("day_" + x)}</option>`).join("")}</select><button class="btn btn-sm btn-ghost" data-act="suggest" data-id="${i.id}">💡 ${t("sim_suggest")}</button></div>
            ${pv && pv.id === i.id ? `<div class="info-box" role="status"><strong>${t("sim_preview")} → ${t("day_" + pv.day)}</strong><br>${t("sim_before")}: ${t("sim_m_balance")} ${pv.a.balance}, ${t("sim_m_conf")} ${pv.a.conflicts} · ${t("sim_after")}: ${pv.b.balance}, ${pv.b.conflicts} — <strong>${pv.b.balance > pv.a.balance ? t("sim_better") : pv.b.balance < pv.a.balance ? t("sim_worse") : t("sim_same")}</strong><div class="x-row" style="margin-top:6px;"><button class="btn btn-sm btn-primary" data-act="applymove">${t("sim_apply")}</button><button class="btn btn-sm btn-ghost" data-act="cancelmove">${t("sim_cancel")}</button></div></div>` : ""}
            ${st.sugg && st.sugg.id === i.id ? `<div class="x-status info">${st.sugg.text}</div>` : ""}</div>
            <div class="x-actions"><button class="btn btn-sm btn-ghost" data-act="delitem" data-id="${i.id}" aria-label="${t("x_delete")}">🗑</button></div></div>`).join("") : `<p class="x-muted">${t("sim_none")}</p>`}</div></div>`;
      } else {
        body = d.plans.length > 1 ? `<div class="x-table-wrap"><table class="x-table"><thead><tr><th></th>${d.plans.map(p => `<th>${ISI.esc(p.name)}</th>`).join("")}</tr></thead><tbody>${[["sim_m_course", "course", " h"], ["sim_m_study", "own", " h"], ["sim_m_load", "load", ""], ["sim_m_max", "maxDay", " h"], ["sim_m_balance", "balance", ""], ["sim_m_conf", "conflicts", ""], ["sim_m_free", "free", " h"]].map(([k, f, u]) => `<tr><th>${t(k)}</th>${d.plans.map(p => `<td>${fmt1(Sim.metrics(courses, p.items)[f])}${u}</td>`).join("")}</tr>`).join("")}</tbody></table></div>` : `<p class="x-muted">${t("sim_compare_none")}</p>`;
      }
      return `${ISI.header("sim_title", "sim_sub")}${ISI.banner("sim_banner", "info")}${planBar}${tabs}${body}
        <div class="x-row" style="margin-top:14px;"><button class="btn btn-secondary btn-sm" data-act="save">💾 ${t("sim_save")}</button><button class="btn btn-outline btn-sm" data-act="csv">⬇ ${t("sim_export")}</button><button class="btn btn-ghost btn-sm" data-act="reset">♻ ${t("x_reset_btn")}</button></div>`;
    },
    actions(st, api) {
      const cur = () => { const d = store(); return { d, p: d.plans.find(p => p.id === d.active) || d.plans[0] }; };
      const withMove = (items, id, day) => items.map(i => i.id === id ? { ...i, day } : i);
      return {
        tab(el) { st.tab = el.dataset.id; st.preview = null; api.refresh(); },
        setplan(el) { const d = store(); d.active = el.value; save(d); st.preview = null; api.refresh(); },
        newplan() { ISI.formModal(t("sim_new_plan"), ISI.input("name", "sim_name", 'required minlength="2" maxlength="30"'), (v) => { const d = store(); const p = { id: ISI.uid("p"), name: v.name, items: [] }; d.plans.push(p); d.active = p.id; save(d); api.refresh(); }); },
        dup() { const { d, p } = cur(); const c = { id: ISI.uid("p"), name: p.name + " (copie)", items: p.items.map(i => ({ ...i, id: ISI.uid("i") })) }; d.plans.push(c); d.active = c.id; save(d); api.refresh(); },
        rename() { const { d, p } = cur(); ISI.formModal(t("sim_rename"), ISI.input("name", "sim_name", 'required minlength="2" maxlength="30"', p.name), (v) => { p.name = v.name; save(d); api.refresh(); }); },
        delplan() { ISI.confirm(t("x_delete_confirm"), () => { const { d, p } = cur(); d.plans = d.plans.filter(x => x.id !== p.id); d.active = d.plans[0].id; save(d); api.refresh(); }); },
        additem(form) {
          const { ok, data } = ISI.readForm(form); if (!ok) return;
          if (ISI.toMin(data.end) <= ISI.toMin(data.start)) { ISI.toast("⚠️", t("sim_err_time")); return; }
          const { d, p } = cur(); p.items.push({ id: ISI.uid("i"), title: data.title, type: data.type, day: data.day, start: data.start, end: data.end, priority: Number(data.priority) }); save(d); api.refresh();
        },
        delitem(el) { ISI.confirm(t("x_delete_confirm"), () => { const { d, p } = cur(); p.items = p.items.filter(i => i.id !== el.dataset.id); save(d); api.refresh(); }); },
        preview(el) { if (!el.value) { st.preview = null; return api.refresh(); } const { p } = cur(); st.preview = { id: el.dataset.id, day: el.value, a: Sim.metrics(courses, p.items), b: Sim.metrics(courses, withMove(p.items, el.dataset.id, el.value)) }; st.sugg = null; api.refresh(); },
        applymove() { const { d, p } = cur(); const pv = st.preview; if (!pv) return; p.items = withMove(p.items, pv.id, pv.day); save(d); st.preview = null; ISI.toast("✅", t("x_saved")); api.refresh(); },
        cancelmove() { st.preview = null; api.refresh(); },
        suggest(el) {
          const { p } = cur(); const item = p.items.find(i => i.id === el.dataset.id); const base = Sim.metrics(courses, p.items);
          let best = null; SIM_DAYS.filter(x => x !== item.day).forEach(dk => { const m = Sim.metrics(courses, withMove(p.items, item.id, dk)); if (m.balance > base.balance && (!best || m.balance > best.m.balance || (m.balance === best.m.balance && m.conflicts < best.m.conflicts))) best = { dk, m }; });
          st.preview = null; st.sugg = { id: item.id, text: best ? t("sim_suggest_res", { d: t("day_" + best.dk), a: base.balance, b: best.m.balance, c: best.m.conflicts }) : t("sim_suggest_none") }; api.refresh();
        },
        save() { Track.add("plan"); ISI.toast("💾", t("sim_saved")); },
        csv() { const { p } = cur(); ISI.csv([["plan", "title", "type", "day", "start", "end", "priority"], ...p.items.map(i => [p.name, i.title, i.type, i.day, i.start, i.end, i.priority])], "planning-simulation.csv"); },
        reset() { ISI.resetModule(["sim"], () => api.refresh()); },
      };
    },
  });
};
