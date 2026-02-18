import React from 'react';

const TrustBar: React.FC = () => {
  const stats = [
    { value: "5.0", label: "דירוג בגוגל" },
    { value: "10+", label: "שנות ניסיון" },
    { value: "05", label: "שנות אחריות" },
    { value: "500+", label: "פרויקטים" },
  ];

  return (
    <section className="relative z-30 -mt-20 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="bg-white shadow-xl border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x md:divide-x-reverse divide-gray-200">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center py-8 group cursor-default hover:bg-gray-50 transition-colors duration-300">
              <span className="text-3xl md:text-5xl font-black text-timber-black tracking-tighter">
                {stat.value}
              </span>
              <span className="text-sm md:text-base font-bold text-gray-600 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;