import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Handle scroll event to change header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center mr-2">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          <span className="font-bold text-xl">MicroLearn</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
          <NavLink href="#testimonials">Testimonials</NavLink>
          <NavLink href="#resources">Resources</NavLink>
          <NavLink href="#login">Log in</NavLink>
          <a 
            href="#" 
            className="ml-4 bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-900 transition-all duration-200"
          >
            Get started
          </a>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="px-6 py-4 space-y-3">
              <MobileNavLink href="#features" onClick={() => setMobileMenuOpen(false)}>Features</MobileNavLink>
              <MobileNavLink href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</MobileNavLink>
              <MobileNavLink href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonials</MobileNavLink>
              <MobileNavLink href="#resources" onClick={() => setMobileMenuOpen(false)}>Resources</MobileNavLink>
              <MobileNavLink href="#login" onClick={() => setMobileMenuOpen(false)}>Log in</MobileNavLink>
              <a 
                href="#" 
                className="block bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-900 transition-all duration-200 text-center mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// Desktop navigation link component
const NavLink = ({ href, children }) => {
  return (
    <a 
      href={href} 
      className="px-4 py-2 text-gray-600 hover:text-black rounded-lg transition-colors duration-200"
    >
      {children}
    </a>
  );
};

// Mobile navigation link component
const MobileNavLink = ({ href, onClick, children }) => {
  return (
    <a 
      href={href} 
      className="block py-2 text-gray-600 hover:text-black font-medium"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Header;