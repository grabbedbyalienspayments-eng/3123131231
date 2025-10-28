
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  const hoverClasses = hover ? 'hover:transform hover:scale-105 hover:shadow-xl transition-all duration-300' : '';
  
  return (
    <div className={`bg-white rounded-2xl shadow-lg p-6 ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}
