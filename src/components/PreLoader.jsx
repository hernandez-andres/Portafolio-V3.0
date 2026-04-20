import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const PreLoader = ({ onComplete }) => {
  const [text, setText] = useState('');
  const fullText = "Andres Hernandez";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => setIsTyping(false), 500); // Wait after typing
        setTimeout(() => onComplete(), 1500); // Complete preloader and slide up
      }
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-space-black"
      initial={{ y: 0 }}
      animate={!isTyping ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
    >
      <div className="text-3xl md:text-5xl font-mono text-neon-blue font-bold flex items-center">
        <motion.span
          animate={{ x: isTyping ? [0, -2, 2, -2, 0] : 0 }}
          transition={{ duration: 0.2, repeat: Infinity, repeatType: "mirror" }}
          className={isTyping ? "opacity-90" : "opacity-100"}
        >
          {text}
        </motion.span>
        {isTyping && (
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="w-1 h-8 md:h-12 bg-neon-blue ml-2 inline-block"
          />
        )}
      </div>
    </motion.div>
  );
};

export default PreLoader;
