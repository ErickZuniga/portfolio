import React from 'react';
import { MapPinIcon, MailIcon, LinkedinIcon, GithubIcon, ArrowDownIcon } from './Icons';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

export const Hero: React.FC = () => {
  const { content } = useLanguage();
  const { profile, ui } = content;

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('experience');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 lg:px-24 overflow-hidden pt-20 lg:pt-0">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start lg:items-center">
          
          {/* Left Content: Intro Text */}
          <motion.div 
            className="lg:col-span-8 relative z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="block text-primary-600 dark:text-primary-400 font-heading tracking-widest text-sm mb-4 uppercase">
              {ui.portfolio}
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-heading font-black text-slate-900 dark:text-slate-100 mb-6 leading-tight">
              {profile.name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-body text-slate-600 dark:text-slate-400 mb-8 border-l-4 border-primary-500 pl-4">
              {profile.title}
            </h2>
            
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed">
              {profile.summary}
            </p>
          </motion.div>

          {/* Right Content: Action Buttons */}
          <motion.div 
            className="lg:col-span-4 relative z-10 flex flex-col gap-4 items-start lg:items-end w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="flex flex-col w-full sm:w-auto min-w-[280px] gap-4">
              <a href={`mailto:${profile.email}`} className="group flex items-center justify-between gap-6 px-8 py-4 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-xl hover:bg-primary-600 dark:hover:bg-primary-300 transition-all duration-300 transform hover:-translate-y-1">
                <span className="font-bold tracking-wider">{ui.contactMe}</span>
                <MailIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              
              <a href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-6 px-8 py-4 glass-card border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 bg-white/50 dark:bg-slate-800/50 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 transform hover:-translate-y-1">
                <span className="font-bold tracking-wider">{ui.linkedin}</span>
                <LinkedinIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>

               <a href={`https://${profile.github}`} target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-6 px-8 py-4 glass-card border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 bg-white/50 dark:bg-slate-800/50 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 transform hover:-translate-y-1">
                <span className="font-bold tracking-wider">{ui.github}</span>
                <GithubIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              
              <div className="flex items-center justify-end gap-2 px-2 py-2 text-slate-500 dark:text-slate-400 mt-2">
                <MapPinIcon className="w-4 h-4" />
                <span className="font-mono text-sm">{profile.location}</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Scroll Down Button */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
      >
        <button 
          onClick={scrollToNextSection}
          className="group flex flex-col items-center gap-2 p-3 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 hover:-translate-y-1"
          aria-label="Scroll to next section"
        >
          <ArrowDownIcon className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
};