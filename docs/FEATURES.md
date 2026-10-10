# Fonctionnalités : opérationnel, simulé, futur

## Fichiers
**Modifiés (2)** : `index.html` (feuille `modules.css` + scripts), `js/app.js` (menu en 5 groupes, routes des modules, `ISI.clearTimers/flush`, modales accessibles : `role=dialog`, Échap, focus, fermeture au changement de route).
**Ajoutés** : `css/modules.css`, `js/modules/{core,nav-i18n,attendance,rpg,navigator,exam,skills,eco,copilot,pulse,simulator,lostfound,innovation,dashboard-links}.js`, `js/vendor/{qrcode.js,jsQR.js,jsQR.LICENSE.txt}`, `data/demo/{attendance,rpg,skills,eco,quiz,pulse,lostfound,innovation}.json`, `docs/*`, `tests/*`.
Les clés de stockage des nouveaux modules sont préfixées `x_` : aucune donnée existante n'est lue ni écrasée.

## Catégorie A — réellement utilisables en local
Exam Survival Mode (évaluations, chapitres du syllabus fourni, statuts partagés avec la page Prépa, planificateur, minuteur, rappels tant que l'app est ouverte) · University Life Simulator · Smart Campus Navigator (salles/EDT/images existantes) · quiz du Copilot · XP/badges/missions locaux · annonces et objets locaux · exports CSV · QR dynamique 30 s et scan caméra (même navigateur).

## Catégorie B — simulations (mention explicite dans l'UI)
Présences partagées entre appareils (le jeton n'est vérifiable que dans le navigateur qui a ouvert la séance) · classements EcoCampus (fictifs) · parts « des autres » des défis collectifs · validation des actions écologiques (bouton simulé) · votes/statuts Innovation Lab · échanges et validations Skill Exchange · messagerie Lost & Found · publications/alertes de démonstration de Campus Pulse.

## Catégorie C — nécessite un backend (voir `BACKEND.md`)
Authentification fiable, base partagée, validation sécurisée des présences, synchronisation, classements communs, messagerie, votes centralisés, attribution sécurisée des récompenses, IA générative.

## Limites à connaître
- Les points (XP/EcoPoints/crédits) sont modifiables par n'importe qui via les outils du navigateur ; une signature locale détecte une édition accidentelle mais **n'est pas une sécurité**.
- Un QR renouvelé toutes les 30 s ne prouve pas la présence physique (code partageable) ; un QR fixe EcoCampus ne prouve aucune action.
- Les QCM du Copilot sont génériques, rédigés pour ce projet, **non issus du syllabus officiel**. L'assistant est un moteur de recherche local, pas une IA générative.
- Aucune position précise de salle n'est inventée : le Navigator donne bloc → étage → salle (guide illustratif).
- EcoCampus n'affiche aucun kg/CO₂ (pas de méthode justifiée).
- Les notifications/rappels n'agissent que lorsque l'application est ouverte.
- Les 12 « étudiants fictifs » et toutes les annonces d'exemple sont inventés et étiquetés comme tels.
