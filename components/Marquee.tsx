import React from 'react';
import { Star } from 'lucide-react';

const Marquee: React.FC = () => {
  const items = [
    "מחיר סופי מראש",
    "ללא קבלני משנה",
    "דיוק ברמת המילימטר",
    "תיאום ביצוע מהיר",
    "5 שנות אחריות"
  ];
  
  return (
    <div className="bg-timber-black text-white py-5 border-y border-gray-800 relative z-20 overflow-hidden">
      
      {/* Desktop: Static, Elegant Grid */}
      <div className="hidden md:flex justify-center items-center gap-12 container mx-auto">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <span className="text-sm font-bold tracking-[0.15em] uppercase hover:text-timber-accent transition-colors cursor-default">
              {item}
            </span>
            {index < items.length - 1 && (
              <Star className="w-3 h-3 text-timber-accent fill-timber-accent" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile: Animated Stream (Slower, smoother) */}
      <div className="md:hidden flex gap-8 whitespace-nowrap animate-marquee">
        {[...Array(3)].map((_, groupIndex) => (
          <div key={groupIndex} className="flex gap-8 items-center">
            {items.map((item, index) => (
              <React.Fragment key={`${groupIndex}-${index}`}>
                <span className="text-sm font-bold tracking-widest flex items-center gap-8">
                  {item} 
                </span>
                <Star className="w-3 h-3 text-timber-accent fill-timber-accent" />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - 2rem)); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite; /* Slower for premium feel */
        }
      `}</style>
    </div>
  );
};

export default Marquee;