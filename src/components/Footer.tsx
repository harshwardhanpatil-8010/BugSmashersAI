
import React from 'react';
import { cn } from '@/lib/utils';
import { Code, Twitter, Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { 
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Demo', href: '#demo' },
        { label: 'Integrations', href: '#' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '#' },
        { label: 'API Reference', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Tutorials', href: '#' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Contact', href: '#' },
        { label: 'Legal', href: '#' },
      ]
    }
  ];
  
  return (
    <footer className="bg-gradient-to-b from-white to-blue-50/70 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10 pb-12 border-b border-gray-200">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">CodeReviewAI</span>
            </div>
            <p className="text-gray-600 mb-6">
              AI-powered code reviews that help developers write better code, faster.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {footerLinks.map((group) => (
            <div key={group.title} className="md:col-span-1">
              <h4 className="font-medium text-sm uppercase tracking-wider text-gray-500 mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className="md:col-span-1">
            <h4 className="font-medium text-sm uppercase tracking-wider text-gray-500 mb-4">
              Subscribe
            </h4>
            <p className="text-gray-600 mb-4 text-sm">
              Get the latest updates and news straight to your inbox.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white px-3 py-1 rounded text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} CodeReviewAI. All rights reserved.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
