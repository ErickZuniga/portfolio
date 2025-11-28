import React from 'react';
import { GraduationCapIcon, CodeIcon, JavaIcon, SpringIcon, GitIcon, DatabaseIcon, DockerIcon, TerminalIcon, JavascriptIcon, PythonIcon, GlobeIcon, ServerIcon, SettingsIcon } from './Icons';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const IconMap: Record<string, React.FC<{ className?: string }>> = {
  java: JavaIcon,
  spring: SpringIcon,
  maven: SettingsIcon,
  git: GitIcon,
  db: DatabaseIcon,
  docker: DockerIcon,
  linux: TerminalIcon,
  js: JavascriptIcon,
  python: PythonIcon,
  html: GlobeIcon,
  globe: GlobeIcon,
  server: ServerIcon,
  settings: SettingsIcon,
  code: CodeIcon
};

export const SkillsEducation: React.FC = () => {
  const { content } = useLanguage();
  const { education, skills, ui } = content;

  return (
    <section className="py-24 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Education Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
              <GraduationCapIcon className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-slate-100">
              {ui.education}
            </h2>
          </div>

          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.id} className="relative overflow-hidden p-8 bg-slate-100 dark:bg-slate-800/50 rounded-tl-3xl rounded-br-3xl border-l-4 border-primary-500">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {edu.school}
                </h3>
                <p className="text-primary-700 dark:text-primary-300 font-medium mb-4">
                  {edu.degree}
                </p>
                <span className="inline-block px-3 py-1 bg-white dark:bg-slate-700 text-xs font-bold tracking-wider rounded text-slate-500 dark:text-slate-300">
                  {edu.years}
                </span>
                
                {/* Decorative background Icon */}
                <GraduationCapIcon className="absolute -bottom-4 -right-4 w-32 h-32 text-slate-200 dark:text-slate-700 opacity-20 rotate-12" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills Column - Now Grid with Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
           <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
              <CodeIcon className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-slate-100">
              {ui.skills}
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((skill, idx) => {
              const IconComponent = skill.icon ? IconMap[skill.icon] : CodeIcon;
              
              return (
                <div 
                  key={idx}
                  className="group flex flex-col items-center justify-center p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-xl hover:border-primary-500 dark:hover:border-primary-400 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 cursor-default text-center h-32"
                >
                  <div className="mb-3 text-slate-400 dark:text-slate-500 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <span className="font-medium text-sm text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};