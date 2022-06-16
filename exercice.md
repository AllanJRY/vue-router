## Introduction
Dans cet exercice, l'objectif est de mettre en place la navigation sur un site offrant la possibilité de consulter une liste de produit, en voir les détails, en éditer et en ajouter.

### Partie 1 - Mettre en place les routes de la navigation
Dans le fichier index.js du dossier router, définissez 2 routes :

- La première route, nommée `home`, cible l'url `/` et charge la vue `HomeView`.
- La seconde route, nommée `products`, cible l'url `/products` et charge la vue `ProductsView`.

Une fois ces routes définies, dans le composant `TheHeader`, remplacer les balises de lien par des composants `<router-link>` visant chacune des nouvelles routes.

Dans le composant `App`, placer l'élément `<router-view>` à la suite du composant `TheHeader`, ce qui donnera un emplacement pour le composant lié aux routes.

### Partie 2 - Ajout des pages de CRUD

Encore une fois dans le fichier index.js, définissez les routes suivantes :
- La route nommée `products_show`, ciblant l'url comprenant le paramètre id : `/products/:id`, chargeant la vue  `ProductsShowView`
- La route nommée `products_edit`, ciblant l'url comprenant le paramètre id : `/products/:id/edit`, chargeant la vue  `ProductsEditView`
- La route nommée `products_new`, ciblant l'url suivante : `/products/new`, chargeant la vue  `ProductsNewView`

Une fois les routes définies, dans la vue  `ProductsView`, remplacer le bouton 'Créer un produit' par un lien Vue router qui cible la route  `products_new`.

Dans les cards, remplacer le lien 'Voir plus' par un lien Vue router qui cible la route `products_show`.

Dans la vue `ProductsShowView`, faire en sorte que le lien 'Éditer' envoi sur la route `products_edit`.

### Partie 3 - Navigation via le code

Dans la vue `ProductsNewView`, à la validation de la création, faite en sorte de déplacer l'utilisateur vers la route `products` une fois le nouveau produit ajouter à la liste des produits.

Dans la vue `ProductsEditView`, comme pour la vue `ProductsNewView`, faire en sorte d'envoyer l'utilisateur sur la route `products` une fois l'édition valider.

Toujours dans la vue `ProductsEditView`, ajouter un Guards pour que qu'un confirm soit ouvert quand l'utilisateur souhaite quitter la page, ce qui lui permettra d'annuler son départ.
