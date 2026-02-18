import React, { useEffect, useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-end pb-32 md:pb-48 justify-center text-white overflow-hidden">
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Increased opacity to 60% for better text readability */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop" 
          alt="ג'ריקו אספינוזה מתקין פרקט מקצועי"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          poster="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000"
          onLoadedData={(e) => e.currentTarget.classList.remove('opacity-0')}
        >
          <source src="https://videos.pexels.com/video-files/7578544/7578544-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-end justify-between w-full h-full">
        
        {/* Main Content */}
        <div className={`text-right max-w-4xl transition-all duration-1000 transform self-end ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight mb-6 text-white">
            התקנת פרקט<br/>
            שנראית כאילו<br/>
            תמיד הייתה כאן.
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light mb-10 max-w-2xl leading-relaxed border-r-2 border-timber-accent pr-6">
            מתקין אחד שעושה הכל בעצמו — בלי צוותים מתחלפים ובלי הפתעות.<br/>
            מחיר סופי שנקבע מראש. 5 שנות אחריות על ההתקנה.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
             <a 
              href="https://wa.me/972543962871"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-timber-accent text-timber-black hover:bg-white px-8 py-5 text-base font-bold transition-colors duration-300 min-w-[280px] flex items-center justify-center gap-3 group shadow-lg shadow-timber-accent/20"
            >
              <MessageCircle className="w-5 h-5 fill-current text-[#25D366]" />
              שלחו לי תמונה של החלל בוואטסאפ
            </a>
            <a 
              href="tel:0543962871"
              className="border border-white/40 bg-black/20 backdrop-blur-sm text-white hover:bg-white hover:text-black px-8 py-5 text-base font-bold transition-all duration-300 min-w-[200px] flex items-center justify-center gap-3"
            >
              <Phone className="w-4 h-4" />
              054-396-2871
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;