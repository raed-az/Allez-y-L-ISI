// =====================================================
// NAVIGATOR.JS — Smart Campus Navigator
// N'utilise QUE : data/rooms.json, l'emploi du temps et les images
// du bâtiment déjà présentes. Aucune position de salle/couloir inventée :
// l'« itinéraire » est un guide textuel illustratif (bloc → étage → salle).
// =====================================================

ISI.addI18n({
  fr: {
    nav2_title: "Smart Campus Navigator", nav2_sub: "Retrouvez une salle ou un espace du campus de l'ISI.",
    nav2_banner: "Représentation illustrative : le projet ne contient pas de plans détaillés ni de positions exactes (couloirs, escaliers). Les indications ci-dessous reposent uniquement sur le bloc, l'étage et le numéro de salle.",
    nav2_now: "Où dois-je aller maintenant ?", nav2_current: "Séance en cours", nav2_next: "Prochaine séance", nav2_none_tt: "Aucune séance dans votre emploi du temps. Choisissez votre groupe ou importez votre emploi du temps dans Paramètres.",
    nav2_in: "dans", nav2_min: "min", nav2_day: "Jour", nav2_room: "Salle", nav2_block: "Bloc", nav2_floor: "Étage", nav2_number: "N° de salle", nav2_ground: "Rez-de-chaussée",
    nav2_search: "Rechercher une salle (ex. A206) ou un espace", nav2_search_btn: "Chercher", nav2_found: "Résultat", nav2_not_listed: "Cette salle suit la numérotation Bloc/Étage/Salle mais n'est pas répertoriée dans les données du projet.",
    nav2_no_result: "Aucun résultat. Essayez un identifiant comme A206 ou un nom d'espace ajouté ci-dessous.",
    nav2_steps: "Indications (illustratives)", nav2_s_block: "Rendez-vous au bloc {b}.", nav2_s_floor: "Rendez-vous à l'étage {f}.", nav2_s_ground: "Restez au rez-de-chaussée.", nav2_s_room: "Cherchez la salle n° {n} ({id}).",
    nav2_between: "Entre deux séances", nav2_change_block: "Changement de bloc : {a} → {b} ({m} min de pause entre les séances).", nav2_same_block: "Même bloc ({a}), étage {f1} → {f2} ({m} min de pause).",
    nav2_floors: "Étages", nav2_all: "Vue d'ensemble", nav2_floor_rooms: "Salles connues à cet étage (liste, pas un plan)", nav2_no_rooms: "Aucune salle connue à ce niveau dans les données du projet.",
    nav2_images: "Images du campus", nav2_open_room: "Fiche de la salle", nav2_open_explore: "Explorer l'étage",
    nav2_used_for: "Utilisée pour (d'après l'emploi du temps)", nav2_custom: "Espaces ajoutés par vous", nav2_custom_add: "Ajouter un espace", nav2_custom_name: "Nom de l'espace", nav2_custom_cat: "Catégorie (ex. administration, bibliothèque…)", nav2_custom_block: "Bloc (A, B, C…)", nav2_custom_floor: "Étage (0–9)", nav2_custom_none: "Aucun espace ajouté. Les catégories ne sont pas fournies par le projet : ajoutez les vôtres.", nav2_you: "ajouté par vous",
  },
  en: {
    nav2_title: "Smart Campus Navigator", nav2_sub: "Find a room or a space on the ISI campus.",
    nav2_banner: "Illustrative representation: the project contains no detailed plans or exact positions (corridors, stairs). Directions below rely only on block, floor and room number.",
    nav2_now: "Where should I go now?", nav2_current: "Current session", nav2_next: "Next session", nav2_none_tt: "No session in your timetable. Pick your group or import your timetable in Settings.",
    nav2_in: "in", nav2_min: "min", nav2_day: "Day", nav2_room: "Room", nav2_block: "Block", nav2_floor: "Floor", nav2_number: "Room no.", nav2_ground: "Ground floor",
    nav2_search: "Search a room (e.g. A206) or a space", nav2_search_btn: "Search", nav2_found: "Result", nav2_not_listed: "This room follows the Block/Floor/Room numbering but is not listed in the project's data.",
    nav2_no_result: "No result. Try an identifier like A206 or a space name added below.",
    nav2_steps: "Directions (illustrative)", nav2_s_block: "Go to block {b}.", nav2_s_floor: "Go to floor {f}.", nav2_s_ground: "Stay on the ground floor.", nav2_s_room: "Look for room no. {n} ({id}).",
    nav2_between: "Between two sessions", nav2_change_block: "Block change: {a} → {b} ({m} min break between sessions).", nav2_same_block: "Same block ({a}), floor {f1} → {f2} ({m} min break).",
    nav2_floors: "Floors", nav2_all: "Overview", nav2_floor_rooms: "Known rooms on this floor (a list, not a plan)", nav2_no_rooms: "No known room on this level in the project's data.",
    nav2_images: "Campus images", nav2_open_room: "Room page", nav2_open_explore: "Explore floor",
    nav2_used_for: "Used for (from the timetable)", nav2_custom: "Spaces you added", nav2_custom_add: "Add a space", nav2_custom_name: "Space name", nav2_custom_cat: "Category (e.g. administration, library…)", nav2_custom_block: "Block (A, B, C…)", nav2_custom_floor: "Floor (0–9)", nav2_custom_none: "No space added. Categories are not provided by the project: add your own.", nav2_you: "added by you",
  },
  ar: {
    nav2_title: "مرشد الحرم الذكي", nav2_sub: "اعثر على قاعة أو فضاء داخل حرم المعهد.",
    nav2_banner: "تمثيل توضيحي: لا يحتوي المشروع على مخططات مفصلة ولا مواقع دقيقة (الممرات والسلالم). الإرشادات التالية تعتمد فقط على الجناح والطابق ورقم القاعة.",
    nav2_now: "إلى أين أذهب الآن؟", nav2_current: "الحصة الجارية", nav2_next: "الحصة القادمة", nav2_none_tt: "لا توجد حصص في جدولك. اختر مجموعتك أو استورد جدولك من الإعدادات.",
    nav2_in: "بعد", nav2_min: "د", nav2_day: "اليوم", nav2_room: "القاعة", nav2_block: "الجناح", nav2_floor: "الطابق", nav2_number: "رقم القاعة", nav2_ground: "الطابق الأرضي",
    nav2_search: "ابحث عن قاعة (مثل A206) أو فضاء", nav2_search_btn: "بحث", nav2_found: "النتيجة", nav2_not_listed: "هذه القاعة تتبع ترقيم الجناح/الطابق/القاعة لكنها غير مدرجة في بيانات المشروع.",
    nav2_no_result: "لا نتيجة. جرّب معرفا مثل A206 أو اسم فضاء أضفته أدناه.",
    nav2_steps: "إرشادات (توضيحية)", nav2_s_block: "توجه إلى الجناح {b}.", nav2_s_floor: "توجه إلى الطابق {f}.", nav2_s_ground: "ابق في الطابق الأرضي.", nav2_s_room: "ابحث عن القاعة رقم {n} ({id}).",
    nav2_between: "بين حصتين", nav2_change_block: "تغيير الجناح: {a} ← {b} (استراحة {m} د بين الحصتين).", nav2_same_block: "نفس الجناح ({a})، الطابق {f1} ← {f2} (استراحة {m} د).",
    nav2_floors: "الطوابق", nav2_all: "نظرة عامة", nav2_floor_rooms: "القاعات المعروفة في هذا الطابق (قائمة وليست مخططا)", nav2_no_rooms: "لا توجد قاعة معروفة في هذا المستوى ضمن بيانات المشروع.",
    nav2_images: "صور الحرم", nav2_open_room: "صفحة القاعة", nav2_open_explore: "استكشاف الطابق",
    nav2_used_for: "تُستعمل لـ (حسب جدول الأوقات)", nav2_custom: "فضاءات أضفتها", nav2_custom_add: "إضافة فضاء", nav2_custom_name: "اسم الفضاء", nav2_custom_cat: "الفئة (إدارة، مكتبة…)", nav2_custom_block: "الجناح (A, B, C…)", nav2_custom_floor: "الطابق (0–9)", nav2_custom_none: "لم تضف أي فضاء. الفئات غير متوفرة في المشروع: أضف فئاتك.", nav2_you: "أضفته أنت",
  },
});

Pages.navigator = async function (params) {
  const [rooms, sessions] = await Promise.all([Data.rooms(), Data.timetable()]);
  const sx = ISI.state.navigator = ISI.state.navigator || {};
  if (params && params[0]) sx.q = decodeURIComponent(params[0]);

  const floorName = (f) => Number(f) === 0 ? t("nav2_ground") : `${t("nav2_floor")} ${f}`;
  const typesFor = (id) => [...new Set(sessions.filter(s => s.room === id).map(s => s.type))];

  function steps(roomId, block, floor, number) {
    return `<ol class="x-steps"><li>${t("nav2_s_block", { b: ISI.esc(block) })}</li>
      <li>${Number(floor) === 0 ? t("nav2_s_ground") : t("nav2_s_floor", { f: floor })}</li>
      <li>${t("nav2_s_room", { n: ISI.esc(number), id: ISI.esc(roomId) })}</li></ol>`;
  }
  function roomCard(r) {
    const used = typesFor(r.id);
    return `<div class="card"><div class="x-row between"><div class="card-title">🏫 ${ISI.esc(r.id)}</div>${r.custom ? ISI.chip(t("nav2_you"), "demo") : ""}</div>
      <div class="x-muted">${t("nav2_block")} ${ISI.esc(r.block)} · ${floorName(r.floor)}${r.roomNumber ? ` · ${t("nav2_number")} ${ISI.esc(r.roomNumber)}` : ""}</div>
      ${r.category ? `<div>${ISI.chip(ISI.esc(r.category))}</div>` : ""}
      ${used.length ? `<div class="x-muted">${t("nav2_used_for")}: ${used.map(u => ISI.chip(u)).join("")}</div>` : ""}
      ${r.roomNumber ? steps(r.id, r.block, r.floor, r.roomNumber) : ""}
      <div class="x-row">${r.custom ? "" : `<a class="btn btn-sm btn-outline" href="#/rooms/${encodeURIComponent(r.id)}">${t("nav2_open_room")}</a>`}<a class="btn btn-sm btn-outline" href="#/explore/${r.floor === 0 ? "ground" : r.floor}">${t("nav2_open_explore")}</a></div></div>`;
  }

  function nowCard() {
    if (!sessions.length) return `<div class="x-status info">${t("nav2_none_tt")}</div>`;
    const { current, next, nextDayOffset } = Timetable.getCurrentAndNext(sessions);
    const target = current || next; if (!target) return `<div class="x-status info">${t("nav2_none_tt")}</div>`;
    const diff = current ? Timetable.toMinutes(current.end) - Timetable.nowMinutes() : (nextDayOffset === 0 ? Timetable.toMinutes(next.start) - Timetable.nowMinutes() : null);
    const rm = rooms.find(r => r.id === target.room);
    const block = rm ? rm.block : target.block, floor = rm ? rm.floor : target.floor, number = rm ? rm.roomNumber : target.room.slice(2);
    // Séance suivante après la cible (même jour) pour l'indication « entre deux séances »
    const same = sessions.filter(s => s.day === target.day).sort((a, b) => Timetable.toMinutes(a.start) - Timetable.toMinutes(b.start));
    const idx = same.findIndex(s => s.id === target.id), after = same[idx + 1];
    let between = "";
    if (after) {
      const gap = Timetable.toMinutes(after.start) - Timetable.toMinutes(target.end);
      between = `<div class="card-title" style="margin-top:10px;">${t("nav2_between")}</div><p>${target.block !== after.block
        ? t("nav2_change_block", { a: target.block, b: after.block, m: gap })
        : t("nav2_same_block", { a: target.block, f1: target.floor, f2: after.floor, m: gap })}</p>`;
    }
    return `<div class="card"><div class="x-row between"><div><div class="x-muted">${current ? t("nav2_current") : t("nav2_next")}</div>
        <div class="x-big">${ISI.esc(target.subject)}</div>
        <div class="x-muted">${t("day_" + target.day)} ${target.start}–${target.end} · ${ISI.chip(ISI.esc(target.type))}${diff !== null ? ` · ${current ? "⏳" : t("nav2_in")} ${diff} ${t("nav2_min")}` : ""}</div></div>
        <div class="x-big" aria-label="${t("nav2_room")}">🏫 ${ISI.esc(target.room)}</div></div>
        <div class="card-title" style="margin-top:8px;">${t("nav2_steps")}</div>${steps(target.room, block, floor, number)}${between}</div>`;
  }

  function searchResults(q) {
    const customs = ISI.store.get("nav_spaces", []).map(s => ({ id: s.name, block: s.block, floor: s.floor, category: s.category, custom: true, sid: s.id }));
    const all = [...rooms, ...customs];
    const norm = q.trim().toUpperCase(); if (!norm) return "";
    const hits = all.filter(r => r.id.toUpperCase().includes(norm) || (r.category || "").toUpperCase().includes(norm) || (r.block + r.floor).toUpperCase() === norm);
    if (hits.length) return `<div class="x-grid">${hits.map(roomCard).join("")}</div>`;
    const m = RoomsHelper.parseRoomQuery(q);
    if (m) return `<div class="x-status warn">${t("nav2_not_listed")}</div><div class="card"><div class="card-title">🏫 ${ISI.esc(norm)}</div><div class="x-muted">${t("nav2_block")} ${m.block} · ${floorName(m.floor)} · ${t("nav2_number")} ${m.roomNumber}</div>${steps(norm, m.block, m.floor, m.roomNumber)}</div>`;
    return `<div class="x-status info">${t("nav2_no_result")}</div>`;
  }

  return ISI.page("navigator", {
    render(st) {
      st.floor = st.floor || "all";
      st.q = st.q !== undefined ? st.q : (sx.q || "");
      const floors = [["all", "🏢 " + t("nav2_all")], ...BUILDING_FLOORS.map(f => [f.id, f.emoji + " " + (f.num ? `${t(f.labelKey)} ${f.num}` : t(f.labelKey))])];
      const floorId = st.floor === "ground" ? 0 : Number(st.floor);
      const here = st.floor === "all" || st.floor === "roof" ? [] : rooms.filter(r => r.floor === floorId);
      const customs = ISI.store.get("nav_spaces", []);
      return `
        ${ISI.header("nav2_title", "nav2_sub")}
        ${ISI.banner("nav2_banner", "info")}
        <div class="card-title">📍 ${t("nav2_now")}</div>${nowCard()}
        <form data-submit="search" class="x-row" style="margin:14px 0;" role="search">
          <label class="sr-only" for="nav-q">${t("nav2_search")}</label>
          <input id="nav-q" name="q" value="${ISI.esc(st.q)}" placeholder="${t("nav2_search")}" style="flex:1;min-width:200px;padding:11px 13px;border-radius:8px;border:1px solid var(--border-color);background:var(--bg-input);color:var(--text-primary);" maxlength="40">
          <button class="btn btn-primary" type="submit">🔎 ${t("nav2_search_btn")}</button></form>
        ${st.q ? `<div class="card-title">${t("nav2_found")}</div>${searchResults(st.q)}` : ""}
        <div class="card-title" style="margin-top:18px;">${t("nav2_floors")}</div>
        <div class="floor-tabs" role="tablist">${floors.map(([id, l]) => `<button role="tab" aria-selected="${st.floor === id}" class="floor-tab ${st.floor === id ? "active" : ""}" data-act="floor" data-id="${id}">${l}</button>`).join("")}</div>
        <div class="building-image-frame" style="margin-bottom:12px;"><img src="${BUILDING_IMAGES[st.floor === "all" ? "general" : "exploded"]}" alt="${t("nav2_images")}" loading="lazy" /></div>
        ${st.floor === "all" ? `<div class="x-grid">${["exploded", "cutaway", "crosssection"].map(k => `<img src="${BUILDING_IMAGES[k]}" alt="${t("nav2_images")} — ${k}" loading="lazy" style="width:100%;border-radius:10px;">`).join("")}</div>`
          : `<div class="card"><div class="card-title">${t("nav2_floor_rooms")}</div>${here.length ? `<div class="x-floorplan">${here.map(r => `<button class="x-room ${(sx.q || "").toUpperCase() === r.id ? "hl" : ""}" data-act="pick" data-id="${r.id}">${r.id}</button>`).join("")}</div>` : `<p class="x-muted">${t("nav2_no_rooms")}</p>`}</div>`}
        <div class="card" style="margin-top:16px;"><div class="card-title">${t("nav2_custom")}</div>
          <form data-submit="addspace" class="x-field-row" novalidate>
            ${ISI.input("name", "nav2_custom_name", 'required maxlength="40"')}${ISI.input("category", "nav2_custom_cat", 'maxlength="40"')}${ISI.input("block", "nav2_custom_block", 'required maxlength="2"')}${ISI.input("floor", "nav2_custom_floor", 'type="number" min="0" max="9" required', "0")}
            <div class="field" style="align-self:end"><button class="btn btn-secondary" type="submit">${t("nav2_custom_add")}</button></div></form>
          ${customs.length ? customs.map(s => `<div class="x-list-item"><div class="x-main"><div class="x-title">${ISI.esc(s.name)}</div><div class="x-muted">${ISI.esc(s.category || "")} · ${t("nav2_block")} ${ISI.esc(s.block)} · ${floorName(s.floor)}</div></div><div class="x-actions"><button class="btn btn-sm btn-ghost" data-act="delspace" data-id="${s.id}" aria-label="${t("x_delete")}">🗑</button></div></div>`).join("") : `<p class="x-muted">${t("nav2_custom_none")}</p>`}</div>`;
    },
    actions(st, api) {
      return {
        search(form) { st.q = form.q.value.trim(); sx.q = st.q; api.refresh(); },
        floor(el) { st.floor = el.dataset.id; api.refresh(); },
        pick(el) { st.q = el.dataset.id; sx.q = st.q; api.refresh(); window.scrollTo({ top: 0 }); },
        addspace(form) {
          const { ok, data } = ISI.readForm(form); if (!ok) return;
          const l = ISI.store.get("nav_spaces", []); l.unshift({ id: ISI.uid("sp"), name: data.name, category: data.category, block: data.block.toUpperCase(), floor: Number(data.floor) });
          ISI.store.set("nav_spaces", l); ISI.toast("📍", t("x_saved")); api.refresh();
        },
        delspace(el) { ISI.confirm(t("x_delete_confirm"), () => { ISI.store.set("nav_spaces", ISI.store.get("nav_spaces", []).filter(s => s.id !== el.dataset.id)); api.refresh(); }); },
      };
    },
  });
};
