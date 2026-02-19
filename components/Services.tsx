import React from 'react';
import { ArrowLeft, MessageCircle } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "התקנת פרקטים",
      subtitle: "למינציה, תלת-שכבתי, SPC",
      desc: "התקנה והדבקה של כל סוגי הפרקטים: למינציה, עץ תלת-שכבתי ופרקט פולימרי (SPC) עמיד במים. עבודה עם כל היצרנים המובילים.",
      image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "פרקט פישבון",
      subtitle: "הדבקה בשיטה קלאסית",
      desc: "הדבקת פרקט פישבון (Herringbone) בעבודה הדורשת יד יציבה וסימטריה מושלמת. אלון מעושן, טבעי או מולבן.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "שטיחים מקיר לקיר",
      subtitle: "שיטה אמריקאית / הולנדית",
      desc: "התקנה ומתיחה באמצעות Power Stretcher (שיטה אמריקאית והולנדית). השטיח נמתח על 'גריפרים' נסתרים ללא שימוש בדבק.",
      image: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "דקים (התקנה וחידוש)",
      subtitle: "איפאה, אורן, סינתטי",
      desc: "התקנת דק עץ וסינתטי (WPC). בנוסף: שירות חידוש דקים ישנים — ליטוש ושימון שמחזירים לדק את הצבע והחיות.",
      image: "https://images.unsplash.com/photo-1499578124509-1611b77778c8?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "תיקונים ושיקום",
      subtitle: "פרקט חורק? התנפח?",
      desc: "כל סוגי התיקונים: קיצור דלתות, החלפת לוחות פגומים, תיקון רעשים ורצפה מתנפחת. שיקום מקצועי שחוסך החלפה.",
      image: "https://images.unsplash.com/photo-1581850518616-bcb8077a2536?q=80&w=800&auto=format&fit=crop"
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
              פתרונות ריצוף מתקדמים — התקנה, הדבקה וחידוש
            </p>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 reveal delay-100">
          {services.map((service, index) => {
            const colSpanClass = index < 3 ? "lg:col-span-2" : "lg:col-span-3";
            const heightClass = index < 3 ? "aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5]" : "aspect-[16/9] md:aspect-[21/9]";
            
            return (
              <div key={index} className={`group flex flex-col h-full bg-gray-50 border border-gray-200 hover:border-black transition-colors duration-300 ${colSpanClass}`}>
                <div className={`${heightClass} w-full overflow-hidden relative`}>
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
                    href={`https://wa.me/972543962871?text=${encodeURIComponent(`היי ג'ריקו, אשמח לקבל הצעת מחיר עבור ${service.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto w-full flex items-center justify-between bg-white border border-gray-200 px-4 py-3 text-sm font-bold text-timber-black hover:bg-timber-black hover:text-white hover:border-timber-black transition-all group-hover:shadow-md"
                  >
                    <span>בקש הצעת מחיר</span>
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;