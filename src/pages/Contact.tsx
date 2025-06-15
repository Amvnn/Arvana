import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { MapPin, Mail, Clock } from 'lucide-react';
import ParticlesBackground from '../components/ParticlesBackground';
import BackgroundEffects from '../components/BackgroundEffects';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} className="text-skyblue" />,
      title: "Email",
      content: "contact@arvana.tech",
      link: "mailto:contact@arvana.tech"
    },
    {
      icon: <MapPin size={24} className="text-skyblue" />,
      title: "Location",
      content: "Remote-first company",
      link: ""
    },
    {
      icon: <Clock size={24} className="text-skyblue" />,
      title: "Hours",
      content: "Monday - Friday: 9am - 5pm",
      link: ""
    }
  ];

  return (
    <>
      <div className="bg-navy pt-20 pb-16 relative overflow-hidden">
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
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
            >
              Contact Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-400 mb-8"
            >
              We'd love to hear from you. Get in touch with our team.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {contactInfo.map((item, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-skyblue/30 transition-all duration-300 hover:shadow-lg hover:shadow-skyblue/10"
              >
                <div className="w-12 h-12 rounded-xl bg-skyblue/10 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                {item.link ? (
                  <a 
                    href={item.link} 
                    className="text-gray-400 hover:text-skyblue transition-colors"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-gray-400">{item.content}</p>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="relative bg-navy -mt-8 pt-8">
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;