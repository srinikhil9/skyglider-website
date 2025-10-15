import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  disabled?: boolean;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'medium',
  className = '',
  disabled = false,
  target,
  rel,
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-dark hover:text-white focus:ring-primary shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 font-bold',
    secondary: 'bg-secondary text-white hover:bg-gray-700 hover:text-white focus:ring-secondary shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 font-bold',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary hover:scale-105 active:scale-95 font-bold',
  };
  
  const sizeStyles = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };
  
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`;
  
  if (href) {
    if (href.startsWith('http') || href.startsWith('//')) {
      return (
        <a
          href={href}
          className={combinedClassName}
          target={target || '_blank'}
          rel={rel || 'noopener noreferrer'}
        >
          {children}
        </a>
      );
    }
    
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {children}
    </button>
  );
}

