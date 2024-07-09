import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ text }) => {
  const letters = text.split(""); // Split text into individual characters

  return (
    <div className="inline-block overflow-hidden">
      {letters.map((letter, index) => (
        <motion.span
          key={`${letter}-${index}`}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.04 }} // Adjust delay as needed
        >
          {/* Preserve spaces by adding a non-breaking space if character is a space */}
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;
