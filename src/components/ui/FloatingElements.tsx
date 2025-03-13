import React from 'react';
import { motion } from 'framer-motion';

interface FloatingElementsProps {
  className?: string;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ className }) => {
  const elements = [
    { id: 1, size: 90, x: '8%', y: '15%', delay: 0, color: 'rgba(99, 102, 241, 0.2)' },
    { id: 2, size: 70, x: '85%', y: '12%', delay: 0.5, color: 'rgba(236, 72, 153, 0.2)' },
    { id: 3, size: 60, x: '82%', y: '70%', delay: 1, color: 'rgba(34, 211, 238, 0.2)' },
    { id: 4, size: 80, x: '12%', y: '75%', delay: 1.5, color: 'rgba(168, 85, 247, 0.2)' },
    { id: 5, size: 50, x: '45%', y: '82%', delay: 2, color: 'rgba(245, 158, 11, 0.2)' },
    { id: 6, size: 40, x: '35%', y: '30%', delay: 2.5, color: 'rgba(16, 185, 129, 0.2)' },
  ];

  const codeElements = [
    {
      id: 1,
      content: '{}',
      size: 'h-14 w-14',
      position: { top: '35%', left: '20%' },
      delay: 0.2,
      yDuration: 4,
      rotateDuration: 6
    },
    {
      id: 2,
      content: '</>',
      size: 'h-16 w-16',
      position: { top: '65%', right: '25%' },
      delay: 0.8,
      yDuration: 5,
      rotateDuration: 7
    },
    {
      id: 3,
      content: '[]',
      size: 'h-12 w-12',
      position: { top: '25%', right: '35%' },
      delay: 1.2,
      yDuration: 4.5,
      rotateDuration: 6.5
    }
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute rounded-full shadow-lg"
          style={{
            left: el.x,
            top: el.y,
            width: el.size,
            height: el.size,
            background: `radial-gradient(circle at center, ${el.color}, rgba(255, 255, 255, 0.05) 70%)`,
            border: `1px solid ${el.color}`,
            backdropFilter: 'blur(8px)',
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: 0.8, 
            scale: [1, 1.1, 1],
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            delay: el.delay,
            opacity: { duration: 1.2 },
            scale: { 
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut"
            },
            y: { 
              repeat: Infinity, 
              duration: 4 + el.id, 
              ease: "easeInOut"
            },
            rotate: {
              repeat: Infinity,
              duration: 12,
              ease: "easeInOut"
            }
          }}
        />
      ))}
      
      {codeElements.map((el) => (
        <motion.div
          key={el.id}
          className={`absolute ${el.size} rounded-lg bg-white/15 dark:bg-gray-800/25 
            backdrop-blur-md border-2 border-white/40 dark:border-gray-700/40 
            flex items-center justify-center shadow-xl
            hover:border-primary/50 transition-colors duration-300`}
          style={el.position}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: [0, -12, 0],
            rotate: [0, 8, 0, -8, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            delay: el.delay,
            opacity: { duration: 1.2 },
            y: { 
              repeat: Infinity, 
              duration: el.yDuration, 
              ease: "easeInOut"
            },
            rotate: {
              repeat: Infinity,
              duration: el.rotateDuration,
              ease: "easeInOut"
            },
            scale: {
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut"
            }
          }}
        >
          <div className="text-primary text-xl font-mono font-bold">{el.content}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
