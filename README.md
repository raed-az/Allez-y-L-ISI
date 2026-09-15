# 🎓 Allez-y à l’ISI

Assistant universitaire frontend indépendant pour étudiants et enseignants de l’ISI.

> ⚠️ Projet indépendant réalisé à des fins éducatives et pratiques. Ce site n’est pas officiel et n’est pas affilié à l’administration de l’ISI. Le projet est en cours de développement.

## Fonctionnalités

- Dashboard étudiant / enseignant
- Connexion locale sans mot de passe
- Emploi du temps interactif et prochaine séance
- Recherche globale salles / enseignants / matières / ressources
- Interprétation des salles comme `A206` → bloc A, étage 2, salle 06
- Exploration du bâtiment à partir des images fournies
- Prépa Intégrée S1/S2 structurée à partir du syllabus fourni
- Chapitres, TD, TP, objectifs et ressources
- Liens de recherche YouTube et ressources du syllabus
- Progression, favoris, historique
- Chatbot local contextuel
- Publications JSON faciles à modifier
- Notifications locales
- Calendrier, notes, tâches et Pomodoro
- Français / English / العربية avec RTL
- Mode sombre
- localStorage, sans backend
- Compatible GitHub Pages

## Lancer le projet

### GitHub Pages
1. Copiez le dossier dans un repository GitHub.
2. Poussez les fichiers.
3. Dans **Settings → Pages**, choisissez le déploiement depuis la branche principale et le dossier `/ (root)`.
4. Ouvrez l’URL GitHub Pages générée.

### Localement
Pour profiter pleinement du chargement JSON, servez le dossier avec un serveur statique quelconque. Le site possède aussi des données de secours intégrées afin d’éviter une page vide si `fetch()` des JSON est bloqué par `file://`.

## Modifier les données

- `data/users.json` : utilisateurs de démonstration
- `data/students.json` : profils étudiants
- `data/teachers.json` : enseignants
- `data/rooms.json` : salles
- `data/timetable.json` : emploi du temps
- `data/publications.json` : publications
- `data/chatbot.json` : intentions et réponses du chatbot
- `data/prepa/semester1.json` et `semester2.json` : structure pédagogique

Les fichiers JSON sont la source de configuration et sont faciles à remplacer sur GitHub.

## Images du bâtiment

`assets/building/` contient trois vues 3D fournies par le créateur du projet :

- `building-general.jpg` — vue assemblée du bâtiment (façade bleu/blanc).
- `building-exploded.jpg` — vue éclatée avec les niveaux (Toit, Étages 1 à 4, Rez-de-chaussée).
- `building-cutaway.jpg` — coupe intérieure (couloirs, portes, cage d’escalier).

La page **🏫 Explorer l’ISI** propose un sélecteur pour basculer entre ces trois vues et affiche, pour chaque niveau, le nombre de salles connues dans `data/rooms.json`. Aucune position exacte de salle n’est inventée : seules les salles présentes dans le JSON sont comptées.

## Syllabus

La partie Prépa Intégrée reprend l’organisation de la première année cycle préparatoire Info-Sup (tronc commun), S1 et S2, ainsi que les ECUE, chapitres, TD/TP et ressources explicitement présents dans le document fourni. Les données non présentes ne sont pas présentées comme officielles.

## Confidentialité

Aucune donnée utilisateur n’est envoyée à un serveur par cette application. Les préférences, progression, notes, tâches, favoris et historique sont stockés localement dans le navigateur. Aucun mot de passe institutionnel n’est demandé.

Les notifications et emails ont des limites inhérentes à une application sans backend : un email automatique hors ligne ou navigateur fermé ne peut pas être garanti sans service externe/backend.

## Équipe

- Raed Azouzi — mohamedraed.azouzi@etudiant-isi.utm.tn
- Adem Hmila — email à compléter
- Assyl Khamila
- Yassmin Fouratii
- Islem Ayari
- Yakin Mkadem
