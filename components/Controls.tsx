
import React, { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from './Icons';
import { useLanguage } from '../LanguageContext';

export const Controls: React.FC = () => {
  const [isDark, setIsDark] = useState(true); // Default to Dark as requested
  const { language, setLanguage, content } = useLanguage();

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDark]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
        {/* Language Toggle */}
        <div className="relative group">
          <button
            onClick={toggleLanguage}
            className="h-10 px-4 rounded-full font-heading font-bold text-sm bg-white/80 dark:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/20 shadow-lg text-slate-700 dark:text-primary-300 hover:scale-105 transition-transform duration-300 flex items-center justify-center"
            aria-label={content.ui.languageLabel}
          >
            {language === 'en' ? 'ES' : 'EN'}
          </button>
          <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-white dark:bg-white dark:text-slate-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            {content.ui.languageLabel}
          </span>
        </div>

      {/* Theme Toggle */}
      <div className="relative group">
        <button
          onClick={() => setIsDark(!isDark)}
          className="h-10 w-10 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/20 shadow-lg text-slate-700 dark:text-primary-300 hover:scale-110 transition-transform duration-300 flex items-center justify-center"
          aria-label={content.ui.themeLabel}
        >
          {isDark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
        </button>
        <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-white dark:bg-white dark:text-slate-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          {content.ui.themeLabel}
        </span>
      </div>
    </div>
  );
};
