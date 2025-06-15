import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter, Mail } from 'lucide-react';
import founderImage from '../Assets/Founder.png';

const AboutFounder: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
             <div className="absolute -inset-1 bg-gradient-to-br from-skyblue to-purple-500 rounded-xl blur opacity-20"></div>
            <div className="relative aspect-[4/5] bg-gray-200 rounded-xl overflow-hidden">
              <img 
                src={founderImage} 
                alt="Founder of Arvana" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <span className="text-skyblue font-medium">Founder & Vision</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">About the Founder</h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                As the founder of Arvana, I'm driven by one simple belief: technology should make real life easier — not more complicated.
              </p>
              <p>
                To me, skills aren't just for getting jobs. They're for building what society needs but hasn't yet demanded. For creating tools that remove friction, reduce stress, and bring meaningful change to real people's lives.
              </p>
              <p>
                That's why I started Arvana — not to build "cool apps," but to solve overlooked, everyday problems with thoughtful, scalable software.
              </p>
              <p>
                Our first product, UniPrints, was born from seeing students on campus struggle with something as basic as printing documents. It should've taken seconds. Instead, it stole time and caused stress. We fixed that — with one focused, frictionless solution.
              </p>
              <p>
                And that's just the beginning. At Arvana, we believe the most impactful innovation isn't loud — it's useful. We don't build for attention. We build for outcomes. Because real software doesn't just work — it matters.
              </p>
            </div>
            
            <blockquote className="pl-4 border-l-4 border-skyblue italic text-gray-700">
              "Every skill you master should serve people. Every line of code should solve something real. That's how we build at Arvana."
            </blockquote>

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-gray-600 mb-3 font-medium">Connect with me:</p>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/your-profile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-skyblue transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={22} />
                </a>
                <a 
                  href="https://github.com/your-username" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-skyblue transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={22} />
                </a>
                <a 
                  href="https://twitter.com/your-handle" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-skyblue transition-colors"
                  aria-label="Twitter Profile"
                >
                  <Twitter size={22} />
                </a>
                <a 
                  href="mailto:your.email@example.com" 
                  className="text-gray-500 hover:text-skyblue transition-colors"
                  aria-label="Email"
                >
                  <Mail size={22} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;