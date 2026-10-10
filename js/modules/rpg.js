// =====================================================
// RPG.JS — Campus Life RPG + profil de gamification commun
// XP ≠ notes. XP ≠ EcoPoints ≠ crédits d'entraide ≠ présences.
// Chaque système a son propre ledger (voir Ledger dans core.js).
// Les XP ne s'obtiennent QUE via missions / défis réclamés (clé unique
// par période) : pas de double récompense pour une même action.
// =====================================================

ISI.addI18n({
  fr: {
    rpg_title: "Campus Life RPG", rpg_sub: "Votre progression ludique — sans lien avec vos notes.",
    rpg_banner: "Les XP sont une récompense symbolique locale, stockée sur cet appareil. Ils ne remplacent jamais les notes officielles et ne sont ni partagés ni vérifiés : n'importe qui peut modifier le stockage de son navigateur. Pas de classement fiable possible sans serveur.",
    rpg_tab_profile: "Profil", rpg_tab_missions: "Missions", rpg_tab_badges: "Badges", rpg_tab_history: "Historique", rpg_tab_goals: "Objectifs", rpg_tab_collective: "Défis collectifs", rpg_tab_config: "Configuration",
    rpg_level: "Niveau", rpg_xp: "XP", rpg_next: "Prochain niveau dans", rpg_max: "Niveau maximal atteint", rpg_stats: "Statistiques personnelles",
    rpg_wallets: "Systèmes séparés", rpg_w_xp: "XP de progression", rpg_w_eco: "EcoPoints", rpg_w_credits: "Crédits d'entraide", rpg_w_att: "Présences aux cours", rpg_w_att_txt: "Jamais converties en XP", rpg_w_grades: "Notes officielles", rpg_w_grades_txt: "Hors de cette application",
    rpg_unverified: "Valeurs locales non vérifiées", rpg_tamper: "Les données de points ont été modifiées en dehors de l'application (signature locale incohérente). Les valeurs restent non vérifiées.", rpg_accept: "Accepter l'état actuel",
    rpg_daily: "Quotidiennes", rpg_weekly: "Hebdomadaires", rpg_claim: "Réclamer", rpg_claimed: "Réclamée", rpg_progress: "Progression", rpg_reward: "Récompense",
    rpg_badges_unlocked: "Débloqués", rpg_badges_locked: "À débloquer", rpg_hist_none: "Aucune récompense pour l'instant. Terminez une mission !",
    rpg_goals_intro: "Objectifs personnels : suivi libre, sans XP (pour éviter de s'auto-attribuer des points).", rpg_goal_new: "Nouvel objectif", rpg_goal_title: "Objectif", rpg_goal_target: "Cible (nombre)", rpg_goal_none: "Aucun objectif personnel.", rpg_goal_plus: "+1",
    rpg_coll_note: "Progression collective SIMULÉE : votre contribution est réelle (locale), celle des autres est fictive.", rpg_coll_you: "Votre contribution", rpg_coll_total: "Total (simulé)", rpg_coll_need: "Contribution minimale pour réclamer",
    rpg_cfg_intro: "Configuration locale de démonstration (modifie uniquement votre expérience sur cet appareil).", rpg_cfg_levels: "Seuils de niveaux (XP)", rpg_cfg_rewards: "Récompenses des missions (XP)", rpg_cfg_save: "Enregistrer la configuration", rpg_cfg_reset: "Valeurs par défaut", rpg_cfg_err: "Les seuils doivent être croissants, à partir de 0.",
    rpg_rules: "Règles", rpg_rules_txt: "XP uniquement via missions/défis (1 fois par période) · plafonds quotidiens sur les activités (bien-être, anti-abus) · aucune récompense pour l'absentéisme ou le surmenage · objectifs personnels sans XP.",
    rpg_data: "Données locales", rpg_claim_ok: "+{n} XP", rpg_dup: "Déjà réclamée.", rpg_goal_done: "Objectif atteint 🎉",
    rpg_ev_focus: "Sessions de concentration", rpg_ev_quiz: "Quiz terminés", rpg_ev_read: "Publications lues", rpg_ev_help: "Entraides déclarées", rpg_ev_eco: "Actions écologiques", rpg_ev_plan: "Plannings", rpg_ev_vote: "Votes", rpg_ev_post: "Contributions", rpg_ev_attendance: "Scans de présence (simulés)",
  },
  en: {
    rpg_title: "Campus Life RPG", rpg_sub: "Your playful progression — unrelated to your grades.",
    rpg_banner: "XP is a symbolic local reward stored on this device. It never replaces official grades and is neither shared nor verified: anyone can edit their browser storage. No reliable ranking is possible without a server.",
    rpg_tab_profile: "Profile", rpg_tab_missions: "Missions", rpg_tab_badges: "Badges", rpg_tab_history: "History", rpg_tab_goals: "Goals", rpg_tab_collective: "Collective challenges", rpg_tab_config: "Settings",
    rpg_level: "Level", rpg_xp: "XP", rpg_next: "Next level in", rpg_max: "Maximum level reached", rpg_stats: "Personal statistics",
    rpg_wallets: "Separate systems", rpg_w_xp: "Progression XP", rpg_w_eco: "EcoPoints", rpg_w_credits: "Help credits", rpg_w_att: "Class attendance", rpg_w_att_txt: "Never converted to XP", rpg_w_grades: "Official grades", rpg_w_grades_txt: "Outside this app",
    rpg_unverified: "Unverified local values", rpg_tamper: "Points data was modified outside the app (local signature mismatch). Values remain unverified.", rpg_accept: "Accept current state",
    rpg_daily: "Daily", rpg_weekly: "Weekly", rpg_claim: "Claim", rpg_claimed: "Claimed", rpg_progress: "Progress", rpg_reward: "Reward",
    rpg_badges_unlocked: "Unlocked", rpg_badges_locked: "To unlock", rpg_hist_none: "No reward yet. Complete a mission!",
    rpg_goals_intro: "Personal goals: free tracking, no XP (to avoid self-awarding points).", rpg_goal_new: "New goal", rpg_goal_title: "Goal", rpg_goal_target: "Target (number)", rpg_goal_none: "No personal goals.", rpg_goal_plus: "+1",
    rpg_coll_note: "SIMULATED collective progress: your contribution is real (local), others' is fictional.", rpg_coll_you: "Your contribution", rpg_coll_total: "Total (simulated)", rpg_coll_need: "Minimum contribution to claim",
    rpg_cfg_intro: "Local demo configuration (only changes your experience on this device).", rpg_cfg_levels: "Level thresholds (XP)", rpg_cfg_rewards: "Mission rewards (XP)", rpg_cfg_save: "Save settings", rpg_cfg_reset: "Defaults", rpg_cfg_err: "Thresholds must be increasing, starting at 0.",
    rpg_rules: "Rules", rpg_rules_txt: "XP only via missions/challenges (once per period) · daily caps on activities (wellbeing, anti-abuse) · no reward for skipping classes or overworking · personal goals give no XP.",
    rpg_data: "Local data", rpg_claim_ok: "+{n} XP", rpg_dup: "Already claimed.", rpg_goal_done: "Goal reached 🎉",
    rpg_ev_focus: "Focus sessions", rpg_ev_quiz: "Quizzes finished", rpg_ev_read: "Posts read", rpg_ev_help: "Help sessions declared", rpg_ev_eco: "Eco actions", rpg_ev_plan: "Plans", rpg_ev_vote: "Votes", rpg_ev_post: "Contributions", rpg_ev_attendance: "Attendance scans (simulated)",
  },
  ar: {
    rpg_title: "لعبة حياة الحرم", rpg_sub: "تقدمك الترفيهي — لا علاقة له بنقاطك الدراسية.",
    rpg_banner: "نقاط الخبرة مكافأة رمزية محلية مخزنة على هذا الجهاز. لا تعوض أبدا الأعداد الرسمية وهي غير مشتركة وغير موثقة: يمكن لأي شخص تعديل تخزين متصفحه. لا يمكن إنشاء ترتيب موثوق دون خادم.",
    rpg_tab_profile: "الملف", rpg_tab_missions: "المهام", rpg_tab_badges: "الأوسمة", rpg_tab_history: "السجل", rpg_tab_goals: "الأهداف", rpg_tab_collective: "التحديات الجماعية", rpg_tab_config: "الإعدادات",
    rpg_level: "المستوى", rpg_xp: "نقاط الخبرة", rpg_next: "المستوى التالي بعد", rpg_max: "تم بلوغ أعلى مستوى", rpg_stats: "إحصائياتي",
    rpg_wallets: "أنظمة منفصلة", rpg_w_xp: "نقاط التقدم", rpg_w_eco: "النقاط الخضراء", rpg_w_credits: "رصيد التعاون", rpg_w_att: "الحضور في الدروس", rpg_w_att_txt: "لا يحوَّل أبدا إلى نقاط", rpg_w_grades: "الأعداد الرسمية", rpg_w_grades_txt: "خارج هذا التطبيق",
    rpg_unverified: "قيم محلية غير موثقة", rpg_tamper: "تم تعديل بيانات النقاط خارج التطبيق (عدم تطابق التوقيع المحلي). تبقى القيم غير موثقة.", rpg_accept: "قبول الحالة الحالية",
    rpg_daily: "يومية", rpg_weekly: "أسبوعية", rpg_claim: "استلام", rpg_claimed: "تم الاستلام", rpg_progress: "التقدم", rpg_reward: "المكافأة",
    rpg_badges_unlocked: "مفتوحة", rpg_badges_locked: "للفتح", rpg_hist_none: "لا مكافآت بعد. أنجز مهمة!",
    rpg_goals_intro: "أهداف شخصية: متابعة حرة بدون نقاط (لتفادي منح النفس نقاطا).", rpg_goal_new: "هدف جديد", rpg_goal_title: "الهدف", rpg_goal_target: "الهدف (عدد)", rpg_goal_none: "لا توجد أهداف شخصية.", rpg_goal_plus: "+1",
    rpg_coll_note: "تقدم جماعي محاكى: مساهمتك حقيقية (محلية) ومساهمة الآخرين وهمية.", rpg_coll_you: "مساهمتك", rpg_coll_total: "المجموع (محاكى)", rpg_coll_need: "الحد الأدنى للمساهمة للاستلام",
    rpg_cfg_intro: "إعدادات تجريبية محلية (تغير تجربتك على هذا الجهاز فقط).", rpg_cfg_levels: "عتبات المستويات (نقاط)", rpg_cfg_rewards: "مكافآت المهام (نقاط)", rpg_cfg_save: "حفظ الإعدادات", rpg_cfg_reset: "القيم الافتراضية", rpg_cfg_err: "يجب أن تكون العتبات تصاعدية بدءا من 0.",
    rpg_rules: "القواعد", rpg_rules_txt: "النقاط فقط عبر المهام/التحديات (مرة لكل فترة) · حدود يومية للأنشطة (الصحة، منع الإساءة) · لا مكافأة على الغياب أو الإرهاق · الأهداف الشخصية بلا نقاط.",
    rpg_data: "البيانات المحلية", rpg_claim_ok: "+{n} نقطة", rpg_dup: "تم استلامها سابقا.", rpg_goal_done: "تم بلوغ الهدف 🎉",
    rpg_ev_focus: "جلسات التركيز", rpg_ev_quiz: "اختبارات منجزة", rpg_ev_read: "منشورات مقروءة", rpg_ev_help: "حصص مساعدة", rpg_ev_eco: "أعمال بيئية", rpg_ev_plan: "مخططات", rpg_ev_vote: "تصويتات", rpg_ev_post: "مساهمات", rpg_ev_attendance: "مسح حضور (محاكاة)",
  },
});

const RPG = {
  cfg: null,
  async load() { if (!this.cfg) this.cfg = await ISI.demo("rpg"); return this.cfg; },
  levels() {
    const ov = ISI.store.get("rpg_levels", null);
    return this.cfg.levels.map((l, i) => ({ ...l, min: ov && ov[i] !== undefined ? ov[i] : l.min }));
  },
  missionXp(m) { const ov = ISI.store.get("rpg_rewards", {}); return ov[m.id] !== undefined ? ov[m.id] : m.xp; },
  levelInfo(xp) {
    const lv = this.levels(); let idx = 0;
    lv.forEach((l, i) => { if (xp >= l.min) idx = i; });
    const next = lv[idx + 1] || null;
    return { idx, cur: lv[idx], next, pct: next ? ((xp - lv[idx].min) / (next.min - lv[idx].min)) * 100 : 100, toNext: next ? next.min - xp : 0 };
  },
  periodKey(m) { return m.period === "daily" ? ISI.dayKey() : ISI.weekKey(); },
  claim(kind, item, label) {
    const key = `${kind}:${item.id}:${this.periodKey(item)}`;
    return Ledger.award("xp", key, kind === "mission" ? this.missionXp(item) : item.xp, label, { src: kind, ref: item.id });
  },
  // Évalue les badges (idempotent) et retourne la liste des nouveaux
  evalBadges() {
    const unlocked = ISI.store.get("rpg_badges", {}); const fresh = [];
    const xp = Ledger.balance("xp");
    this.cfg.badges.forEach(b => {
      if (unlocked[b.id]) return;
      const r = b.rule; let ok = false;
      if (r.type === "event") ok = Track.count(r.event, "all") >= r.count;
      else if (r.type === "xp") ok = xp >= r.min;
      if (ok) { unlocked[b.id] = Date.now(); fresh.push(b); }
    });
    if (fresh.length) ISI.store.set("rpg_badges", unlocked);
    return { unlocked, fresh };
  },
};

Pages.rpg = async function () {
  await RPG.load();
  const cfg = RPG.cfg;
  const me = ISI.me();

  const wallet = (icon, title, value, sub, link) =>
    `<div class="card"><div class="x-row between"><div><div class="x-muted">${icon} ${title}</div><div class="x-big">${value}</div>${sub ? `<div class="x-muted">${sub}</div>` : ""}</div>${link ? `<a class="btn btn-sm btn-outline" href="#/${link}">→</a>` : ""}</div></div>`;

  return ISI.page("rpg", {
    render(st) {
      st.tab = st.tab || "profile";
      const { fresh } = RPG.evalBadges();
      if (fresh.length) setTimeout(() => fresh.forEach(b => ISI.toast(b.icon, ISI.L(b, "title"))), 50);
      const xp = Ledger.balance("xp"), li = RPG.levelInfo(xp);
      const tabs = ISI.tabs(["profile", "missions", "badges", "history", "goals", "collective", "config"].map(k => [k, t("rpg_tab_" + k)]), st.tab);
      let body = "";
      if (st.tab === "profile") {
        const evs = ["focus", "quiz", "read", "help", "eco", "plan", "vote", "post", "attendance"];
        body = `
          <div class="card" style="margin-bottom:14px;">
            <div class="x-row"><div style="font-size:48px" aria-hidden="true">${li.cur.icon}</div>
              <div style="flex:1;min-width:200px;"><div class="x-muted">${ISI.esc(me.name)} · ${t("rpg_level")} ${li.idx + 1}</div>
                <div class="x-big">${ISI.esc(ISI.L(li.cur, "name"))}</div>
                <div>${xp} ${t("rpg_xp")} ${li.next ? `· ${t("rpg_next")} ${li.toNext} ${t("rpg_xp")}` : `· ${t("rpg_max")}`}</div></div></div>
            ${ISI.bar(li.pct, t("rpg_level"))}
            <div style="margin-top:8px;">${ISI.chip(t("rpg_unverified"), "demo")} ${ISI.chip(t("x_local_only"), "demo")}</div>
            ${Ledger.verified() ? "" : `<div class="x-status warn" role="alert">${t("rpg_tamper")} <button class="btn btn-sm btn-outline" data-act="accept">${t("rpg_accept")}</button></div>`}
          </div>
          <div class="card-title">${t("rpg_wallets")}</div>
          <div class="x-grid">
            ${wallet("⭐", t("rpg_w_xp"), Ledger.balance("xp"), "", "rpg")}
            ${wallet("🌿", t("rpg_w_eco"), Ledger.balance("eco"), "", "eco")}
            ${wallet("🤝", t("rpg_w_credits"), Ledger.balance("credits"), "", "skills")}
            ${wallet("✅", t("rpg_w_att"), "—", t("rpg_w_att_txt"), "attendance")}
            ${wallet("🎓", t("rpg_w_grades"), "—", t("rpg_w_grades_txt"), "")}
          </div>
          <div class="card-title">${t("rpg_stats")}</div>
          <div class="x-grid">${evs.map(e => `<div class="stat-mini"><div class="stat-value">${Track.count(e, "all")}</div><div class="stat-label">${t("rpg_ev_" + e)}</div></div>`).join("")}</div>
          <div class="info-box"><strong>${t("rpg_rules")}</strong> — ${t("rpg_rules_txt")}</div>`;
      } else if (st.tab === "missions") {
        const block = (period) => cfg.missions.filter(m => m.period === period).map(m => {
          const n = Track.count(m.event, period), done = n >= m.target;
          const claimed = Ledger.has("xp", `mission:${m.id}:${RPG.periodKey(m)}`);
          return `<div class="x-list-item"><div class="x-main"><div class="x-title">${ISI.esc(ISI.L(m, "title"))}</div><div class="x-muted">${ISI.esc(ISI.L(m, "desc"))}</div>
            <div style="margin-top:6px;">${ISI.bar((Math.min(n, m.target) / m.target) * 100, ISI.L(m, "title"))}<span class="x-muted">${Math.min(n, m.target)}/${m.target} · ${t("rpg_reward")}: ${RPG.missionXp(m)} ${t("rpg_xp")}</span></div></div>
            <div class="x-actions">${claimed ? ISI.chip("✓ " + t("rpg_claimed"), "ok") : `<button class="btn btn-sm btn-primary" data-act="claim" data-id="${m.id}" ${done ? "" : "disabled"}>${t("rpg_claim")}</button>`}</div></div>`;
        }).join("");
        body = `<div class="card"><div class="card-title">☀️ ${t("rpg_daily")}</div>${block("daily")}</div><div class="card" style="margin-top:14px;"><div class="card-title">📅 ${t("rpg_weekly")}</div>${block("weekly")}</div>
          <p class="x-muted">${t("x_cap_reached")}</p>`;
      } else if (st.tab === "badges") {
        const un = ISI.store.get("rpg_badges", {});
        const card = (b, on) => `<div class="card" style="${on ? "" : "opacity:.55"}"><div class="x-row"><div style="font-size:30px" aria-hidden="true">${on ? b.icon : "🔒"}</div><div><div class="x-title">${ISI.esc(ISI.L(b, "title"))}</div><div class="x-muted">${ISI.esc(ISI.L(b, "desc"))}</div>${on ? `<div class="x-muted">${ISI.fmtDate(un[b.id])}</div>` : ""}</div></div></div>`;
        body = `<div class="card-title">${t("rpg_badges_unlocked")} (${Object.keys(un).length})</div><div class="x-grid">${cfg.badges.filter(b => un[b.id]).map(b => card(b, true)).join("") || `<p class="x-muted">—</p>`}</div>
          <div class="card-title">${t("rpg_badges_locked")}</div><div class="x-grid">${cfg.badges.filter(b => !un[b.id]).map(b => card(b, false)).join("")}</div>`;
      } else if (st.tab === "history") {
        const h = Ledger.entries("xp");
        body = h.length ? `<div class="card">${h.slice(0, 50).map(e => `<div class="x-list-item"><div class="x-main"><div class="x-title">${ISI.esc(e.label)}</div><div class="x-muted">${ISI.fmtDateTime(e.ts)} · ${ISI.esc(e.src || "")}</div></div><div>${ISI.chip("+" + e.pts + " XP", "ok")}</div></div>`).join("")}</div>` : ISI.empty("🏆", "rpg_hist_none");
      } else if (st.tab === "goals") {
        const goals = ISI.store.get("rpg_goals", []);
        body = `<p class="x-muted">${t("rpg_goals_intro")}</p>
          <div class="x-grid-2"><div class="card"><div class="card-title">${t("rpg_goal_new")}</div>
            <form data-submit="addgoal" novalidate>${ISI.input("title", "rpg_goal_title", 'required minlength="3" maxlength="80"')}${ISI.input("target", "rpg_goal_target", 'type="number" min="1" max="999" required', "5")}<button class="btn btn-primary" type="submit">${t("x_add")}</button></form></div>
          <div class="card">${goals.length ? goals.map(g => `<div class="x-list-item"><div class="x-main"><div class="x-title">${ISI.esc(g.title)}</div>${ISI.bar((g.done / g.target) * 100, g.title)}<span class="x-muted">${g.done}/${g.target} ${g.done >= g.target ? t("rpg_goal_done") : ""}</span></div>
            <div class="x-actions"><button class="btn btn-sm btn-outline" data-act="goalplus" data-id="${g.id}" ${g.done >= g.target ? "disabled" : ""}>${t("rpg_goal_plus")}</button><button class="btn btn-sm btn-ghost" data-act="goaldel" data-id="${g.id}" aria-label="${t("x_delete")}">🗑</button></div></div>`).join("") : `<p class="x-muted">${t("rpg_goal_none")}</p>`}</div></div>`;
      } else if (st.tab === "collective") {
        body = `<div class="warning-box x-banner">${t("rpg_coll_note")}</div><div class="x-grid-2">${cfg.challenges.map(c => {
          const mine = Track.count(c.event, "weekly"), total = c.simulatedOthers + mine, claimed = Ledger.has("xp", `challenge:${c.id}:${RPG.periodKey(c)}`);
          const can = mine >= c.minContribution && total >= c.target;
          return `<div class="card"><div class="card-title">${ISI.esc(ISI.L(c, "title"))} ${ISI.chip(t("x_simulated"), "demo")}</div><p class="x-muted">${ISI.esc(ISI.L(c, "desc"))}</p>
            ${ISI.bar(Math.min(100, total / c.target * 100), ISI.L(c, "title"))}<div class="x-muted">${t("rpg_coll_total")}: ${total}/${c.target} · ${t("rpg_coll_you")}: ${mine} · ${t("rpg_coll_need")}: ${c.minContribution}</div>
            <div style="margin-top:8px;">${claimed ? ISI.chip("✓ " + t("rpg_claimed"), "ok") : `<button class="btn btn-sm btn-primary" data-act="claimc" data-id="${c.id}" ${can ? "" : "disabled"}>${t("rpg_claim")} (+${c.xp} XP)</button>`}</div></div>`;
        }).join("")}</div>`;
      } else if (st.tab === "config") {
        const lv = RPG.levels();
        body = `<p class="x-muted">${t("rpg_cfg_intro")}</p>
          <form data-submit="savecfg" novalidate>
            <div class="x-grid-2"><div class="card"><div class="card-title">${t("rpg_cfg_levels")}</div>
              ${lv.map((l, i) => `<div class="x-row between" style="margin-bottom:6px;"><label for="lv${i}">${l.icon} ${ISI.esc(ISI.L(l, "name"))}</label><input id="lv${i}" name="lv${i}" type="number" min="0" max="99999" required value="${l.min}" ${i === 0 ? "readonly" : ""} style="width:110px"></div>`).join("")}</div>
            <div class="card"><div class="card-title">${t("rpg_cfg_rewards")}</div>
              ${cfg.missions.map(m => `<div class="x-row between" style="margin-bottom:6px;"><label for="mx-${m.id}">${ISI.esc(ISI.L(m, "title"))}</label><input id="mx-${m.id}" name="mx-${m.id}" type="number" min="0" max="100" required value="${RPG.missionXp(m)}" style="width:80px"></div>`).join("")}</div></div>
            <div class="x-row"><button class="btn btn-primary" type="submit">${t("rpg_cfg_save")}</button><button class="btn btn-outline" type="button" data-act="cfgdefault">${t("rpg_cfg_reset")}</button></div>
          </form>
          <div class="card-title" style="margin-top:18px;">${t("rpg_data")}</div>
          <div class="x-row"><button class="btn btn-outline" data-act="exportall">⬇ ${t("x_export_all")}</button><button class="btn btn-ghost" data-act="resetall">♻ ${t("x_reset_btn")}</button></div>`;
      }
      return `${ISI.header("rpg_title", "rpg_sub")}${ISI.banner("rpg_banner")}${tabs}${body}`;
    },
    actions(st, api) {
      return {
        tab(el) { st.tab = el.dataset.id; api.refresh(); },
        accept() { Ledger.accept(); api.refresh(); },
        claim(el) {
          const m = cfg.missions.find(x => x.id === el.dataset.id); if (!m) return;
          if (Track.count(m.event, m.period) < m.target) return;
          const r = RPG.claim("mission", m, ISI.L(m, "title"));
          ISI.toast(r.ok ? "⭐" : "ℹ️", r.ok ? t("rpg_claim_ok", { n: RPG.missionXp(m) }) : t("rpg_dup")); api.refresh();
        },
        claimc(el) {
          const c = cfg.challenges.find(x => x.id === el.dataset.id); if (!c) return;
          const mine = Track.count(c.event, "weekly");
          if (mine < c.minContribution || c.simulatedOthers + mine < c.target) return;
          const r = RPG.claim("challenge", c, ISI.L(c, "title"));
          ISI.toast(r.ok ? "⭐" : "ℹ️", r.ok ? t("rpg_claim_ok", { n: c.xp }) : t("rpg_dup")); api.refresh();
        },
        addgoal(form) { const { ok, data } = ISI.readForm(form); if (!ok) return; const g = ISI.store.get("rpg_goals", []); g.unshift({ id: ISI.uid("g"), title: data.title, target: Number(data.target), done: 0 }); ISI.store.set("rpg_goals", g); ISI.toast("🎯", t("x_saved")); api.refresh(); },
        goalplus(el) { const g = ISI.store.get("rpg_goals", []); const x = g.find(y => y.id === el.dataset.id); if (x && x.done < x.target) x.done++; ISI.store.set("rpg_goals", g); api.refresh(); },
        goaldel(el) { ISI.confirm(t("x_delete_confirm"), () => { ISI.store.set("rpg_goals", ISI.store.get("rpg_goals", []).filter(y => y.id !== el.dataset.id)); api.refresh(); }); },
        savecfg(form) {
          const { ok, data } = ISI.readForm(form); if (!ok) return;
          const lv = cfg.levels.map((_, i) => Number(data["lv" + i]));
          if (lv[0] !== 0 || lv.some((v, i) => i > 0 && v <= lv[i - 1])) { ISI.toast("⚠️", t("rpg_cfg_err")); return; }
          const rw = {}; cfg.missions.forEach(m => { rw[m.id] = Number(data["mx-" + m.id]); });
          ISI.store.set("rpg_levels", lv); ISI.store.set("rpg_rewards", rw); ISI.toast("✅", t("x_saved")); api.refresh();
        },
        cfgdefault() { ISI.store.remove("rpg_levels"); ISI.store.remove("rpg_rewards"); api.refresh(); },
        exportall() { ISI.exportAll(); },
        resetall() { ISI.resetModule(["rpg", "ledger", "events"], () => api.refresh()); },
      };
    },
  });
};
