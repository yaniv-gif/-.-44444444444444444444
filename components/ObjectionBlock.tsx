import React from 'react';
import { MessageCircle } from 'lucide-react';

const situations = [
  {
    situation: "לוחות בודדים פגועים או שבורים",
    answer: "לרוב ניתן להחליף את הלוחות הפגועים בלבד, בלי לפרק את כל הרצפה.",
  },
  {
    situation: "חריקות, שקיעות או פערים",
    answer: "תלוי במקור הבעיה — לפעמים מדובר בתיקון נקודתי, לפעמים בבעיית תשתית. חייבים לבדוק.",
  },
  {
    situation: "נזק רחב, לחות, או תשתית לא ישרה",
    answer: "במצבים כאלה לרוב נדרשת עבודה רחבה יותר — החלפה חלקית או מלאה, לפי הממצאים.",
  },
];

const ObjectionBlock: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12 reveal">

        <div className="max-w-3xl mx-auto text-right">
          <span className="text-timber-accent font-bold tracking-widest text-xs uppercase mb-3 block">
            שאלה נפוצה
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-timber-black mb-4 leading-tight">
            מתי אפשר לתקן —<br/>ומתי צריך להחליף?
          </h2>
          <p className="text-gray-500 font-light mb-10 text-base leading-relaxed">
            התשובה תמיד תלויה במצב קיים. כמה מצבים נפוצים:
          </p>

          <div className="space-y-6 mb-10">
            {situations.map((s, i) => (
              <div key={i} className="flex gap-6 items-start border-r-2 border-timber-accent pr-5">
                <div>
                  <p className="font-bold text-timber-black text-base mb-1">{s.situation}</p>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">{s.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/972543962871?text=%D7%94%D7%99%D7%99%20%D7%92%27%D7%A8%D7%99%D7%A7%D7%95%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%90%D7%95%D7%9C%20%D7%90%D7%9D%20%D7%A6%D7%A8%D7%99%D7%9A%20%D7%AA%D7%99%D7%A7%D7%95%D7%9F%20%D7%90%D7%95%20%D7%94%D7%97%D7%9C%D7%A4%D7%94"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-timber-black text-white px-8 py-4 font-bold text-sm hover:bg-timber-accent hover:text-timber-black transition-colors duration-300"
          >
            <MessageCircle className="w-4 h-4 fill-current text-[#25D366]" />
            שלחו תמונה + תיאור — ואסביר מה האפשרויות
          </a>
        </div>
      </div>
    </section>
  );
};

export default ObjectionBlock;
