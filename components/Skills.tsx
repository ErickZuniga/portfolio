import React from 'react';
import { FaGitAlt, FaDocker, FaLinux, FaJs, FaPython, FaHtml5, FaNpm, FaPlug, FaDatabase, FaServer, FaCog, FaJava, FaBootstrap, FaCss3 } from 'react-icons/fa';
import { SiSpring, SiMendeley, SiJenkins, SiHibernate } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { CodeIcon } from '../components/Icons.tsx';

const IconMap: Record<string, React.FC<{ className?: string }>> = {
  java: FaJava,
  'spring-boot': SiSpring,
  maven: SiMendeley,
  git: FaGitAlt,
  db: FaDatabase,
  docker: FaDocker,
  linux: FaLinux,
  js: FaJs,
  python: FaPython,
  'html5': FaHtml5,
  'css3': FaCss3,
  'bootstrap': FaBootstrap,
  hibernate: SiHibernate,
  'json': FaNpm,
  'rest-api': FaPlug,
  'jenkins': SiJenkins,
  'grpc': FaPlug, // Using FaPlug as an alternative to Grpc
  globe: FaServer,
  server: FaServer,
  settings: FaCog,
  code: CodeIcon
};

export const Skills: React.FC = () => {
  const { content } = useLanguage();
  const { skills, ui } = content;

  return (
    <section className="py-24 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
        >
            <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
                <CodeIcon className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-heading font-bold text-slate-900 dark:text-slate-100">
                {ui.skills}
            </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, idx) => {
                const IconComponent = skill.icon ? IconMap[skill.icon] : CodeIcon;
                
                return (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="group flex flex-col items-center justify-center p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-xl hover:border-primary-500 dark:hover:border-primary-400 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 cursor-default text-center h-40"
                >
                    <div className="mb-4 text-slate-400 dark:text-slate-500 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors transform group-hover:scale-110 duration-300">
                    <IconComponent className="w-10 h-10" />
                    </div>
                    <span className="font-medium text-base text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    {skill.name}
                    </span>
                </motion.div>
                );
            })}
            </div>
        </motion.div>
      </div>
    </section>
  );
};