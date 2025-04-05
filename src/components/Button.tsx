
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  href?: string;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  href,
  ...props
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymstr-orange focus-visible:ring-offset-2 disabled:opacity-50';
  
  const variants = {
    primary: 'bg-gymstr-orange text-white hover:bg-gymstr-orange/90',
    outline: 'border border-gymstr-beige/20 hover:bg-gymstr-orange/10 text-gymstr-beige hover:text-gymstr-orange', // Updated hover style
    ghost: 'hover:bg-gymstr-orange/10 text-gymstr-beige hover:text-gymstr-orange', // Updated hover style
  };

  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-12 px-6',
    lg: 'h-14 px-8 text-lg',
  };

  const buttonStyles = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={buttonStyles}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
