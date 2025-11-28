import React from 'react';
import { BriefcaseIcon } from './Icons';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

export const Timeline: React.FC = () => {
  const { content } = useLanguage();
  const { experiences, ui } = content;

  return (
    <section className="py-24 px-6 lg:px-24 bg-white/30 dark:bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
            <BriefcaseIcon className="w-8 h-8" />
          </div>
          <h2 className="text-4xl font-heading font-bold text-slate-900 dark:text-slate-100">
            {ui.experience}
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-12 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-16"
            >
              {/* Dot on line */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-slate-100 dark:bg-darkbg border-4 border-primary-500" />
              
              <div className="glass-card p-8 rounded-2xl hover:bg-white/80 dark:hover:bg-white/10 transition-colors duration-300 group">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                  <h3 className="text-2xl font-bold font-heading text-slate-800 dark:text-slate-100 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">
                    {exp.company}
                  </h3>
                  <span className="text-sm font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                    {exp.period.replace('Present', ui.present)}
                  </span>
                </div>
                
                <div className="text-lg font-medium text-primary-700 dark:text-primary-300 mb-2">
                  {exp.role}
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Tech Tags */}
                {exp.tech && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.tech.map((t, i) => (
                      <span key={i} className="text-xs font-mono font-medium px-2 py-1 rounded bg-slate-50 dark:bg-slate-800 text-primary-700 dark:text-primary-400 border border-slate-200 dark:border-transparent hover:border-primary-500 transition-colors cursor-default">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="flex items-center gap-4 text-sm text-slate-400 dark:text-slate-500 font-mono border-t border-slate-200 dark:border-slate-700 pt-4">
                  <span>{exp.location}</span>
                  {exp.duration && <span>• {exp.duration}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};