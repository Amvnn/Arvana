import React from 'react';
import { motion } from 'framer-motion';
import { Target, Shield, Zap, Users } from 'lucide-react';

const MissionSection: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const coreValues = [
    { 
      icon: <Shield className="text-white" size={24} />,
      title: "Dependable",
      description: "Build tools people trust in their daily lives."
    },
    { 
      icon: <Target className="text-white" size={24} />,
      title: "Privacy-Centric",
      description: "Respect and protect every user’s data like your own."
    },
    { 
      icon: <Zap className="text-white" size={24} />,
      title: "Growth-Ready",
      description: "Design solutions that scale effortlessly with demand."
    },
    { 
      icon: <Users className="text-white" size={24} />,
      title: "Human-Centered",
      description: "Solve real pain points, not just digital problems."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy">Our Mission</h2>
          <p className="text-lg text-gray-600">
          At Arvana, our mission is to identify the everyday problems that most people overlook — and solve them with smart, simple, and scalable software. We believe real impact doesn’t come from unique or revolutionary ideas, but from filling the gaps(common problems that can be solved with simple approach) and make convenient to them. Because the greatest change often starts with solving the smallest, most common pain points in society.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              className="bg-navy rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-skyblue/20 rounded-lg flex items-center justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;