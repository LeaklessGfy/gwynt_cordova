# Gwynt Client

## Setup

**Installer cordova sur sa machine**

	- sudo npm install -g cordova

**Installer gulp sur sa machine**

	- sudo npm install -g gulp

**Déclarer le dossier comme un projet cordova**

	- cordova create app


**Récuperer le dépot :**
`https://github.com/ld-chok/iesa2016-a3-mobile-gwynt.git`

**Installer les modules nodes pour gulp :**

	- npm install


**Se mettre dans le repertoire de l'appli :**

	- cd app

**Ajouter les platforms ios/android :**

	- cordova platform add ios
	- cordova platform add android
	
**Vérifier :** 

	- cordova platform ls ls

**Ajouter les plug in suivants :**

* cordova plugin add cordova-plugin-statusbar
* cordova plugin add cordova-plugin-network-information
* cordova plugin add cordova-plugin-device-orientation

**Build ou Emulate**

	- gulp
	- cordova build
	- cordova emulate ios (ou android)

**Commandes gulp :**

	- gulp et gulp watch

**En cas de problème :**

* contacter le support : `contact@gwynt.fr`
* contacter le lead dev : Thibault Gouin au 06788133

## Noms des membres du groupe

* Maxime Blanchard
* Vincent Rasquier
* Ludovic Dewet
* Jean-Nicolas Correa
* Thibault Gouin

## Projet GWYNT
Jeu de carte multijoueur stratégique en référence à "The Witcher 3".


# Pitch de l'app

## Jeux de cartes stratégique

Un utilisateur n'ayant jamais joué au jeu The Witcher peut jouer au Gwynt sans en connaître l'univers.
Le Gwynt ne se réfère à The Witcher que par le nom de certains personnages et les illustrations des cartes.
Les règles du jeu de carte (Gwynt) n'a rien à voir avec le jeu The Witcher.

### Post It orange (rendu n°1)

* Ajouter une animation lorsqu'une manche est gagnée
* Changer le plateau de jeux

### Post It jaune (rendu n°2)

* Le plateau de jeux a une influence sur les stats des cartes
* Ajouter des voix aux avatars des joueurs
* Modifier l'humeur de l'avatar selon l'état de la partie

### Post It rose

* Créer ses propres cartes.


