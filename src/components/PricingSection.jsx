import React from 'react';
import { motion } from 'framer-motion';

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

export default PricingSection;