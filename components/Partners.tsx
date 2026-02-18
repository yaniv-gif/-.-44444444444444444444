import React from 'react';

const Partners: React.FC = () => {
  const partners = [
    { name: "Quick-Step", logo: "https://logo.clearbit.com/quick-step.com" },
    { name: "Krono Original", logo: "https://logo.clearbit.com/krono-original.com" },
    { name: "Berry Alloc", logo: "https://logo.clearbit.com/berryalloc.com" },
    { name: "Meister", logo: "https://logo.clearbit.com/meister.com" },
    { name: "Egger", logo: "https://logo.clearbit.com/egger.com" }, // Swapped generic Ipea for Egger (major brand)
    { name: "Shaw Floors", logo: "https://logo.clearbit.com/shawfloors.com" }
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <span className="text-sm font-bold text-gray-400 whitespace-nowrap uppercase tracking-widest">
              Trusted Brands
            </span>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-16 gap-y-8 w-full grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              {partners.map((partner, index) => (
                <img 
                  key={index} 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-8 md:h-10 w-auto object-contain mix-blend-multiply"
                />
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;