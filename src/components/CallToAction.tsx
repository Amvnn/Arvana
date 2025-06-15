import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import BackgroundEffects from './BackgroundEffects';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-navy to-navy-light">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-navy-light border border-white/10 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 filter backdrop-blur-md">
            Have a problem that deserves a better solution?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for meaningful challenges to solve. If you have a problem that's causing real frustration, let's talk about how we can transform it into an elegant solution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-6 py-3 bg-skyblue hover:bg-skyblue-dark text-white font-medium rounded-md transition-colors flex items-center justify-center gap-2 group"
            >
              Partner with Us
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contact" 
              className="px-6 py-3 bg-transparent hover:bg-white/10 text-white font-medium rounded-md border border-white/20 transition-colors"
            >
              Launch a Product with Arvana
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;