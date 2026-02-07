import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Logo {
  id: string | number;
  src: string;
  alt: string;
}

interface CompanyLogosProps {
  title?: string;
  logos: Logo[];
  className?: string;
  variant?: 'dark' | 'light'; 
}

const CompanyLogos: React.FC<CompanyLogosProps> = ({ 
  title = "Hire people from these companies",
  logos,
  className = '',
  variant = 'light' 
}) => {
  const midPoint = Math.ceil(logos.length / 2);
  const row1 = logos.slice(0, midPoint);
  const row2 = logos.slice(midPoint);

  const titleColor = variant === 'dark' ? 'text-white' : 'text-black';
  const logoFilter = variant === 'dark' ? 'brightness-0 invert' : 'brightness-0';
  const bgColor = variant === 'dark' ? '' : 'bg-transparent';

  return (
    <div className={twMerge(`w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center min-h-[400px] sm:min-h-[450px] md:min-h-[500px]`, bgColor, className)}>
      <h2 className={twMerge(`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-center mb-8 sm:mb-10 md:mb-12 tracking-tight leading-tight font-serif px-4`, titleColor)}>
        {title}
      </h2>

      <div className="w-full max-w-7xl flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 flex-wrap">
          {row1.map((logo, index) => (
            <div 
              key={logo.id} 
              className="shrink-0 h-8 sm:h-9 md:h-10 lg:h-12 flex items-center justify-center opacity-70 hover:opacity-100 hover:scale-105 sm:hover:scale-110 transition-all duration-300 ease-out"
              style={{
                animation: 'fadeIn 0.6s ease-out forwards',
                animationDelay: `${index * 100}ms`
              }}
            >
              <img 
                src={logo.src} 
                alt={logo.alt}
                loading="lazy"
                className={twMerge(`h-full w-auto max-w-[80px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[150px] object-contain transition-all duration-300`, logoFilter)}
              />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 flex-wrap">
          {row2.map((logo, index) => (
            <div 
              key={logo.id} 
              className="flex-shrink-0 h-8 sm:h-9 md:h-10 lg:h-12 flex items-center justify-center opacity-70 hover:opacity-100 hover:scale-105 sm:hover:scale-110 transition-all duration-300 ease-out"
              style={{
                animation: 'fadeIn 0.6s ease-out forwards',
                animationDelay: `${(index + row1.length) * 100}ms`
              }}
            >
              <img 
                src={logo.src} 
                alt={logo.alt}
                loading="lazy"
                className={twMerge(`h-full w-auto max-w-[80px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[150px] object-contain transition-all duration-300`, logoFilter)}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 0.7;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default CompanyLogos;