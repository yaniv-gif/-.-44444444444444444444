import React from 'react';
import { ShieldCheck, UserCheck, Ruler } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-24 bg-[#121212] text-white relative overflow-hidden">
      {/* Background Noise & Gradient */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-16 border-r-4 border-timber-accent pr-8 py-2">
          <h2 className="text-4xl md:text-6xl font-black text-white leading-none mb-4">
            הסטנדרט שלי.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl">
            בשוק הפרוץ של השיפוצים, אני מציע משהו נדיר: <span className="text-white font-bold">ודאות.</span>
          </p>
        </div>

        {/* The 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-800">
          
          {/* Pillar 1 */}
          <div className="group border-b md:border-b-0 md:border-r border-gray-800 p-10 hover:bg-white/5 transition-colors duration-500">
            <div className="mb-6 flex justify-between items-start">
              <Ruler className="w-10 h-10 text-timber-accent" />
              <span className="text-gray-700 font-black text-5xl opacity-20 group-hover:opacity-40 transition-opacity">01</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">מחיר סופי בהחלט</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              הסכום שנסגר במדידה הוא הסכום הסופי. אין "הפתעות" ביום ההתקנה, אין תוספות על פנלים, ואין אותיות קטנות. מילה זו מילה.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="group border-b md:border-b-0 md:border-r border-gray-800 p-10 hover:bg-white/5 transition-colors duration-500">
            <div className="mb-6 flex justify-between items-start">
              <UserCheck className="w-10 h-10 text-timber-accent" />
              <span className="text-gray-700 font-black text-5xl opacity-20 group-hover:opacity-40 transition-opacity">02</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">רק אני אצלכם</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              אני לא שולח "צוותים" ולא מעסיק קבלני משנה. אני מגיע למדידה, אני מבצע את ההתקנה, ואני מנקה אחריי. אתם יודעים בדיוק מי נכנס אליכם הביתה.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="group border-gray-800 p-10 hover:bg-white/5 transition-colors duration-500">
            <div className="mb-6 flex justify-between items-start">
              <ShieldCheck className="w-10 h-10 text-timber-accent" />
              <span className="text-gray-700 font-black text-5xl opacity-20 group-hover:opacity-40 transition-opacity">03</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">אחריות מורחבת</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              רוב השוק נותן שנה. אני נותן <span className="text-white font-bold">5 שנים</span>. אם פרקט זז, חורק או מתנפח – אני חוזר לתקן. בלי שאלות ובלי התחמקויות.
            </p>
          </div>
        </div>

        {/* Signature Footer */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 pt-10 border-t border-gray-800">
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-timber-accent"></div>
            <span className="uppercase tracking-[0.2em] text-xs text-timber-accent">Jericho Espinoza</span>
          </div>
           {/* SVG Signature simulation */}
           <div className="text-4xl text-gray-500 opacity-50 font-serif italic">
             Jericho.
           </div>
        </div>

      </div>
    </section>
  );
};

export default Guarantee;