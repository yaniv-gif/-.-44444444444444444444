import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      text: "ג'ריקו התקין לנו פרקט בכל הבית. לא רק מקצוען — פרפקציוניסט. עבודה שקטה, נקייה, ותוצאה שנראית כאילו תמיד הייתה כאן.",
      author: "רונית ויוסי",
      location: "רמת גן",
      type: "פרקט למינציה, 80 מ\"ר"
    },
    {
      text: "חיפשנו מתקין לשטיח מקיר לקיר במשרד. הגיע בזמן, סיים לפני הדדליין. פשוט מקצוען.",
      author: "אלי כהן",
      location: "פתח תקווה",
      type: "שטיח משרדי, מתיחה אמריקאית"
    },
    {
      text: "החליף לנו דק איפאה שנרקב. עבודה יסודית, מחיר הוגן, ונתן מחיר סגור שלא השתנה. ממליצים בחום.",
      author: "משפחת לוי",
      location: "הרצליה",
      type: "חידוש דק, 25 מ\"ר"
    }
  ];

  return (
    <section className="py-24 bg-timber-black text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 border-b border-gray-800 pb-8 flex justify-between items-end">
           <div>
             <span className="text-timber-accent font-bold tracking-[0.2em] text-xs uppercase">Social Proof</span>
             <h2 className="text-3xl md:text-5xl font-black mt-4">מה אומרים עליי</h2>
           </div>
           <a href="https://g.page/" target="_blank" rel="noopener" className="hidden md:block text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors">
             קראו עוד ב-Google
           </a>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {reviews.map((review, index) => (
            <div key={index} className="relative">
              <Quote className="w-12 h-12 text-timber-accent/20 mb-6" />
              <p className="text-lg font-light text-gray-300 mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex flex-col">
                <span className="font-bold text-white uppercase tracking-wider">{review.author}</span>
                <span className="text-sm text-gray-500 font-bold uppercase tracking-widest">{review.location}</span>
                <span className="text-xs text-timber-accent mt-1">{review.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;