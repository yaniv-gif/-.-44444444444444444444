import React from 'react';
import { MessageCircle } from 'lucide-react';

const InterruptCTA: React.FC = () => {
  return (
    <section className="bg-timber-accent py-12 text-center px-6 relative z-20 reveal">
      <div className="container mx-auto">
        <p className="text-timber-black font-black text-2xl md:text-3xl mb-4 tracking-tight">
          רצפה שרציתם? בואו נדבר.
        </p>
        <a 
          href="https://wa.me/972543962871" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-timber-black text-white px-8 py-4 font-bold text-lg hover:bg-white hover:text-timber-black transition-colors duration-300 shadow-xl"
        >
          שליחת תמונה בוואטסאפ
          <MessageCircle className="w-5 h-5 fill-current text-[#25D366]" />
        </a>
      </div>
    </section>
  );
};

export default InterruptCTA;