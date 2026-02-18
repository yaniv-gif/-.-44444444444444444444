import React from 'react';

const Marquee: React.FC = () => {
  const text = "5 שנות אחריות • מחיר סופי מראש • עבודה עברית • זמינות מיידית • ללא קבלני משנה • 5 שנות אחריות";
  
  return (
    <div className="bg-timber-accent text-timber-black py-4 overflow-hidden relative z-20">
      <div className="flex gap-8 whitespace-nowrap animate-marquee">
        {[...Array(6)].map((_, i) => (
          <span key={i} className="text-lg font-bold uppercase tracking-widest flex items-center gap-8">
            {text} <span className="w-2 h-2 rounded-full bg-timber-black"></span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - 2rem)); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Marquee;