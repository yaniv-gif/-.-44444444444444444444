import React from 'react';
import { Send, Ruler, Hammer, ShieldCheck, ArrowLeft } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      num: "01",
      icon: <Send className="w-6 h-6 text-white" />,
      title: "שולחים תמונה",
      desc: "שולחים תמונה בוואטסאפ ומקבלים הערכת מחיר ראשונית מיד."
    },
    {
      num: "02",
      icon: <Ruler className="w-6 h-6 text-white" />,
      title: "מדידה סופית",
      desc: "אני מגיע למדוד. המחיר שנקבע כאן הוא המחיר הסופי."
    },
    {
      num: "03",
      icon: <Hammer className="w-6 h-6 text-white" />,
      title: "ביצוע",
      desc: "התקנה שקטה ונקייה. אני מפנה את הנסורת והשאריות בסיום."
    },
    {
      num: "04",
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: "אחריות",
      desc: "לוחצים יד, ותעודת האחריות (5 שנים) נכנסת לתוקף."
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-b border-gray-200 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-timber-accent/20 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
           <span className="text-timber-accent font-bold tracking-[0.2em] text-xs uppercase mb-2 block">The Workflow</span>
           <h2 className="text-4xl md:text-5xl font-black text-timber-black">איך זה עובד?</h2>
           <p className="mt-4 text-gray-500 font-light">בלי בירוקרטיה. בלי אותיות קטנות. תהליך פשוט של 4 שלבים.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative">
          
          {/* Desktop Connector Line */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-[2px] bg-gray-200 w-[80%] mx-auto -z-0"></div>
          
          {/* Mobile Connector Line */}
          <div className="md:hidden absolute top-0 bottom-0 right-1/2 w-[2px] bg-gray-200 -z-0 transform translate-x-1/2"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              
              {/* Icon Circle */}
              <div className="relative z-10 w-20 h-20 bg-timber-black rounded-full flex items-center justify-center mb-8 shadow-xl ring-8 ring-gray-50 group-hover:bg-timber-accent transition-colors duration-500 group-hover:scale-110">
                {step.icon}
              </div>

              {/* Card Content */}
              <div className="bg-white p-8 md:p-6 rounded-xl shadow-sm border border-gray-100 h-full w-full relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-500 hover:shadow-lg hover:shadow-gray-200/50">
                {/* Watermark Number */}
                <span className="absolute -top-6 -right-6 text-[8rem] font-black text-gray-50 z-0 opacity-60 select-none font-sans pointer-events-none group-hover:text-timber-accent/10 transition-colors">
                  {step.num}
                </span>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-black text-timber-black mb-3">{step.title}</h3>
                  <p className="text-gray-500 font-medium text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="https://wa.me/972543962871"
            className="inline-flex items-center gap-3 bg-timber-black text-white px-8 py-4 rounded-full font-bold hover:bg-timber-accent hover:text-timber-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span>נתחיל בשלב 1: שלחו תמונה</span>
            <ArrowLeft className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;