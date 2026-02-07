import React from 'react';
import { twMerge } from 'tailwind-merge';

interface BasicToolCardProps {
  serialNumber?: string | number;
  label?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

const BasicToolCard: React.FC<BasicToolCardProps> = ({
  serialNumber,
  label,
  description,
  imageSrc,
  imageAlt = '',
  className = ''
}) => {
  return (
    <div 
      className={twMerge(
        'flex flex-col sm:flex-row items-start gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-6 border border-gray-200 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300',
        className
      )}
    >
      <div className="flex items-start gap-3 sm:gap-3 w-full sm:w-auto">
        <div className="shrink-0 text-lg sm:text-xl font-semibold text-black pt-0.5 sm:pt-1">
          {serialNumber}.
        </div>

        <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
          <img 
            src={imageSrc} 
            alt={imageAlt}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col flex-1 pt-0 sm:pt-1 w-full sm:w-auto">
        <h3 className="text-base sm:text-lg font-semibold text-black leading-snug underline decoration-2 underline-offset-2">
          {label}
        </h3>
        <p className="text-sm sm:text-base text-gray-800 leading-snug mt-0.5">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BasicToolCard;