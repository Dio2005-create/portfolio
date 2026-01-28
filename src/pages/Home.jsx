import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { profile } from '../data/profile';
import { ArrowRight, Download } from 'lucide-react';
import { generateCVPDF } from '../utils/cvPdfGenerator';

export const Home = () => {
  const handleDownloadPDF = () => {
    generateCVPDF(profile);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 light:from-gray-50 light:via-white light:to-gray-50 pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
        {/* Background gradient orbs */}
        <div className="absolute top-10 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-30 dark:opacity-20"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl opacity-30 dark:opacity-20"></div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-16 items-center relative z-10"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-block px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-transparent bg-clip-text text-sm font-semibold border border-blue-500/30 dark:border-blue-400/30 light:border-blue-600/20">
                👋 Bienvenue sur mon portfolio
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white dark:text-white light:text-slate-900">
              Salut, je suis{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {profile.name}
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-slate-300 dark:text-slate-300 light:text-slate-700 mb-6 font-semibold">
              {profile.title}
            </h2>

            <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-lg mb-10 leading-relaxed max-w-xl">
              {profile.description}
            </p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 flex-wrap"
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/30 hover:gap-3 group transform hover:scale-105"
              >
                Voir mes projets
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                onClick={handleDownloadPDF}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 rounded-xl font-semibold transition-all hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 backdrop-blur-sm cursor-pointer"
              >
                <Download size={20} />
                Télécharger mon CV
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 md:h-96 flex items-center justify-center"
          >
            {/* Gradient Orbs Background */}
            <motion.div
              className="absolute w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"
              animate={{
                x: [0, 40, -40, 0],
                y: [0, 40, -40, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            ></motion.div>
            <motion.div
              className="absolute w-72 h-72 bg-cyan-500/30 rounded-full blur-3xl"
              animate={{
                x: [0, -40, 40, 0],
                y: [0, -40, 40, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            ></motion.div>
            
            {/* Profile Image */}
            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative z-10 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-cyan-500/40 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <img
                src={profile.image}
                alt={profile.name}
                className="w-80 h-80 rounded-3xl object-cover relative z-10 shadow-2xl shadow-blue-500/30 border-2 border-blue-500/30 group-hover:border-blue-400 transition-all"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { number: '50+', label: 'Projets Complétés', icon: '📁' },
            { number: '30+', label: 'Clients Satisfaits', icon: '😊' },
            { number: '5+', label: 'Années Expérience', icon: '⭐' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, translateY: -5 }}
              className="group p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 dark:from-slate-800/50 dark:to-slate-700/50 light:from-white light:to-gray-50 border border-slate-700/50 dark:border-slate-700/50 light:border-gray-200 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-400 dark:text-slate-400 light:text-slate-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
