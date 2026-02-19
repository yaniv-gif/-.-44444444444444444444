import React from 'react';
import { ArrowLeft, MessageCircle } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "התקנת פרקט",
      subtitle: "למינציה · תלת-שכבתי · פישבון",
      desc: "התקנת כל סוגי הפרקטים: למינציה, תלת-שכבתי ופישבון. הדבקה מלאה או התקנה צפה — לפי התשתית והמלצת היצרן.",
      image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "תיקוני פרקט",
      subtitle: "החלפת לוחות · שקיעות · גימורים",
      desc: "החלפת לוחות פגועים, טיפול בשקיעה/פערים/חריקות (תלוי מקור הבעיה), תיקוני פנלים וספי מעבר.",
      image: "https://images.unsplash.com/photo-1581850518616-bcb8077a2536?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "שטיחים מקיר לקיר",
      subtitle: "שיטה אמריקאית / הולנדית · הדבקה",
      desc: "מתיחה בשיטה אמריקאית/הולנדית או הדבקה מלאה — לפי סוג השטיח והשטח. החלפת קנטים/פנלים לפי הצורך.",
      image: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "חידוש והתקנת דקים",
      subtitle: "דק עץ · דק סינטטי · תיקון וגימור",
      desc: "התקנת דק עץ וסינטטי (WPC), תיקון והחלפת לוחות, חידוש וגימור (שמן/הגנה — לפי סוג הדק).",
      image: "https://images.unsplash.com/photo-1499578124509-1611b77778c8?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="pt-0 pb-16 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header without English */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-black pb-4 mt-6 md:mt-8 reveal">
          <div>
            <h2 className="text-5xl md:text-7xl font-black text-timber-black tracking-tight">
              השירותים
            </h2>
            <p className="text-xl mt-4 font-light text-gray-500">
              התקנה, תיקונים וגימור — לפי מצב התשתית והחומרים
            </p>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal delay-100">
          {services.map((service, index) => (
            <div key={index} className="group flex flex-col h-full bg-gray-50 border border-gray-200 hover:border-black transition-colors duration-300">
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10 duration-500"></div>
                <img
                  src={service.image}
                  loading="lazy"
                  alt={service.title}
                  className="w-full h-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col flex-grow p-6 md:p-8">
                <div className="mb-4 flex-grow">
                  <h3 className="text-2xl font-bold text-timber-black mb-1">{service.title}</h3>
                  <p className="text-xs font-bold text-timber-accent uppercase tracking-wider mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <a
                  href={`https://wa.me/972543962871?text=${encodeURIComponent(`היי ג'ריקו, אשמח לשאול לגבי ${service.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full flex items-center justify-between bg-white border border-gray-200 px-4 py-3 text-sm font-bold text-timber-black hover:bg-timber-black hover:text-white hover:border-timber-black transition-all group-hover:shadow-md"
                >
                  <span>שלחו תמונה לקבלת כיוון</span>
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Microcopy */}
        <p className="mt-8 text-center text-gray-500 font-light text-sm reveal delay-200">
          לא בטוחים מה נכון אצלכם? שלחו תמונה קצרה + מידה משוערת, ותקבלו הסבר מה אפשרויות העבודה.
        </p>
      </div>
    </section>
  );
};

export default Services;