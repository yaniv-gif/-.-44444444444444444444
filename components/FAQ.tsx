import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "כמה עולה התקנת פרקט?",
      a: "המחיר תלוי בסוג הפרקט, גודל השטח ומצב התשתית. כדי לתת כיוון, אפשר לשלוח תמונה ומידות בוואטסאפ."
    },
    {
      q: "מה ההבדל בין הדבקה מלאה להתקנה צפה?",
      a: "הדבקה מתאימה כשצריך יציבות/גובה מסוים ותשתית מתאימה; התקנה צפה נפוצה כשיש תשתית ישרה ושיקולים של פירוק עתידי. ההחלטה לפי השטח והפרקט."
    },
    {
      q: "אפשר לתקן פרקט שהתנפח או נפתח?",
      a: "לפעמים כן — החלפת לוחות, איתור מקור לחות, תיקון גימורים. חייבים לראות מה גרם לבעיה כדי להימנע מחזרה."
    },
    {
      q: "שטיח מקיר לקיר — מתיחה או הדבקה?",
      a: "מתיחה נפוצה כשהבסיס מתאים ויש רצון לתוצאה מתוחה ואחידה; הדבקה מתאימה במצבים מסוימים של תשתית/שימוש. הבחירה לפי סוג השטיח והשטח."
    },
    {
      q: "כמה זמן לוקחת עבודה?",
      a: "תלוי בהיקף ובמורכבות. אחרי תמונה/מדידה אפשר לתת הערכה ריאלית לזמן העבודה."
    },
    {
      q: "האם יש אחריות על העבודה?",
      a: "אם קיימת אחריות, היא מוגדרת בהצעת המחיר לפי סוג העבודה והחומרים. מומלץ לוודא מראש מה מכוסה ולכמה זמן."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl reveal">
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