import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import Button from './Button';

const HeroSection = () => {
  // State for cursor interactions
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const controls = useAnimation();

  // Image slider state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/landingimage1.jpg', // Replace with your actual images
    '/api/placeholder/700/500',
    '/api/placeholder/700/500',
    '/api/placeholder/700/500'
  ];

  // Transform mouse position for effects
  const glowX = useTransform(mouseX, [0, 1000], [-50, 50]);
  const glowY = useTransform(mouseY, [0, 1000], [-50, 50]);
  
  // Parallax effects
  const parallaxY1 = useTransform(mouseY, [0, 500], [-10, 10]);
  const parallaxX1 = useTransform(mouseX, [0, 500], [-10, 10]);
  const parallaxY2 = useTransform(mouseY, [0, 500], [10, -10]);
  const parallaxX2 = useTransform(mouseX, [0, 500], [10, -10]);

  // Handle mouse movement
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Initial animation sequence
  useEffect(() => {
    const sequence = async () => {
      await controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    };
    sequence();
  }, [controls]);

  // Image slider interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="w-full bg-[#023047] py-24 px-6 md:px-12 overflow-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Refined background elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute right-[20%] top-[30%] w-96 h-96 bg-[#219ebc] rounded-full filter blur-[150px] opacity-20"
          style={{ x: glowX, y: glowY }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute left-[30%] bottom-[20%] w-64 h-64 bg-blue-400 rounded-full filter blur-[120px] opacity-10"
          style={{ x: useTransform(mouseX, [0, 500], [20, -20]), y: useTransform(mouseY, [0, 500], [20, -20]) }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </motion.div>
      
      {/* Content Grid - Refined Layout */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Column - Text Content */}
        <div>
          <motion.span 
            className="inline-block bg-[#219ebc] bg-opacity-20 px-4 py-2 rounded-full text-[#219ebc] font-medium mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            The future of learning is here
          </motion.span>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <span className="block">Master new skills with</span>
            <motion.span 
              className="text-[#219ebc] mt-2 block relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              MicroLearn
              <motion.div 
                className="absolute -bottom-3 left-0 h-1 bg-[#219ebc] w-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 1.2 }}
              />
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-12 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            Bite-sized learning modules designed for busy professionals.
            Build valuable skills in just 15 minutes a day.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            <Button 
              className="bg-[#219ebc] hover:bg-blue-500 text-white font-medium text-lg py-4 px-8 rounded-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(33, 158, 188, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center">
                Get Started
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </motion.svg>
              </span>
            </Button>
            <Button 
              className="bg-transparent border-2 border-white text-white font-medium text-lg py-4 px-8 rounded-lg hover:bg-white hover:text-[#023047]"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              How It Works
            </Button>
          </motion.div>
          
          <motion.div 
            className="mt-14 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.2 }}
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <motion.div 
                  key={i} 
                  className="w-10 h-10 rounded-full border-2 border-[#023047] flex items-center justify-center overflow-hidden"
                  whileHover={{ scale: 1.15, zIndex: 10 }}
                >
                  <div className={`w-full h-full bg-gradient-to-br from-blue-400 to-teal-300 flex items-center justify-center text-[#023047] font-bold`}>
                    {String.fromCharCode(64 + i)}
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.p 
              className="ml-4 text-sm text-gray-300"
              whileHover={{ x: 3 }}
            >
              Joined by 12,000+ learners this month
            </motion.p>
          </motion.div>
        </div>

        {/* Right Column - Dynamic Image Gallery with Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          {/* Main image container with dynamic image slider */}
          <motion.div 
            className="relative z-10 bg-gradient-to-r from-[#023047] to-[#219ebc] p-1 rounded-2xl overflow-hidden shadow-2xl"
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <div className="bg-gray-900 rounded-xl overflow-hidden aspect-[4/3] relative">
              {/* Dynamic Image Gallery */}
              <div className="absolute inset-0 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentImageIndex}
                    src={images[currentImageIndex]}
                    alt={`MicroLearn Platform View ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                  />
                </AnimatePresence>
                
                {/* Image slider dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                  {images.map((_, index) => (
                    <motion.button
                      key={index}
                      className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-[#219ebc]' : 'bg-gray-400'}`}
                      onClick={() => setCurrentImageIndex(index)}
                      whileHover={{ scale: 1.5 }}
                      animate={{ 
                        scale: index === currentImageIndex ? 1.2 : 1,
                        opacity: index === currentImageIndex ? 1 : 0.5
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Overlay gradient */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-[#023047] to-transparent opacity-60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 1, delay: 1 }}
              />
              
              {/* Progress info overlay */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.4 }}
              >
                <div className="flex justify-between items-center">
                  <div className="text-white">
                    <div className="text-sm text-gray-300">Your progress</div>
                    <div className="text-xl font-bold">Frontend Development</div>
                  </div>
                  <div className="text-[#219ebc] font-bold text-xl">42%</div>
                </div>
                <div className="mt-3 bg-gray-700 h-2 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-[#219ebc]" 
                    initial={{ width: 0 }}
                    animate={{ width: "42%" }}
                    transition={{ duration: 1.5, delay: 1.8 }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Image preview thumbnails */}
          <motion.div 
            className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3 z-30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
          >
            {images.map((src, idx) => (
              <motion.div 
                key={idx}
                className={`w-14 h-10 rounded-lg overflow-hidden border-2 ${currentImageIndex === idx ? 'border-[#219ebc]' : 'border-transparent'}`}
                whileHover={{ y: -5 }}
                onClick={() => setCurrentImageIndex(idx)}
              >
                <img 
                  src={src} 
                  alt={`Thumbnail ${idx}`} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Floating animation cards */}
          <motion.div 
            className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 z-20"
            style={{ y: parallaxY1, x: parallaxX1 }}
            whileHover={{ scale: 1.1, rotate: -2 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#219ebc] rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-gray-800">100+</div>
                <div className="text-xs text-gray-500">Micro Courses</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute -top-6 right-10 bg-white rounded-lg shadow-xl p-4 z-20"
            style={{ y: parallaxY2, x: parallaxX2 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#219ebc] rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-gray-800">15 min</div>
                <div className="text-xs text-gray-500">Per Lesson</div>
              </div>
            </div>
          </motion.div>
          
          {/* Refined mouse spotlight effect */}
          {isHovering && (
            <motion.div 
              className="absolute -inset-10 bg-gradient-to-r from-blue-400 to-transparent opacity-5 pointer-events-none"
              style={{ 
                left: mouseX, 
                top: mouseY,
                width: 250,
                height: 250,
                x: -125,
                y: -125,
                borderRadius: '100%',
                filter: 'blur(40px)'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              exit={{ opacity: 0 }}
            />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;