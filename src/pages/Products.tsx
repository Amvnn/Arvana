import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { Printer, Code, BookOpen, Users, MessageCirclePlus } from 'lucide-react';
import ParticlesBackground from '../components/ParticlesBackground';
import BackgroundEffects from '../components/BackgroundEffects';
import SuggestionForm, { SuggestionData } from '../components/SuggestionForm';
import NetworkBackground from '../components/NetworkBackground';

const Products: React.FC = () => {
  const [isSuggestionOpen, setIsSuggestionOpen] = useState(false);
  
  const handleSuggestionSubmit = (data: SuggestionData) => {
    // Here you would typically send the data to your backend
    console.log('Suggestion submitted:', data);
    // Show success message or redirect
  };

  const products = [
    {
      name: "UniPrints",
      icon: <Printer size={24} />,
      description: "Print your documents like Blinkit pritning service, Blinkit printing services are not available in our campus. So we created UniPrints.",
      url: "/products/uniprints",
      status: "Live" as const,
      category: "Campus Solutions",
      features: [
        "No waiting is the long lines",
        "Print your documents through UniPrints",
        "Real time order updates",
        "Isn't it Convenient?"
      ]
    },
    {
      name: "EduFlow",
      icon: <BookOpen size={24} />,
      description: "Streamlined academic workflow management for modern educational institutions.",
      url: "/products/eduflow",
      status: "In Progress" as const,
      category: "Education",
      features: [
        "Automated Scheduling",
        "Resource Management",
        "Analytics Dashboard",
        "Integration APIs"
      ]
    },
    {
      name: "CampusConnect",
      icon: <Users size={24} />,
      description: "Building stronger campus communities through intelligent networking.",
      url: "/products/campus-connect",
      status: "Coming Soon" as const,
      category: "Community",
      features: [
        "Event Organization",
        "Resource Sharing",
        "Community Forums",
        "Skills Exchange"
      ]
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
              Our Software Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-400 mb-8"
            >
              Each product is designed to solve a specific real-world challenge with elegant simplicity.
            </motion.p>
            <motion.button
              onClick={() => setIsSuggestionOpen(true)}
              className="inline-flex items-center px-6 py-3 bg-skyblue/10 hover:bg-skyblue/20 border border-skyblue/30 text-skyblue rounded-lg transition-all duration-300 group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCirclePlus size={20} className="mr-2" />
              Suggest a Problem
              <span className="ml-2 opacity-0 group-hover:opacity-100 group-hover:ml-3 transition-all duration-300">→</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      <div className="py-20 bg-navy relative overflow-hidden">
        <BackgroundEffects />
        
        {/* Add Network Background */}
        <div className="absolute inset-0 overflow-hidden">
          <NetworkBackground />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">Current Products</h2>
            <div className="mt-2 h-1 w-20 bg-gradient-to-r from-skyblue to-purple-500 rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Don't see what you're looking for?</h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Have a specific problem that needs solving? We're always looking for new challenges to tackle.
              </p>
              <button
                onClick={() => setIsSuggestionOpen(true)}
                className="px-6 py-3 bg-skyblue/10 hover:bg-skyblue/20 border border-skyblue/30 text-skyblue rounded-lg transition-all duration-300 group inline-flex items-center"
              >
                <MessageCirclePlus size={20} className="mr-2" />
                Suggest a Problem
                <span className="ml-2 opacity-0 group-hover:opacity-100 group-hover:ml-3 transition-all duration-300">→</span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Suggestion Form Modal */}
      <SuggestionForm 
        isOpen={isSuggestionOpen} 
        onClose={() => setIsSuggestionOpen(false)}
        onSubmit={handleSuggestionSubmit}
      />
    </>
  );
};

export default Products;