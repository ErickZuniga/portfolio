import React from 'react';
import { ExternalLinkIcon, CodeIcon } from './Icons';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

export const Projects: React.FC = () => {
  const { content } = useLanguage();
  const { projects, ui } = content;

  return (
    <div className="flex flex-col h-full">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
          <CodeIcon className="w-8 h-8" />
        </div>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900 dark:text-slate-100">
          {ui.projects}
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 h-full">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300 group flex flex-col h-full border-t-2 border-transparent hover:border-primary-500 shadow-sm hover:shadow-lg"
          >
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold font-heading text-slate-800 dark:text-slate-100 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-slate-500 hover:text-primary-500 transition-colors"
                >
                  <ExternalLinkIcon className="w-5 h-5" />
                </a>
              </div>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            {project.tech && (
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-200 dark:border-slate-700/50">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs font-mono font-medium px-2 py-1 rounded bg-slate-50 dark:bg-slate-800 text-primary-700 dark:text-primary-400 border border-slate-200 dark:border-transparent">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};