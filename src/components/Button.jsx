import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  className = '',
  icon = null,
  iconPosition = 'right',
  fullWidth = false,
  ...props 
}) => {
  // Variant styles
  const variantStyles = {
    primary: 'bg-black text-white hover:bg-gray-900',
    secondary: 'bg-white border border-gray-300 text-gray-800 hover:bg-gray-50',
    subtle: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
    text: 'bg-transparent text-gray-700 hover:text-black hover:bg-gray-100',
  };
  
  // Size styles
  const sizeStyles = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg',
  };
  
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        ${variantStyles[variant]} 
        ${sizeStyles[size]} 
        ${fullWidth ? 'w-full' : ''}
        rounded-lg font-medium transition-all duration-200
        ${className}
      `}
      {...props}
    >
      <span className="flex items-center justify-center">
        {icon && iconPosition === 'left' && (
          <span className="mr-2">{icon}</span>
        )}
        
        {children}
        
        {icon && iconPosition === 'right' && (
          <span className="ml-2">{icon}</span>
        )}
      </span>
    </motion.button>
  );
};

export default Button;