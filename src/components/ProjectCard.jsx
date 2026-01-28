import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export const ProjectCard = ({ project }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-700/50 dark:from-slate-800/50 dark:to-slate-700/50 light:from-white light:to-gray-50 border border-slate-700/50 dark:border-slate-700/50 light:border-gray-200 hover:border-blue-500/50 transition-all shadow-lg hover:shadow-2xl hover:shadow-blue-500/20"
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-slate-700/30">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-3 text-white dark:text-white light:text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all">
          {project.title}
        </h3>
        <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm mb-5 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 border border-blue-500/30 group-hover:border-blue-400/50 transition-all"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-slate-700/50 dark:border-slate-700/50 light:border-gray-200">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2.5 rounded-lg bg-slate-700/50 dark:bg-slate-700/50 light:bg-gray-100 hover:bg-slate-600 dark:hover:bg-slate-600 light:hover:bg-gray-200 text-center transition-all text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 flex items-center justify-center gap-2 group/link hover:text-blue-400"
          >
            <Github size={16} className="group-hover/link:scale-110 transition-transform" />
            Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-center transition-all text-sm font-medium shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2 group/link transform hover:scale-105"
          >
            <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
            Voir
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
