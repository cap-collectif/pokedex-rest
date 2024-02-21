# Test technique frontend - Cap collectif

## Installation et lancement
- Clonez le repository, rendez vous dans le dossier
- Assurez vous d'avoir une version de Node.js `>= v18.17.0`
- Lancez `yarn install` (ou npm, npx, ou autre)
- Lancez `yarn relay`
- Lancez le projet avec `yarn dev`
- Si tout va bien, le projet est accessible sur l'URL `http://localhost:3000`

## Le test
Le test consiste à compléter une version minimaliste d'un Pokédex.
Les 2 pages principales existent déjà, la liste des Pokémons, et la page de visualisation d'un Pokémon.
Tes objectifs sont donc les suivants : 

### Sur la page principale :
- Améliorer le design général afin d'avoir une vue plus agréable et lisible. Tu ne
seras pas particulièrement jugé sur les choix graphiques, mais les différents Pokémons devront quand même être séparés, sous forme de "cartes".

### Sur la page de visualisation d'un Pokémon : 

- Afficher les informations de ton choix sur le Pokémon sélectionné. À minima, le ou les types, un autre sprite si disponible, la taille, le nom et l'image. Tu les récupèreras dans l'API `pokeapi`, plus d'infos dans l'aide
- Prévoir un lien de retour sur la page principale
- Styliser également un peu la page, là encore, tu ne seras pas jugé sur tes choix, mais sur l'application de ceux-ci


## Aides, à lire : 

- Pour le style, tu peux utiliser le fichier `globals.css` dans le répertoire `src/app`. Tu peux également utiliser [Tailwind](https://tailwindcss.com/) si tu le souhaites, déjà installé.
- La documentation de l'API [est disponible ici](https://pokeapi.co/docs/v2#info). C'est une API rest assez classique.
- Lorsque tu auras terminé ton test, envoie le sur le repository. Si tu as des questions, des remarques, n'hésite pas à me contacter - julien.aguilar@cap-collectif.com
- Prends le temps qu'il te faut, et bon courage !