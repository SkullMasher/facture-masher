# Facture Masher
Création de facture multiplateforme. 

Je ne suis pas fan des feuilles excel et des solutions actuels pour générer des factures. Voiçi **Facture Masher** une application libre et open source qui créer des factures sur n'importe quelle plateforme (Linux, Mac, Windows).

## Instalation
```
npm i
```
## Utilisation
Pour générer une facture avec vos paramètres personnalisé veuillez éditer le fichier **app/views/facture.html**. Démarrez ensuite l'application.
```
npm start ou gulp start
```
Cliquez sur **Création nouvelles factures**. Retrouver ensuite votre facture dans le dossier build/facture.pdf
## Build
Compile des builds pour les 3 os majeurs linux, mac & windows (non testé).
```
npm build
```
## Roadmap

**Landing Page**

    * Bouton créer une nouvelle facture
    * Bouton paramètre de l'application
    * Montrer les factures précédement éffectuées avec bouton de supréssion

**Créer/modifer/voir une facture**

    * Remplir les chemps
    * Sauvegarder en pdf
    * Bouton générer et annuler

**Paramètre de l'application**

    * Téléchargement de fichier image pour fond de la facture.
