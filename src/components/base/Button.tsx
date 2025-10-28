
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseClasses = 'whitespace-nowrap cursor-pointer font-medium rounded-2xl transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg';
  
  const variantClasses = {
    primary: 'bg-[#007BFF] text-white hover:bg-blue-600 shadow-md',
    secondary: 'bg-[#FFD200] text-[#1C1C1C] hover:bg-yellow-400 shadow-md',
    outline: 'border-2 border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
