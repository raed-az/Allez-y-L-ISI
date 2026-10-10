# Guide de test

Lancer : `python3 -m http.server 8000` → http://localhost:8000. Connexion de démonstration (étudiant) comme d'habitude.

## Parcours manuels rapides
- **Smart Attendance** : *Professeur* → Créer la séance → Démarrer l'appel (QR + compte à rebours, renouvelé à 0) → onglet *Étudiant* → « Démo (même appareil) » : présence enregistrée ; recommencer : refus (doublon). Suspendre/Terminer : refus. Choisir une autre séance côté étudiant : refus « autre séance ». Exporter CSV. Scanner caméra : ouvrir une séance sur un écran, scanner avec un second appareil n'est **pas** validable (limite documentée) ; testez avec deux onglets du même navigateur.
- **RPG** : faire une session Exam/quiz → Missions → Réclamer (une seule fois) → Badges, Historique, Configuration (seuils croissants exigés).
- **Navigator** : taper `A206` ; bouton/section « Où dois-je aller maintenant ? » ; étages.
- **Exam** : Évaluations → ajouter (date future) → Planning → Proposer un planning (≤ 4 sessions/jour pour 2 h) ; Concentration (durée configurable, ex. 1 min).
- **Skills** : Annonces → « Proposer mon aide » → Échanges : accepter (simulé) → déclarer → valider (simulé) → crédits +2 ; bloquer e-mail/téléphone dans les annonces.
- **EcoCampus** : déclarer une action (+½ points) → simuler la validation (+½) ; limite quotidienne ; défis ; arbre ; classements fictifs.
- **Copilot** : rechercher « complexes » ; faire un quiz ; onglet Résultats.
- **Pulse / Simulator / Lost & Found / Innovation** : voir les onglets ; confirmation avant « récupéré » ; justification obligatoire pour un refus simulé.

## Tests automatisés exécutés (Chromium headless, Playwright)
Voir `tests/`. Résultats obtenus lors de la livraison :
| Test | Résultat |
|---|---|
| Chargement + 32 routes × FR/EN/AR, erreurs console | 0 erreur |
| i18n : 714 clés nouvelles présentes en FR/EN/AR, aucune clé brute affichée | OK |
| Modules 2–11 : 37 vérifications fonctionnelles (XP, anti-doublon, plan, crédits, plafonds, XSS, CSV, persistance…) | 37/37 |
| Smart Attendance : scan, doublon, autre séance, expiré, falsifié, format, pause, rotation du QR après 31 s, CSV | OK |
| Caméra : vrai scan d'un QR via flux vidéo simulé (jsQR) ; erreurs « refusée », « occupée », « aucune caméra » | OK |
| Largeurs 320/375/414/768/1024/1366/1920 × FR/AR : aucun débordement horizontal, menu mobile | OK |
| Mode sombre + RTL arabe (captures inspectées) | OK |
| Sous-chemin `/allez-y-a-l-isi/` : aucune requête en échec | OK |

**Non testé** : appareils réels (iOS/Android), Firefox/Safari, lecteurs d'écran, caméra physique, contraste mesuré outil. À vérifier avant mise en production.
