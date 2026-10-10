// Ajoute au tableau de bord existant des raccourcis vers les modules « Campus »
// (enveloppe Pages.dashboard sans le remplacer ni modifier pages.js).
ISI.addI18n({
  fr: { dl_title: "Campus intelligent", dl_xp: "XP local", dl_eco: "EcoPoints", dl_credits: "Crédits" },
  en: { dl_title: "Smart campus", dl_xp: "Local XP", dl_eco: "EcoPoints", dl_credits: "Credits" },
  ar: { dl_title: "الحرم الذكي", dl_xp: "نقاط الخبرة", dl_eco: "النقاط الخضراء", dl_credits: "الرصيد" },
});
(function () {
  const base = Pages.dashboard;
  if (typeof base !== "function") return;
  Pages.dashboard = async function () {
    const html = await base.apply(this, arguments);
    if (typeof html !== "string") return html;
    const links = NAV_ITEMS.filter(i => i.extra);
    return html + `<section class="x-module" style="margin-top:22px;" aria-label="${t("dl_title")}">
      <div class="page-header"><h1 style="font-size:17px;">${t("dl_title")}</h1></div>
      <div class="x-row" style="margin-bottom:10px;">${ISI.chip("⭐ " + t("dl_xp") + " : " + Ledger.balance("xp"))}${ISI.chip("🌿 " + t("dl_eco") + " : " + Ledger.balance("eco"), "eco")}${ISI.chip("🤝 " + t("dl_credits") + " : " + Ledger.balance("credits"))}</div>
      <div class="x-grid" style="grid-template-columns:repeat(auto-fit,minmax(200px,1fr))">${links.map(i => `<a class="card hoverable" href="#/${i.route}" style="text-decoration:none;color:inherit;"><div class="card-icon-tile" aria-hidden="true">${i.icon}</div><div class="card-title">${t(i.key)}</div></a>`).join("")}</div></section>`;
  };
})();
