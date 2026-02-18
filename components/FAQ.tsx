import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "כמה עולה התקנת פרקט?",
      a: "המחיר תלוי בסוג הפרקט וגודל החדר. שלחו תמונה בוואטסאפ ואתן הערכה מיידית."
    },
    {
      q: "האם המחיר באמת סופי?",
      a: "כן. אחרי המדידה בשטח המחיר ננעל. אין דרישות תשלום נוספות באמצע העבודה."
    },
    {
      q: "צריך לפנות ריהוט?",
      a: "חפצים קטנים כן. ריהוט כבד (ספות/ארונות) אני יכול להזיז בתיאום מראש."
    },
    {
      q: "אפשר להתקין על ריצוף קיים?",
      a: "כן, אם הריצוף ישר. אם לא, אני מיישר אותו עם מדה מתפלסת לפני ההתקנה."
    },
    {
      q: "מה האחריות?",
      a: "5 שנים על העבודה. פי 5 מהמקובל בשוק."
    },
    {
      q: "איפה אתה עובד?",
      a: "בכל הארץ. מרכז, שרון, שפלה וצפון."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-black text-center mb-12">שאלות נפוצות</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {faqs.map((item, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-lg font-bold text-timber-black mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-timber-accent rounded-full"></span>
                {item.q}
              </h3>
              <p className="text-gray-500 font-light text-sm pr-4">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;