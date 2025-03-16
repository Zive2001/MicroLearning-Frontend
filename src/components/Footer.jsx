import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  // Current year
  const year = new Date().getFullYear();
  
  // Footer columns data
  const footerColumns = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Templates", "For Teams", "Enterprise", "Security"]
    },
    {
      title: "Resources",
      links: ["Blog", "Help Center", "Guides", "API Documentation", "Community"]
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Contact", "Privacy", "Terms of Service"]
    }
  ];
  
  // Social links
  const socialLinks = [
    { name: "Twitter", icon: "twitter" },
    { name: "LinkedIn", icon: "linkedin" },
    { name: "YouTube", icon: "youtube" },
    { name: "GitHub", icon: "github" }
  ];
  
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo and company info */}
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center mr-2">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="font-bold text-xl">MicroLearn</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-xs">
              The modern microlearning platform designed to help you master new skills through bite-sized lessons.
            </p>
            
            {/* Language selector */}
            <div className="flex items-center space-x-2 mt-8">
              <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
              <select className="bg-transparent text-sm text-gray-600 focus:outline-none cursor-pointer">
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="es">Español</option>
                <option value="de">Deutsch</option>
              </select>
            </div>
          </div>
          
          {/* Footer link columns */}
          {footerColumns.map((column, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="font-medium text-gray-900 mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom footer section */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            © {year} MicroLearn, Inc. All rights reserved.
          </div>
          
          {/* Social links */}
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href="#" 
                className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
                aria-label={social.name}
              >
                <div className="w-5 h-5 bg-gray-300 rounded-sm"></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;