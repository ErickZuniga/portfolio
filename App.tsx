import React from 'react';
import { Controls } from './components/Controls';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { Projects } from './components/Projects';
import { AnimatedBackground } from './components/AnimatedBackground';
import { LanguageProvider } from './LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <main className="min-h-screen relative selection:bg-primary-500 selection:text-white">
        <Controls />
        <AnimatedBackground />
        
        {/* Background noise texture overlay */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
        
        <div className="relative z-10">
          <Hero />
          <Timeline />
          
          <section className="py-12 lg:py-24 px-6 lg:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
              <Projects />
              <Education />
            </div>
          </section>

          <Skills />
          <Footer />
        </div>
      </main>
    </LanguageProvider>
  );
};

export default App;