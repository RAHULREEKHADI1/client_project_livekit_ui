import React from 'react';

interface Testimonial {
  id: string | number;
  text: string;
}

interface TestimonialMarqueeProps {
  testimonials: Testimonial[];
  speed?: number;
  className?: string;
}

interface MarqueeRowProps {
  items: Testimonial[];
  direction: 'normal' | 'reverse';
  speed: number;
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({ items, direction, speed }) => {
  const repeatedItems = [...items, ...items, ...items, ...items];
  
  return (
    <div className="relative overflow-hidden py-3 w-full">
      <div 
        className="flex w-fit animate-scroll will-change-transform hover:pause"
        style={{
          animationDirection: direction,
          animationDuration: `${speed}s`
        }}
      >
        <div className="flex gap-4 px-2 shrink-0">
          {repeatedItems.map((item, index) => (
            <div key={`${item.id}-1-${index}`} className="shrink-0">
              <div className="bg-linear-to-br from-purple-100 via-purple-200 to-purple-200 border border-purple-200 rounded-lg p-5 px-6 min-w-[300px] max-w-[450px] shadow-sm hover:shadow-purple-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 ease-in-out text-gray-700 text-[15px] leading-relaxed whitespace-normal">
                <span className="text-black font-medium">"{item.text}"</span>
              </div>
            </div>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex gap-4 px-2 shrink-0" aria-hidden="true">
          {repeatedItems.map((item, index) => (
            <div key={`${item.id}-2-${index}`} className="shrink-0">
              <div className="bg-linear-to-br from-purple-10 via-purple-200 to-purple-200 border border-purple-200 rounded-lg p-5 px-6 min-w-[300px] max-w-[450px] shadow-sm hover:shadow-purple-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 ease-in-out text-gray-700 text-[15px] leading-relaxed whitespace-normal">
                <span className="text-black font-medium">"{item.text}"</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TestimonialMarquee: React.FC<TestimonialMarqueeProps> = ({ 
  testimonials,
  speed = 30,
  className = ''
}) => {
  const itemsPerRow = Math.ceil(testimonials.length / 3);
  const row1 = testimonials.slice(0, itemsPerRow);
  const row2 = testimonials.slice(itemsPerRow, itemsPerRow * 2);
  const row3 = testimonials.slice(itemsPerRow * 2);

  return (
    <div className={`w-full overflow-hidden bg-transparent py-8 ${className}`}>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .animate-scroll > div > div > div {
            min-width: 240px;
            max-width: 350px;
            font-size: 0.875rem;
            padding: 1rem 1.25rem;
          }
        }

        @media (max-width: 480px) {
          .animate-scroll > div > div > div {
            min-width: 200px;
            max-width: 300px;
          }
        }
      `}</style>

      <MarqueeRow items={row1} direction="normal" speed={speed} />
      <MarqueeRow items={row2} direction="reverse" speed={speed * 0.9} />
      <MarqueeRow items={row3} direction="normal" speed={speed * 1.05} />
    </div>
  );
};

export default TestimonialMarquee;