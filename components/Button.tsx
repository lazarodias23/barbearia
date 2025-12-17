import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  // Base styles including 3D transform transition and shadow
  const baseStyles = "relative overflow-hidden px-8 py-3 font-sans font-bold uppercase tracking-wider transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group rounded-sm";
  
  const variants = {
    primary: `
      bg-gradient-to-r from-gold-500 to-gold-400 
      text-matte-950 
      shadow-[0_4px_0_rgb(138,109,48)] 
      hover:shadow-[0_2px_0_rgb(138,109,48)] 
      hover:translate-y-[2px] 
      active:shadow-none 
      active:translate-y-[4px]
      after:absolute after:inset-0 after:bg-white/20 after:translate-x-[-100%] after:hover:translate-x-[100%] after:transition-transform after:duration-700
    `,
    outline: `
      border-2 border-gold-500 
      text-gold-400 
      hover:bg-gold-500 hover:text-matte-900 
      hover:shadow-glow
      backdrop-blur-sm
    `
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};