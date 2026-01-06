import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  fullWidth = false, 
  variant = 'primary',
  className = '',
  ...props 
}) => {
  const baseStyles = "py-4 px-6 rounded-lg font-bold text-lg transition-all transform active:scale-[0.98] shadow-md flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-green-600 hover:bg-green-700 text-white shadow-green-200",
    secondary: "bg-slate-900 hover:bg-slate-800 text-white shadow-slate-200"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};