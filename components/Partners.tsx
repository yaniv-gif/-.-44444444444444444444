import React from 'react';

const Partners: React.FC = () => {
  const partners = [
    { name: "Quick-Step", logo: "https://logo.clearbit.com/quick-step.com" },
    { name: "Krono Original", logo: "https://logo.clearbit.com/krono-original.com" },
    { name: "Berry Alloc", logo: "https://logo.clearbit.com/berryalloc.com" },
    { name: "Meister", logo: "https://logo.clearbit.com/meister.com" },
    { name: "Egger", logo: "https://logo.clearbit.com/egger.com" },
    { name: "Shaw Floors", logo: "https://logo.clearbit.com/shawfloors.com" },
    { name: "Quick-Step", logo: "https://logo.clearbit.com/quick-step.com" }, // Duplicate for loop
    { name: "Krono Original", logo: "https://logo.clearbit.com/krono-original.com" }, // Duplicate for loop
  ];

  return (
    <section className="py-6 bg-white border-b border-gray-100 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
      
      <div className="flex w-full">
         <div className="flex gap-16 animate-marquee whitespace-nowrap min-w-full items-center justify-around px-8">
            {partners.map((partner, index) => (
                <img 
                  key={index} 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-6 md:h-8 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
            ))}
         </div>
         {/* Second loop for seamless infinity scroll */}
         <div className="flex gap-16 animate-marquee whitespace-nowrap min-w-full items-center justify-around px-8" aria-hidden="true">
            {partners.map((partner, index) => (
                <img 
                  key={`clone-${index}`} 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-6 md:h-8 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
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