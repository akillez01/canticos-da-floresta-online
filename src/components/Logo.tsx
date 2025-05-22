
import React from 'react';

interface LogoProps {
  className?: string;
  textClassName?: string;
  showText?: boolean;
}

const Logo = ({ className = '', textClassName = '', showText = true }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* SVG Logo Icon */}
      <div className="relative h-10 w-10 md:h-12 md:w-12">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-forest-600 dark:text-forest-400"
        >
          <path
            d="M50 10C42 45 20 55 20 70C20 85 34 95 50 95C66 95 80 85 80 70C80 55 58 45 50 10Z"
            fill="currentColor"
          />
          <path
            d="M50 25C45 48 30 60 30 70C30 80 40 85 50 85C60 85 70 80 70 70C70 60 55 48 50 25Z"
            fill="white"
            fillOpacity="0.3"
          />
          {/* Círculos como gotas d'água */}
          <circle cx="40" cy="60" r="4" fill="white" fillOpacity="0.8" className="animate-water-ripple [animation-delay:0s]" />
          <circle cx="60" cy="65" r="3" fill="white" fillOpacity="0.8" className="animate-water-ripple [animation-delay:1s]" />
          <circle cx="50" cy="50" r="2" fill="white" fillOpacity="0.8" className="animate-water-ripple [animation-delay:0.5s]" />
        </svg>
      </div>

      {/* Logo Text */}
      {showText && (
        <div className={`ml-2 flex flex-col leading-tight ${textClassName}`}>
          <span className="font-playfair text-lg font-medium tracking-tight text-forest-800 dark:text-forest-200 md:text-xl">Cânticos</span>
          <span className="font-playfair text-sm tracking-wide text-forest-600 dark:text-forest-400 md:text-base">da Floresta</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
