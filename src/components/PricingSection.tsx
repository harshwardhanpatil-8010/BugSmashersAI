import React, { useState } from 'react';
import GlassCard from './ui/GlassCard';
import ButtonGlow from './ui/ButtonGlow';
import { Check, ChevronsUpDown, Star } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'lifetime',
    description: 'Perfect for individual developers',
    features: [
      '50 reviews per month',
      'Basic code analysis',
      'Community support',
      'GitHub integration',
      '24-hour response time'
    ],
    popular: false,
    buttonText: 'Get Started'
  },
  {
    name: 'Professional',
    price: '$19',
    period: 'per month',
    description: 'For professional developers & small teams',
    features: [
      'Unlimited reviews',
      'Advanced pattern detection',
      'Security vulnerability scanning',
      'All integrations (GitHub, GitLab, Bitbucket)',
      'Priority support',
      'Custom rule definitions',
      'Team collaboration features'
    ],
    popular: true,
    buttonText: 'Start 14-day trial'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For larger teams with specific needs',
    features: [
      'Everything in Professional',
      'Dedicated support',
      'Custom API access',
      'On-premise deployment option',
      'SSO integration',
      'Compliance reporting',
      'SLA guarantees'
    ],
    popular: false,
    buttonText: 'Contact Sales'
  }
];

const PricingSection = () => {
  const [expanded, setExpanded] = useState<string | null>(null);
  
  const toggleFAQ = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  const faqs = [
    {
      id: 'trial',
      question: 'Do you offer a free trial?',
      answer: 'Yes, we offer a 14-day free trial of our Professional plan with no credit card required. You\'ll get full access to all features during this period.'
    },
    {
      id: 'cancel',
      question: 'Can I cancel anytime?',
      answer: 'Absolutely. You can cancel your subscription at any time without any cancellation fees. Your subscription will remain active until the end of the billing period.'
    },
    {
      id: 'languages',
      question: 'What programming languages do you support?',
      answer: 'We support most popular programming languages including JavaScript, TypeScript, Python, Java, C#, Ruby, Go, PHP, Swift, and more. We\'re constantly adding support for additional languages.'
    },
    {
      id: 'team',
      question: 'How does team billing work?',
      answer: 'Team billing is based on the number of seats (developers) in your organization. Each seat comes with its own set of review allocations, and you can add or remove seats as needed.'
    }
  ];
  
  return (
    <section id="pricing" className="section relative min-h-screen flex flex-col justify-center items-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light px-4 py-1.5 rounded-full text-sm font-medium mb-8 inline-block">
            Pricing Plans
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the plan that works best for you and your team. All plans include core features with different limits.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`flex flex-col h-full transform transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'md:-mt-4 md:mb-4' : ''
              }`}
            >
              <GlassCard 
                className={`flex flex-col h-full relative p-8 dark:bg-gray-800/50 ${
                  plan.popular ? 'border-2 border-primary dark:border-primary-light shadow-xl' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-0 right-0 flex justify-center">
                    <span className="bg-primary dark:bg-primary-light text-white dark:text-gray-900 text-sm font-semibold px-6 py-2 rounded-full flex items-center gap-2">
                      <Star className="h-4 w-4" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-8">
                  <h4 className="text-2xl font-bold mb-3 dark:text-white">{plan.name}</h4>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-extrabold dark:text-white">{plan.price}</span>
                    {plan.period && (
                      <span className="text-gray-500 dark:text-gray-400 ml-2 text-lg">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">{plan.description}</p>
                </div>
                
                <div className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="h-5 w-5 text-primary dark:text-primary-light" />
                      </div>
                      <span className="ml-3 text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <ButtonGlow 
                  className={`w-full justify-center text-lg py-3 font-semibold ${
                    plan.popular ? 'bg-primary dark:bg-primary-light hover:bg-primary/90 dark:hover:bg-primary-light/90' : ''
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.buttonText}
                </ButtonGlow>
              </GlassCard>
            </div>
          ))}
        </div>
        
        <div className="mt-24 rounded-3xl p-8 sm:p-12">
          <h3 className="text-3xl font-bold text-center mb-12 dark:text-white">Frequently Asked Questions</h3>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq) => (
              <GlassCard 
                key={faq.id} 
                className="p-0 overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800/50"
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <h4 className="text-xl font-semibold dark:text-white">{faq.question}</h4>
                  <ChevronsUpDown 
                    className={`h-6 w-6 text-primary dark:text-primary-light transition-transform duration-300 ${
                      expanded === faq.id ? 'transform rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    expanded === faq.id ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{faq.answer}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
