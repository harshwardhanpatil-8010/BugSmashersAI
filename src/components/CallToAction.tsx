
import React from 'react';
import ButtonGlow from './ui/ButtonGlow';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  "AI-powered code reviews in seconds",
  "Integration with GitHub, GitLab, and Bitbucket",
  "Security vulnerability detection",
  "Performance optimization suggestions",
  "Team collaboration tools"
];

const CallToAction = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Ready to Transform Your <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                Code Review Process?
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Join thousands of developers who are shipping better code faster with ReviewGenie. Start your free trial today and experience the power of AI-assisted code reviews.
            </p>
            
            <ul className="space-y-3 mb-10">
              {features.map((feature, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <span className="flex-shrink-0 p-1 bg-green-100 dark:bg-green-900/30 rounded-full mr-3">
                    <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonGlow className="group flex items-center justify-center gap-2">
                <span>Start Free Trial</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </ButtonGlow>
              <ButtonGlow variant="outline">
                Book a Demo
              </ButtonGlow>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-xl blur-lg opacity-75"></div>
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl shadow-xl p-6 overflow-hidden">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary/10 rounded-full"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-500/10 rounded-full"></div>
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex flex-col">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Get started with</p>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Developer Plan</h3>
                    </div>
                    <div className="bg-primary/10 dark:bg-primary/20 rounded-full px-4 py-1 text-primary font-medium text-sm">
                      Most Popular
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">$19</span>
                      <span className="text-gray-500 dark:text-gray-400 ml-2">/ month</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Cancel anytime. 14-day free trial.
                    </p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {[
                      "Up to 5 repositories",
                      "Unlimited code reviews",
                      "Security vulnerability scanning",
                      "Team collaboration features",
                      "Basic API access",
                      "Email support"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="flex-shrink-0 p-1 bg-primary/10 dark:bg-primary/20 rounded-full mr-3">
                          <Check className="h-4 w-4 text-primary" />
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <ButtonGlow className="w-full justify-center">
                    Start 14-day Free Trial
                  </ButtonGlow>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
