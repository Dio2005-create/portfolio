import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { Download, FileText, Award, Briefcase, GraduationCap } from 'lucide-react';
import { generateCVPDF } from '../utils/cvPdfGenerator';

export const CV = () => {
  const handleDownloadPDF = () => {
    generateCVPDF(profile);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const cvData = {
    experience: [
      {
        title: 'Senior Full Stack Developer',
        company: 'Tech Innovations Inc',
        period: '2023 - Présent',
        description: 'Développement d\'applications web scalables utilisant React, Node.js et technologies cloud. Gestion d\'équipe de 3 développeurs.',
        skills: ['React', 'Node.js', 'AWS', 'PostgreSQL']
      },
      {
        title: 'Full Stack Developer',
        company: 'Digital Solutions Agency',
        period: '2021 - 2023',
        description: 'Création de sites e-commerce et applications web pour clients Fortune 500. Optimisation de performance et UX.',
        skills: ['React', 'Express', 'MongoDB', 'Tailwind CSS']
      },
      {
        title: 'Junior Developer',
        company: 'StartUp Tech',
        period: '2020 - 2021',
        description: 'Développement frontend et maintenance de code. Apprentissage des bonnes pratiques et des technologies modernes.',
        skills: ['JavaScript', 'React', 'CSS', 'Git']
      },
    ],
    education: [
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
      },
    ],
    certifications: [
      'AWS Certified Solutions Architect - Associate',
      'Google Cloud Professional Data Engineer',
      'Scrum Master Certification',
      'Microsoft Azure Fundamentals'
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 light:from-gray-50 light:via-white light:to-gray-50 pt-20 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Mon <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Curriculum Vitae</span>
          </h1>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-xl max-w-2xl mx-auto mb-8">
            Découvrez mon parcours professionnel, mes compétences et mon expérience
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={handleDownloadPDF}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl font-semibold transition-all shadow-lg hover:shadow-blue-500/30"
            >
              <Download size={20} />
              Télécharger CV (PDF)
            </button>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 rounded-xl font-semibold transition-all"
            >
              <FileText size={20} />
              Imprimer
            </button>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mt-8"></div>
        </motion.div>

        {/* CV Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Profile Summary */}
          <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 dark:from-slate-800/50 dark:to-slate-700/50 light:from-white light:to-gray-50 border border-slate-700/50 dark:border-slate-700/50 light:border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-white dark:text-white light:text-slate-900">À Propos</h2>
            <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
              Développeur Full Stack passionné avec 5+ années d'expérience dans la création de solutions web innovantes. Spécialisé en React, Node.js et technologies cloud. Capable de mener des projets du conception à la mise en production, avec un focus sur la qualité, la performance et l'expérience utilisateur.
            </p>
          </motion.div>

          {/* Experience */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-blue-400" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Expérience Professionnelle</span>
            </h2>
            <div className="space-y-6">
              {cvData.experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 dark:from-slate-800/50 dark:to-slate-700/50 light:from-white light:to-gray-50 border border-slate-700/50 dark:border-slate-700/50 light:border-gray-200 hover:border-blue-500/50 transition-all shadow-lg hover:shadow-blue-500/20"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900">{exp.title}</h3>
                      <p className="text-blue-400 font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm font-medium px-3 py-1 rounded-lg bg-slate-700/30">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-cyan-400" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Formation</span>
            </h2>
            <div className="space-y-6">
              {cvData.education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 dark:from-slate-800/50 dark:to-slate-700/50 light:from-white light:to-gray-50 border border-slate-700/50 dark:border-slate-700/50 light:border-gray-200 hover:border-cyan-500/50 transition-all shadow-lg"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900">{edu.degree}</h3>
                      <p className="text-cyan-400 font-semibold">{edu.school}</p>
                    </div>
                    <span className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm font-medium">{edu.year}</span>
                  </div>
                  <p className="text-slate-300 dark:text-slate-300 light:text-slate-700">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Award className="w-8 h-8 text-green-400" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Certifications</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {cvData.certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 dark:from-slate-800/50 dark:to-slate-700/50 light:from-white light:to-gray-50 border border-slate-700/50 dark:border-slate-700/50 light:border-gray-200 hover:border-green-500/50 transition-all shadow-lg hover:shadow-green-500/20 flex items-center gap-4"
                >
                  <Award className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <p className="text-white dark:text-white light:text-slate-900 font-semibold">{cert}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Summary */}
          <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 dark:from-slate-800/50 dark:to-slate-700/50 light:from-white light:to-gray-50 border border-slate-700/50 dark:border-slate-700/50 light:border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-white dark:text-white light:text-slate-900">Compétences Clés</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-blue-400 mb-3">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux'].map(skill => (
                    <span key={skill} className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-cyan-400 mb-3">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL'].map(skill => (
                    <span key={skill} className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center p-8 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 dark:from-blue-500/20 dark:to-cyan-500/20 light:from-blue-50 light:to-cyan-50 border border-blue-500/30 dark:border-blue-500/30 light:border-blue-200"
          >
            <h3 className="text-2xl font-bold mb-4 text-white dark:text-white light:text-slate-900">Intéressé par ma candidature?</h3>
            <a
              href="mailto:contact@example.com"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl font-semibold transition-all shadow-lg hover:shadow-blue-500/30"
            >
              Me Contacter
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CV;
