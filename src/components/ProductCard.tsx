import React from 'react';
import { Link } from 'react-router-dom';
import { Printer, ArrowRight, Code, BookOpen, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';


interface ProductCardProps {
  name: string;
  icon: React.ReactNode;
  description: string;
  url: string;
  status: 'Live' | 'In Progress' | 'Coming Soon';
  category: string;
  features?: string[];
  problem?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  name, 
  icon, 
  description, 
  url, 
  status, 
  category,
  features,
  problem
}) => {
  const statusColors = {
    'Live': 'bg-green-100 text-green-800',
    'In Progress': 'bg-yellow-100 text-yellow-800',
    'Coming Soon': 'bg-gray-100 text-gray-800'
  };
  
  return (
    <TiltCard>
      <div className="relative h-full bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden shadow-xl border border-white/10 group hover:border-skyblue/30 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-skyblue/10 to-purple-500/10 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative p-6 space-y-4 h-full flex flex-col">
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-skyblue/10 rounded-lg flex items-center justify-center text-skyblue backdrop-blur-sm">
                {icon}
              </div>
              <span className={`inline-block py-1 px-2 rounded-full text-xs font-medium ${statusColors[status]} backdrop-blur-sm`}>
                {status}
              </span>
            </div>
            
            <div className="mt-4">
              <span className="text-xs font-medium text-gray-300/80">{category}</span>
              <h3 className="text-xl font-bold text-white mt-1">{name}</h3>
              <p className="mt-2 text-gray-300/90">{description}</p>
              
              {features && (
                <div className="mt-4 space-y-2">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-300/90">
                      <Zap size={14} className="text-skyblue/90" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="pt-4 border-t border-white/10">
            <Link 
              to={url} 
              className="flex items-center justify-between text-skyblue/90 font-medium hover:text-skyblue-light/90 transition-colors"
            >
              <span>Explore Details</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </TiltCard>
  );
};

const FeaturedProducts: React.FC = () => {
  const products = [
    {
      name: "UniPrints",
      icon: <Printer size={24} />,
      description: "Inspired by Blinkit’s instant service, our solution eliminates queues and errors. Plus, directly connect to local print shops for urgent orders—skip the wait, get prints on your terms.",
      url: "/products/uniprints",
      status: "Live" as const,
      category: "Campus Solutions",
      features: [
        "Smart Queue Management",
        "Real-time Status Tracking",
        "Mobile-first Experience",
        "Cross-platform Support"
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
    <section className="py-20 bg-navy relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-skyblue/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Featured Products
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
           Software so seamless, you'll forget we existed.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
export { ProductCard };