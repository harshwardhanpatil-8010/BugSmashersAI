import React, { useEffect, useRef } from 'react';
import ButtonGlow from './ui/ButtonGlow';
import { ArrowRight, Bold, Check, Star } from 'lucide-react';
import FloatingElements from './ui/FloatingElements';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const children = heroRef.current.querySelectorAll('.animate-on-load');
    children.forEach((el, index) => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        (el as HTMLElement).style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'translateY(0)';
      }, 150 * (index + 1));
    });
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900" ref={heroRef}>
      {/* Enhanced background glow effect */}
          <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 dark:to-gray-950/80"></div>
      <FloatingElements />
      {/* Hero Content */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 text-center z-10">
        <div className="flex justify-center mb-8 animate-on-load">
          <span className="bg-primary/15 dark:bg-primary/10 text-primary dark:text-primary/90 px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-primary/20 dark:hover:bg-primary/15 transition-colors">
            <Star className="h-4 w-4" />
            AI-Powered Code Reviews - Ship Better Code Faster
            <Star className="h-4 w-4" />
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-on-load bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500 dark:from-primary/90 dark:via-purple-400 dark:to-pink-400">
          Perfect Your Code With
          <span className="block mt-2">AI-Assisted Reviews</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-200 mb-10 max-w-3xl mx-auto animate-on-load leading-relaxed">
          Get instant, intelligent code reviews that help you write cleaner, more efficient, and more secure code—without waiting for human feedback.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12 animate-on-load">
          <ButtonGlow size="lg" className="flex items-center justify-center space-x-3 px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform dark:bg-primary/90 dark:hover:bg-primary/80">
            <span>Start Free Trial</span>
            <ArrowRight className="h-5 w-5" />
          </ButtonGlow>
          <ButtonGlow size="lg" variant="outline" className="flex items-center justify-center space-x-3 px-8 py-4 text-lg font-semibold hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors dark:border-primary/30">
            <span>View Demo</span>
          </ButtonGlow>
        </div>
        
        {/* Enhanced Benefits */}
        <div className="flex flex-wrap justify-center gap-4 animate-on-load">
          {['Bug Detection', 'Performance Optimization', 'Security Focused', 'Code Style'].map((benefit) => (
            <div 
              key={benefit} 
              className="flex items-center space-x-3 text-base font-medium bg-white/60 dark:bg-gray-800/40 backdrop-blur-lg px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700/50 hover:border-primary/50 dark:hover:border-primary/30 hover:bg-white/80 dark:hover:bg-gray-800/60 transition-all shadow-sm dark:text-gray-200"
            >
              <Check className="h-5 w-5 text-primary dark:text-primary/90" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Enhanced floating code blocks */}
       <div className="absolute top-1/4 -left-16 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-16 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/4 -left-16 w-72 h-56 bg-white/30 dark:bg-gray-800/20 backdrop-blur-lg rounded-xl border border-white/20 dark:border-gray-700/30 transform -rotate-12 opacity-70 animate-float hidden md:block shadow-lg"></div>
      <div className="absolute bottom-1/4 -right-16 w-72 h-48 bg-white/30 dark:bg-gray-800/20 backdrop-blur-lg rounded-xl border border-white/20 dark:border-gray-700/30 transform rotate-12 opacity-70 animate-float hidden md:block shadow-lg" style={{ animationDelay: '1s' }}></div>
      
    </div>
  );
};

export default HeroSection;
