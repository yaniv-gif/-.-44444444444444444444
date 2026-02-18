import React from 'react';
import { Lock, User, CheckCircle2, Award } from 'lucide-react';

const Guarantee: React.FC = () => {
  const pillars = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: "מחיר סופי בהחלט",
      desc: "בלי 'הפתעות' ובלי תוספות. הסכום שנסגר במדידה הוא הסכום הסופי לתשלום."
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "רק אני אצלכם",
      desc: "אין צוותים מתחלפים ואין קבלני משנה. אני מגיע, אני מודד, ואני מתקין."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "אחריות מורחבת",
      desc: "5 שנות אחריות מלאה על ההתקנה. אם משהו זז, חורק או מתרומם — אני חוזר."
    }
  ];

  return (
    <section className="py-24 bg-[#121212] bg-noise text-white relative">
      {/* Decorative Gold Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-timber-black via-timber-accent to-timber-black opacity-30"></div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 border-b border-gray-800 pb-10">
           <div className="max-w-2xl">
             <div className="flex items-center gap-3 mb-4">
                <Award className="text-timber-accent w-6 h-6" />
                <span className="text-timber-accent font-bold tracking-[0.2em] text-xs uppercase">The Gold Standard</span>
             </div>
             <h2 className="text-4xl md:text-6xl font-black leading-tight text-white">
               לא עוד "שיפוצניק".<br/>
               <span className="text-gray-500">אומן פרקט.</span>
             </h2>
           </div>
           <p className="text-gray-400 max-w-md text-sm md:text-base mt-6 md:mt-0 font-light leading-relaxed border-r border-gray-800 pr-6">
             בשוק הפרוץ של השיפוצים בישראל, אני מציע שקט נפשי. בלי איחורים, בלי לכלוך מיותר, ובלי אותיות קטנות.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((item, index) => (
            <div key={index} className="flex flex-col items-start p-10 bg-[#1A1A1A]/80 backdrop-blur-sm border border-gray-800 hover:border-timber-accent/50 transition-all duration-500 group relative overflow-hidden">
              {/* Gold Glow Effect on Hover */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-timber-accent/10 rounded-full blur-2xl transform translate-x-12 -translate-y-12 group-hover:bg-timber-accent/20 transition-colors"></div>

              <div className="mb-6 text-timber-accent p-3 bg-timber-accent/10 rounded-lg group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-4 tracking-tight text-white group-hover:text-timber-accent transition-colors">
                {item.title}
              </h3>
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