import React from 'react';
import GlassCard from './ui/GlassCard';
import { Code, Search, ShieldCheck, Zap, Sparkles, GitBranch } from 'lucide-react';

const features = [
  {
    icon: <Search className="h-10 w-10 text-primary dark:text-primary-light" />,
    title: 'Pattern Detection',
    description: 'Automatically identifies code smells, anti-patterns, and potential bugs before they make it to production.'
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary dark:text-primary-light" />,
    title: 'Security Analysis', 
    description: 'Scans for vulnerabilities, insecure practices, and compliance issues, keeping your code secure.'
  },
  {
    icon: <Zap className="h-10 w-10 text-primary dark:text-primary-light" />,
    title: 'Performance Insights',
    description: 'Identifies performance bottlenecks and suggests optimizations to keep your code running efficiently.'
  },
  {
    icon: <Sparkles className="h-10 w-10 text-primary dark:text-primary-light" />,
    title: 'Style Enforcement',
    description: 'Ensures code adheres to your team\'s style guidelines for consistent, maintainable codebases.'
  },
  {
    icon: <Code className="h-10 w-10 text-primary dark:text-primary-light" />,
    title: 'Code Suggestions',
    description: 'Provides intelligent recommendations to improve your code quality and readability.'
  },
  {
    icon: <GitBranch className="h-10 w-10 text-primary dark:text-primary-light" />,
    title: 'Seamless Integration',
    description: 'Works with your existing workflow, integrating directly with GitHub, GitLab, and Bitbucket.'
  }
];

const FeatureSection = () => {
  return (
    <section id="features" className=" relative min-h-screen flex flex-col justify-center items-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="subtle-heading mb-3 dark:text-gray-400">Features</h2>
          <h3 className="heading-lg mb-6 dark:text-white">Intelligent Reviews at Every Step</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our AI doesn't just spot errors—it helps you understand them, fix them, and learn from them to become a better developer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {features.map((feature, index) => (
            <GlassCard 
              key={index} 
              className="flex flex-col items-start h-full dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-xl mb-5">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold mb-3 dark:text-white">{feature.title}</h4>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
