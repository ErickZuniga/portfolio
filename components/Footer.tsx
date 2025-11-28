import React from 'react';
import { useLanguage } from '../LanguageContext';

export const Footer: React.FC = () => {
  const { content } = useLanguage();
  const { profile, ui } = content;

  return (
    <footer className="py-12 bg-slate-900 text-slate-400 text-center border-t border-slate-800">
      <div className="container mx-auto px-6">
        <h3 className="font-heading text-2xl text-slate-100 mb-4">{profile.name}</h3>
        <p className="mb-8 max-w-md mx-auto text-sm opacity-70">
          {ui.footerTagline}
        </p>
        <div className="text-xs font-mono opacity-50">
          &copy; {new Date().getFullYear()} {ui.footerRights}
        </div>
      </div>
    </footer>
  );
};