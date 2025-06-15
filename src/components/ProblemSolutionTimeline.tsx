import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Check, X, Lightbulb } from 'lucide-react';

const ProblemSolutionTimeline: React.FC = () => {
  const timelineItems = [
    {
      title: "The Problem",
      description: "Students waiting in long lines to print assignments, worksheets, reports and other documents. Because of the high demand, the shop owners are not able to handle the load.",
      icon: <AlertTriangle className="text-white" size={20} />,
      iconBg: "bg-amber-500"
    },
    {
      title: "The Pain It Caused",
      description: "Stress, wasted time, over-crowding, inconvenience and unnecessary frustration for both students and shop owners.",
      icon: <X className="text-white" size={20} />,
      iconBg: "bg-red-500"
    },
    {
      title: "What Others Missed",
      description: "Is the 'will' to solve the basic problem, Blinkit printing services are not available in our campus. So we created UniPrints.",
      icon: <AlertTriangle className="text-white" size={20} />,
      iconBg: "bg-purple-500"
    },
    {
      title: "How Arvana Solved It",
      description: "We placed our software 'Uniprints' in middle of students and shop owners. We create order with pre-payment confirmation and print the order at shop owner's end. User just have to go and pick the order.",
      icon: <Lightbulb className="text-white" size={20} />,
      iconBg: "bg-green-500"
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Problem → Solution Approach</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            How we transformed a common campus frustration into a seamless experience with UniPrints.
          </p>
        </div>
        
        <motion.div 
          className="relative max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Timeline connector */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-skyblue/30 transform md:-translate-x-1/2"></div>
          
          {timelineItems.map((item, index) => (
            <motion.div 
              key={item.title}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 ml-8 md:ml-auto'
              } md:w-1/2`}
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div 
                className={`absolute left-[-18px] md:left-auto ${
                  index % 2 === 0 ? 'md:right-[-18px]' : 'md:left-[-18px]'
                } top-1 w-9 h-9 rounded-full ${item.iconBg} flex items-center justify-center border-4 border-navy z-10`}
              >
                {item.icon}
              </div>
              
              <div className="bg-navy-light p-6 rounded-lg shadow-lg border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolutionTimeline;