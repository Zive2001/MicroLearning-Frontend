import React from 'react';
import { motion } from 'framer-motion';

const PricingCard = ({
  name,
  price,
  period,
  description,
  features,
  buttonText = 'Get started',
  highlighted = false,
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
      className={`
        bg-white rounded-xl p-8
        ${highlighted ? 'border-2 border-black shadow-lg' : 'border border-gray-200'}
        ${className}
      `}
      {...props}
    >
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        {period && <span className="text-gray-500 ml-1">{period}</span>}
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <button className={`
        w-full py-3 px-4 rounded-lg font-medium mb-8 transition-colors duration-200
        ${highlighted 
          ? 'bg-black text-white hover:bg-gray-900' 
          : 'bg-white border border-gray-300 text-gray-800 hover:bg-gray-50'}
      `}>
        {buttonText}
      </button>
      
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default PricingCard;