import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {/* Desktop Floating Button */}
      <div className={`hidden md:block fixed bottom-8 right-8 z-50 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}>
        <a
          href="https://wa.me/972543962871"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-full shadow-2xl hover:bg-[#20bd5a] hover:-translate-y-1 transition-all"
        >
          <div className="flex flex-col items-start">
            <span className="font-bold text-sm">ייעוץ בוואטסאפ</span>
          </div>
          <MessageCircle className="w-6 h-6 fill-current" />
        </a>
      </div>

      {/* Mobile Fixed Bottom Bar (70/30 Split) */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 z-50 flex h-16 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] transition-transform duration-500 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
        
        {/* Right Side - WhatsApp (70%) */}
        <a 
          href="https://wa.me/972543962871"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[70%] bg-[#25D366] text-white flex items-center justify-center gap-2 font-bold text-lg relative"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-ping absolute top-4 right-4 opacity-75"></span>
          <MessageCircle className="w-5 h-5 fill-current" />
          ייעוץ בוואטסאפ
        </a>

        {/* Left Side - Call (30%) */}
        <a 
          href="tel:0543962871"
          className="w-[30%] bg-timber-black text-white flex items-center justify-center gap-2 font-bold text-sm border-r border-white/10"
        >
          <Phone className="w-4 h-4" />
          חייג עכשיו
        </a>
      </div>
    </>
  );
};

export default StickyCTA;