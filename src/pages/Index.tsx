
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import CodeReviewDemo from '@/components/CodeReviewDemo';
import ReviewStats from '@/components/ReviewStats';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Implement smooth scrolling for anchor links
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
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <FeatureSection />
        <CodeReviewDemo />
        <ReviewStats />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
