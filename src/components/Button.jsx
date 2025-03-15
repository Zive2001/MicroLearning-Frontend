import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  primary = false, 
  onClick, 
  className = '',
  whileHover,
  whileTap,
  ...props 
}) => {
  return (
    <motion.button
      whileHover={whileHover || { scale: 1.05, y: -2 }}
      whileTap={whileTap || { scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 relative overflow-hidden ${
        primary
          ? 'bg-blue-600 text-white hover:bg-blue-700'
          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
      } ${className}`}
      onClick={onClick}
      {...props}
    >
      {/* Animated hover effect */}
      <motion.span
        className="absolute inset-0 w-full h-full bg-white opacity-0"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Always visible text */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default Button;