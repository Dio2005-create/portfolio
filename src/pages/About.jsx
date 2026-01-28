import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { Sparkles, Code, Zap } from 'lucide-react';

export const About = () => {
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
            À Propos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Moi</span>
          </h1>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-xl max-w-2xl mx-auto">
            Découvrez mon histoire, mes compétences et mon parcours professionnel
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mt-8"></div>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-16 mb-24 items-center"
        >
          {/* Left - Image */}
          <motion.div variants={itemVariants} className="flex items-center justify-center">
            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-3xl blur-3xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="absolute -inset-2 rounded-3xl border-2 border-gradient-to-r from-blue-500/50 to-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <img
                src={profile.image}
                alt={profile.name}
                className="w-80 h-80 rounded-3xl object-cover relative z-10 shadow-2xl shadow-blue-500/20 border border-slate-700/50"
              />
            </motion.div>
          </motion.div>

          {/* Right - Description */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white dark:text-white light:text-slate-900">
                {profile.about.title}
              </h2>
              <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-lg leading-relaxed">
                {profile.about.description}
              </p>
              <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-lg leading-relaxed">
                Je suis spécialisé dans la création de sites web modernes, performants et responsifs. Chaque projet est une opportunité d'apprendre et de créer quelque chose d'extraordinaire.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-700/50">
              {[
                { number: '50+', label: 'Projets' },
                { number: '30+', label: 'Clients' },
                { number: '5+', label: 'Ans' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    {stat.number}
                  </div>
                  <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div variants={itemVariants} className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Compétences</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {profile.about.skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, x: idx % 2 === 0 ? 10 : -10 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 dark:from-slate-800/50 dark:to-slate-700/50 light:from-white light:to-gray-50 border border-slate-700/50 dark:border-slate-700/50 light:border-gray-200 hover:border-blue-500/50 transition-all group cursor-pointer shadow-lg hover:shadow-blue-500/20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-colors">
                    <Sparkles className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white dark:text-white light:text-slate-900 group-hover:text-blue-400 transition-colors">
                    {skill}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-16 text-center">
            Mon <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Parcours</span>
          </h2>

          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              {
                icon: <Code className="w-6 h-6" />,
                title: 'Senior Developer',
                company: 'Tech Company',
                period: '2023 - Présent',
                description: 'Développement d\'applications web scalables et modernes avec technologies de pointe.',
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: 'Full Stack Developer',
                company: 'Digital Agency',
                period: '2021 - 2023',
                description: 'Création de sites web et applications pour clients variés, gestion de projets complets.',
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: 'Junior Developer',
                company: 'Startup Inc',
                period: '2020 - 2021',
                description: 'Apprentissage des technologies web modernes et développement de features.',
              },
            ].map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                className="p-8 rounded-2xl bg-gradient-to-r from-slate-800/50 to-slate-700/30 dark:from-slate-800/50 dark:to-slate-700/30 light:from-white light:to-gray-50 border border-slate-700/50 dark:border-slate-700/50 light:border-gray-200 hover:border-blue-500/50 transition-all shadow-lg hover:shadow-blue-500/20 group"
              >
                <div className="flex gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform flex-shrink-0">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900 group-hover:text-blue-400 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-blue-400 font-semibold">{exp.company}</p>
                      </div>
                      <span className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm font-medium px-3 py-1 rounded-lg bg-slate-700/30">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed ml-16">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
