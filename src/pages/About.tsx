import React from 'react';
import { motion } from 'framer-motion';
import AboutFounder from '../components/AboutFounder';
import ParticlesBackground from '../components/ParticlesBackground';
import BackgroundEffects from '../components/BackgroundEffects';
import { Code, Rocket, Heart, Zap } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Code className="text-skyblue" size={24} />,
      title: "Technical Excellence",
      description: "Building robust, scalable solutions that stand the test of time."
    },
    {
      icon: <Heart className="text-skyblue" size={24} />,
      title: "User-First Approach",
      description: "Every decision is made with our users' needs at the forefront."
    },
    {
      icon: <Rocket className="text-skyblue" size={24} />,
      title: "Innovation Focus",
      description: "Pushing boundaries while solving real-world problems."
    },
    {
      icon: <Zap className="text-skyblue" size={24} />,
      title: "Rapid Delivery",
      description: "Quick iterations based on user feedback and needs."
    }
  ];

  return (
    <>
      <div className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <ParticlesBackground />
        <BackgroundEffects variant="dark" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
            >
              Who I am
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-400"
            >
             I'm Aman — a backend architect and ethical hacker, driven by precision and security.
            </motion.p>
          </motion.div>
        </div>
      </div>
      
      <AboutFounder />
      
      <section className="py-20 bg-navy relative overflow-hidden">
        <BackgroundEffects variant="light" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Our Core Values
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-navy/50 rounded-lg flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-navy-dark relative overflow-hidden">
        <BackgroundEffects />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-white mb-12"
            >
              Our Journey
            </motion.h2>
            
            <div className="max-w-3xl mx-auto relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-skyblue/50 to-purple-500/50"></div>
              
              {[
                { year: "2025", title: "Foundation", description: "Arvana founded with a mission to solve real-world problems through software" },
                { year: "2025", title: "First Product", description: "Launch of UniPrints, our first product solving campus printing challenges" },
                { year: "Future", title: "Growth", description: "Expanding our suite of problem-solving software products" }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative mb-16 last:mb-0"
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 w-6 h-6 rounded-full bg-gradient-to-r from-skyblue to-purple-500"></div>
                  <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl max-w-md mx-auto border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-2">{milestone.year}</h3>
                    <h4 className="text-skyblue font-medium mb-2">{milestone.title}</h4>
                    <p className="text-gray-400">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;