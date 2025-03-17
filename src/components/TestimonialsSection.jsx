import React from 'react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "MicroLearn made it possible for me to learn new skills while working full-time. The bite-sized lessons fit perfectly into my busy schedule.",
      author: "Alex Johnson",
      role: "Software Engineer",
      avatar: "/ni-avatar-male-2.svg"
    },
    {
      quote: "I've tried many learning platforms, but MicroLearn's approach of short, focused lessons has been the most effective for me.",
      author: "Sarah Chen",
      role: "Product Manager",
      avatar: "/ni-avatar-female-1.svg"
    },
    {
      quote: "The progress tracking features help me stay motivated and see how far I've come. It's been a game-changer for my professional development.",
      author: "Michael Rodriguez",
      role: "Marketing Director",
      avatar: "/ni-avatar-male-2.svg"
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
            Loved by learners worldwide
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Join thousands of satisfied professionals who have transformed their skills with MicroLearn.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl border border-gray-200"
            >
              <img src="/ni-quotes.svg" alt="Quote icon" className="w-8 h-8 text-gray-400 mb-6" />
              <p className="text-lg mb-6 text-gray-700">{testimonial.quote}</p>
              <div className="flex items-center">
                <img src={testimonial.avatar} alt={testimonial.author} className="w-10 h-10 rounded-full mr-4" />
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a href="#" className="text-black font-medium inline-flex items-center">
            Read all testimonials
            <img src="/ni-paper-plane.svg" alt="Arrow icon" className="w-4 h-4 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;