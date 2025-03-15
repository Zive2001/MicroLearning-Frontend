import React from 'react';
import { motion } from 'framer-motion';
import { 
  AcademicCapIcon, 
  BookOpenIcon, 
  BeakerIcon, 
  ChartBarIcon 
} from '@heroicons/react/24/outline';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  const features = [
    {
      icon: <AcademicCapIcon className="h-8 w-8 text-blue-600" />,
      title: "Lectures",
      description: "Expert-led video lessons packed with essential knowledge and insights.",
      link: "/lectures"
    },
    {
      icon: <BookOpenIcon className="h-8 w-8 text-blue-600" />,
      title: "Tutorials",
      description: "Step-by-step guides to help you master concepts at your own pace.",
      link: "/tutorials"
    },
    {
      icon: <BeakerIcon className="h-8 w-8 text-blue-600" />,
      title: "Labs",
      description: "Hands-on practice sessions to apply what you've learned in real scenarios.",
      link: "/labs"
    },
    {
      icon: <ChartBarIcon className="h-8 w-8 text-blue-600" />,
      title: "Dashboard",
      description: "Track your progress, set goals, and monitor your learning journey.",
      link: "/dashboard"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const navigateTo = (path) => {
    console.log(`Navigating to ${path}`);
    // In a real app, you would use React Router's navigate function here
  };

  return (
    <section id="features" className="w-full py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Your Learning Journey
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Explore our comprehensive learning paths designed to take you from beginner to expert.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              onClick={() => navigateTo(feature.link)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;