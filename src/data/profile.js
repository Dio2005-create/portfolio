// 📝 DONNÉES PERSONNELLES - Modifiez ces informations pour personnaliser votre portfolio
export const profile = {
  // Informations personnelles
  name: "Claudio Joash",
  title: "Développeur Full Stack",
  description: "Créateur de solutions web modernes et performantes. Spécialisé en React, Node.js et technologies cloud.",
  image: "/src/assets/profil.jpg", // URL de votre photo
  
  // CV
  cv: "https://exemple.com/cv.pdf", // Lien vers votre CV
  
  // Réseaux sociaux
  socials: [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "linkedin",
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: "twitter",
    },
    {
      name: "Email",
      url: "mailto:your.email@example.com",
      icon: "mail",
    },
  ],
  
  // À propos
  about: {
    title: "À Propos",
    description: "Je suis un développeur passionné par la création de produits web innovants et user-friendly. Avec une expérience en conception et développement, je transforme des idées en solutions concrètes.",
    skills: [
      "JavaScript / TypeScript",
      "React & React Native",
      "Node.js & Express",
      "Tailwind CSS",
      "MongoDB & PostgreSQL",
      "Framer Motion",
      "REST APIs",
      "Git & GitHub",
    ],
  },
  
  // Projets
  projects: [
    {
      id: 1,
      title: "Plateforme E-commerce",
      description: "Plateforme e-commerce complète avec authentification, panier et paiement.",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      live: "https://exemple.com",
      featured: true,
    },
    {
      id: 2,
      title: "Application de Tâches",
      description: "Gestionnaire de tâches avec synchronisation en temps réel et notifications.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://exemple.com",
      featured: true,
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      description: "Dashboard interactif pour visualiser et analyser des données en temps réel.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
      github: "https://github.com",
      live: "https://exemple.com",
      featured: false,
    },
    {
      id: 4,
      title: "Chat Application",
      description: "Application de chat en temps réel avec authentification et salons multiples.",
      image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&h=300&fit=crop",
      technologies: ["React", "Socket.io", "Express", "MongoDB"],
      github: "https://github.com",
      live: "https://exemple.com",
      featured: false,
    },
    {
      id: 5,
      title: "Weather App",
      description: "Application météo avec localisation géographique et prévisions détaillées.",
      image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&h=300&fit=crop",
      technologies: ["React", "API Météo", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://exemple.com",
      featured: false,
    },
  ],
  
  // Compétences techniques
  techStack: [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Next.js"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "GraphQL", "REST APIs"] },
    { category: "Bases de Données", items: ["MongoDB", "PostgreSQL", "Firebase", "Redis"] },
    { category: "Outils", items: ["Git", "Docker", "CI/CD", "Figma", "Webpack"] },
  ],
  
  // Configuration EmailJS
  emailjs: {
    serviceId: "service_xxxxxxxxx", // Remplacez par votre Service ID
    templateId: "template_xxxxxxxxx", // Remplacez par votre Template ID
    publicKey: "xxxxxxxxx", // Remplacez par votre Public Key
  },
};

export default profile;
