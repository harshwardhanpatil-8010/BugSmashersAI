
import React, { useState, useEffect } from 'react';
import GlassCard from './ui/GlassCard';
import { Code, MessageSquare, ThumbsUp } from 'lucide-react';

const CodeReviewDemo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    { id: 'code', label: 'Problematic Code' },
    { id: 'issues', label: 'Issues Found' },
    { id: 'suggestion', label: 'AI Suggestion' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const demoSection = document.getElementById('demo-section');
    if (demoSection) {
      observer.observe(demoSection);
    }

    return () => {
      if (demoSection) {
        observer.unobserve(demoSection);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
      }, 5000);
      
      return () => clearInterval(timer);
    }
  }, [isVisible, steps.length]);

  // Code examples
  const codeExample = `
function fetchUserData(userId) {
  // No error handling
  const response = fetch('https://api.example.com/users/' + userId);
  return response.json();
}

// Potential security issue with user input
function displayUserData(userId) {
  const data = fetchUserData(userId);
  document.getElementById('user-data').innerHTML = data.name;
}`;

  const issuesFound = [
    { id: 1, type: 'Error Handling', message: 'No try/catch block for API request' },
    { id: 2, type: 'Async/Await', message: 'Missing await for fetch operation' },
    { id: 3, type: 'Security Risk', message: 'Potential XSS vulnerability' }
  ];

  const aiSuggestion = `
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`);
    if (!response.ok) {
      throw new Error(\`API error: \${response.status}\`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    throw error;
  }
}

async function displayUserData(userId) {
  try {
    const data = await fetchUserData(userId);
    // Use textContent to prevent XSS
    document.getElementById('user-data').textContent = data.name;
  } catch (error) {
    // Handle error gracefully
    document.getElementById('user-data').textContent = 'Failed to load user data';
  }
}`;

  const renderContent = () => {
    switch (steps[currentStep].id) {
      case 'code':
        return (
          <div className="code-highlight">
            <pre>{codeExample}</pre>
          </div>
        );
      case 'issues':
        return (
          <div className="space-y-4">
            {issuesFound.map((issue) => (
              <div key={issue.id} className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <MessageSquare className="h-5 w-5 text-red-400" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">{issue.type}</h3>
                    <div className="mt-1 text-sm text-red-700">{issue.message}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case 'suggestion':
        return (
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <ThumbsUp className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-green-700 font-medium">AI Suggested Improvement</span>
            </div>
            <div className="code-highlight">
              <pre>{aiSuggestion}</pre>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="demo" className="section bg-gradient-to-b from-transparent to-blue-50/50">
      <div className="max-w-7xl mx-auto" id="demo-section">
        <div className="text-center mb-16">
          <h2 className="subtle-heading mb-3">See It In Action</h2>
          <h3 className="heading-lg mb-6">How AI Reviews Your Code</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience our AI's ability to identify issues and suggest improvements in real-time.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <GlassCard className="h-full">
              <div className="flex items-center space-x-2 mb-6">
                <Code className="h-6 w-6 text-primary" />
                <h4 className="text-lg font-semibold">Review Process</h4>
              </div>
              
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div 
                    key={step.id}
                    className={`flex items-start space-x-4 transition-all duration-300 ${
                      currentStep === index ? 'opacity-100' : 'opacity-50'
                    }`}
                  >
                    <div 
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        currentStep === index 
                          ? 'bg-primary text-white' 
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <h5 className="font-medium">{step.label}</h5>
                      <p className="text-sm text-gray-500 mt-1">
                        {index === 0 && "The AI scans your code for potential issues."}
                        {index === 1 && "It identifies specific problems and their severity."}
                        {index === 2 && "The AI suggests improved code with explanations."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          <div className="lg:w-2/3">
            <GlassCard className="h-full">
              <div className="flex space-x-2 mb-6">
                {steps.map((step, index) => (
                  <button
                    key={step.id}
                    className={`px-4 py-2 text-sm rounded-full transition-all ${
                      currentStep === index
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                    }`}
                    onClick={() => setCurrentStep(index)}
                  >
                    {step.label}
                  </button>
                ))}
              </div>
              
              <div className="transition-all duration-500 min-h-[300px]">
                {renderContent()}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeReviewDemo;
