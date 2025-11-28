import React from 'react';
import { GraduationCapIcon } from './Icons';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

export const Education: React.FC = () => {
  const { content } = useLanguage();
  const { education, ui } = content;

  return (
    <div className="flex flex-col h-full">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
          <GraduationCapIcon className="w-8 h-8" />
        </div>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900 dark:text-slate-100">
          {ui.education}
        </h2>
      </motion.div>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl hover:bg-white/80 dark:hover:bg-white/10 transition-colors duration-300 border-t-2 border-transparent hover:border-primary-500 shadow-sm hover:shadow-lg relative overflow-hidden group"
          >
            <div className="relative z-10">
                <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-2 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">
                {edu.school}
                </h3>
                <p className="text-primary-700 dark:text-primary-300 font-medium mb-4">
                {edu.degree}
                </p>
                <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-700/50 text-xs font-bold tracking-wider rounded text-slate-500 dark:text-slate-300 font-mono">
                {edu.years}
                </span>
            </div>
            
             {/* Decorative background Icon */}
             <GraduationCapIcon className="absolute -bottom-4 -right-4 w-24 h-24 text-slate-200 dark:text-slate-700/20 opacity-20 rotate-12 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};