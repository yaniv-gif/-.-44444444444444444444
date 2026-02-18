import React from 'react';

const Partners: React.FC = () => {
  const brands = [
    "QUICK-STEP",
    "KRONO ORIGINAL",
    "BERRY ALLOC",
    "MEISTER",
    "EGGER",
    "SHAW FLOORS",
    "QUICK-STEP", 
    "KRONO ORIGINAL"
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100 overflow-hidden relative reveal">
      <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">עובד עם חומרים מן המותגים המובילים</p>
      
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
      
      <div className="flex w-full">
         <div className="flex gap-16 animate-marquee whitespace-nowrap min-w-full items-center justify-around px-8">
            {brands.map((brand, index) => (
               <span key={index} className="text-xl md:text-2xl font-black tracking-[0.2em] text-gray-300 uppercase hover:text-timber-black transition-colors duration-300 cursor-default">
                 {brand}
               </span>
            ))}
         </div>
         {/* Second loop for seamless infinity scroll */}
         <div className="flex gap-16 animate-marquee whitespace-nowrap min-w-full items-center justify-around px-8" aria-hidden="true">
            {brands.map((brand, index) => (
               <span key={`clone-${index}`} className="text-xl md:text-2xl font-black tracking-[0.2em] text-gray-300 uppercase hover:text-timber-black transition-colors duration-300 cursor-default">
                 {brand}
               </span>
            ))}
         </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Partners;