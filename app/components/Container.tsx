import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 ${className}`}>
      {children}
    </div>
  );
}

