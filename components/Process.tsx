import React from 'react';
import { Send, Ruler, Hammer, ShieldCheck, ArrowRight } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      num: "01",
      icon: <Send className="w-6 h-6 text-white" />,
      title: "הצעת מחיר מהירה",
      desc: "שולחים תמונה של החדר בוואטסאפ, ומקבלים הערכת מחיר ראשונית. בלי ביקורים מיותרים."
    },
    {
      num: "02",
      icon: <Ruler className="w-6 h-6 text-white" />,
      title: "מדידה ונעילת מחיר",
      desc: "אני מגיע למדוד את השטח. המחיר שנקבע כאן הוא סופי. אין תוספות, אין 'לא ראיתי'."
    },
    {
      num: "03",
      icon: <Hammer className="w-6 h-6 text-white" />,
      title: "ההתקנה",
      desc: "אני מגיע בזמן (על הדקה). עבודה נקייה, שקטה, עם ציוד מקצועי ששואב את האבק."
    },
    {
      num: "04",
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: "מסירת מפתח",
      desc: "בודקים יחד כל פינה. רק כשאתם מחייכים, אני מוסר תעודת אחריות ל-5 שנים."
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-2xl">
            <span className="text-timber-accent font-bold tracking-widest text-xs uppercase mb-3 block">
              איך זה עובד
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-timber-black leading-tight">
              שקט נפשי.<br/>
              ב-4 שלבים פשוטים.
            </h2>
          </div>
          <div className="hidden md:block">
            <a 
              href="https://wa.me/972543962871"
              className="inline-flex items-center gap-2 text-sm font-bold border-b-2 border-timber-black pb-1 hover:text-timber-accent hover:border-timber-accent transition-colors"
            >
              דלג לשלב 1: שלח הודעה
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200 w-full -z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col md:items-center md:text-center group">
                
                {/* Mobile Connector (Vertical) */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden absolute top-12 right-6 bottom-[-48px] w-0.5 bg-gray-200"></div>
                )}

                {/* Number & Icon Bubble */}
                <div className="relative z-10 flex items-center gap-6 md:flex-col md:gap-0 w-full mb-6">
                   {/* Icon */}
                   <div className="w-12 h-12 md:w-24 md:h-24 bg-timber-black rounded-full flex items-center justify-center shadow-xl ring-8 ring-gray-50 group-hover:bg-timber-accent group-hover:scale-110 transition-all duration-500 shrink-0 order-2 md:order-1 md:mb-6">
                     {step.icon}
                   </div>
                   
                   {/* Number (Mobile: Left, Desktop: Top) */}
                   <span className="text-4xl md:text-6xl font-black text-gray-200 md:absolute md:-top-12 md:left-1/2 md:-translate-x-1/2 md:-z-10 group-hover:text-timber-accent/20 transition-colors order-1 md:order-2">
                     {step.num}
                   </span>
                </div>

                {/* Text Content */}
                <div className="pr-[4.5rem] md:pr-0">
                  <h3 className="text-xl font-black text-timber-black mb-3 group-hover:text-timber-accent transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 font-medium text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;