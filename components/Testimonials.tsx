import React from 'react';
import { Star, CheckCircle2, ArrowUpRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-timber-accent font-bold tracking-widest text-xs uppercase mb-3 block">
            ביקורות מאומתות
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-timber-black">
            אל תקשיבו רק לי.
          </h2>
          <div className="flex justify-center items-center gap-2 mt-4 text-gray-500 font-medium">
             <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
             <span>5.0</span>
             <span className="mx-2">•</span>
             <span>מבוסס על לקוחות אמיתיים בגוגל</span>
          </div>
          <a href="#" className="text-xs text-timber-accent font-bold mt-2 inline-flex items-center gap-1 hover:underline">
             קראו את כל הביקורות בגוגל <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto reveal delay-200">
          
          {/* Card 1: Main Text Review */}
          <div className="md:col-span-2 bg-gray-50 p-8 rounded-3xl border border-gray-100">
             <div className="flex items-start justify-between mb-6">
               <div className="flex gap-1">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} className="w-4 h-4 text-timber-accent fill-timber-accent" />
                 ))}
               </div>
               <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                 <CheckCircle2 className="w-3 h-3" /> מאומת
               </span>
             </div>
             <p className="text-xl md:text-2xl font-medium text-timber-black leading-relaxed mb-8">
               "ג'ריקו הגיע אלינו אחרי שמתקין אחר הבריז. מהרגע הראשון הבנו שזה ליגה אחרת. המדידה הייתה מדויקת, המחיר היה הוגן (וסופי!), והעבודה... פשוט שלמות. הפרקט בחדרי השינה נראה כאילו נולד שם."
             </p>
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-timber-black text-white flex items-center justify-center font-bold">ד</div>
               <div>
                 <p className="text-sm font-bold text-gray-900">דניאל ל.</p>
                 <p className="text-xs text-gray-500">התקנת למינציה • ראשון לציון</p>
               </div>
             </div>
          </div>

          {/* Card 2: WhatsApp Screenshot Vibe */}
          <div className="row-span-2 bg-[#E5DDD5] p-6 rounded-3xl border-4 border-white shadow-xl relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 bg-[url('https://site-assets.fontawesome.com/releases/v6.5.1/svgs/brands/whatsapp.svg')] bg-center bg-no-repeat bg-contain"></div>
             
             {/* WA Header */}
             <div className="flex items-center gap-3 bg-[#075E54] p-3 -m-6 mb-6 rounded-t-2xl text-white relative z-10">
                <div className="w-8 h-8 rounded-full bg-gray-300 border border-white/30"></div>
                <div className="text-xs">
                   <p className="font-bold">ג'ריקו אספינוזה</p>
                   <p className="opacity-80">זמין בוואטסאפ</p>
                </div>
             </div>

             <div className="space-y-3 text-xs font-sans relative z-10">
                <div className="bg-white p-3 rounded-lg rounded-tr-none shadow-sm self-start mr-8 relative">
                   <p dir="rtl">ג'ריקו בוקר טוב! רק רציתי להגיד תודה ענקית.</p>
                </div>
                <div className="bg-white p-3 rounded-lg rounded-tr-none shadow-sm self-start mr-8 relative">
                   <p dir="rtl">נכנסנו הבוקר למשרד והדק במרפסת נראה חדש לגמרי. לא האמנתי שאפשר להציל אותו.</p>
                </div>
                <div className="bg-[#dcf8c6] p-3 rounded-lg rounded-tl-none shadow-sm self-end ml-8 relative">
                   <p dir="rtl">איזה כיף לשמוע! תתחדשו חברים 🙏</p>
                   <CheckCircle2 className="w-3 h-3 text-blue-500 absolute bottom-1 right-1" />
                </div>
             </div>
          </div>

          {/* Card 3: Compact Review */}
          <div className="bg-timber-black text-white p-8 rounded-3xl">
             <div className="flex gap-1 mb-4">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} className="w-4 h-4 text-timber-accent fill-timber-accent" />
                 ))}
             </div>
             <p className="text-gray-300 mb-6 font-light leading-relaxed text-sm">
               "חיפשתי מישהו שיתקן פרקט שהתנפח בדירה שכורה. ג'ריקו לא ניסה למכור לי פרקט חדש, אלא פשוט תיקן את הבעיה בצורה מקצועית. ישר והגון."
             </p>
             <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center font-bold text-xs">ר</div>
               <div>
                 <p className="text-sm font-bold">רועי כ.</p>
                 <p className="text-xs text-gray-500">תיקון פרקט • תל אביב</p>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;