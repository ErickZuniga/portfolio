import React from 'react';
import { FaGitAlt, FaDocker, FaLinux, FaJs, FaPython, FaHtml5, FaNpm, FaPlug, FaDatabase, FaServer, FaCog, FaJava, FaBootstrap, FaCss3, FaAws } from 'react-icons/fa';
import { SiSpring, SiMendeley, SiJenkins, SiHibernate, SiJson, SiReact, SiCouchbase, SiSonarqube, SiTailwindcss } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { CodeIcon, ArrowUpIcon } from './Icons';

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
  'json': SiJson,
  'rest-api': FaPlug,
  'jenkins': SiJenkins,
  'grpc': FaPlug, // Using FaPlug as an alternative to Grpc
  globe: FaServer,
  server: FaServer,
  settings: FaCog,
  code: CodeIcon,
  react: SiReact,
  aws: FaAws,
  couchbase: SiCouchbase,
  sonarqube: SiSonarqube,
  tailwind: SiTailwindcss
};

export const Skills: React.FC = () => {
  const { content } = useLanguage();
  const { skills, ui } = content;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

            <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-12 gap-2">
            {skills.map((skill, idx) => {
                const IconComponent = skill.icon ? IconMap[skill.icon] : CodeIcon;
                
                return (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="group flex flex-col items-center justify-center p-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-lg hover:border-primary-500 dark:hover:border-primary-400 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 cursor-default text-center h-24"
                >
                    <div className="mb-4 text-slate-400 dark:text-slate-500 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors transform group-hover:scale-110 duration-300">
                    <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-medium text-xs text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    {skill.name}
                    </span>
                </motion.div>
                );
            })}
            </div>
        </motion.div>
        
        {/* Scroll to Top Button */}
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 hover:-translate-y-1"
            aria-label="Scroll to top"
          >
            <ArrowUpIcon className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
            <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {ui.backToTop}
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};