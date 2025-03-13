
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Code, GitMerge, LucideIcon, ShieldCheck } from 'lucide-react';
import GlassCard from './ui/GlassCard';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  align: 'left' | 'right';
}

const features: Feature[] = [
  {
    title: "Intelligent Code Analysis",
    description: "Our AI engine analyzes your code across multiple dimensions including style, performance, security, and architecture. Get insights that go beyond simple linting.",
    icon: <Code className="h-8 w-8 text-primary" />,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&h=600&q=60",
    align: 'left'
  },
  {
    title: "Seamless Integration",
    description: "ReviewGenie integrates directly with GitHub, GitLab, and Bitbucket. Set it up once and get automated code reviews on every pull request.",
    icon: <GitMerge className="h-8 w-8 text-primary" />,
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZGUlMjBpbnRlZ3JhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&h=600&q=60",
    align: 'right'
  },
  {
    title: "Security First",
    description: "Detect vulnerabilities before they reach production. ReviewGenie identifies security issues, OWASP Top 10 risks, and provides remediation guidance.",
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGN5YmVyJTIwc2VjdXJpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&h=600&q=60",
    align: 'left'
  }
];

const AlternatingFeatures = () => {
  return (
    <section id="advanced-features" className="py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary/90 border border-primary/20 dark:border-primary/30 backdrop-blur-sm mb-6">
            Advanced Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Powerful Tools For Modern Development
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            ReviewGenie combines cutting-edge AI with developer-friendly features that integrate seamlessly into your workflow.
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div 
                className={`lg:w-1/2 ${feature.align === 'right' ? 'lg:order-2' : ''}`}
                initial={{ opacity: 0, x: feature.align === 'right' ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-lg blur-lg opacity-75"></div>
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <div className="bg-white/10 backdrop-blur-md p-3 rounded-full inline-block mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className={`lg:w-1/2 ${feature.align === 'right' ? 'lg:order-1' : ''}`}
                initial={{ opacity: 0, x: feature.align === 'right' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <GlassCard className="h-full">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {[1, 2, 3].map((item) => (
                        <li key={item} className="flex items-start">
                          <span className="flex-shrink-0 p-1 bg-primary/10 rounded-full mr-3 mt-1">
                            <Check className="h-4 w-4 text-primary" />
                          </span>
                          <span className="text-gray-600 dark:text-gray-300">
                            {feature.title === "Intelligent Code Analysis" && 
                              [`Identifies complex bugs and anti-patterns`, `Suggests code optimizations and improvements`, `Explains issues with clear, educational feedback`][item-1]}
                            {feature.title === "Seamless Integration" && 
                              [`Automated reviews on every pull request`, `Custom rules aligned with your team's standards`, `Integrates with your existing CI/CD pipeline`][item-1]}
                            {feature.title === "Security First" && 
                              [`Detects OWASP Top 10 vulnerabilities`, `Identifies dependency-related security issues`, `Provides actionable remediation steps`][item-1]}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlternatingFeatures;