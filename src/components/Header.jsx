import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon } from '@heroicons/react/24/outline';
import Button from './Button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full py-4 px-6 md:px-12 bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center"
        >
          <div className="h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center mr-3">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">MicroLearn</h1>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            className="text-gray-600 hover:text-blue-600 font-medium"
            href="#features"
          >
            Features
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            className="text-gray-600 hover:text-blue-600 font-medium"
            href="#how-it-works"
          >
            How It Works
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            className="text-gray-600 hover:text-blue-600 font-medium"
            href="#testimonials"
          >
            Testimonials
          </motion.a>
          <Button primary>Get Started</Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            className="text-gray-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden mt-4 py-4 px-6 bg-white shadow-md rounded-lg"
        >
          <div className="flex flex-col space-y-4">
            <a className="text-gray-600 hover:text-blue-600 font-medium" href="#features">
              Features
            </a>
            <a className="text-gray-600 hover:text-blue-600 font-medium" href="#how-it-works">
              How It Works
            </a>
            <a className="text-gray-600 hover:text-blue-600 font-medium" href="#testimonials">
              Testimonials
            </a>
            <Button primary className="w-full text-center">Get Started</Button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;