import React from 'react';
import { motion } from 'framer-motion';
import HowWeWork from '../components/HowWeWork';
import CallToAction from '../components/CallToAction';
import ParticlesBackground from '../components/ParticlesBackground';
import BackgroundEffects from '../components/BackgroundEffects';

const HowWeWorkPage: React.FC = () => {
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
              How We Work
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-400"
            >
              Our approach combines empathy with efficiency to build solutions that truly matter.
            </motion.p>
          </motion.div>
        </div>
      </div>
      
      <HowWeWork />
      
      <section className="py-20 bg-navy relative overflow-hidden">
        <BackgroundEffects />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Process in Depth</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              {
                title: "Research & Discovery",
                items: [
                  "Identify pain points through user interviews",
                  "Analyze existing solutions and their limitations",
                  "Map the entire user journey to find friction points",
                  "Validate the problem with potential users"
                ]
              },
              {
                title: "Ideation & Design",
                items: [
                  "Brainstorm multiple solution approaches",
                  "Create user flows that eliminate friction",
                  "Rapid prototyping of core functionality",
                  "Early user testing to validate design direction"
                ]
              },
              {
                title: "Development & Testing",
                items: [
                  "Focus on reliability and security from day one",
                  "Iterative development with continuous user feedback",
                  "Build scalable architecture for future growth",
                  "Comprehensive testing in real-world scenarios"
                ]
              },
              {
                title: "Launch & Iteration",
                items: [
                  "Early access for core user groups",
                  "Data-driven refinement based on actual usage",
                  "Regular feature updates based on user needs",
                  "Continuous monitoring of impact metrics"
                ]
              }
            ].map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all hover:transform hover:scale-105"
              >
                <h3 className="text-xl font-bold text-white mb-4">{section.title}</h3>
                <ul className="space-y-3 text-gray-300">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <span className="text-skyblue font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <CallToAction />
    </>
  );
};

export default HowWeWorkPage;