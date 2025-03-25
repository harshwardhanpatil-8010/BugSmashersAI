
import { useRef, useEffect } from 'react';
import { Code, FileCheck, Cpu, GitPullRequest } from 'lucide-react';

const steps = [
  {
    icon: <Code size={32} className="text-blue-500" />,
    title: "1. Connect Your Code",
    description: "Easily integrate with GitHub, GitLab, Bitbucket, or upload your code directly. BugSmashersAI works with all major programming languages.",
    delay: 1
  },
  {
    icon: <Cpu size={32} className="text-blue-500" />,
    title: "2. AI Analysis",
    description: "Our advanced AI engine analyzes your code, identifying bugs, security vulnerabilities, performance issues, and style inconsistencies.",
    delay: 2
  },
  {
    icon: <FileCheck size={32} className="text-blue-500" />,
    title: "3. Review & Learn",
    description: "Get detailed explanations and learn why specific code patterns are problematic and how to improve them.",
    delay: 3
  },
  {
    icon: <GitPullRequest size={32} className="text-blue-500" />,
    title: "4. Implement & Improve",
    description: "Apply suggestions automatically with one click or manually implement them to improve your codebase.",
    delay: 4
  }
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const section = sectionRef.current;
    const steps = stepsRefs.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    
    if (section) {
      observer.observe(section);
    }
    
    steps.forEach((step) => {
      if (step) {
        observer.observe(step);
      }
    });
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
      
      steps.forEach((step) => {
        if (step) {
          observer.unobserve(step);
        }
      });
    };
  }, []);

  return (
    <section id="how-it-works" className="bg-gray-50 py-24" ref={sectionRef}>
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal">
            <div className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light px-4 py-1.5 rounded-full text-sm font-medium mb-8 inline-block">
              How It Works
            </div>
          </div>
          <h2 className="reveal text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Simple Process, Powerful Results
          </h2>
          <p className="reveal text-lg text-gray-600">
          BugSmashersAI seamlessly integrates with your existing workflow to provide instant feedback and improve code quality.
          </p>
        </div>
        
        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.title}
              ref={(el) => (stepsRefs.current[index] = el)}
              className={`reveal glass-card rounded-xl p-8 flex flex-col items-center text-center delay-${step.delay}`}
            >
              <div className="h-16 w-16 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
       
      </div>
    </section>
  );
};

export default HowItWorks;