import React from 'react';
import { ButtonProps } from '../../types';
import { cn } from '../../lib/utils';

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  type = 'button',
  size = 'md',
  disabled = false,
  loading = false,
  children,
  onClick,
  className,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-lg';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus-visible:ring-blue-500 shadow-md hover:shadow-lg',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300 focus-visible:ring-gray-500',
    outline: 'border-2 border-gray-300 bg-white text-gray-900 hover:border-blue-600 hover:text-blue-600 focus-visible:ring-blue-500',
    ghost: 'text-gray-900 hover:bg-gray-100 active:bg-gray-200 focus-visible:ring-gray-500'
  };
  
  const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-6 text-base',
    lg: 'h-12 px-8 text-lg'
  };

  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        'transform transition-transform hover:-translate-y-0.5 active:translate-y-0',
        className
      )}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && (
        <svg
          className="mr-2 h-4 w-4 animate-spin"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button; 