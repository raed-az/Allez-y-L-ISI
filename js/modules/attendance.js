// =====================================================
// ATTENDANCE.JS — Smart Attendance (QR dynamique, SIMULATION locale)
//
// ⚠ Limites assumées et affichées dans l'interface :
//  - un QR renouvelé toutes les 30 s ne prouve PAS la présence physique
//    (le code peut être partagé pendant sa validité) ;
//  - la validation est locale (même navigateur) : ce n'est pas une preuve.
// Architecture : toute la logique passe par `AttendanceBackend`.
// Pour un vrai système, remplacer LocalAttendanceBackend par un
// RemoteAttendanceBackend (voir docs/BACKEND.md) sans toucher à l'UI.
// =====================================================

const ATT_TOKEN_TTL_MS = 30000;

// ---------- Adaptateur de backend (local aujourd'hui, distant demain) ----------
const LocalAttendanceBackend = {
  sessions() { return ISI.store.get("att_sessions", []); },
  save(list) { ISI.store.set("att_sessions", list.slice(0, 60)); },
  get(id) { return this.sessions().find(s => s.id === id) || null; },
  update(id, fn) {
    const l = this.sessions(); const s = l.find(x => x.id === id);
    if (s) { fn(s); this.save(l); }
    return s;
  },
  _sig(secret, sid, exp, nonce) {
    let h = 0x811c9dc5; const s = `${secret}|${sid}|${exp}|${nonce}`;
    for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193); }
    return (h >>> 0).toString(36);
  },
  // Délivre un jeton valide ATT_TOKEN_TTL_MS (30 s). Côté serveur réel : signature HMAC/JWT côté serveur.
  issueToken(sid, now = Date.now()) {
    const s = this.get(sid); if (!s) return null;
    const exp = now + ATT_TOKEN_TTL_MS;
    const nonce = Math.random().toString(36).slice(2, 8);
    return { token: `ISI1|${sid}|${exp}|${nonce}|${this._sig(s.secret, sid, exp, nonce)}`, exp };
  },
  // Retourne { ok, code, session?, record? } — `code` = clé de raison stable (i18n att_r_<code>)
  verifyAndRecord(token, student, expectedSlot, now = Date.now()) {
    const parts = String(token || "").trim().split("|");
    if (parts.length !== 5 || parts[0] !== "ISI1") return { ok: false, code: "format" };
    const [, sid, expS, nonce, sig] = parts; const exp = Number(expS);
    const s = this.get(sid);
    if (!s) return { ok: false, code: "unknown" };
    const fail = (code) => { this.update(sid, x => { x.refused.unshift({ ts: now, code, studentId: student.id, name: student.name }); x.refused = x.refused.slice(0, 80); }); return { ok: false, code, session: s }; };
    if (!exp || this._sig(s.secret, sid, exp, nonce) !== sig) return fail("forged");
    if (s.status === "closed") return fail("closed");
    if (s.status === "paused") return fail("paused");
    if (s.status !== "open") return fail("inactive");
    if (expectedSlot && String(expectedSlot) !== String(s.slotRef)) return fail("otherSession");
    if (now > exp) return fail("expired");
    if (s.records.some(r => r.studentId === student.id)) return fail("duplicate");
    const late = now - s.startTs > (s.lateAfterMin || 10) * 60000;
    const rec = { studentId: student.id, name: student.name, ts: now, status: late ? "late" : "present", source: "scan" };
    this.update(sid, x => x.records.push(rec));
    return { ok: true, code: late ? "late" : "present", session: s, record: rec };
  },
};
const AttendanceBackend = LocalAttendanceBackend; // ← point d'extension (voir docs/BACKEND.md)

// ---------- i18n ----------
ISI.addI18n({
  fr: {
    att_title: "Smart Attendance", att_sub: "Appel par QR code dynamique (renouvelé toutes les 30 s) — démonstration locale.",
    att_banner: "SIMULATION : un QR code renouvelé toutes les 30 s ne garantit pas la présence physique (il peut être partagé pendant sa validité). Les validations de cette page sont locales à ce navigateur, sans valeur de preuve officielle. Les étudiants listés sont fictifs.",
    att_tab_teacher: "Espace professeur", att_tab_student: "Espace étudiant",
    att_new: "Nouvelle séance", att_slot: "Séance de l'emploi du temps", att_demo_slot: "Séance de démonstration (hors emploi du temps)",
    att_late_after: "Retard après (min)", att_create: "Créer la séance", att_sessions: "Séances", att_none: "Aucune séance. Créez-en une pour commencer.",
    att_start: "Démarrer l'appel", att_pause: "Suspendre", att_resume: "Reprendre", att_end: "Terminer la séance", att_end_confirm: "Terminer la séance ? Les étudiants sans présence seront considérés absents (simulation).",
    att_state_inactive: "Séance inactive", att_state_open: "Séance ouverte", att_state_paused: "Séance suspendue", att_state_closed: "Séance terminée", att_state_expired: "Code expiré — renouvellement…",
    att_code_valid: "Code valide encore", att_seconds: "s", att_present: "Présents", att_absent: "Absents", att_late: "En retard",
    att_roster: "Liste des présences (simulée)", att_student: "Étudiant", att_status: "Statut", att_time: "Heure", att_source: "Origine", att_justif: "Justification (simulée)",
    att_src_scan: "scan", att_src_manual: "correction manuelle", att_src_sim: "scan simulé", att_src_none: "—",
    att_sim_scan: "Simuler le scan d'un étudiant fictif", att_sim_none: "Tous les étudiants fictifs sont déjà enregistrés.",
    att_refused: "Tentatives refusées", att_refused_none: "Aucune tentative refusée.", att_export: "Exporter en CSV", att_delete_session: "Supprimer la séance",
    att_justif_ph: "Motif administratif (simulé)", att_justif_save: "OK", att_you: "vous",
    att_qr_hidden: "QR code masqué (séance non ouverte).", att_qr_alt: "QR code de présence — valide 30 secondes", att_token_copy: "Code texte (secours)",
    att_st_course: "Séance concernée", att_st_pick: "Ma séance", att_st_scan_open: "Ouvrir le scanner", att_st_scan_close: "Fermer le scanner",
    att_st_scanning: "Pointez la caméra vers le QR code affiché par le professeur.",
    att_st_fallback: "Mode de secours", att_st_manual_ph: "Collez le code texte du QR…", att_st_manual_btn: "Valider le code", att_st_upload: "Lire une image de QR code",
    att_st_same: "Démo (même appareil) : scanner le QR courant", att_st_same_none: "Aucun QR actif sur cet appareil. Ouvrez une séance côté professeur.",
    att_hist: "Mon historique (simulé)", att_hist_none: "Aucun historique.", att_hist_late_n: "Retards", att_hist_abs_n: "Absences (simulées)",
    att_cam_unsupported: "Votre appareil ou navigateur ne permet pas l'accès à la caméra. Utilisez le mode de secours ci-dessous.",
    att_cam_insecure: "La caméra exige une connexion sécurisée (HTTPS ou localhost). Utilisez le mode de secours.",
    att_cam_denied: "Permission caméra refusée. Autorisez la caméra dans les réglages du navigateur, puis réessayez — ou utilisez le mode de secours.",
    att_cam_nocam: "Aucune caméra détectée sur cet appareil.", att_cam_busy: "La caméra est utilisée par une autre application.", att_cam_other: "Impossible d'ouvrir la caméra.",
    att_nojsqr: "Lecteur QR indisponible.", att_img_noqr: "Aucun QR code lisible dans cette image.",
    att_ok_present: "✅ Présence enregistrée", att_ok_late: "⏰ Présence enregistrée (en retard)",
    att_r_format: "❌ Scan refusé : ce QR code n'est pas un code de présence valide.",
    att_r_unknown: "❌ Scan refusé : séance inconnue sur cet appareil (la démonstration ne fonctionne qu'avec la séance du même navigateur — un backend serait nécessaire pour valider entre appareils).",
    att_r_forged: "❌ Scan refusé : code invalide ou modifié.", att_r_closed: "❌ Scan refusé : la séance est terminée.", att_r_paused: "❌ Scan refusé : la séance est suspendue.",
    att_r_inactive: "❌ Scan refusé : séance inactive (appel non démarré).", att_r_otherSession: "❌ Scan refusé : ce code appartient à une autre séance que la vôtre.",
    att_r_expired: "❌ Scan refusé : code expiré (validité 30 s). Scannez le nouveau code.", att_r_duplicate: "❌ Scan refusé : votre présence est déjà enregistrée pour cette séance.",
    att_arch_title: "Pour passer à un vrai système", att_arch: "Authentification fiable, jetons signés et expirés côté serveur, enregistrement partagé, détection de partage de code (géolocalisation/réseau, avec respect de la vie privée). Voir docs/BACKEND.md.",
    att_st_pres: "Présent", att_st_abs: "Absent", att_st_lat: "En retard", att_no_session_open: "Aucune séance ouverte", att_pick_demo: "Séance de démonstration",
  },
  en: {
    att_title: "Smart Attendance", att_sub: "Attendance via dynamic QR code (renewed every 30 s) — local demo.",
    att_banner: "SIMULATION: a QR code renewed every 30 s does not guarantee physical presence (it can be shared while valid). Validations on this page are local to this browser and carry no official proof value. Listed students are fictional.",
    att_tab_teacher: "Teacher space", att_tab_student: "Student space",
    att_new: "New session", att_slot: "Timetable session", att_demo_slot: "Demo session (outside timetable)",
    att_late_after: "Late after (min)", att_create: "Create session", att_sessions: "Sessions", att_none: "No session yet. Create one to start.",
    att_start: "Start roll call", att_pause: "Pause", att_resume: "Resume", att_end: "End session", att_end_confirm: "End the session? Students without a record will be considered absent (simulation).",
    att_state_inactive: "Session inactive", att_state_open: "Session open", att_state_paused: "Session paused", att_state_closed: "Session ended", att_state_expired: "Code expired — renewing…",
    att_code_valid: "Code still valid for", att_seconds: "s", att_present: "Present", att_absent: "Absent", att_late: "Late",
    att_roster: "Attendance list (simulated)", att_student: "Student", att_status: "Status", att_time: "Time", att_source: "Source", att_justif: "Justification (simulated)",
    att_src_scan: "scan", att_src_manual: "manual correction", att_src_sim: "simulated scan", att_src_none: "—",
    att_sim_scan: "Simulate a fictional student scan", att_sim_none: "All fictional students are already recorded.",
    att_refused: "Refused attempts", att_refused_none: "No refused attempts.", att_export: "Export as CSV", att_delete_session: "Delete session",
    att_justif_ph: "Administrative reason (simulated)", att_justif_save: "OK", att_you: "you",
    att_qr_hidden: "QR code hidden (session not open).", att_qr_alt: "Attendance QR code — valid for 30 seconds", att_token_copy: "Text code (fallback)",
    att_st_course: "Session concerned", att_st_pick: "My session", att_st_scan_open: "Open scanner", att_st_scan_close: "Close scanner",
    att_st_scanning: "Point the camera at the QR code shown by the teacher.",
    att_st_fallback: "Fallback mode", att_st_manual_ph: "Paste the QR text code…", att_st_manual_btn: "Validate code", att_st_upload: "Read a QR code image",
    att_st_same: "Demo (same device): scan the current QR", att_st_same_none: "No active QR on this device. Open a session on the teacher side.",
    att_hist: "My history (simulated)", att_hist_none: "No history.", att_hist_late_n: "Late", att_hist_abs_n: "Absences (simulated)",
    att_cam_unsupported: "Your device or browser does not allow camera access. Use the fallback mode below.",
    att_cam_insecure: "The camera requires a secure connection (HTTPS or localhost). Use the fallback mode.",
    att_cam_denied: "Camera permission denied. Allow the camera in your browser settings and retry — or use the fallback mode.",
    att_cam_nocam: "No camera detected on this device.", att_cam_busy: "The camera is in use by another application.", att_cam_other: "Unable to open the camera.",
    att_nojsqr: "QR reader unavailable.", att_img_noqr: "No readable QR code in this image.",
    att_ok_present: "✅ Attendance recorded", att_ok_late: "⏰ Attendance recorded (late)",
    att_r_format: "❌ Scan refused: this QR code is not a valid attendance code.",
    att_r_unknown: "❌ Scan refused: session unknown on this device (the demo only works with a session from the same browser — a backend is required to validate across devices).",
    att_r_forged: "❌ Scan refused: invalid or altered code.", att_r_closed: "❌ Scan refused: the session has ended.", att_r_paused: "❌ Scan refused: the session is paused.",
    att_r_inactive: "❌ Scan refused: session inactive (roll call not started).", att_r_otherSession: "❌ Scan refused: this code belongs to a different session than yours.",
    att_r_expired: "❌ Scan refused: code expired (30 s validity). Scan the new code.", att_r_duplicate: "❌ Scan refused: your attendance is already recorded for this session.",
    att_arch_title: "Moving to a real system", att_arch: "Reliable authentication, server-signed and expiring tokens, shared storage, code-sharing detection (location/network, privacy-respecting). See docs/BACKEND.md.",
    att_st_pres: "Present", att_st_abs: "Absent", att_st_lat: "Late", att_no_session_open: "No open session", att_pick_demo: "Demo session",
  },
  ar: {
    att_title: "الحضور الذكي", att_sub: "تسجيل الحضور برمز QR متجدد (كل 30 ثانية) — عرض تجريبي محلي.",
    att_banner: "محاكاة: رمز QR المتجدد كل 30 ثانية لا يضمن الحضور الفعلي (يمكن مشاركته أثناء صلاحيته). عمليات التحقق في هذه الصفحة محلية في هذا المتصفح وليس لها قيمة إثبات رسمية. الطلبة المذكورون وهميون.",
    att_tab_teacher: "فضاء الأستاذ", att_tab_student: "فضاء الطالب",
    att_new: "حصة جديدة", att_slot: "حصة من جدول الأوقات", att_demo_slot: "حصة تجريبية (خارج الجدول)",
    att_late_after: "التأخر بعد (دقيقة)", att_create: "إنشاء الحصة", att_sessions: "الحصص", att_none: "لا توجد حصة بعد. أنشئ واحدة للبدء.",
    att_start: "بدء المناداة", att_pause: "إيقاف مؤقت", att_resume: "استئناف", att_end: "إنهاء الحصة", att_end_confirm: "إنهاء الحصة؟ سيُعتبر الطلبة غير المسجلين غائبين (محاكاة).",
    att_state_inactive: "حصة غير نشطة", att_state_open: "حصة مفتوحة", att_state_paused: "حصة موقوفة مؤقتا", att_state_closed: "حصة منتهية", att_state_expired: "الرمز منتهي — جارٍ التجديد…",
    att_code_valid: "الرمز صالح لمدة", att_seconds: "ث", att_present: "حاضرون", att_absent: "غائبون", att_late: "متأخرون",
    att_roster: "قائمة الحضور (محاكاة)", att_student: "الطالب", att_status: "الحالة", att_time: "الوقت", att_source: "المصدر", att_justif: "التبرير (محاكاة)",
    att_src_scan: "مسح", att_src_manual: "تصحيح يدوي", att_src_sim: "مسح محاكى", att_src_none: "—",
    att_sim_scan: "محاكاة مسح طالب وهمي", att_sim_none: "كل الطلبة الوهميين مسجلون بالفعل.",
    att_refused: "المحاولات المرفوضة", att_refused_none: "لا توجد محاولات مرفوضة.", att_export: "تصدير CSV", att_delete_session: "حذف الحصة",
    att_justif_ph: "سبب إداري (محاكاة)", att_justif_save: "موافق", att_you: "أنت",
    att_qr_hidden: "رمز QR مخفي (الحصة غير مفتوحة).", att_qr_alt: "رمز QR للحضور — صالح 30 ثانية", att_token_copy: "الرمز النصي (احتياطي)",
    att_st_course: "الحصة المعنية", att_st_pick: "حصتي", att_st_scan_open: "فتح الماسح", att_st_scan_close: "إغلاق الماسح",
    att_st_scanning: "وجّه الكاميرا نحو رمز QR الذي يعرضه الأستاذ.",
    att_st_fallback: "الوضع الاحتياطي", att_st_manual_ph: "الصق الرمز النصي لـ QR…", att_st_manual_btn: "تأكيد الرمز", att_st_upload: "قراءة صورة رمز QR",
    att_st_same: "تجربة (نفس الجهاز): مسح الرمز الحالي", att_st_same_none: "لا يوجد رمز نشط على هذا الجهاز. افتح حصة من جهة الأستاذ.",
    att_hist: "سجلي (محاكاة)", att_hist_none: "لا يوجد سجل.", att_hist_late_n: "التأخرات", att_hist_abs_n: "الغيابات (محاكاة)",
    att_cam_unsupported: "جهازك أو متصفحك لا يسمح بالوصول إلى الكاميرا. استعمل الوضع الاحتياطي أدناه.",
    att_cam_insecure: "تتطلب الكاميرا اتصالا آمنا (HTTPS أو localhost). استعمل الوضع الاحتياطي.",
    att_cam_denied: "تم رفض إذن الكاميرا. اسمح بها في إعدادات المتصفح ثم أعد المحاولة — أو استعمل الوضع الاحتياطي.",
    att_cam_nocam: "لم يتم العثور على كاميرا في هذا الجهاز.", att_cam_busy: "الكاميرا مستعملة من تطبيق آخر.", att_cam_other: "تعذر فتح الكاميرا.",
    att_nojsqr: "قارئ QR غير متوفر.", att_img_noqr: "لا يوجد رمز QR مقروء في هذه الصورة.",
    att_ok_present: "✅ تم تسجيل الحضور", att_ok_late: "⏰ تم تسجيل الحضور (متأخر)",
    att_r_format: "❌ تم رفض المسح: هذا الرمز ليس رمز حضور صالحا.",
    att_r_unknown: "❌ تم رفض المسح: حصة غير معروفة على هذا الجهاز (العرض يعمل فقط مع حصة من نفس المتصفح — يلزم خادم للتحقق بين الأجهزة).",
    att_r_forged: "❌ تم رفض المسح: رمز غير صالح أو معدّل.", att_r_closed: "❌ تم رفض المسح: الحصة منتهية.", att_r_paused: "❌ تم رفض المسح: الحصة موقوفة مؤقتا.",
    att_r_inactive: "❌ تم رفض المسح: حصة غير نشطة (لم تبدأ المناداة).", att_r_otherSession: "❌ تم رفض المسح: هذا الرمز يخص حصة أخرى غير حصتك.",
    att_r_expired: "❌ تم رفض المسح: الرمز منتهي (صلاحية 30 ثانية). امسح الرمز الجديد.", att_r_duplicate: "❌ تم رفض المسح: حضورك مسجل بالفعل لهذه الحصة.",
    att_arch_title: "للانتقال إلى نظام حقيقي", att_arch: "مصادقة موثوقة، رموز موقعة ومنتهية من الخادم، تخزين مشترك، كشف مشاركة الرمز (الموقع/الشبكة مع احترام الخصوصية). انظر docs/BACKEND.md.",
    att_st_pres: "حاضر", att_st_abs: "غائب", att_st_lat: "متأخر", att_no_session_open: "لا توجد حصة مفتوحة", att_pick_demo: "حصة تجريبية",
  },
});

// ---------- Page ----------
Pages.attendance = async function () {
  const [demo, timetable] = await Promise.all([ISI.demo("attendance"), Data.timetable()]);
  const subjects = [...new Set(timetable.map(s => s.subject))];
  const me = ISI.me();
  const meStudent = { id: me.id, name: me.name };
  const slots = timetable.map(s => ({ id: String(s.id), label: `${t("day_" + s.day)} ${s.start} — ${s.subject} (${s.room})`, subject: s.subject, group: s.group, day: s.day, start: s.start, end: s.end, room: s.room }));
  const rosterOf = () => [...(demo.students || []), meStudent];
  let stream = null, scanTimer = null;

  const stopCam = () => {
    if (scanTimer) { clearTimeout(scanTimer); scanTimer = null; }
    if (stream) { stream.getTracks().forEach(tr => tr.stop()); stream = null; }
  };
  ISI.onLeave(stopCam);

  const stateKey = (s) => s.status;
  const counts = (s) => {
    const roster = rosterOf();
    const present = s.records.filter(r => r.status === "present").length;
    const late = s.records.filter(r => r.status === "late").length;
    const absent = roster.length - present - late;
    return { present, late, absent: Math.max(0, absent), total: roster.length };
  };
  const statusOf = (s, id) => {
    const r = s.records.find(x => x.studentId === id);
    if (r) return r;
    return { studentId: id, status: s.status === "closed" ? "absent" : "pending" };
  };
  const stChip = (st) => st === "present" ? ISI.chip(t("att_st_pres"), "ok") : st === "late" ? ISI.chip(t("att_st_lat"), "warn") : st === "absent" ? ISI.chip(t("att_st_abs"), "bad") : ISI.chip("…", "demo");

  const defaultSlot = () => {
    const { current, next } = Timetable.getCurrentAndNext(timetable);
    const c = current || next; return c ? String(c.id) : "demo";
  };

  function handleResult(st, api, res) {
    st.result = res; stopCam(); st.scanning = false; api.refresh();
    if (res.ok) { Track.add("attendance"); ISI.toast("✅", t("att_ok_" + res.code)); }
  }
  function submitToken(st, api, token) {
    const res = AttendanceBackend.verifyAndRecord(token, meStudent, st.mySlot || defaultSlot());
    handleResult(st, api, res);
  }

  async function startCam(st, api) {
    st.camErr = null;
    if (!window.isSecureContext) { st.camErr = "insecure"; return api.refresh(); }
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { st.camErr = "unsupported"; return api.refresh(); }
    if (typeof jsQR !== "function") { st.camErr = "nojsqr"; return api.refresh(); }
    try {
      stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: "environment" } }, audio: false });
    } catch (e) {
      st.camErr = (e.name === "NotAllowedError" || e.name === "SecurityError") ? "denied"
        : (e.name === "NotFoundError" || e.name === "OverconstrainedError") ? "nocam"
        : e.name === "NotReadableError" ? "busy" : "other";
      return api.refresh();
    }
    st.scanning = true; api.refresh();
    const canvas = document.createElement("canvas"); const ctx = canvas.getContext("2d", { willReadFrequently: true });
    const loop = () => {
      const v = document.getElementById("att-video");
      if (!stream || !st.scanning) return;
      if (v && v.readyState >= 2 && v.videoWidth) {
        const w = Math.min(480, v.videoWidth); const h = Math.round(w * v.videoHeight / v.videoWidth);
        canvas.width = w; canvas.height = h; ctx.drawImage(v, 0, 0, w, h);
        const img = ctx.getImageData(0, 0, w, h);
        const code = jsQR(img.data, w, h, { inversionAttempts: "dontInvert" });
        if (code && code.data) return submitToken(st, api, code.data);
      }
      scanTimer = setTimeout(loop, 150);
    };
    loop();
  }

  function decodeImage(file, st, api) {
    if (typeof jsQR !== "function") { st.result = { ok: false, code: "nojsqr", custom: t("att_nojsqr") }; return api.refresh(); }
    const url = URL.createObjectURL(file); const img = new Image();
    img.onload = () => {
      const c = document.createElement("canvas"); const scale = Math.min(1, 900 / Math.max(img.width, img.height));
      c.width = Math.round(img.width * scale); c.height = Math.round(img.height * scale);
      const cx = c.getContext("2d"); cx.drawImage(img, 0, 0, c.width, c.height);
      const d = cx.getImageData(0, 0, c.width, c.height); URL.revokeObjectURL(url);
      const code = jsQR(d.data, c.width, c.height);
      if (code && code.data) submitToken(st, api, code.data);
      else { st.result = { ok: false, code: "noqr", custom: t("att_img_noqr") }; api.refresh(); }
    };
    img.onerror = () => { URL.revokeObjectURL(url); st.result = { ok: false, code: "noqr", custom: t("att_img_noqr") }; api.refresh(); };
    img.src = url;
  }

  // ----- Rendu professeur -----
  function renderTeacher(st) {
    const list = AttendanceBackend.sessions();
    const sel = list.find(s => s.id === st.sel) || null;
    const newForm = `
      <div class="card">
        <div class="card-title">${t("att_new")}</div>
        <form data-submit="create" novalidate>
          ${ISI.select("slot", "att_slot", [["demo", t("att_demo_slot")], ...slots.map(s => [s.id, s.label])], defaultSlot())}
          <div class="x-field-row">
            ${ISI.input("group", "x_group", 'required maxlength="30"', me.group || "G2")}
            ${ISI.input("late", "att_late_after", 'type="number" min="0" max="60" required', "10")}
          </div>
          <div id="att-demo-subject">${ISI.select("subject", "x_subject", subjects.map(s => [s, s]), subjects[0] || "")}</div>
          <button class="btn btn-primary" type="submit">${t("att_create")}</button>
        </form>
      </div>`;
    const sessionList = `
      <div class="card">
        <div class="card-title">${t("att_sessions")}</div>
        ${list.length ? list.map(s => `
          <div class="x-list-item">
            <div class="x-main"><div class="x-title">${ISI.esc(s.subject)} · ${ISI.esc(s.group)}</div>
              <div class="x-muted">${ISI.fmtDateTime(s.createdAt)} · ${t("att_state_" + s.status)} · <span class="x-mono">${ISI.esc(s.id)}</span></div></div>
            <div class="x-actions"><button class="btn btn-sm ${s.id === st.sel ? "btn-primary" : "btn-outline"}" data-act="select" data-id="${ISI.esc(s.id)}">${t("x_edit").length ? "▶" : ""} ${t("att_state_" + s.status)}</button></div>
          </div>`).join("") : `<p class="x-muted">${t("att_none")}</p>`}
      </div>`;
    let dash = "";
    if (sel) {
      const c = counts(sel);
      const rost = rosterOf();
      const unrec = rost.filter(r => !sel.records.some(x => x.studentId === r.id) && r.id !== me.id);
      dash = `
      <div class="card" style="margin-top:14px;">
        <div class="x-row between"><div><div class="card-title">${ISI.esc(sel.subject)} · ${ISI.esc(sel.group)}</div>
          <div class="x-muted">${t("x_demo_data")} · <span class="x-mono">${ISI.esc(sel.id)}</span></div></div>
          <div id="att-state">${ISI.chip(t("att_state_" + sel.status), sel.status === "open" ? "ok" : sel.status === "paused" ? "warn" : "demo")}</div></div>
        <div class="x-grid" style="margin-top:12px;">
          <div class="x-stack" style="text-align:center;">
            ${sel.status === "open" ? `<div id="att-qr" class="x-qr" role="img" aria-label="${t("att_qr_alt")}"></div>
              <div class="x-countdown" id="att-count" aria-live="off">30</div>
              <div class="x-muted" id="att-count-label">${t("att_code_valid")} <span id="att-count-s">30</span> ${t("att_seconds")}</div>
              <details><summary class="x-muted">${t("att_token_copy")}</summary><textarea id="att-token" readonly rows="3" style="width:100%" class="x-mono"></textarea></details>`
              : `<div class="x-status info">${sel.status === "paused" ? t("att_state_paused") : sel.status === "closed" ? t("att_state_closed") : t("att_qr_hidden")}</div>`}
          </div>
          <div class="x-stack">
            <div class="x-row"><div class="stat-mini"><div class="stat-value" id="att-n-p">${c.present}</div><div class="stat-label">${t("att_present")}</div></div>
              <div class="stat-mini"><div class="stat-value" id="att-n-a">${c.absent}</div><div class="stat-label">${t("att_absent")}</div></div>
              <div class="stat-mini"><div class="stat-value" id="att-n-l">${c.late}</div><div class="stat-label">${t("att_late")}</div></div></div>
            <div class="x-row">
              ${sel.status === "inactive" ? `<button class="btn btn-primary" data-act="start">▶ ${t("att_start")}</button>` : ""}
              ${sel.status === "open" ? `<button class="btn btn-outline" data-act="pause">⏸ ${t("att_pause")}</button>` : ""}
              ${sel.status === "paused" ? `<button class="btn btn-primary" data-act="resume">▶ ${t("att_resume")}</button>` : ""}
              ${sel.status === "open" || sel.status === "paused" ? `<button class="btn btn-outline" data-act="end">⏹ ${t("att_end")}</button>` : ""}
              <button class="btn btn-outline" data-act="csv">⬇ ${t("att_export")}</button>
              <button class="btn btn-ghost" data-act="delete">🗑 ${t("att_delete_session")}</button>
            </div>
            ${sel.status === "open" ? `<button class="btn btn-secondary btn-sm" data-act="simscan" ${unrec.length ? "" : "disabled"}>🧪 ${t("att_sim_scan")}</button>${unrec.length ? "" : `<div class="x-muted">${t("att_sim_none")}</div>`}` : ""}
          </div>
        </div>
        <div class="card-title" style="margin-top:8px;">${t("att_roster")}</div>
        <div class="x-table-wrap"><table class="x-table"><thead><tr><th>${t("att_student")}</th><th>${t("att_status")}</th><th>${t("att_time")}</th><th>${t("att_source")}</th><th>${t("att_justif")}</th></tr></thead><tbody>
          ${rost.map(r => {
            const rec = statusOf(sel, r.id);
            const src = rec.source === "scan" ? (r.id === me.id ? t("att_src_scan") : t("att_src_sim")) : rec.source === "manual" ? t("att_src_manual") : t("att_src_none");
            return `<tr><td>${ISI.esc(r.name)} ${r.id === me.id ? ISI.chip(t("att_you")) : ISI.chip(t("x_fictive"), "demo")}</td>
              <td><select data-on="setstatus" data-sid="${ISI.esc(r.id)}" aria-label="${ISI.esc(r.name)} — ${t("att_status")}">
                ${["present", "late", "absent"].map(v => `<option value="${v}" ${rec.status === v ? "selected" : ""}>${t("att_st_" + v.slice(0, 3))}</option>`).join("")}
                ${rec.status === "pending" ? `<option value="pending" selected>…</option>` : ""}</select></td>
              <td>${rec.ts ? ISI.fmtDateTime(rec.ts) : "—"}</td><td>${src}</td>
              <td>${rec.status === "absent" || (rec.status === "pending" && sel.status === "closed") ? `<form data-submit="justif" class="x-row" style="flex-wrap:nowrap"><input type="hidden" name="sid" value="${ISI.esc(r.id)}"><input name="j" maxlength="80" value="${ISI.esc((sel.justifications || {})[r.id] || "")}" placeholder="${t("att_justif_ph")}" aria-label="${t("att_justif")}"><button class="btn btn-sm btn-outline" type="submit">${t("att_justif_save")}</button></form>` : "—"}</td></tr>`;
          }).join("")}
        </tbody></table></div>
        <div class="card-title" style="margin-top:14px;">${t("att_refused")} (${sel.refused.length})</div>
        ${sel.refused.length ? sel.refused.slice(0, 12).map(r => `<div class="x-list-item"><div class="x-main">${ISI.esc(r.name || "?")} — ${t("att_r_" + r.code).replace(/^❌\s*/, "")}</div><div class="x-muted">${ISI.fmtDateTime(r.ts)}</div></div>`).join("") : `<p class="x-muted">${t("att_refused_none")}</p>`}
      </div>`;
    }
    return `<div class="x-grid-2">${newForm}${sessionList}</div>${dash}`;
  }

  // ----- Rendu étudiant -----
  function renderStudent(st) {
    const slot = st.mySlot || defaultSlot();
    const slotObj = slots.find(s => s.id === slot);
    const live = ISI.store.get("att_live", null);
    const all = AttendanceBackend.sessions();
    const mine = [];
    all.forEach(s => {
      const r = s.records.find(x => x.studentId === me.id);
      if (r) mine.push({ subject: s.subject, ts: r.ts, status: r.status, sim: false });
      else if (s.status === "closed") mine.push({ subject: s.subject, ts: s.endedAt || s.createdAt, status: "absent", sim: true });
    });
    (demo.pastSessions || []).forEach(p => mine.push({ subject: p.subject, ts: Date.now() - p.daysAgo * 86400000, status: p.status, sim: true, demo: true }));
    mine.sort((a, b) => b.ts - a.ts);
    const nLate = mine.filter(m => m.status === "late").length, nAbs = mine.filter(m => m.status === "absent").length;
    const camMsg = st.camErr ? `<div class="x-status warn" role="alert">${t("att_cam_" + st.camErr)}</div>` : "";
    const r = st.result;
    const resMsg = r ? `<div class="x-status ${r.ok ? "ok" : "bad"}" role="status" aria-live="polite">
      ${r.custom ? ISI.esc(r.custom) : r.ok ? t("att_ok_" + r.code) : t("att_r_" + r.code)}
      ${r.session ? `<div class="x-muted" style="font-weight:400">${t("x_subject")}: ${ISI.esc(r.session.subject)} · ${t("x_group")}: ${ISI.esc(r.session.group)} · <span class="x-mono">${ISI.esc(r.session.id)}</span></div>` : ""}</div>` : "";
    return `
      <div class="x-grid-2">
        <div class="card">
          <div class="card-title">${t("att_st_course")}</div>
          ${ISI.select("myslot", "att_st_pick", [["demo", t("att_pick_demo")], ...slots.map(s => [s.id, s.label])], slot, 'data-on="myslot"')}
          <p class="x-muted">${slotObj ? `${ISI.esc(slotObj.subject)} · ${ISI.esc(slotObj.room)}` : t("att_pick_demo")}</p>
          <div class="x-row">
            ${st.scanning ? `<button class="btn btn-outline" data-act="scanstop">⏹ ${t("att_st_scan_close")}</button>` : `<button class="btn btn-primary" data-act="scanstart">📷 ${t("att_st_scan_open")}</button>`}
          </div>
          ${camMsg}
          ${st.scanning ? `<p class="x-muted">${t("att_st_scanning")}</p><div class="x-video-box"><video id="att-video" playsinline muted aria-label="${t("att_st_scanning")}"></video></div>` : ""}
          ${resMsg}
        </div>
        <div class="card">
          <div class="card-title">${t("att_st_fallback")}</div>
          <form data-submit="manual" class="x-stack" novalidate>
            ${ISI.textarea("token", "att_st_manual_btn", `required minlength="10" placeholder="${t("att_st_manual_ph")}"`)}
            <button class="btn btn-secondary" type="submit">${t("att_st_manual_btn")}</button>
          </form>
          <div class="x-stack" style="margin-top:12px;">
            <label class="btn btn-outline" style="cursor:pointer;">🖼 ${t("att_st_upload")}<input type="file" accept="image/*" capture="environment" data-on="upload" style="position:absolute;opacity:0;width:1px;height:1px;" aria-label="${t("att_st_upload")}"></label>
            <button class="btn btn-ghost" data-act="samedev">🧪 ${t("att_st_same")}</button>
            ${live ? "" : `<div class="x-muted">${t("att_st_same_none")}</div>`}
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-title">${t("att_hist")}</div>
        <div class="x-row"><div class="stat-mini"><div class="stat-value">${nLate}</div><div class="stat-label">${t("att_hist_late_n")}</div></div><div class="stat-mini"><div class="stat-value">${nAbs}</div><div class="stat-label">${t("att_hist_abs_n")}</div></div></div>
        ${mine.length ? `<div class="x-table-wrap"><table class="x-table"><thead><tr><th>${t("x_subject")}</th><th>${t("x_date")}</th><th>${t("att_status")}</th><th></th></tr></thead><tbody>
          ${mine.slice(0, 25).map(m => `<tr><td>${ISI.esc(m.subject)}</td><td>${ISI.fmtDateTime(m.ts)}</td><td>${stChip(m.status)}</td><td>${ISI.chip(t("x_simulated"), "demo")}</td></tr>`).join("")}</tbody></table></div>` : `<p class="x-muted">${t("att_hist_none")}</p>`}
      </div>`;
  }

  return ISI.page("attendance", {
    render(st) {
      st.tab = st.tab || (me.role === "teacher" ? "teacher" : "student");
      if (!st.sel) { const l = AttendanceBackend.sessions(); if (l[0]) st.sel = l[0].id; }
      return `
        ${ISI.header("att_title", "att_sub")}
        ${ISI.banner("att_banner")}
        ${ISI.tabs([["teacher", "👨‍🏫 " + t("att_tab_teacher")], ["student", "👨‍🎓 " + t("att_tab_student")]], st.tab)}
        ${st.tab === "teacher" ? renderTeacher(st) : renderStudent(st)}
        <div class="info-box" style="margin-top:14px;"><strong>${t("att_arch_title")}</strong> — ${t("att_arch")}</div>
        <div style="margin-top:12px;"><button class="btn btn-ghost btn-sm" data-act="reset">♻ ${t("x_reset_btn")}</button></div>`;
    },
    actions(st, api) {
      const upd = (fn) => { AttendanceBackend.update(st.sel, fn); api.refresh(); };
      return {
        tab(el) { stopCam(); st.scanning = false; st.tab = el.dataset.id; api.refresh(); },
        select(el) { st.sel = el.dataset.id; api.refresh(); },
        create(form) {
          const { ok, data } = ISI.readForm(form); if (!ok) return;
          const sl = slots.find(s => s.id === data.slot);
          const subject = sl ? sl.subject : (data.subject || subjects[0] || "Démo");
          const s = { id: ISI.uid("att").replace("_", "-"), slotRef: data.slot, subject, group: data.group, room: sl ? sl.room : "—", createdAt: Date.now(), startTs: 0, status: "inactive", secret: Math.random().toString(36).slice(2) + Date.now().toString(36), lateAfterMin: Number(data.late), records: [], refused: [], justifications: {}, simulated: true };
          const l = AttendanceBackend.sessions(); l.unshift(s); AttendanceBackend.save(l);
          st.sel = s.id; ISI.toast("✅", t("x_saved")); api.refresh();
        },
        start() { upd(s => { s.status = "open"; s.startTs = Date.now(); }); },
        pause() { upd(s => { s.status = "paused"; }); },
        resume() { upd(s => { s.status = "open"; }); },
        end() { ISI.confirm(t("att_end_confirm"), () => { upd(s => { s.status = "closed"; s.endedAt = Date.now(); }); ISI.store.remove("att_live"); }, { danger: false }); },
        delete() { ISI.confirm(t("x_delete_confirm"), () => { AttendanceBackend.save(AttendanceBackend.sessions().filter(s => s.id !== st.sel)); ISI.store.remove("att_live"); st.sel = null; ISI.toast("🗑", t("x_deleted")); api.refresh(); }); },
        simscan() {
          const s = AttendanceBackend.get(st.sel); if (!s || s.status !== "open") return;
          const next = (demo.students || []).find(x => !s.records.some(r => r.studentId === x.id)); if (!next) return;
          // La simulation passe par la même validation que les vrais scans
          const tk = AttendanceBackend.issueToken(s.id);
          const res = AttendanceBackend.verifyAndRecord(tk.token, next, s.slotRef);
          if (res.ok) AttendanceBackend.update(s.id, x => { const r = x.records.find(y => y.studentId === next.id); if (r) r.source = "scan"; });
          api.refresh();
        },
        setstatus(el) {
          const sid = el.dataset.sid, v = el.value; if (v === "pending") return;
          upd(s => {
            const person = rosterOf().find(r => r.id === sid); const i = s.records.findIndex(r => r.studentId === sid);
            if (v === "absent") { if (i >= 0) s.records.splice(i, 1); if (s.status !== "closed") return; }
            else if (i >= 0) { s.records[i].status = v; s.records[i].source = "manual"; }
            else s.records.push({ studentId: sid, name: person ? person.name : sid, ts: Date.now(), status: v, source: "manual" });
          });
        },
        justif(form) { const { data } = ISI.readForm(form); upd(s => { s.justifications = s.justifications || {}; if (data.j) s.justifications[data.sid] = data.j.slice(0, 80); else delete s.justifications[data.sid]; }); ISI.toast("✅", t("x_saved")); },
        csv() {
          const s = AttendanceBackend.get(st.sel); if (!s) return;
          const rows = [["session_id", "subject", "group", "student_id", "student_name", "status", "time", "origin", "justification_simulated", "data_origin"]];
          rosterOf().forEach(r => { const rec = statusOf(s, r.id); rows.push([s.id, s.subject, s.group, r.id, r.name, rec.status === "pending" ? "pending" : rec.status, rec.ts ? new Date(rec.ts).toISOString() : "", rec.source || "", (s.justifications || {})[r.id] || "", "SIMULATED_DEMO"]); });
          ISI.csv(rows, `presences-${s.id}.csv`);
        },
        myslot(el) { st.mySlot = el.value; },
        scanstart() { startCam(st, api); },
        scanstop() { stopCam(); st.scanning = false; api.refresh(); },
        manual(form) { const { ok, data } = ISI.readForm(form); if (ok) submitToken(st, api, data.token); },
        upload(el) { if (el.files && el.files[0]) decodeImage(el.files[0], st, api); },
        samedev() {
          const live = ISI.store.get("att_live", null);
          if (!live) { st.result = { ok: false, code: "inactive" }; return api.refresh(); }
          submitToken(st, api, live.token);
        },
        reset() { ISI.resetModule(["att"], () => { st.sel = null; st.result = null; api.refresh(); }); },
      };
    },
    bind(root, st, api) {
      // Reconnecte le flux caméra après un re-rendu
      const v = root.querySelector("#att-video");
      if (v && stream) { v.srcObject = stream; v.play().catch(() => {}); }
      // QR dynamique : renouvelé toutes les 30 s, compte à rebours à la seconde
      const s = st.sel && AttendanceBackend.get(st.sel);
      if (st.tab === "teacher" && s && s.status === "open") {
        let cur = null;
        const draw = () => {
          cur = AttendanceBackend.issueToken(s.id);
          ISI.store.set("att_live", { sessionId: s.id, token: cur.token, exp: cur.exp });
          const box = document.getElementById("att-qr"); if (!box) return;
          const qr = qrcode(0, "M"); qr.addData(cur.token); qr.make();
          box.innerHTML = qr.createSvgTag({ cellSize: 6, margin: 0, scalable: true });
          const ta = document.getElementById("att-token"); if (ta) ta.value = cur.token;
        };
        draw();
        ISI.interval(() => {
          const left = Math.max(0, Math.ceil((cur.exp - Date.now()) / 1000));
          const c = document.getElementById("att-count"), sEl = document.getElementById("att-count-s");
          if (c) c.textContent = left; if (sEl) sEl.textContent = left;
          if (left <= 0) { const stEl = document.getElementById("att-state"); if (stEl) stEl.innerHTML = ISI.chip(t("att_state_expired"), "warn"); draw(); if (stEl) stEl.innerHTML = ISI.chip(t("att_state_open"), "ok"); }
          // met à jour les compteurs si des scans arrivent d'un autre onglet (même navigateur)
          const fresh = AttendanceBackend.get(s.id);
          if (fresh) { const cc = counts(fresh); const m = { "att-n-p": cc.present, "att-n-a": cc.absent, "att-n-l": cc.late }; Object.keys(m).forEach(k => { const e = document.getElementById(k); if (e && e.textContent != m[k]) e.textContent = m[k]; }); }
        }, 1000);
      }
    },
  });
};
