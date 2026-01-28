# 🚀 Portfolio React Professional

Un portfolio moderne, responsive et animé créé avec **React**, **Vite**, **Tailwind CSS**, **Framer Motion** et **React Router**.

## ✨ Fonctionnalités

- ✅ **Design moderne** avec glassmorphism et gradients
- ✅ **Animations fluides** avec Framer Motion
- ✅ **Responsive** (mobile, tablet, desktop)
- ✅ **Dark Mode** par défaut
- ✅ **Pages multi-sections** (Home, About, Projects, Skills, Contact)
- ✅ **Formulaire de contact** fonctionnel
- ✅ **Navigation fluide** avec React Router
- ✅ **Personnalisation facile** via fichier de données

## 🛠️ Technologies Utilisées

- **React 19** - Bibliothèque UI
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Utilitaires CSS
- **Framer Motion** - Animations
- **React Router** - Navigation
- **Lucide React** - Icônes
- **EmailJS** - Formulaire de contact (optionnel)

## 📂 Structure du Projet

```
src/
├── components/        # Composants réutilisables
│   ├── Navigation.jsx
│   ├── Footer.jsx
│   ├── ProjectCard.jsx
│   └── SkillCard.jsx
├── pages/            # Pages principales
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   └── Contact.jsx
├── data/             # Données personnelles
│   └── profile.js    # ⭐ MODIFIEZ CE FICHIER
├── App.tsx
├── main.tsx
├── App.css
└── index.css
```

## 🎯 Comment Personnaliser

### 1. **Modifiez vos informations** (`src/data/profile.js`)

```javascript
export const profile = {
  name: "Votre Nom",
  title: "Votre Titre",
  description: "Votre description",
  image: "URL de votre photo",
  cv: "URL de votre CV",
  // ... autres informations
};
```

### 2. **Ajoutez vos projets**

Dans le fichier `profile.js`, modifiez l'array `projects`:

```javascript
{
  id: 1,
  title: "Titre du projet",
  description: "Description courte",
  image: "URL de l'image",
  technologies: ["React", "Node.js"],
  github: "https://github.com/...",
  live: "https://demo.example.com",
  featured: true, // Affiche en vedette
}
```

### 3. **Configurez le formulaire de contact**

#### Option A: Avec EmailJS (recommandé)

1. Allez sur [EmailJS](https://www.emailjs.com/)
2. Créez un compte gratuit
3. Créez un service email et un template
4. Dans `src/pages/Contact.jsx`, modifiez:

```javascript
await emailjs.sendForm(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formRef.current,
  'YOUR_PUBLIC_KEY'
);
```

5. Remplacez les IDs par vos vraies valeurs

#### Option B: Sans EmailJS (fonctionnel localement)

Le formulaire est déjà configuré pour fonctionner localement. Les données sont loggées dans la console.

### 4. **Mettez à jour les réseaux sociaux**

Dans `src/data/profile.js`:

```javascript
socials: [
  {
    name: "GitHub",
    url: "https://github.com/yourprofile",
    icon: "github",
  },
  // ... autres réseaux
]
```

### 5. **Personnalisez les couleurs**

Modifiez `tailwind.config.js` pour changer les couleurs:

```javascript
theme: {
  extend: {
    colors: {
      blue: {
        400: '#votre-couleur',
        // ...
      }
    }
  }
}
```

## 🚀 Installation et Démarrage

### Prérequis

- Node.js 18+ 
- npm ou yarn

### Étapes

```bash
# 1. Installer les dépendances
npm install

# 2. Démarrer le serveur de développement
npm run dev

# 3. Construire pour la production
npm run build

# 4. Prévisualiser la build de production
npm run preview
```

## 📄 Pages du Portfolio

### 🏠 **Home**
- Hero section avec présentation
- Bouton pour télécharger le CV
- Statistiques animées
- Gradient animé en arrière-plan

### 👤 **About**
- Photo de profil animée
- Description personnelle
- Compétences principales
- Timeline d'expérience

### 💼 **Projects**
- Projets en vedette
- Galerie complète
- Cartes de projets interactives
- Liens GitHub et Live Demo

### 🎨 **Skills**
- Compétences par catégorie
- Barres de progression animées
- Soft skills
- Niveaux d'expertise

### 📧 **Contact**
- Formulaire de contact
- Informations de contact
- Liens vers réseaux sociaux
- Feedback de soumission

## 🎨 Personnalisation Avancée

### Changer le logo de la navigation

Dans `src/components/Navigation.jsx`, modifiez:

```javascript
<h3>Votre Logo</h3>
```

### Ajouter plus de sections

1. Créez un nouveau fichier page: `src/pages/YourPage.jsx`
2. Importez dans `src/App.tsx`:

```javascript
import YourPage from './pages/YourPage';

<Route path="/your-page" element={<YourPage />} />
```

3. Ajoutez le lien dans `Navigation.jsx`

### Modifier les animations

Les animations utilisent Framer Motion. Consultez la [documentation](https://www.framer.com/motion/) pour plus d'options.

## 📱 Responsive Design

Le portfolio est entièrement responsive:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Les breakpoints sont définis dans `tailwind.config.js`.

## 🔧 Variables d'Environnement (optionnel)

Pour EmailJS, créez un fichier `.env.local`:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Puis utilisez dans le code:

```javascript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
```

## 📦 Déploiement

### Vercel (recommandé)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages

1. Modifiez `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
})
```

2. Commitez et poussez:
```bash
npm run build
git add dist/
git commit -m "Deploy"
git push
```

## 🎓 Ressources Utiles

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com)
- [Lucide Icons](https://lucide.dev)

## 📋 Checklist de Personnalisation

- [ ] Modifiez les infos personnelles dans `profile.js`
- [ ] Ajoutez vos projets
- [ ] Actualisez vos liens GitHub/LinkedIn
- [ ] Téléchargez votre CV
- [ ] Configurez EmailJS (optionnel)
- [ ] Testez le site en local
- [ ] Buildez et déployez

## 💡 Tips

1. **Images**: Utilisez des URLs externes (Imgur, CloudinCloud, etc.)
2. **Performance**: Optimisez les images avant de les utiliser
3. **SEO**: Modifiez le titre et la description dans `index.html`
4. **Domaine personnalisé**: Achetez un domaine et configurez le DNS

## 🐛 Dépannage

### Le site ne charge pas
- Vérifiez que `npm run dev` est lancé
- Vérifiez les erreurs dans la console du navigateur
- Videz le cache du navigateur

### Les animations ne fonctionnent pas
- Vérifiez que Framer Motion est installé: `npm install framer-motion`
- Vérifiez la console pour les erreurs JavaScript

### Le formulaire ne fonctionne pas
- Vérifiez la configuration EmailJS
- Vérifiez la console pour les erreurs
- Testez avec une requête simple d'abord

## 📞 Support

Pour plus d'aide:
- Consultez la documentation officielle
- Vérifiez les erreurs dans la console du navigateur
- Cherchez sur Stack Overflow

## 📄 Licence

Ce projet est open source et libre d'utilisation.

---

✨ **Bon portfolio!** N'hésitez pas à le customiser selon vos besoins. 🚀
