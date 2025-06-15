import React from 'react';
import { motion } from 'framer-motion';
import { Ear, Puzzle as PuzzlePiece, Code, Rocket } from 'lucide-react';

const HowWeWork: React.FC = () => {
  const workSteps = [
    {
      icon: <Ear size={24} className="text-white" />,
      title: "Listen to the Problem",
      description: "We start by deeply understanding the frustration points. We research actual user experiences and identify the core pain points that need solving."
    },
    {
      icon: <PuzzlePiece size={24} className="text-white" />,
      title: "Break It Down",
      description: "Our team dissects the problem to its foundational elements. We isolate the core issues that, when solved, will create the most significant impact."
    },
    {
      icon: <Code size={24} className="text-white" />,
      title: "Build Thoughtfully",
      description: "We craft elegant software solutions with intention. Every feature serves a purpose, creating experiences that feel invisible yet powerful."
    },
    {
      icon: <Rocket size={24} className="text-white" />,
      title: "Deliver Fast",
      description: "We launch quickly and iterate based on real feedback. Continuous improvement is built into our process, always keeping the user's needs at the center."
    }
  ];

  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-4 md:px-6">
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Step number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-skyblue flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              
              {/* Step card */}
              <div className="bg-navy-light border border-white/10 rounded-xl p-6 h-full shadow-lg">
                <div className="w-12 h-12 bg-skyblue/20 rounded-lg flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
              
              {/* Connector (not for the last item) */}
              {index < workSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-skyblue/30"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;