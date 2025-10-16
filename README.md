# Pmay Food - Site Web

Site web professionnel pour Pmay Food, service de traiteur et livraison de repas à Kinshasa, RD Congo.

## Fonctionnalités

- **Page d'Accueil**: Hero section, fonctionnalités principales, aperçu des menus
- **Nos Menus**: Catalogue complet avec filtrage par catégorie (Menu Classique, Menu Cocktail)
- **Service Traiteur**: Présentation des services pour événements
- **Contact**: Informations de contact avec intégration WhatsApp
- **Mentions Légales**: Informations légales complètes

## Technologies

- React 18 avec TypeScript
- Vite pour le build
- Tailwind CSS pour le styling
- React Router pour la navigation
- Supabase pour la base de données et le stockage d'images
- Lucide React pour les icônes

## Configuration

### Variables d'Environnement

Les variables suivantes sont configurées dans `.env`:

```
VITE_SUPABASE_URL=votre_url_supabase
VITE_SUPABASE_ANON_KEY=votre_clé_supabase
VITE_WHATSAPP_NUMBER=243896846992
VITE_FACEBOOK_URL=https://www.facebook.com/share/1Rx6ZP6Hdo/?mibextid=wwXIfr
```

### Base de Données Supabase

Deux tables principales:

1. **menus**: Catégories de menus (Menu Classique, Menu Cocktail)
2. **dishes**: Tous les plats avec prix en CDF, descriptions, et chemins d'images

Un bucket de stockage **images** pour les photos de plats et de chefs.

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

## Build Production

```bash
npm run build
```

## Déploiement sur Netlify

1. Connectez votre dépôt GitHub à Netlify
2. Configurez les variables d'environnement dans Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

Le fichier `netlify.toml` est déjà configuré pour gérer le routing SPA.

## Commande via WhatsApp

Tous les boutons "Commander" ouvrent WhatsApp avec un message pré-rempli contenant:
- Le nom du plat
- Le prix en CDF

Numéro WhatsApp: +243 896 846 992

## Structure du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── DishCard.tsx
│   ├── WhatsAppButton.tsx
│   └── SEO.tsx
├── pages/              # Pages de l'application
│   ├── Home.tsx
│   ├── Menu.tsx
│   ├── Traiteur.tsx
│   ├── Contact.tsx
│   ├── MentionsLegales.tsx
│   └── NotFound.tsx
├── lib/               # Configuration Supabase
│   └── supabase.ts
├── utils/            # Utilitaires
│   └── whatsapp.ts
└── App.tsx           # Composant principal avec routing
```

## Ajout de Plats

Pour ajouter de nouveaux plats:

1. Téléchargez l'image dans Supabase Storage (bucket `images`)
2. Ajoutez une entrée dans la table `dishes` avec:
   - name: Nom du plat
   - slug: Identifiant unique (ex: poulet-au-feu-de-bois)
   - category: menu-classique ou menu-cocktail
   - price_cdf: Prix en Francs Congolais
   - description: Description du plat
   - image_path: URL publique de l'image Supabase
   - available: true/false

## Support

Pour toute question ou assistance:
- Téléphone: +243 896 846 992
- Email: contact@pmayfood.com
- Facebook: https://www.facebook.com/share/1Rx6ZP6Hdo/?mibextid=wwXIfr

## Licence

© 2025 Pmay Food. Tous droits réservés.
