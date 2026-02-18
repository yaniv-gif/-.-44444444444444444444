import React from 'react';
import { Lock, User, CheckCircle2 } from 'lucide-react';

const Guarantee: React.FC = () => {
  const pillars = [
    {
      icon: <Lock className="w-10 h-10" />,
      title: "מחיר סופי בהחלט",
      desc: "בלי 'הפתעות' ובלי תוספות באמצע העבודה. מה שסיכמנו במדידה — זה הסכום שתשלמו."
    },
    {
      icon: <User className="w-10 h-10" />,
      title: "רק אני אצלכם",
      desc: "אין צוותים מתחלפים ואין קבלני משנה. אני מגיע, אני מודד, ואני מתקין."
    },
    {
      icon: <CheckCircle2 className="w-10 h-10" />,
      title: "אחריות מורחבת",
      desc: "5 שנות אחריות על ההתקנה. אם משהו זז או חורק — אני חוזר לתקן."
    }
  ];

  return (
    <section className="py-24 bg-[#121212] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 border-b border-gray-800 pb-8">
           <div>
             <span className="text-timber-accent font-bold tracking-[0.2em] text-xs uppercase mb-2 block">The Standard</span>
             <h2 className="text-4xl md:text-5xl font-black leading-tight">
               הסטנדרט שלי.
             </h2>
           </div>
           <p className="text-gray-400 max-w-md text-sm md:text-base mt-4 md:mt-0 font-light">
             בשוק הפרוץ של השיפוצים, אני מציע שקט נפשי. עבודה שקטה, נקייה ומדוייקת.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((item, index) => (
            <div key={index} className="flex flex-col items-start p-10 bg-[#1A1A1A] border border-gray-800 hover:border-timber-accent transition-colors duration-500 group">
              <div className="mb-8 text-timber-accent group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight">{item.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guarantee;