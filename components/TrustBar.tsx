import React from 'react';

const TrustBar: React.FC = () => {
  const stats = [
    { value: "5.0", label: "בגוגל (ביקורות מאומתות)" },
    { value: "500+", label: "רצפות שהושלמו בגוש דן" },
    { value: "10+", label: "שנות התמחות בפרקטים מורכבים" },
    { value: "5", label: "שנות אחריות בכתב" },
    { value: "0", label: "קבלני משנה בפרויקטים שלי" },
  ];

  return (
    <section className="relative z-30 -mt-20 px-4 md:px-6 reveal delay-100">
      <div className="container mx-auto">
        {/* Changed grid to 5 columns on desktop */}
        <div className="bg-white shadow-xl border-t border-gray-100 grid grid-cols-2 md:grid-cols-5 divide-x-0 md:divide-x md:divide-x-reverse divide-gray-200">
          {stats.map((stat, index) => (
            <div key={index} className={`flex flex-col items-center justify-center py-8 group cursor-default hover:bg-gray-50 transition-colors duration-300 ${index === 4 ? 'col-span-2 md:col-span-1 border-t md:border-t-0 border-gray-200' : ''}`}>
              <span className="text-3xl md:text-5xl font-black text-timber-black tracking-tighter">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm font-bold text-gray-600 mt-1 text-center px-2">
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