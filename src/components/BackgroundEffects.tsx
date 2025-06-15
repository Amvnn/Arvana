import React from 'react';
import { motion } from 'framer-motion';

interface BackgroundEffectsProps {
  variant?: 'default' | 'light' | 'dark';
}

const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({ variant = 'default' }) => {
  const colors = {
    default: {
      primary: 'from-skyblue/10 to-purple-500/10',
      secondary: 'from-purple-500/10 to-skyblue/10'
    },
    light: {
      primary: 'from-skyblue/5 to-purple-500/5',
      secondary: 'from-purple-500/5 to-skyblue/5'
    },
    dark: {
      primary: 'from-skyblue/20 to-purple-500/20',
      secondary: 'from-purple-500/20 to-skyblue/20'
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className={`absolute top-20 left-10 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br ${colors[variant].primary} blur-3xl`}
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
        className={`absolute bottom-20 right-10 w-[35rem] h-[35rem] rounded-full bg-gradient-to-bl ${colors[variant].secondary} blur-3xl`}
      />
    </div>
  );
};

export default BackgroundEffects;