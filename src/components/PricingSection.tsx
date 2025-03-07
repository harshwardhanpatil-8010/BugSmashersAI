
import React, { useState } from 'react';
import GlassCard from './ui/GlassCard';
import ButtonGlow from './ui/ButtonGlow';
import { Check, ChevronsUpDown } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
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
    buttonText: 'Start Free Trial'
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
      answer: 'Yes, we offer a 14-day free trial of our Professional plan with no credit card required. You'll get full access to all features during this period.'
    },
    {
      id: 'cancel',
      question: 'Can I cancel anytime?',
      answer: 'Absolutely. You can cancel your subscription at any time without any cancellation fees. Your subscription will remain active until the end of the billing period.'
    },
    {
      id: 'languages',
      question: 'What programming languages do you support?',
      answer: 'We support most popular programming languages including JavaScript, TypeScript, Python, Java, C#, Ruby, Go, PHP, Swift, and more. We're constantly adding support for additional languages.'
    },
    {
      id: 'team',
      question: 'How does team billing work?',
      answer: 'Team billing is based on the number of seats (developers) in your organization. Each seat comes with its own set of review allocations, and you can add or remove seats as needed.'
    }
  ];
  
  return (
    <section id="pricing" className="section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="subtle-heading mb-3">Pricing</h2>
          <h3 className="heading-lg mb-6">Simple, Transparent Pricing</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for you and your team. All plans include core features with different limits.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div key={plan.name} className="flex flex-col h-full">
              <GlassCard 
                className={`flex flex-col h-full relative ${
                  plan.popular ? 'border-primary/30 shadow-lg' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-2">{plan.name}</h4>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-gray-500 ml-1">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </div>
                
                <div className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="ml-2 text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <ButtonGlow 
                  className="w-full justify-center mt-auto"
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.buttonText}
                </ButtonGlow>
              </GlassCard>
            </div>
          ))}
        </div>
        
        {/* FAQs */}
        <div className="mt-20">
          <h3 className="heading-md text-center mb-8">Frequently Asked Questions</h3>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <GlassCard key={faq.id} className="p-0 overflow-hidden">
                <button
                  className="flex justify-between items-center w-full p-6 text-left"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <h4 className="text-lg font-medium">{faq.question}</h4>
                  <ChevronsUpDown 
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      expanded === faq.id ? 'transform rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    expanded === faq.id ? 'max-h-40 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
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
