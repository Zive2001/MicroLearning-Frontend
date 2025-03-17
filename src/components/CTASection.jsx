import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold mb-6"
        >
          Ready to transform your learning?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
        >
          Join thousands of learners who are already building their skills with MicroLearn's bite-sized lessons.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#" className="bg-black text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-900 transition-all duration-200 flex items-center justify-center">
            <img src="/ni-rocket.svg" alt="Rocket icon" className="w-5 h-5 mr-2" />
            Get started for free
          </a>
          <a href="#" className="bg-white border border-gray-300 px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-50 transition-all duration-200 flex items-center justify-center">
            <img src="/spying.svg" alt="Demo icon" className="w-5 h-5 mr-2" />
            Schedule a demo
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;