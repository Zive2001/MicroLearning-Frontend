import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <section className="w-full pt-20 pb-16 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-6xl font-bold tracking-tight mb-6 max-w-4xl"
          >
            Master new skills in bite-sized lessons
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-xl text-gray-600 max-w-2xl mb-10"
          >
            Build valuable skills in just 15 minutes a day. The microlearning platform for busy students.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
          >
            <a href="#" className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-900 transition-all duration-200">
              Get MicroLearn free
            </a>
            
            <button 
              onClick={() => setVideoPlaying(true)}
              className="w-full sm:w-auto bg-white border border-gray-300 px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-50 transition-all duration-200 flex items-center justify-center"
            >
              <img src="/ni-rocket.svg" alt="Rocket icon" className="w-5 h-5 mr-2" />
              Watch video
            </button>
          </motion.div>
        </div>
        
        {/* Hero Interactive Display */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="bg-gray-100 rounded-xl shadow-lg overflow-hidden aspect-[16/9] relative">
            {/* Placeholder for product screenshot or video */}
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              {videoPlaying ? (
                <div className="w-full h-full bg-black">
                  <div className="w-full h-full flex items-center justify-center text-white">
                    {/* Placeholder for video content */}
                    <span className="text-lg">Video placeholder</span>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  {/* Placeholder for hero image/screenshot */}
                  <span className="text-lg text-gray-600">MicroLearn Platform Demo</span>
                </div>
              )}
              
              {/* Play button overlay (shown when video not playing) */}
              {!videoPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    onClick={() => setVideoPlaying(true)}
                    className="w-20 h-20 bg-black bg-opacity-70 rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all duration-200"
                  >
                    <img src="/ni-rocket.svg" alt="Rocket icon" className="w-8 h-8 text-white" />
                  </button>
                </div>
              )}
            </div>
          </div>
          
          {/* Small features highlights below the hero image */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            {[
              { icon: "/ni-rocket.svg", text: "Learn faster" },
              { icon: "/ni-file-user.svg", text: "Remember more" },
              { icon: "/ni-paper-plane.svg", text: "Daily consistency" }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 border border-gray-100 rounded-lg p-4 flex items-center">
                <img src={item.icon} alt="Feature icon" className="w-10 h-10 mr-3" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;