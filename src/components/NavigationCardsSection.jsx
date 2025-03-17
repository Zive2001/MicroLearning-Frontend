import React from 'react';
import { motion } from 'framer-motion';

const NavigationCardsSection = () => {
  const navCards = [
    {
      title: "Lectures",
      icon: "/ni-file-user.svg",
      description: "Access all video lectures",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Tutorials",
      icon: "/ni-pen-line.svg",
      description: "Step-by-step guided learning",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Labs",
      icon: "/ni-code-slash-square.svg",
      description: "Hands-on practice environments",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Dashboard",
      icon: "/ni-square-poll-vertical.svg",
      description: "Track your learning progress",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Start your learning journey
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Choose your path and dive into our comprehensive learning platform
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {navCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="cursor-pointer"
            >
              <div className={`bg-white shadow-lg hover:shadow-xl rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300`}>
                {/* Card header - Placeholder for image */}
                <div className={`bg-gradient-to-r ${card.color} p-8 h-48 flex items-center justify-center relative overflow-hidden`}>
                  {/* Placeholder for custom image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-opacity-30 font-medium">
                      Image placeholder
                    </span>
                  </div>
                  
                  {/* Decorative elements */}
                  <motion.div 
                    className="absolute right-0 bottom-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -mr-16 -mb-16"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                  <motion.div 
                    className="absolute left-0 top-0 w-24 h-24 bg-white bg-opacity-10 rounded-full -ml-12 -mt-12"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, -5, 0]
                    }}
                    transition={{ 
                      duration: 7, 
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 1
                    }}
                  />
                </div>
                
                {/* Card content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center mb-3">
                    <img src={card.icon} alt={card.title} className="w-6 h-6 mr-3" />
                    <h3 className="text-xl font-bold">{card.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{card.description}</p>
                  <div className="mt-auto">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium text-gray-800 transition-colors duration-200 flex items-center justify-center"
                    >
                      <span>Explore</span>
                      <img src="/ni-chevron-right-circle.svg" alt="Arrow icon" className="w-4 h-4 ml-2" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavigationCardsSection;