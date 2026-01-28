import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { SkillCard } from '../components/SkillCard';

export const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 light:from-gray-50 light:via-white light:to-gray-50 pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Compétences</span>
          </h1>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-xl max-w-2xl mx-auto">
            Technologies et outils que j'utilise pour créer des solutions web de qualité.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mt-8"></div>
        </motion.div>

        {/* Skills by Category */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16 mb-24"
        >
          {profile.techStack.map((category, categoryIdx) => (
            <motion.div key={categoryIdx} variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center gap-3">
                <span className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></span>
                {category.category}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.items.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: skillIdx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <SkillCard skill={skill} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Soft <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Communication', description: 'Excellente capacité à communiquer avec les clients et l\'équipe.' },
              { title: 'Créativité', description: 'Création de solutions innovantes et design modern.' },
              { title: 'Résolution de problèmes', description: 'Approche analytique pour résoudre les problèmes complexes.' },
              { title: 'Gestion de projets', description: 'Expérience dans la gestion de projets Agile et Scrum.' },
            ].map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 dark:from-slate-800/50 dark:to-slate-700/50 light:from-white light:to-gray-50 border border-slate-700/50 dark:border-slate-700/50 light:border-gray-200 hover:border-blue-500/50 transition-all shadow-lg hover:shadow-blue-500/20"
              >
                <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{skill.title}</h3>
                <p className="text-slate-300 dark:text-slate-300 light:text-slate-700">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Level */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-16">
            Niveau <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Expertise</span>
          </h2>

          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              { name: 'Frontend Development', level: 95 },
              { name: 'Backend Development', level: 85 },
              { name: 'UI/UX Design', level: 80 },
              { name: 'Database Design', level: 80 },
            ].map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between mb-3 items-center">
                  <span className="font-semibold text-white dark:text-white light:text-slate-900 text-lg">{skill.name}</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-bold text-lg">{skill.level}%</span>
                </div>
                <div className="h-3 bg-slate-700/50 dark:bg-slate-700/50 light:bg-gray-200 rounded-full overflow-hidden border border-slate-700/50 dark:border-slate-700/50 light:border-gray-300 shadow-lg">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg shadow-cyan-500/30"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
