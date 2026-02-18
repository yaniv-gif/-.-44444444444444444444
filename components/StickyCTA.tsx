import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

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
    <a
      href="https://wa.me/972543962871"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="ייעוץ מהיר בוואטסאפ"
      className={`fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-full shadow-2xl transition-all duration-500 transform hover:-translate-y-1 hover:bg-[#20bd5a] ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
      }`}
    >
      <div className="flex flex-col items-start hidden md:block">
        <span className="font-bold text-sm">ייעוץ מהיר בוואטסאפ</span>
      </div>
      <MessageCircle className="w-6 h-6 fill-current" />
    </a>
  );
};

export default StickyCTA;