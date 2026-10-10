// =====================================================
// PULSE.JS — Campus Pulse (fil d'actualités centralisé)
// Sources : (1) data/publications.json (publications du projet),
// (2) exemples de DÉMONSTRATION clairement marqués. Aucun changement de
// cours/salle n'est présenté comme réel.
// =====================================================

ISI.addI18n({
  fr: {
    pu_title: "Campus Pulse", pu_sub: "Actualités, événements, rappels et alertes au même endroit.",
    pu_banner: "Les éléments marqués « Démonstration » sont des exemples fictifs : changements d'horaires, alertes de salle et rappels ne reflètent AUCUNE information réelle. Vérifiez toujours auprès de l'administration. Les notifications sont locales à cet appareil.",
    pu_tab_feed: "Fil", pu_tab_events: "Événements", pu_tab_alerts: "Alertes & rappels", pu_tab_fav: "Favoris",
    pu_kind_news: "Actualité", pu_kind_event: "Événement", pu_kind_reminder: "Rappel", pu_kind_schedule: "Changement d'emploi du temps", pu_kind_room: "Alerte de salle", pu_kind_publication: "Publication",
    pu_unread: "Non lu", pu_read: "Lu", pu_mark_read: "Marquer comme lu", pu_mark_all: "Tout marquer comme lu", pu_only_unread: "Non lus seulement", pu_f_type: "Type", pu_f_subject: "Matière", pu_f_group: "Groupe", pu_none: "Aucun élément.",
    pu_demo_tag: "Démonstration — non confirmé", pu_real_tag: "Publication du projet", pu_upcoming: "Événements à venir", pu_open_cal: "Ouvrir le calendrier universitaire", pu_open_notifs: "Notifications locales (page dédiée)", pu_in_days: "dans {n} j", pu_today: "aujourd'hui", pu_past: "passé",
    pu_alerts_note: "Alertes et rappels non lus (démonstration).", pu_unread_n: "{n} non lu(s)",
  },
  en: {
    pu_title: "Campus Pulse", pu_sub: "News, events, reminders and alerts in one place.",
    pu_banner: "Items tagged “Demo” are fictional examples: schedule changes, room alerts and reminders reflect NO real information. Always check with the administration. Notifications are local to this device.",
    pu_tab_feed: "Feed", pu_tab_events: "Events", pu_tab_alerts: "Alerts & reminders", pu_tab_fav: "Favourites",
    pu_kind_news: "News", pu_kind_event: "Event", pu_kind_reminder: "Reminder", pu_kind_schedule: "Timetable change", pu_kind_room: "Room alert", pu_kind_publication: "Publication",
    pu_unread: "Unread", pu_read: "Read", pu_mark_read: "Mark as read", pu_mark_all: "Mark all as read", pu_only_unread: "Unread only", pu_f_type: "Type", pu_f_subject: "Subject", pu_f_group: "Group", pu_none: "No item.",
    pu_demo_tag: "Demo — unconfirmed", pu_real_tag: "Project publication", pu_upcoming: "Upcoming events", pu_open_cal: "Open the university calendar", pu_open_notifs: "Local notifications (dedicated page)", pu_in_days: "in {n} d", pu_today: "today", pu_past: "past",
    pu_alerts_note: "Unread alerts and reminders (demo).", pu_unread_n: "{n} unread",
  },
  ar: {
    pu_title: "نبض الحرم", pu_sub: "الأخبار والأحداث والتذكيرات والتنبيهات في مكان واحد.",
    pu_banner: "العناصر الموسومة «تجريبي» أمثلة وهمية: تغييرات التوقيت وتنبيهات القاعات والتذكيرات لا تعكس أي معلومة حقيقية. تحقق دائما لدى الإدارة. الإشعارات محلية في هذا الجهاز.",
    pu_tab_feed: "الخلاصة", pu_tab_events: "الأحداث", pu_tab_alerts: "التنبيهات والتذكيرات", pu_tab_fav: "المفضلة",
    pu_kind_news: "خبر", pu_kind_event: "حدث", pu_kind_reminder: "تذكير", pu_kind_schedule: "تغيير في الجدول", pu_kind_room: "تنبيه قاعة", pu_kind_publication: "منشور",
    pu_unread: "غير مقروء", pu_read: "مقروء", pu_mark_read: "تعليم كمقروء", pu_mark_all: "تعليم الكل كمقروء", pu_only_unread: "غير المقروءة فقط", pu_f_type: "النوع", pu_f_subject: "المادة", pu_f_group: "المجموعة", pu_none: "لا توجد عناصر.",
    pu_demo_tag: "تجريبي — غير مؤكد", pu_real_tag: "منشور المشروع", pu_upcoming: "الأحداث القادمة", pu_open_cal: "فتح التقويم الجامعي", pu_open_notifs: "الإشعارات المحلية (صفحة مخصصة)", pu_in_days: "بعد {n} ي", pu_today: "اليوم", pu_past: "منتهٍ",
    pu_alerts_note: "تنبيهات وتذكيرات غير مقروءة (تجريبية).", pu_unread_n: "{n} غير مقروء",
  },
});

Pages.pulse = async function () {
  const [demo, pubs] = await Promise.all([ISI.demo("pulse"), Data.publications()]);
  const subjects = [...new Set(demo.items.map(i => i.subject).filter(Boolean))];
  const day = 86400000;
  const all = () => [
    ...pubs.map(p => ({ id: "pub-" + p.id, kind: "publication", date: new Date(p.date).getTime(), title: ISI.L(p, "title"), body: ISI.L(p, "content"), subject: "", group: "", demo: false, cat: p.category })),
    ...demo.items.map(i => ({ id: i.id, kind: i.kind, date: new Date(new Date().setHours(9, 0, 0, 0)).getTime() + i.daysFromNow * day, title: ISI.L(i, "title"), body: ISI.L(i, "body"), subject: i.subject, group: i.group, demo: true })),
  ].sort((a, b) => b.date - a.date);
  const read = () => ISI.store.get("pu_read", {}); const favs = () => ISI.store.get("pu_favs", []);
  const group = Storage.getGroup();

  const item = (x) => {
    const isRead = !!read()[x.id], fav = favs().includes(x.id);
    return `<div class="x-list-item" ${isRead ? 'style="opacity:.75"' : ""}><div class="x-main"><div class="x-title">${isRead ? "" : "● "}${ISI.esc(x.title)}</div>
      <div>${ISI.chip(t("pu_kind_" + x.kind))}${x.subject ? ISI.chip(ISI.esc(x.subject)) : ""}${x.group ? ISI.chip(ISI.esc(x.group)) : ""}${x.demo ? ISI.chip("🧪 " + t("pu_demo_tag"), "warn") : ISI.chip(t("pu_real_tag"), "ok")}${isRead ? "" : ISI.chip(t("pu_unread"), "bad")}</div>
      <p style="margin:6px 0;">${ISI.esc(x.body)}</p><div class="x-muted">${ISI.fmtDate(x.date)}</div></div>
      <div class="x-actions"><button class="x-icon-btn x-star ${fav ? "on" : ""}" data-act="fav" data-id="${x.id}" aria-pressed="${fav}" aria-label="${t("sk_fav")}">${fav ? "★" : "☆"}</button>
      ${isRead ? "" : `<button class="btn btn-sm btn-outline" data-act="markread" data-id="${x.id}">${t("pu_mark_read")}</button>`}</div></div>`;
  };

  return ISI.page("pulse", {
    render(st) {
      st.tab = st.tab || "feed"; st.f = st.f || { kind: "", subject: "", group: "", unread: false };
      const items = all(); const unreadN = items.filter(i => !read()[i.id]).length;
      const tabs = ISI.tabs([["feed", `${t("pu_tab_feed")} (${unreadN})`], ["events", t("pu_tab_events")], ["alerts", t("pu_tab_alerts")], ["fav", t("pu_tab_fav")]], st.tab);
      let list = items, body = "";
      if (st.tab === "events") list = items.filter(i => i.kind === "event").sort((a, b) => a.date - b.date);
      else if (st.tab === "alerts") list = items.filter(i => ["reminder", "schedule", "room"].includes(i.kind));
      else if (st.tab === "fav") list = items.filter(i => favs().includes(i.id));
      const f = st.f;
      list = list.filter(i => (!f.kind || i.kind === f.kind) && (!f.subject || i.subject === f.subject) && (!f.group || !i.group || i.group === f.group) && (!f.unread || !read()[i.id]));
      const filters = `<div class="card" style="margin-bottom:14px;"><div class="x-field-row">
        ${ISI.select("fk", "pu_f_type", [["", t("x_all")], ...["news", "event", "reminder", "schedule", "room", "publication"].map(k => [k, t("pu_kind_" + k)])], f.kind, 'data-on="fkind"')}
        ${ISI.select("fs", "pu_f_subject", [["", t("x_all")], ...subjects.map(s => [s, s])], f.subject, 'data-on="fsub"')}
        ${ISI.select("fg", "pu_f_group", [["", t("x_all")], ...(group ? [[group, group]] : [["G2", "G2"]])], f.group, 'data-on="fgrp"')}
        <div class="field" style="align-self:end"><label><input type="checkbox" data-on="funread" ${f.unread ? "checked" : ""}> ${t("pu_only_unread")}</label></div></div></div>`;
      if (st.tab === "events") body = `<div class="card-title">${t("pu_upcoming")}</div>`;
      if (st.tab === "alerts") body = `<p class="x-muted">${t("pu_alerts_note")} ${t("pu_unread_n", { n: items.filter(i => ["reminder", "schedule", "room"].includes(i.kind) && !read()[i.id]).length })}</p>`;
      return `${ISI.header("pu_title", "pu_sub")}${ISI.banner("pu_banner")}
        <div class="x-row" style="margin-bottom:10px;"><a class="btn btn-sm btn-outline" href="#/calendar">📆 ${t("pu_open_cal")}</a><a class="btn btn-sm btn-outline" href="#/notifications">🔔 ${t("pu_open_notifs")}</a><button class="btn btn-sm btn-secondary" data-act="markall">${t("pu_mark_all")}</button></div>
        ${tabs}${filters}${body}<div class="card">${list.length ? list.map(item).join("") : `<p class="x-muted">${t("pu_none")}</p>`}</div>`;
    },
    actions(st, api) {
      return {
        tab(el) { st.tab = el.dataset.id; api.refresh(); },
        fkind(el) { st.f.kind = el.value; api.refresh(); }, fsub(el) { st.f.subject = el.value; api.refresh(); }, fgrp(el) { st.f.group = el.value; api.refresh(); }, funread(el) { st.f.unread = el.checked; api.refresh(); },
        markread(el) { const r = read(); if (!r[el.dataset.id]) { r[el.dataset.id] = Date.now(); ISI.store.set("pu_read", r); Track.add("read"); } api.refresh(); },
        markall() { const r = read(); all().forEach(i => { if (!r[i.id]) r[i.id] = Date.now(); }); ISI.store.set("pu_read", r); api.refresh(); },
        fav(el) { const f = favs(); const i = f.indexOf(el.dataset.id); if (i >= 0) f.splice(i, 1); else f.push(el.dataset.id); ISI.store.set("pu_favs", f); api.refresh(); },
      };
    },
  });
};
