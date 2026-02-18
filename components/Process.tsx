import React from 'react';
import { Send, Ruler, Hammer, ShieldCheck } from 'lucide-react';

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
    <section className="py-24 bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
           <span className="text-timber-accent font-bold tracking-[0.2em] text-xs uppercase mb-2 block">Workflow</span>
           <h2 className="text-4xl font-black text-timber-black">איך זה עובד?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          
          {/* Connector Line */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-[2px] bg-gray-200 w-[80%] mx-auto -z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              
              {/* Icon Circle */}
              <div className="relative z-10 w-20 h-20 bg-timber-black rounded-full flex items-center justify-center mb-8 shadow-xl ring-4 ring-gray-50 group-hover:bg-timber-accent transition-colors duration-500">
                {step.icon}
              </div>

              {/* Card Content */}
              <div className="bg-white p-6 rounded-none shadow-sm border border-gray-100 h-full w-full relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
                {/* Watermark Number */}
                <span className="absolute -top-4 -right-4 text-8xl font-black text-gray-100 z-0 opacity-50 select-none font-sans">
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
      </div>
    </section>
  );
};

export default Process;