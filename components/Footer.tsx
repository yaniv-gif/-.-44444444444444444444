import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800">
      <div className="container mx-auto px-6 md:px-12 text-center md:text-right">
        
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
            {/* Brand */}
            <div className="md:w-1/3">
                <p className="mb-2 font-black text-white text-3xl tracking-tighter">ג'ריקו אספינוזה</p>
                <p className="mb-8 text-sm font-light text-gray-500">אומן פרקט, שטיחים ודקים. עבודה מדויקת ללא פשרות.</p>
                <div className="flex flex-col gap-2 text-sm font-bold">
                    <a href="tel:0543962871" className="hover:text-white transition-colors">054-396-2871</a>
                    <a href="https://wa.me/972543962871" className="hover:text-white transition-colors">וואטסאפ: זמין להתייעצות</a>
                </div>
            </div>

            {/* Lists */}
            <div className="md:w-2/3 grid grid-cols-2 gap-8 text-sm">
                <div>
                    <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">שירותים</h4>
                    <ul className="space-y-2 font-light">
                        <li>התקנת פרקט למינציה</li>
                        <li>פרקט פישבון (Herringbone)</li>
                        <li>פרקט פולימרי SPC (עמיד מים)</li>
                        <li>שטיחים מקיר לקיר (מתיחה)</li>
                        <li>התקנה וחידוש דקים</li>
                        <li>תיקון ושיקום רצפות</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">אזורי שירות</h4>
                    <ul className="space-y-2 font-light">
                        <li>תל אביב - יפו</li>
                        <li>רמת גן וגבעתיים</li>
                        <li>הרצליה ורמת השרון</li>
                        <li>ראשון לציון והסביבה</li>
                        <li>פתח תקווה</li>
                        <li>אזור השרון והמרכז</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-[10px] text-gray-700 font-light">
            &copy; {new Date().getFullYear()} ג'ריקו אספינוזה. כל הזכויות שמורות.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;