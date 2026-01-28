import jsPDF from 'jspdf';

export const generateCVPDF = (profile) => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  // Couleurs
  const primaryColor = [59, 130, 246]; // blue-500
  const accentColor = [34, 197, 94]; // green-500
  const textDark = [15, 23, 42]; // slate-900
  const textLight = [100, 116, 139]; // slate-500

  let yPosition = 15;
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  const maxWidth = pageWidth - 2 * margin;

  // Helper functions
  const addText = (text, size, bold = false, color = textDark) => {
    doc.setFontSize(size);
    doc.setTextColor(color[0], color[1], color[2]);
    if (bold) doc.setFont(undefined, 'bold');
    else doc.setFont(undefined, 'normal');
    return doc.text(text, margin, yPosition);
  };

  const addTitle = (title) => {
    yPosition += 2;
    doc.setFontSize(14);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFont(undefined, 'bold');
    doc.text(title, margin, yPosition);
    yPosition += 8;
    // Ligne sous le titre
    doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.line(margin, yPosition - 2, margin + 40, yPosition - 2);
    yPosition += 3;
  };

  const checkPageBreak = (height = 10) => {
    if (yPosition + height > pageHeight - 10) {
      doc.addPage();
      yPosition = margin;
    }
  };

  // Header avec infos
  doc.setFontSize(24);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setFont(undefined, 'bold');
  doc.text(profile.name, margin, yPosition);
  yPosition += 10;

  doc.setFontSize(12);
  doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
  doc.setFont(undefined, 'normal');
  doc.text(profile.title, margin, yPosition);
  yPosition += 8;

  // Infos de contact
  doc.setFontSize(9);
  doc.setTextColor(textLight[0], textLight[1], textLight[2]);
  const contactInfo = [
    'contact@example.com',
    '+33 (0) 1 23 45 67 89',
    'Paris, France'
  ];
  doc.text(contactInfo.join(' • '), margin, yPosition);
  yPosition += 8;

  // Ligne séparatrice
  doc.setDrawColor(200, 200, 200);
  doc.line(margin, yPosition, pageWidth - margin, yPosition);
  yPosition += 6;

  // À Propos
  addTitle('À PROPOS');
  checkPageBreak(15);
  doc.setFontSize(10);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont(undefined, 'normal');
  const aboutText = 'Développeur Full Stack passionné avec 5+ années d\'expérience dans la création de solutions web innovantes. Spécialisé en React, Node.js et technologies cloud. Capable de mener des projets du conception à la mise en production, avec un focus sur la qualité, la performance et l\'expérience utilisateur.';
  const splitAbout = doc.splitTextToSize(aboutText, maxWidth);
  doc.text(splitAbout, margin, yPosition);
  yPosition += splitAbout.length * 3.5 + 5;

  // Expérience Professionnelle
  checkPageBreak(20);
  addTitle('EXPÉRIENCE PROFESSIONNELLE');

  const experience = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc',
      period: '2023 - Présent',
      description: 'Développement d\'applications web scalables utilisant React, Node.js et technologies cloud. Gestion d\'équipe de 3 développeurs.'
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Agency',
      period: '2021 - 2023',
      description: 'Création de sites e-commerce et applications web pour clients Fortune 500. Optimisation de performance et UX.'
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Tech',
      period: '2020 - 2021',
      description: 'Développement frontend et maintenance de code. Apprentissage des bonnes pratiques et des technologies modernes.'
    }
  ];

  experience.forEach((exp, idx) => {
    checkPageBreak(15);
    doc.setFontSize(11);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFont(undefined, 'bold');
    doc.text(exp.title, margin, yPosition);
    yPosition += 5;

    doc.setFontSize(9);
    doc.setTextColor(textLight[0], textLight[1], textLight[2]);
    doc.setFont(undefined, 'normal');
    doc.text(`${exp.company} | ${exp.period}`, margin, yPosition);
    yPosition += 5;

    doc.setFontSize(9);
    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    const splitDesc = doc.splitTextToSize(exp.description, maxWidth);
    doc.text(splitDesc, margin, yPosition);
    yPosition += splitDesc.length * 3.5 + 3;
  });

  // Formation
  checkPageBreak(15);
  addTitle('FORMATION');

  const education = [
    {
      degree: 'Licence en Informatique',
      school: 'Université de Paris',
      year: '2020',
      description: 'Spécialisation en Développement Web et Cloud Computing'
    },
    {
      degree: 'Certification React Avancée',
      school: 'Udemy & Coursera',
      year: '2022',
      description: 'Expert en React Hooks, Redux et performance optimization'
    }
  ];

  education.forEach((edu) => {
    checkPageBreak(12);
    doc.setFontSize(11);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFont(undefined, 'bold');
    doc.text(edu.degree, margin, yPosition);
    yPosition += 5;

    doc.setFontSize(9);
    doc.setTextColor(textLight[0], textLight[1], textLight[2]);
    doc.setFont(undefined, 'normal');
    doc.text(`${edu.school} | ${edu.year}`, margin, yPosition);
    yPosition += 5;

    doc.setFontSize(9);
    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.text(edu.description, margin, yPosition);
    yPosition += 6;
  });

  // Certifications
  checkPageBreak(15);
  addTitle('CERTIFICATIONS');

  const certifications = [
    'AWS Certified Solutions Architect - Associate',
    'Google Cloud Professional Data Engineer',
    'Scrum Master Certification',
    'Microsoft Azure Fundamentals'
  ];

  certifications.forEach((cert) => {
    checkPageBreak(8);
    doc.setFontSize(9);
    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont(undefined, 'normal');
    doc.text(`• ${cert}`, margin + 3, yPosition);
    yPosition += 6;
  });

  // Compétences
  checkPageBreak(20);
  addTitle('COMPÉTENCES');

  const skills = {
    'Frontend': ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux'],
    'Backend': ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL'],
    'Tools': ['Git', 'Docker', 'AWS', 'CI/CD', 'Webpack']
  };

  Object.entries(skills).forEach(([category, items]) => {
    checkPageBreak(8);
    doc.setFontSize(10);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFont(undefined, 'bold');
    doc.text(`${category}:`, margin, yPosition);
    
    doc.setFontSize(9);
    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont(undefined, 'normal');
    doc.text(items.join(', '), margin + 25, yPosition);
    yPosition += 6;
  });

  // Footer
  doc.setFontSize(8);
  doc.setTextColor(textLight[0], textLight[1], textLight[2]);
  doc.text(`Généré le ${new Date().toLocaleDateString('fr-FR')}`, margin, pageHeight - 8);

  // Télécharger
  doc.save(`CV_${profile.name.replace(' ', '_')}.pdf`);
};
