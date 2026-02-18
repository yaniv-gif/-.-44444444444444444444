import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      text: "ג'ריקו התקין לנו פרקט בכל הבית. לא רק מקצוען — פרפקציוניסט. עבודה שקטה, נקייה, ותוצאה שנראית כאילו תמיד הייתה כאן.",
      author: "רונית ו.",
      location: "רמת גן",
      type: "פרקט למינציה"
    },
    {
      text: "החליף לנו דק איפאה שנרקב. עבודה יסודית, מחיר הוגן, ונתן מחיר סגור שלא השתנה. ממליצים בחום.",
      author: "משפחת לוי",
      location: "הרצליה",
      type: "חידוש דק"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 border-b border-gray-100 pb-8 flex justify-between items-end">
           <div>
             <span className="text-timber-accent font-bold tracking-[0.2em] text-xs uppercase">Social Proof</span>
             <h2 className="text-3xl md:text-5xl font-black mt-4 text-timber-black">מה אומרים עליי</h2>
           </div>
           <a href="https://g.page/" target="_blank" rel="noopener" className="hidden md:block text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors">
             קראו עוד ב-Google
           </a>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Real Reviews */}
          <div className="space-y-12">
            {reviews.map((review, index) => (
              <div key={index} className="relative pl-8 border-r-4 border-timber-accent/30 pr-6">
                <Quote className="w-8 h-8 text-timber-accent mb-4 transform -scale-x-100" />
                <p className="text-lg font-medium text-gray-800 mb-6 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex flex-col">
                  <span className="font-bold text-black uppercase tracking-wider">{review.author}</span>
                  <span className="text-sm text-gray-500 font-bold uppercase tracking-widest">{review.location}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Visual WhatsApp Screenshot Placeholder */}
          <div className="relative">
             <div className="absolute inset-0 bg-timber-accent/10 rounded-3xl transform rotate-3 scale-105"></div>
             <div className="bg-[#E5DDD5] p-4 rounded-2xl shadow-xl relative z-10 max-w-sm mx-auto border border-gray-200">
                {/* Header */}
                <div className="flex items-center gap-3 bg-[#075E54] p-3 -m-4 mb-4 rounded-t-2xl text-white">
                   <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                   <div className="flex flex-col">
                      <span className="text-sm font-bold">ג'ריקו אספינוזה</span>
                      <span className="text-[10px] text-white/80">מחובר/ת</span>
                   </div>
                </div>

                {/* Messages */}
                <div className="space-y-3 pt-2 text-sm">
                   <div className="bg-white p-2 rounded-lg rounded-tr-none shadow-sm max-w-[85%] self-start mr-auto relative">
                      <p dir="rtl">ג'ריקו תודה רבה על העבודה!! יצא מושלם 🙏</p>
                      <span className="text-[10px] text-gray-400 block text-left mt-1">10:42</span>
                   </div>
                   <div className="bg-[#dcf8c6] p-2 rounded-lg rounded-tl-none shadow-sm max-w-[85%] ml-auto relative">
                      <p dir="rtl">בכיף גדול, תתחדשו! שמח שאהבתם</p>
                      <span className="text-[10px] text-gray-500 block text-right mt-1">10:43</span>
                   </div>
                   <div className="bg-white p-2 rounded-lg rounded-tr-none shadow-sm max-w-[85%] self-start mr-auto relative">
                      <p dir="rtl">כבר העברתי את המספר שלך לשכנים, הם התלהבו מהפישבון 😉</p>
                      <span className="text-[10px] text-gray-400 block text-left mt-1">10:45</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;