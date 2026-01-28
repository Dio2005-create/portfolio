import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { ProjectCard } from '../components/ProjectCard';

export const Projects = () => {
  const featuredProjects = profile.projects.filter((p) => p.featured);
  const otherProjects = profile.projects.filter((p) => !p.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
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
            Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Projets</span>
          </h1>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-xl max-w-2xl mx-auto">
            Une sélection de mes projets récents où j'ai mis mes compétences au service de solutions innovantes.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mt-8"></div>
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-20"
          >
            <h2 className="text-2xl font-bold mb-8">Projets en Vedette</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </motion.div>
        )}

        {/* All Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-8">Tous les Projets</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 p-12 rounded-3xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 dark:from-blue-500/20 dark:to-cyan-500/20 light:from-blue-50 light:to-cyan-50 border border-blue-500/30 dark:border-blue-500/30 light:border-blue-200 shadow-2xl shadow-blue-500/10"
        >
          <h3 className="text-3xl font-bold mb-4 text-center text-white dark:text-white light:text-slate-900">
            Vous avez un projet en tête?
          </h3>
          <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 mb-8 max-w-2xl mx-auto text-center text-lg">
            Je suis toujours intéressé par de nouveaux projets et collaborations. Parlons de ce que vous avez en mind!
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:your.email@example.com"
              className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl font-semibold transition-all shadow-lg hover:shadow-blue-500/30 transform hover:scale-105"
            >
              Parlons de votre projet
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
