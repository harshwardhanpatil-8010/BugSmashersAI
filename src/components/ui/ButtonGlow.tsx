
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ButtonGlowProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'subtle' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
}

const ButtonGlow = ({
  children,
  variant = 'default',
  size = 'default',
  className,
  ...props
}: ButtonGlowProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'subtle':
        return 'bg-white/90 text-primary hover:bg-white';
      case 'outline':
        return 'bg-transparent border-2 border-primary/50 text-primary hover:border-primary';
      default:
        return 'bg-gradient-to-r from-primary to-blue-500 text-white';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'text-sm px-4 py-2';
      case 'lg':
        return 'text-lg px-8 py-4';
      default:
        return 'text-base px-6 py-3';
    }
  };

  return (
    <button
      className={cn(
        'button-glow font-medium rounded-full',
        getVariantClasses(),
        getSizeClasses(),
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonGlow;
