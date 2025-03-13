
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import CodeReviewDemo from '@/components/CodeReviewDemo';

import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';
//import AboutUs from '@/components/Aboutus';
import HowItWorks from '@/components/Howitworks';
import AlternatingFeatures from '@/components/AlternatingFeatures';
import CallToAction from '@/components/CallToAction';
//import { DarkModeProvider } from '@/components/ui/Dark-mode-context';

const Index = () => {

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      // Only handle links that start with #
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
      // Prevent default behavior
      e.preventDefault();
      
      // Get the target element
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Calculate header height for offset
        const headerHeight = 80; // Approximate navbar height
        const targetPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = targetPosition + window.scrollY - headerHeight;
        
        // Smooth scroll to target
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);


  return (
    
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50/50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950/50 transition-colors duration-300">
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#e5e7eb,transparent)] dark:bg-[radial-gradient(circle_500px_at_50%_200px,#1f2937,transparent)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
    </div>
    <Navbar />
    <main className="relative">
      <div className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/20 opacity-20 blur-3xl"></div>
      <div className="absolute left-0 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/20 opacity-20 blur-3xl"></div>
        <HeroSection />
      <AlternatingFeatures />
        <FeatureSection />
        <CodeReviewDemo />
        <HowItWorks />
        <PricingSection />
        <CallToAction />
      </main>
      <Footer />
      </div>
  );
};

export default Index;
