import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Primary Blob - Top Left */}
      <motion.div 
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] min-w-[400px] min-h-[400px] bg-blue-400/50 dark:bg-primary-600/20 rounded-full blur-[60px] dark:blur-[80px] mix-blend-multiply dark:mix-blend-screen"
        animate={{ 
          x: [0, 100, -50, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.2, 0.9, 1],
          rotate: [0, 45, -45, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Secondary Blob - Bottom Right */}
      <motion.div 
        className="absolute -bottom-[10%] -right-[10%] w-[50vw] h-[50vw] min-w-[400px] min-h-[400px] bg-teal-400/50 dark:bg-teal-500/20 rounded-full blur-[60px] dark:blur-[80px] mix-blend-multiply dark:mix-blend-screen"
        animate={{ 
          x: [0, -70, 30, 0],
          y: [0, 50, -30, 0],
          scale: [1, 1.2, 0.95, 1],
          rotate: [0, -30, 30, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Accent Blob - Floating (Was Indigo, now Cyan) */}
      <motion.div 
        className="absolute top-[20%] right-[20%] w-[40vw] h-[40vw] min-w-[300px] min-h-[300px] bg-cyan-400/50 dark:bg-cyan-400/20 rounded-full blur-[70px] dark:blur-[100px] mix-blend-multiply dark:mix-blend-screen"
        animate={{ 
          x: [-50, 100, -100, -50],
          y: [-50, 100, -100, -50],
          scale: [1, 1.3, 0.8, 1],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

       {/* Fourth Blob - Bottom Left (Was Purple, now Sky) */}
       <motion.div 
        className="absolute bottom-[10%] left-[10%] w-[45vw] h-[45vw] min-w-[350px] min-h-[350px] bg-sky-300/50 dark:bg-indigo-500/20 rounded-full blur-[60px] dark:blur-[90px] mix-blend-multiply dark:mix-blend-screen"
        animate={{ 
          x: [0, 150, -100, 0],
          y: [0, -100, 100, 0],
          scale: [1, 0.8, 1.1, 1],
          rotate: [0, 60, -60, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
    </div>
  );
};