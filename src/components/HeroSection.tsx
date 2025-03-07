
import React, { useEffect, useRef } from 'react';
import ButtonGlow from './ui/ButtonGlow';
import { ArrowRight, Check } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const children = heroRef.current.querySelectorAll('.animate-on-load');
    children.forEach((el, index) => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        (el as HTMLElement).style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'translateY(0)';
      }, 100 * (index + 1));
    });
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden" ref={heroRef}>
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-hero-glow opacity-70 pointer-events-none"></div>
      
      {/* Hero Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center z-10">
        <div className="flex justify-center mb-6 animate-on-load">
          <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
            AI-Powered Code Reviews
          </span>
        </div>
        
        <h1 className="heading-xl mb-6 animate-on-load">
          Perfect Your Code With
          <span className="text-gradient block"> AI-Assisted Reviews</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-on-load">
          Get instant, intelligent code reviews that help you write cleaner, more efficient, and more secure code—without waiting for human feedback.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10 animate-on-load">
          <ButtonGlow size="lg" className="flex items-center space-x-2">
            <span>Start Free Trial</span>
            <ArrowRight className="h-4 w-4" />
          </ButtonGlow>
          <ButtonGlow size="lg" variant="outline" className="flex items-center space-x-2">
            <span>View Demo</span>
          </ButtonGlow>
        </div>
        
        {/* Benefits */}
        <div className="flex flex-wrap justify-center gap-4 animate-on-load">
          {['Real-time feedback', 'Simple integration', 'Security focused'].map((benefit) => (
            <div key={benefit} className="flex items-center space-x-2 text-sm font-medium bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full">
              <Check className="h-4 w-4 text-primary" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating code blocks (decorative) */}
      <div className="absolute top-1/4 -left-16 w-64 h-48 bg-white/20 backdrop-blur-sm rounded-lg border border-white/10 transform -rotate-12 opacity-60 animate-float hidden md:block"></div>
      <div className="absolute bottom-1/4 -right-16 w-64 h-40 bg-white/20 backdrop-blur-sm rounded-lg border border-white/10 transform rotate-12 opacity-60 animate-float hidden md:block" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default HeroSection;
