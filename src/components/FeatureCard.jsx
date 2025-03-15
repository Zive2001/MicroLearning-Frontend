import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl cursor-pointer transition-all duration-300"
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center">
        <div className="bg-blue-50 p-3 rounded-lg mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;