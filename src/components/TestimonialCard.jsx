import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({
  quote,
  author,
  role,
  companyLogo,
  authorImage,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4 }}
      className={`bg-white p-8 rounded-xl border border-gray-200 ${className}`}
      {...props}
    >
      {/* Quote mark */}
      <svg className="w-8 h-8 text-gray-300 mb-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      
      {/* Quote text */}
      <p className="text-lg mb-6 text-gray-700 leading-relaxed">{quote}</p>
      
      {/* Author info */}
      <div className="flex items-center">
        {authorImage ? (
          <img 
            src={authorImage} 
            alt={author} 
            className="w-10 h-10 rounded-full mr-4"
          />
        ) : (
          <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
        )}
        
        <div>
          <p className="font-medium text-gray-900">{author}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
        
        {companyLogo && (
          <div className="ml-auto">
            {companyLogo}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TestimonialCard;