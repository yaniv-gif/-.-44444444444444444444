import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <p className="mb-2 font-black text-white text-2xl tracking-tighter">ג'ריקו אספינוזה</p>
        <p className="mb-8 text-sm font-light text-gray-500">עבודות ריצוף, שטיחים ודקים. שירות בכל הארץ.</p>
        
        <div className="max-w-4xl mx-auto mb-10 text-xs leading-relaxed text-gray-600 border-t border-b border-gray-800 py-6">
          <p>
            התקנת פרקט למינציה | פרקט עץ תלת-שכבתי | פרקט פולימרי SPC (עמיד במים) |
            פרקט פישבון (Herringbone) — אלון מעושן, טבעי, מולבן |
            הדבקת פרקט על תשתית | תיקון פרקטים (חריקות, התנפחויות, החלפת לוחות) |
            קיצור דלתות לאחר ריצוף |
            שטיחים מקיר לקיר לבית ולמשרד | מתיחת שטיח בשיטה אמריקאית-הולנדית (Power Stretcher) |
            התקנת דק עץ (איפאה, אורן, במבוק) | דק סינתטי WPC |
            חידוש דקים | שימון דק | התקנת דק סביב בריכה |
            עבודה מול אדריכלים ומעצבי פנים | שירות בכל הארץ.
          </p>
        </div>
        
        <div className="flex justify-center gap-6 mb-8 text-sm font-bold tracking-widest uppercase">
          <a href="tel:0543962871" className="hover:text-white transition-colors">054-396-2871</a>
          <span className="text-gray-700">|</span>
          <a href="https://wa.me/972543962871" className="hover:text-white transition-colors">וואטסאפ — ייעוץ מהיר</a>
        </div>

        <p className="text-[10px] text-gray-700 font-light">
          &copy; {new Date().getFullYear()} ג'ריקו אספינוזה. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  );
};

export default Footer;