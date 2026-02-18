import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "כמה עולה התקנת פרקט?",
      a: "המחיר משתנה בהתאם לסוג הפרקט (למינציה/עץ/פולימרי) ולגודל החדר. הדרך הכי מהירה לקבל כיוון היא לשלוח לי תמונה בוואטסאפ, ואני אתן הערכה ראשונית מיד."
    },
    {
      q: "האם המחיר באמת סופי?",
      a: "כן, חד משמעית. אחרי שאני מודד את השטח ורואה את התשתית, המחיר ננעל. אין תוספות על פנלים, אין 'לא ראיתי', ואין הפתעות ביום ההתקנה."
    },
    {
      q: "צריך לפנות את הריהוט מהחדר?",
      a: "חפצים קטנים, שטיחים ודברים שבירים — כן. ריהוט כבד (ספות, ארונות, מיטות) אני יכול להזיז בזהירות במהלך העבודה, בתיאום מראש."
    },
    {
      q: "אפשר להתקין על ריצוף קיים?",
      a: "ברוב המקרים כן, וזה חוסך המון לכלוך. התנאי הוא שהריצוף ישר. אם הריצוף עקום או שבור, אני מבצע יישור באמצעות 'מדה מתפלסת' לפני ההתקנה."
    },
    {
      q: "מה קורה אם הפרקט מתנפח אחרי שנה?",
      a: "בדיוק בשביל זה יש לי 5 שנות אחריות. רוב המתקינים נותנים שנה. אני נותן שקט נפשי לטווח ארוך. אם משהו זז, חורק או מתנפח — אני מגיע לתקן."
    },
    {
      q: "באילו אזורים אתה עובד?",
      a: "אני נותן שירות בכל הארץ, בדגש על אזור המרכז, השרון, השפלה ואזור חיפה והצפון."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-timber-black">שאלות נפוצות</h2>
        
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl overflow-hidden border transition-all duration-300 ${openIndex === index ? 'border-timber-accent shadow-lg' : 'border-gray-200 shadow-sm hover:border-gray-300'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-right focus:outline-none"
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-timber-black' : 'text-gray-700'}`}>
                  {item.q}
                </span>
                <span className={`mr-4 p-1 rounded-full border transition-colors ${openIndex === index ? 'bg-timber-accent text-white border-timber-accent' : 'border-gray-200 text-gray-400'}`}>
                  {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              
              <div 
                className={`transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-gray-500 font-light leading-relaxed border-t border-dashed border-gray-100 mt-2">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;