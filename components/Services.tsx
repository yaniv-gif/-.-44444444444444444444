import React from 'react';
import { MessageCircle, ChevronLeft } from 'lucide-react';

const categories = [
  {
    title: "פרקטים",
    items: [
      "התקנת פרקט למינציה",
      "פרקט פישבון",
      "פרקט תלת־שכבתי",
      "תיקוני פרקט מכל הסוגים",
    ],
    waText: "היי ג'ריקו, אשמח לשאול לגבי פרקטים",
  },
  {
    title: "שטיחים מקיר לקיר",
    items: [
      "התקנה מלאה",
      "הדבקה מקצועית",
      "מתיחה בשיטה אמריקאית/הולנדית",
      "תיקונים והתאמות",
    ],
    waText: "היי ג'ריקו, אשמח לשאול לגבי שטיחים מקיר לקיר",
  },
  {
    title: "דקים",
    items: [
      "חידוש דקים קיימים",
      "תיקונים והחלפות",
      "התקנה חדשה לפי מצב התשתית",
    ],
    waText: "היי ג'ריקו, אשמח לשאול לגבי דקים",
  },
];

const Services: React.FC = () => {
  return (
    <section className="pt-0 pb-16 bg-white">
      <div className="container mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-black pb-4 mt-6 md:mt-8 reveal">
          <div>
            <h2 className="text-5xl md:text-7xl font-black text-timber-black tracking-tight">
              שירותי פרקטים, שטיחים ודקים
            </h2>
            <p className="text-xl mt-4 font-light text-gray-500">
              התקנה, תיקונים וגימור — לפי מצב התשתית והחומרים
            </p>
          </div>
        </div>

        {/* 3-Column Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal delay-100">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="flex flex-col bg-gray-50 border border-gray-200 hover:border-black transition-colors duration-300 p-8"
            >
              <h3 className="text-2xl font-black text-timber-black mb-6 pb-4 border-b border-gray-200">
                {cat.title}
              </h3>

              <ul className="flex-grow space-y-3 mb-8">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-gray-700 text-sm font-medium leading-snug">
                    <ChevronLeft className="w-4 h-4 text-timber-accent shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/972543962871?text=${encodeURIComponent(cat.waText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between bg-white border border-gray-200 px-4 py-3 text-sm font-bold text-timber-black hover:bg-timber-black hover:text-white hover:border-timber-black transition-all"
              >
                <span>שלחו תמונה לקבלת כיוון</span>
                <MessageCircle className="w-4 h-4" />
              </a>
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
