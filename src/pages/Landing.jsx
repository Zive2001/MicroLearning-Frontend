import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      
      <main>
        <HeroSection />
        <LogoCloudSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

// Hero Section - Notion-inspired minimalist design
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
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl"
          >
            Master new skills in bite-sized lessons
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-10"
          >
            Build valuable skills in just 15 minutes a day. The microlearning platform for busy professionals.
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
              { icon: "/oc-time-flies.svg", text: "Learn faster" },
              { icon: "/ni-pencil.svg", text: "Remember more" },
              { icon: "/ni-paper-plane.svg", text: "Daily consistency" }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 border border-gray-100 rounded-lg p-4 flex items-center">
                <img src={item.icon} alt="Feature icon" className="w-6 h-6 mr-3" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Logo Cloud - "Trusted by" section
const LogoCloudSection = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500 uppercase tracking-wider font-medium"
          >
            TRUSTED BY PROFESSIONALS FROM
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-6 gap-8"
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center justify-center">
              <div className="h-6 w-24 bg-gray-300 rounded-sm"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Features Section - In Notion style
const FeaturesSection = () => {
  const features = [
    {
      title: "Learn in bite-sized chunks",
      description: "Our microlearning approach breaks down complex skills into 5-15 minute lessons that fit into your busy schedule.",
      imagePosition: "right",
      icon: "/oc-time-flies.svg"
    },
    {
      title: "Track your progress visually",
      description: "See your learning journey with intuitive progress tracking and visualization tools.",
      imagePosition: "left",
      icon: "/spying.svg"
    },
    {
      title: "Apply skills with hands-on labs",
      description: "Reinforce your knowledge with practical exercises and real-world projects.",
      imagePosition: "right",
      icon: "/ni-pencil.svg"
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
                <div className="p-4 bg-gray-100 rounded-xl aspect-[4/3] flex items-center justify-center">
                  <img src={feature.icon} alt={feature.title} className="w-16 h-16" />
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

// Testimonials Section
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

// Pricing Section 
const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for trying out MicroLearn",
      features: [
        "Access to 10 free courses",
        "Basic progress tracking",
        "Mobile app access",
        "5 practice exercises per month"
      ],
      icon: "/learnicon1.svg"
    },
    {
      name: "Pro",
      price: "$12",
      period: "per month",
      description: "Everything you need for serious learning",
      features: [
        "Unlimited access to all courses",
        "Advanced progress tracking",
        "Hands-on labs & projects",
        "Downloadable resources",
        "Priority support"
      ],
      highlighted: true,
      icon: "/learnicon2.svg"
    },
    {
      name: "Team",
      price: "$49",
      period: "per month",
      description: "Perfect for teams of up to 5 members",
      features: [
        "All Pro features",
        "Team progress dashboard",
        "Admin controls",
        "Shared workspaces",
        "SSO Authentication",
        "Analytics & reporting"
      ],
      icon: "/learnicon1.svg"
    }
  ];
  
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Start for free, upgrade when you're ready. All plans come with a 14-day money-back guarantee.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white p-8 rounded-xl ${plan.highlighted ? 'border-2 border-black' : 'border border-gray-200'}`}
            >
              <div className="flex items-center mb-4">
                <img src={plan.icon} alt={`${plan.name} icon`} className="w-8 h-8 mr-3" />
                <h3 className="text-xl font-bold">{plan.name}</h3>
              </div>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-gray-500 ml-1">{plan.period}</span>}
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <button className={`w-full py-3 px-4 rounded-lg font-medium mb-8 ${plan.highlighted ? 'bg-black text-white' : 'bg-white border border-gray-300 text-gray-800'}`}>
                {plan.highlighted ? 'Start your free trial' : 'Get started'}
              </button>
              
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <img src="/ni-pencil.svg" alt="Check icon" className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Call to Action Section
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

export default Landing;