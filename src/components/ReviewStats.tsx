
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { BarChart3, Clock, Bug, ShieldCheck } from 'lucide-react';

const stats = [
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    value: 0,
    target: 95,
    unit: '%',
    label: 'Time Saved'
  },
  {
    icon: <Bug className="h-8 w-8 text-primary" />,
    value: 0,
    target: 87,
    unit: '%',
    label: 'Bugs Caught'
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    value: 0,
    target: 99,
    unit: '%',
    label: 'Security Issues Identified'
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    value: 0,
    target: 3,
    unit: 'x',
    label: 'Productivity Boost'
  }
];

const ReviewStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState(stats.map(stat => ({...stat, value: 0})));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => {
      if (statsSection) {
        observer.unobserve(statsSection);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setAnimatedStats(prev => 
          prev.map(stat => {
            if (stat.value < stat.target) {
              const increment = Math.ceil(stat.target / 30);
              return {
                ...stat,
                value: Math.min(stat.value + increment, stat.target)
              };
            }
            return stat;
          })
        );
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section className="section bg-primary/5" id="stats-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="subtle-heading mb-3">The Impact</h2>
          <h3 className="heading-lg mb-6">Measurable Results</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI code reviewer delivers significant improvements across development workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {animatedStats.map((stat, index) => (
            <div 
              key={index}
              className={cn(
                "flex flex-col items-center text-center p-8 rounded-2xl",
                "bg-white shadow-sm border border-gray-100",
                "transition-all duration-500 transform",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-full">
                {stat.icon}
              </div>
              <div className="flex items-baseline justify-center">
                <span className="text-4xl font-bold">{stat.value}</span>
                <span className="text-2xl font-bold ml-1">{stat.unit}</span>
              </div>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewStats;
