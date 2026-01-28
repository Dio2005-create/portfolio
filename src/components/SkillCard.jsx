import React from 'react';
import { motion } from 'framer-motion';

export const SkillCard = ({ skill }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.08 }}
      whileTap={{ scale: 0.98 }}
      className="group p-5 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 dark:from-slate-800/50 dark:to-slate-700/50 light:from-white light:to-gray-50 border border-slate-700/50 dark:border-slate-700/50 light:border-gray-200 hover:border-blue-500/50 text-center transition-all shadow-lg hover:shadow-blue-500/20 cursor-pointer"
    >
      <h4 className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:text-white dark:group-hover:text-white light:group-hover:text-slate-900 transition-all">
        {skill}
      </h4>
    </motion.div>
  );
};

export default SkillCard;
