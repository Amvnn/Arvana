// src/components/AnimatedSection.tsx
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection = ({ children, className = '', delay = 0 }: AnimatedSectionProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { 
      once: true, 
      margin: "-50px 0px -50px 0px",
      amount: 0.1
    });
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
            delay: delay
          }
        } : {}}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

export default AnimatedSection;