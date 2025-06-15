// TiltCard.tsx
import React, { useEffect, useRef } from 'react';
import VanillaTilt, { TiltOptions } from 'vanilla-tilt';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  options?: TiltOptions;
}

const TiltCard: React.FC<TiltCardProps> = ({ 
  children, 
  className = '',
  options = {
    max: 7,
    speed: 300,
    scale:1.01,
    glare: false,
    'max-glare': 0.1,
    reset:true
    
  }
}) => {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current } = tiltRef;
    if (current) {
      VanillaTilt.init(current, options);
    }
    return () => {
      if (current && (current as any).vanillaTilt) {
        (current as any).vanillaTilt.destroy();
      }
    };
  }, [options]);

  return (
    <div ref={tiltRef} className={`transform-gpu ${className}`}>
      {children}
    </div>
  );
};

export default TiltCard;