import React, { Children } from 'react';
import { motion } from 'framer-motion';
interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
}
const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  once = false,
  delay = 0
}) => {
  const words = text.split(' ');
  const container = {
    hidden: {
      opacity: 0
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: delay * i
      }
    })
  };
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  };
  return <motion.div className={`inline-block overflow-hidden ${className}`} variants={container} initial="hidden" whileInView="visible" viewport={{
    once
  }}>
      {words.map((word, index) => <motion.span key={index} className="inline-block mr-1" variants={child}>
          {word}{' '}
        </motion.span>)}
    </motion.div>;
};
export default AnimatedText;