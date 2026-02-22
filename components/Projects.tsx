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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group flex flex-col h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary-500/50 dark:hover:border-primary-500/50 transition-all duration-300"
          >
            {project.image && (
              <div className="w-full h-48 md:h-56 overflow-hidden relative bg-slate-100 dark:bg-slate-800">
                <div className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img 
                  src={project.image} 
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to a placeholder if image doesn't exist
                    (e.target as HTMLImageElement).src = 'https://placehold.co/800x400/1e293b/334155?text=Preview+Pending';
                  }}
                />
              </div>
            )}
            
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold font-heading text-slate-800 dark:text-slate-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 -mr-2 -mt-2 text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 bg-slate-50 dark:bg-slate-800/50 hover:bg-primary-50 dark:hover:bg-primary-500/10 rounded-full transition-all duration-300"
                    aria-label={`Visit ${project.title}`}
                  >
                    <ExternalLinkIcon className="w-5 h-5" />
                  </a>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {project.tech && (
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};