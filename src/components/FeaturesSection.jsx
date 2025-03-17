import React from 'react';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const features = [
    {
      title: "Learn in bite-sized chunks",
      description: "Our microlearning approach breaks down complex skills into 5-15 minute lessons that fit into your busy schedule.",
      imagePosition: "right",
      icon: "/Teamworks.svg"
    },
    {
      title: "Track your progress visually",
      description: "See your learning journey with intuitive progress tracking and visualization tools.",
      imagePosition: "left",
      icon: "/High five.svg"
    },
    {
      title: "Apply skills with hands-on labs",
      description: "Reinforce your knowledge with practical exercises and real-world projects.",
      imagePosition: "right",
      icon: "/Launch.svg"
    }
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            How MicroLearn works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Learning new skills doesn't have to be overwhelming. Our approach makes it easy to fit learning into your daily routine.
          </motion.p>
        </div>
        
        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${feature.imagePosition === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}
            >
              <div className="w-full md:w-1/2">
                <div className="p-4 bg-none rounded-xl aspect-[4/3] flex items-center justify-center">
                  <img src={feature.icon} alt={feature.title} className="w-63 h-63" />
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
                <a href="#" className="text-black font-medium inline-flex items-center">
                  Learn more
                  <img src="/ni-paper-plane.svg" alt="Arrow icon" className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;