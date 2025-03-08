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
        { label: 'About Us', href: '#Aboutus' },
        { label: 'Careers', href: '#' },
        { label: 'Contact', href: '#' },
        { label: 'Legal', href: '#' },
      ]
    }
  ];
  
  return (
    <footer className="bg-gradient-to-b from-white via-blue-50/30 to-blue-100/50 dark:from-gray-900 dark:via-gray-900/95 dark:to-gray-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-64 pb-16 border-b border-gray-200 dark:border-gray-700">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Code className="h-7 w-7 text-primary dark:text-blue-400" />
              <span className="font-bold text-2xl bg-gradient-to-r from-primary to-blue-600 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent">
                CodeReviewAI
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
              AI-powered code reviews that help developers write better code, faster.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-blue-400 transition-all transform hover:scale-110">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-blue-400 transition-all transform hover:scale-110">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-blue-400 transition-all transform hover:scale-110">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {footerLinks.map((group) => (
            <div key={group.title} className="md:col-span-1">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-6">
                {group.title}
              </h4>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-blue-400 transition-colors hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-10">
          <div className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0 flex items-center">
            © {currentYear} CodeReviewAI. Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by developers for developers
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
