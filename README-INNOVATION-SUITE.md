# Allez-y à l'ISI — modules additionnels (démo locale)

## Lancement
Le site reste une application statique. Depuis le dossier contenant `index.html`, lancez par exemple :

```bash
python3 -m http.server 8000
```
Puis ouvrez `http://localhost:8000`. Le site peut aussi être publié sur GitHub Pages ; tous les chemins ajoutés sont relatifs.

## Modules ajoutés
- **Smart Attendance** : ouverture/suspension/fin d'une séance de démonstration, code renouvelé toutes les 30 secondes, scan simulé unique par séance, statut expiré/inactif refusé, export CSV.
- **Campus Life RPG** : missions locales, validation et XP de démonstration.
- **Smart Campus Navigator** : recherche dans `data/rooms.json` et réutilisation des images existantes du bâtiment. L'itinéraire n'est pas inventé.
- **Exam Survival** : tâches de révision avec échéance et état de progression.
- **ISI Skill Exchange** : annonces d'entraide locales.
- **EcoCampus** : actions déclarées et EcoPoints séparés de l'XP.
- **Personal Study Copilot** : quiz prédéfini et recherche locale simplifiée.
- **Campus Pulse** : publications de démonstration et état lu/non lu.
- **University Life Simulator** : créneaux personnels et détection de chevauchements.
- **Lost & Found** : annonces fictives et état de récupération.
- **ISI Innovation Lab** : idées locales et votes locaux.
- **Campus Progress** : export et réinitialisation des seules données de ces modules.

## Limites importantes
Toutes les nouvelles données sont enregistrées dans `localStorage` du navigateur courant et ne sont pas partagées entre utilisateurs/appareils. Les données d'exemple sont fictives. La présence est une simulation : sans backend sécurisé, le navigateur ne peut pas prouver l'identité, empêcher le partage du code, garantir l'heure, ni certifier une présence physique. Le code textuel de séance tourne toutes les 30 secondes dans la page ; la lecture par caméra/QR optique et la validation institutionnelle partagée restent à implémenter avec un service sécurisé. Aucun classement affiché ici n'est officiel. Le copilot n'est pas une IA générative.

## Tests manuels conseillés
1. Connectez-vous avec le mode de démonstration déjà présent dans le projet.
2. Ouvrez chaque nouveau module depuis le menu latéral.
3. Ajoutez un élément puis rechargez la page pour vérifier la persistance locale.
4. Dans Smart Attendance, démarrez une séance, simulez un scan deux fois et vérifiez le refus du doublon ; attendez le renouvellement du code.
5. Dans University Life Simulator, créez deux créneaux qui se chevauchent le même jour puis analysez le planning.
6. Exportez le CSV de présence et l'ensemble des données locales.
7. Vérifiez le rendu sur une fenêtre étroite et en mode sombre / langues via les réglages existants.

## Architecture future backend
Pour rendre ces fonctionnalités réelles, ajouter une API sécurisée et une base de données partagée, authentification serveur, jetons de présence signés avec expiration et validation atomique anti-doublon, modération des annonces, autorisations par rôle et journaux d'audit. Ne placez aucune clé API dans le frontend.
