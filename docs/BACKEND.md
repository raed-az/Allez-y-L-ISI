# Passer à un système réel

Principe : l'interface appelle des adaptateurs ; seul l'adaptateur change.

## Smart Attendance
`AttendanceBackend` (dans `attendance.js`) expose `sessions/get/update/issueToken/verifyAndRecord`. Remplacer `LocalAttendanceBackend` par un `RemoteAttendanceBackend` appelant votre API :
- `POST /sessions` (enseignant authentifié) ; `POST /sessions/:id/token` → jeton signé (HMAC/JWT) expirant en 30 s, généré **côté serveur** ;
- `POST /attendance` `{token}` (étudiant authentifié) → le serveur vérifie signature, expiration, séance, doublon, et enregistre ;
- mitigations du partage de code : rotation courte, limitation par réseau/géolocalisation consentie, journalisation, relecture par l'enseignant.
La méthode de vérification actuelle (`_sig`, hash FNV) est une démonstration non sécurisée.

## Gamification / EcoCampus / crédits
Les ledgers `Ledger.award(kind, key, pts, label)` ont déjà des clés d'idempotence : le serveur doit reprendre ce principe, calculer les points lui-même et refuser toute valeur envoyée par le client.

## Skill Exchange, Lost & Found, Innovation Lab, Pulse
Remplacer `ISI.store` par des appels API (CRUD + modération), authentification, messagerie interne sans exposer d'e-mail/téléphone, un vote par compte.

## Personal Study Copilot
`StudyAI.providers` : ajouter un fournisseur `remote` appelant **votre proxy serveur** (la clé API reste côté serveur, jamais dans le frontend), en lui transmettant les extraits indexés pour citer les sources.
