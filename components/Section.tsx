import React from 'react';
import { motion } from 'framer-motion';

// Cast to any to avoid TS errors with current framer-motion version
const MotionH2 = motion.h2 as any;
const MotionP = motion.p as any;

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  lightBg?: boolean;
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  className = "", 
  children, 
  title, 
  subtitle,
  lightBg = false 
}) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 px-4 md:px-8 overflow-hidden ${lightBg ? 'bg-light' : 'bg-white'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {title && (
              <MotionH2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-primary mb-4 relative inline-block"
              >
                {title}
                <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-secondary rounded-full"></span>
              </MotionH2>
            )}
            {subtitle && (
              <MotionP 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-gray-600 max-w-2xl mx-auto text-lg mt-4"
              >
                {subtitle}
              </MotionP>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};