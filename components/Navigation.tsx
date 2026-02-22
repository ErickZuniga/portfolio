import React, { useEffect, useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { FiHome, FiCode, FiBriefcase, FiBookOpen, FiPenTool } from 'react-icons/fi';

export const Navigation: React.FC = () => {
  const { content } = useLanguage();
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', icon: <FiHome size="1.2rem" />, label: 'Home' },
    { id: 'portfolio', icon: <FiCode size="1.2rem" />, label: content.ui.portfolio },
    { id: 'experience', icon: <FiBriefcase size="1.2rem" />, label: content.ui.experience },
    { id: 'education', icon: <FiBookOpen size="1.2rem" />, label: content.ui.education },
    { id: 'skills', icon: <FiPenTool size="1.2rem" />, label: content.ui.skills },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const pageYOffset = window.scrollY;
      let newActiveSection = 'hero';

      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop;
          if (pageYOffset >= offsetTop - 400) {
            newActiveSection = id;
          }
        }
      });

      setActiveSection(newActiveSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-slate-900/80 dark:bg-white/10 backdrop-blur-md border border-slate-700/50 dark:border-white/20 shadow-xl">
        {sections.map(({ id, icon, label }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`group relative flex items-center justify-center p-3 rounded-full transition-all duration-300 ${
                isActive 
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30' 
                  : 'text-slate-400 hover:text-white dark:hover:text-white hover:bg-slate-700 dark:hover:bg-white/10'
              }`}
              aria-label={label}
            >
              {icon}
              <span className="absolute bottom-full mb-3 px-2 py-1 bg-slate-800 text-white text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden md:block border border-slate-700">
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
