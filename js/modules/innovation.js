// =====================================================
// INNOVATION.JS — ISI Innovation Lab
// Votes, statuts et équipes sont LOCAUX/SIMULÉS : ils ne représentent aucune
// consultation officielle de l'ISI.
// =====================================================

ISI.addI18n({
  fr: {
    in_title: "ISI Innovation Lab", in_sub: "Proposez des améliorations pour le campus et la vie universitaire.",
    in_banner: "Les votes, statuts (y compris les refus justifiés) et équipes sont simulés et locaux à cet appareil : ils ne représentent PAS les résultats d'une consultation officielle de l'ISI. Les idées d'exemple sont fictives.",
    in_tab_ideas: "Idées", in_tab_popular: "Populaires", in_tab_gallery: "Galerie", in_tab_mine: "Mes idées", in_tab_fav: "Favoris",
    in_new: "Déposer une idée", in_cat: "Catégorie", in_c_campus: "Campus", in_c_pedagogy: "Pédagogie", in_c_ecology: "Écologie", in_c_digital: "Numérique", in_c_social: "Vie sociale", in_c_other: "Autre",
    in_st_new: "Nouvelle idée", in_st_to_study: "À étudier", in_st_discussion: "En discussion", in_st_accepted: "Acceptée", in_st_in_progress: "En cours de réalisation", in_st_done: "Réalisée", in_st_refused: "Refusée", in_status: "Statut (simulé)",
    in_votes: "votes (locaux/simulés)", in_vote: "Voter", in_unvote: "Retirer mon vote", in_comments: "Commentaires locaux", in_comment_add: "Commenter", in_comment_ph: "Votre commentaire", in_team: "Équipe (simulée)", in_join: "Rejoindre l'équipe", in_leave: "Quitter l'équipe", in_members: "membre(s)",
    in_progress: "Avancement", in_none: "Aucune idée.", in_just: "Justification (simulée)", in_just_req: "Justification obligatoire pour un refus.", in_gallery_note: "Projets réalisés et idées les plus soutenues (données de démonstration).", in_done_gallery: "Projets réalisés", in_top_gallery: "Les plus soutenues",
    in_sim_decision: "Simuler une décision", in_f_q: "Recherche", in_f_status: "Statut", in_by: "par",
  },
  en: {
    in_title: "ISI Innovation Lab", in_sub: "Suggest improvements for the campus and university life.",
    in_banner: "Votes, statuses (including justified refusals) and teams are simulated and local to this device: they do NOT represent results of an official ISI consultation. Sample ideas are fictional.",
    in_tab_ideas: "Ideas", in_tab_popular: "Popular", in_tab_gallery: "Gallery", in_tab_mine: "My ideas", in_tab_fav: "Favourites",
    in_new: "Submit an idea", in_cat: "Category", in_c_campus: "Campus", in_c_pedagogy: "Teaching", in_c_ecology: "Ecology", in_c_digital: "Digital", in_c_social: "Social life", in_c_other: "Other",
    in_st_new: "New idea", in_st_to_study: "To study", in_st_discussion: "In discussion", in_st_accepted: "Accepted", in_st_in_progress: "In progress", in_st_done: "Done", in_st_refused: "Refused", in_status: "Status (simulated)",
    in_votes: "votes (local/simulated)", in_vote: "Vote", in_unvote: "Remove my vote", in_comments: "Local comments", in_comment_add: "Comment", in_comment_ph: "Your comment", in_team: "Team (simulated)", in_join: "Join the team", in_leave: "Leave the team", in_members: "member(s)",
    in_progress: "Progress", in_none: "No idea.", in_just: "Justification (simulated)", in_just_req: "A justification is required for a refusal.", in_gallery_note: "Completed projects and most supported ideas (demo data).", in_done_gallery: "Completed projects", in_top_gallery: "Most supported",
    in_sim_decision: "Simulate a decision", in_f_q: "Search", in_f_status: "Status", in_by: "by",
  },
  ar: {
    in_title: "مختبر الابتكار ISI", in_sub: "اقترح تحسينات للحرم والحياة الجامعية.",
    in_banner: "التصويتات والحالات (بما فيها الرفض المبرر) والفرق محاكاة ومحلية في هذا الجهاز: لا تمثل نتائج استشارة رسمية للمعهد. الأفكار النموذجية وهمية.",
    in_tab_ideas: "الأفكار", in_tab_popular: "الأكثر شعبية", in_tab_gallery: "المعرض", in_tab_mine: "أفكاري", in_tab_fav: "المفضلة",
    in_new: "تقديم فكرة", in_cat: "الفئة", in_c_campus: "الحرم", in_c_pedagogy: "البيداغوجيا", in_c_ecology: "البيئة", in_c_digital: "الرقمنة", in_c_social: "الحياة الاجتماعية", in_c_other: "أخرى",
    in_st_new: "فكرة جديدة", in_st_to_study: "للدراسة", in_st_discussion: "قيد النقاش", in_st_accepted: "مقبولة", in_st_in_progress: "قيد الإنجاز", in_st_done: "منجزة", in_st_refused: "مرفوضة", in_status: "الحالة (محاكاة)",
    in_votes: "أصوات (محلية/محاكاة)", in_vote: "صوّت", in_unvote: "سحب صوتي", in_comments: "تعليقات محلية", in_comment_add: "تعليق", in_comment_ph: "تعليقك", in_team: "الفريق (محاكاة)", in_join: "الانضمام للفريق", in_leave: "مغادرة الفريق", in_members: "عضو",
    in_progress: "التقدم", in_none: "لا توجد أفكار.", in_just: "التبرير (محاكاة)", in_just_req: "التبرير إجباري عند الرفض.", in_gallery_note: "مشاريع منجزة وأكثر الأفكار دعما (بيانات تجريبية).", in_done_gallery: "المشاريع المنجزة", in_top_gallery: "الأكثر دعما",
    in_sim_decision: "محاكاة قرار", in_f_q: "بحث", in_f_status: "الحالة", in_by: "من",
  },
});

Pages.innovation = async function () {
  const demo = await ISI.demo("innovation"); const me = ISI.me();
  await ISI.seed("in_ideas", async () => demo.ideas.map(i => ({ ...i, createdAt: Date.now() - i.daysAgo * 86400000, authorId: "demo" })));
  const I = () => ISI.store.get("in_ideas", []), setI = (v) => ISI.store.set("in_ideas", v);
  const myVotes = () => ISI.store.get("in_votes", {}), favs = () => ISI.store.get("in_favs", []);
  const CATS = ["campus", "pedagogy", "ecology", "digital", "social", "other"], STS = ["new", "to_study", "discussion", "accepted", "in_progress", "done", "refused"];
  const txt = (i, f) => i.demo ? ISI.L(i, f) : (i[f] || "");
  const total = (i) => i.votes + (myVotes()[i.id] ? 1 : 0);
  const check = (s) => { if (ISI.hasPrivateInfo(s)) { ISI.toast("🔒", t("x_err_private")); return false; } return true; };

  const card = (i, st, compact) => {
    const mine = i.authorId === me.id, voted = !!myVotes()[i.id], inTeam = (i.team || []).includes(me.id), fav = favs().includes(i.id);
    return `<div class="card" style="margin-bottom:12px;"><div class="x-row between"><div class="card-title">💡 ${ISI.esc(txt(i, "title"))}</div><button class="x-icon-btn x-star ${fav ? "on" : ""}" data-act="fav" data-id="${i.id}" aria-pressed="${fav}" aria-label="${t("sk_fav")}">${fav ? "★" : "☆"}</button></div>
      <div>${ISI.chip(t("in_c_" + i.category))}${ISI.chip(t("in_st_" + i.status), i.status === "done" || i.status === "accepted" ? "ok" : i.status === "refused" ? "bad" : "warn")}${i.demo ? ISI.chip(t("x_fictive"), "demo") : ""}${ISI.chip(t("x_simulated"), "demo")}</div>
      <p>${ISI.esc(txt(i, "desc"))}</p><div class="x-muted">${t("in_by")} ${ISI.esc(mine ? me.name : i.authorName)} · ${ISI.fmtDate(i.createdAt)}</div>
      ${i.status === "refused" && (i.justification_fr || i.justification) ? `<div class="x-status bad"><strong>${t("in_just")} :</strong> ${ISI.esc(i.demo ? ISI.L(i, "justification") : i.justification)}</div>` : ""}
      ${["in_progress", "done", "accepted"].includes(i.status) ? `<div class="x-muted">${t("in_progress")}</div>${ISI.bar(i.progress || 0, t("in_progress"))}` : ""}
      <div class="x-row" style="margin-top:8px;"><button class="btn btn-sm ${voted ? "btn-outline" : "btn-primary"}" data-act="vote" data-id="${i.id}" aria-pressed="${voted}">👍 ${voted ? t("in_unvote") : t("in_vote")}</button><strong>${total(i)}</strong><span class="x-muted">${t("in_votes")}</span>
        <button class="btn btn-sm btn-outline" data-act="team" data-id="${i.id}">${inTeam ? t("in_leave") : t("in_join")}</button><span class="x-muted">${t("in_team")} : ${(i.team || []).length} ${t("in_members")}</span>
        ${mine ? `<button class="btn btn-sm btn-secondary" data-act="decide" data-id="${i.id}">🧪 ${t("in_sim_decision")}</button><button class="btn btn-sm btn-ghost" data-act="del" data-id="${i.id}" aria-label="${t("x_delete")}">🗑</button>` : ""}</div>
      ${compact ? "" : `<details style="margin-top:8px;"><summary>${t("in_comments")} (${(i.comments || []).length})</summary>${(i.comments || []).map(c => `<div class="x-muted">💬 <strong>${ISI.esc(c.who)}</strong> : ${ISI.esc(c.text)}</div>`).join("")}
        <form data-submit="comment" data-id="${i.id}" class="x-row" novalidate><input name="text" required minlength="2" maxlength="150" placeholder="${t("in_comment_ph")}" aria-label="${t("in_comment_ph")}" style="flex:1;min-width:160px;"><button class="btn btn-sm btn-secondary" type="submit">${t("in_comment_add")}</button></form></details>`}</div>`;
  };

  return ISI.page("innovation", {
    render(st) {
      st.tab = st.tab || "ideas"; st.f = st.f || { q: "", cat: "", status: "" };
      const f = st.f, q = f.q.toLowerCase(); let list = I().slice();
      if (st.tab === "mine") list = list.filter(i => i.authorId === me.id); else if (st.tab === "fav") list = list.filter(i => favs().includes(i.id));
      list = list.filter(i => (!f.cat || i.category === f.cat) && (!f.status || i.status === f.status) && (!q || `${txt(i, "title")} ${txt(i, "desc")}`.toLowerCase().includes(q)));
      if (st.tab === "popular") list.sort((a, b) => total(b) - total(a)); else list.sort((a, b) => b.createdAt - a.createdAt);
      const tabs = ISI.tabs(["ideas", "popular", "gallery", "mine", "fav"].map(k => [k, t("in_tab_" + k)]), st.tab);
      let body;
      if (st.tab === "gallery") {
        const done = I().filter(i => i.status === "done"), top = I().slice().sort((a, b) => total(b) - total(a)).slice(0, 3);
        body = `<p class="x-muted">${t("in_gallery_note")}</p><div class="card-title">🏁 ${t("in_done_gallery")}</div>${done.map(i => card(i, st, true)).join("") || `<p class="x-muted">${t("in_none")}</p>`}<div class="card-title">⭐ ${t("in_top_gallery")}</div>${top.map(i => card(i, st, true)).join("")}`;
      } else {
        body = `${st.tab === "ideas" ? `<div class="card" style="margin-bottom:14px;"><div class="card-title">✍ ${t("in_new")}</div><form data-submit="add" novalidate>${ISI.input("title", "x_title", 'required minlength="4" maxlength="80"')}${ISI.textarea("desc", "x_description", 'required minlength="10" maxlength="400"')}${ISI.select("category", "in_cat", CATS.map(c => [c, t("in_c_" + c)]), "campus")}<button class="btn btn-primary" type="submit">${t("x_add")}</button></form></div>` : ""}
          <div class="card" style="margin-bottom:14px;"><div class="x-field-row"><div class="field"><label for="inq">${t("in_f_q")}</label><input id="inq" data-on="fq" value="${ISI.esc(f.q)}" maxlength="40"></div>${ISI.select("fc", "in_cat", [["", t("x_all")], ...CATS.map(c => [c, t("in_c_" + c)])], f.cat, 'data-on="fcat"')}${ISI.select("fs", "in_f_status", [["", t("x_all")], ...STS.map(s => [s, t("in_st_" + s)])], f.status, 'data-on="fstat"')}</div></div>
          ${list.length ? list.map(i => card(i, st)).join("") : `<p class="x-muted">${t("in_none")}</p>`}`;
      }
      return `${ISI.header("in_title", "in_sub")}${ISI.banner("in_banner")}${tabs}${body}<div style="margin-top:14px;"><button class="btn btn-ghost btn-sm" data-act="reset">♻ ${t("x_reset_btn")}</button></div>`;
    },
    actions(st, api) {
      const upd = (id, fn) => { const l = I(); const i = l.find(x => x.id === id); if (i) fn(i); setI(l); api.refresh(); };
      return {
        tab(el) { st.tab = el.dataset.id; api.refresh(); },
        fq(el) { st.f.q = el.value; const p = el.selectionStart; api.refresh(); const n = document.getElementById("inq"); if (n) { n.focus(); n.setSelectionRange(p, p); } },
        fcat(el) { st.f.cat = el.value; api.refresh(); }, fstat(el) { st.f.status = el.value; api.refresh(); },
        add(form) { const { ok, data } = ISI.readForm(form); if (!ok || !check(data.title + data.desc)) return; const l = I(); l.unshift({ id: ISI.uid("in"), title: data.title, desc: data.desc, category: data.category, status: "new", votes: 0, team: [me.id], progress: 0, comments: [], authorId: me.id, authorName: me.name, createdAt: Date.now() }); setI(l); Track.add("post"); ISI.toast("💡", t("x_saved")); st.tab = "mine"; api.refresh(); },
        vote(el) { const v = myVotes(), id = el.dataset.id; if (v[id]) delete v[id]; else { v[id] = true; const ever = ISI.store.get("in_voted_ever", {}); if (!ever[id]) { ever[id] = 1; ISI.store.set("in_voted_ever", ever); Track.add("vote"); } } ISI.store.set("in_votes", v); api.refresh(); },
        fav(el) { const f = favs(), i = f.indexOf(el.dataset.id); if (i >= 0) f.splice(i, 1); else f.push(el.dataset.id); ISI.store.set("in_favs", f); api.refresh(); },
        team(el) { upd(el.dataset.id, i => { i.team = i.team || []; const k = i.team.indexOf(me.id); if (k >= 0) i.team.splice(k, 1); else i.team.push(me.id); }); },
        comment(form) { const { ok, data } = ISI.readForm(form); if (!ok || !check(data.text)) return; upd(form.dataset.id, i => { (i.comments = i.comments || []).push({ who: me.name, text: data.text }); }); },
        del(el) { ISI.confirm(t("x_delete_confirm"), () => { setI(I().filter(i => i.id !== el.dataset.id)); ISI.toast("🗑", t("x_deleted")); api.refresh(); }); },
        decide(el) {
          const id = el.dataset.id, i = I().find(x => x.id === id); if (!i) return;
          ISI.formModal(t("in_sim_decision"), `${ISI.select("status", "in_status", STS.map(s => [s, t("in_st_" + s)]), i.status)}${ISI.input("progress", "in_progress", 'type="number" min="0" max="100" required', i.progress || 0)}${ISI.textarea("just", "in_just", 'maxlength="200"', i.justification || "")}`, (d) => {
            if (d.status === "refused" && d.just.length < 5) { ISI.toast("⚠️", t("in_just_req")); return false; }
            upd(id, x => { x.status = d.status; x.progress = Number(d.progress); x.justification = d.status === "refused" ? d.just : ""; });
          });
        },
        reset() { ISI.resetModule(["in"], () => location.reload()); },
      };
    },
  });
};
