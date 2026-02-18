import React from 'react';
import { Quote, Star, Phone } from 'lucide-react';

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
    <section className="py-24 bg-white relative">
       {/* Background Decoration */}
       <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -z-0"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-gray-100 pb-8">
           <div>
             <span className="text-timber-accent font-bold tracking-[0.2em] text-xs uppercase">Clients & Reviews</span>
             <h2 className="text-4xl md:text-5xl font-black mt-3 text-timber-black">מה אומרים עליי</h2>
           </div>
           
           {/* Aggregate Badge */}
           <a href="https://g.page/" target="_blank" rel="noopener" className="flex items-center gap-4 bg-white border border-gray-200 px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex -space-x-1">
                 {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                 ))}
              </div>
              <div className="flex flex-col text-right border-r border-gray-100 pr-4">
                 <span className="font-bold text-sm text-gray-900 group-hover:text-blue-600 transition-colors">Google Reviews</span>
                 <span className="text-xs text-gray-500">דירוג 5.0 מושלם</span>
              </div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-6 h-6 mr-2" />
           </a>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Real Reviews */}
          <div className="space-y-10">
            {reviews.map((review, index) => (
              <div key={index} className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <Quote className="absolute top-8 left-8 w-10 h-10 text-gray-100 group-hover:text-timber-accent/20 transform -scale-x-100 transition-colors" />
                <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-timber-accent text-timber-accent" />
                    ))}
                </div>
                <p className="text-lg font-medium text-gray-700 mb-6 leading-relaxed relative z-10">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4 border-t border-gray-50 pt-4">
                  <div className="w-10 h-10 rounded-full bg-timber-black text-white flex items-center justify-center font-bold text-sm">
                    {review.author.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-black text-sm">{review.author}</span>
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">{review.location} • {review.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual WhatsApp Screenshot Placeholder */}
          <div className="relative mt-8 md:mt-0">
             <div className="absolute inset-0 bg-timber-accent rounded-3xl transform rotate-6 scale-95 opacity-20 blur-xl"></div>
             <div className="bg-[#E5DDD5] p-6 rounded-3xl shadow-2xl relative z-10 max-w-sm mx-auto border-4 border-white/50">
                {/* Header */}
                <div className="flex items-center gap-3 bg-[#075E54] p-4 -m-6 mb-6 rounded-t-3xl text-white shadow-md relative z-20">
                   <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white/20"></div>
                   <div className="flex flex-col">
                      <span className="text-base font-bold">ג'ריקו אספינוזה</span>
                      <span className="text-[10px] text-white/80">מחובר/ת</span>
                   </div>
                   <div className="mr-auto flex gap-4 text-white/70">
                      <Phone className="w-5 h-5 opacity-50" />
                   </div>
                </div>

                {/* Messages */}
                <div className="space-y-4 pt-2 text-sm font-sans">
                   <div className="bg-white p-3 rounded-xl rounded-tr-none shadow-sm max-w-[85%] self-start mr-auto relative">
                      <p dir="rtl" className="text-gray-800">ג'ריקו תודה רבה על העבודה!! יצא מושלם 🙏</p>
                      <span className="text-[10px] text-gray-400 block text-left mt-1">10:42</span>
                   </div>
                   <div className="bg-[#dcf8c6] p-3 rounded-xl rounded-tl-none shadow-sm max-w-[85%] ml-auto relative">
                      <p dir="rtl" className="text-gray-800">בכיף גדול, תתחדשו! שמח שאהבתם</p>
                      <span className="text-[10px] text-[#075E54]/60 block text-right mt-1">10:43</span>
                   </div>
                   <div className="bg-white p-3 rounded-xl rounded-tr-none shadow-sm max-w-[85%] self-start mr-auto relative">
                      <p dir="rtl" className="text-gray-800">כבר העברתי את המספר שלך לשכנים, הם התלהבו מהפישבון 😉</p>
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