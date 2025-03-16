import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  link = '#',
  linkText = 'Learn more',
  className = '',
  ...props 
}) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-white border border-gray-100 p-6 rounded-xl transition-all duration-300 ${className}`}
      {...props}
    >
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {linkText && (
        <a 
          href={link} 
          className="inline-flex items-center text-black font-medium hover:underline"
        >
          {linkText}
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      )}
    </motion.div>
  );
};

export default FeatureCard;