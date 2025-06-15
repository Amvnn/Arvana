import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

const Hero: React.FC = () => {
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    })
  };

  const companyName = "Arvana".split("");

  return (
    <div className="bg-navy min-h-screen flex items-center relative overflow-hidden">
      <ParticlesBackground />
      
      {/* Animated gradient backgrounds */}
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
          className="absolute top-20 left-10 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-skyblue/10 to-purple-500/10 blur-3xl"
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
          className="absolute bottom-20 right-10 w-[35rem] h-[35rem] rounded-full bg-gradient-to-bl from-purple-500/10 to-skyblue/10 blur-3xl"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center space-x-4 mb-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Code size={48} className="text-skyblue" />
            </motion.div>
            <div className="flex">
              {companyName.map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  className="text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight font-['SF Pro Display']"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="space-y-6"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="inline-block py-2 px-4 rounded-full bg-gradient-to-r from-skyblue/20 to-purple-500/20 text-skyblue text-sm font-medium backdrop-blur-sm border border-white/10"
            >
              Innovation for Everyday Needs
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            You’ll miss us - Once the frustration’s gone.
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The Church of Good Enough burned down.
            We lit the match.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link 
            to="/products" 
            className="group px-8 py-4 bg-gradient-to-r from-skyblue to-skyblue-dark text-white rounded-xl font-medium hover:shadow-lg hover:shadow-skyblue/20 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
          >
            Explore Our Products
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            to="/products/uniprints" 
            className="px-8 py-4 bg-white/5 backdrop-blur-lg border border-white/10 text-white rounded-xl font-medium hover:bg-white/10 transition-all transform hover:scale-105 hover:shadow-lg"
          >
            Get Started with UniPrints
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;