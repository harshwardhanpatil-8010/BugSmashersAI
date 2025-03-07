
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
  border?: boolean;
}

const GlassCard = ({ 
  children,
  className,
  hover = true,
  border = true,
  ...props 
}: GlassCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white/70 backdrop-blur-lg rounded-2xl p-6",
        border && "border border-white/20",
        hover && "transition-all duration-300 hover:shadow-glass-hover hover:-translate-y-1",
        "shadow-glass",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
