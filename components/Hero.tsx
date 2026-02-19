import React, { useEffect, useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">

      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Cinematic gradient: dense at bottom (text lives here), transparent at top (shows the craft) */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.18) 100%)'
          }}
        />

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

      {/* Content — vertically centered, shifted slightly down for visual weight */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col text-right w-full mt-16 md:mt-24">

        <div className={`max-w-4xl w-full transition-all duration-1000 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

          {/* Trust pre-badge — anchors credibility before the headline */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold tracking-widest text-timber-accent uppercase mb-8">
            ★ שירות במרכז / שרון / שפלה
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight mb-6 text-white">
            התקנת פרקט ותיקוני פרקט<br/>
            שטיחים מקיר לקיר<br/>
            וחידוש דקים.
          </h1>

          {/* Subtext — leading-loose gives Hebrew text the air it needs */}
          <p className="text-lg md:text-xl text-white/90 font-light mb-10 max-w-2xl leading-loose border-r-2 border-timber-accent pr-6">
            עבודה לפי מצב התשתית והיצרן, עם הסבר ברור מה נעשה, מה כלול ומה לא.<br/>
            שירות במרכז, שרון ושפלה.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="https://wa.me/972543962871?text=%D7%94%D7%99%D7%99%20%D7%92%27%D7%A8%D7%99%D7%A7%D7%95%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9C%D7%95%D7%97%20%D7%AA%D7%9E%D7%95%D7%A0%D7%94%20%D7%95%D7%9C%D7%A7%D7%91%D7%9C%20%D7%9B%D7%99%D7%95%D7%95%D7%9F%20%D7%A8%D7%90%D7%A9%D7%95%D7%A0%D7%99"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-timber-accent text-timber-black hover:bg-white px-8 py-5 text-base font-bold transition-all duration-300 min-w-[280px] flex items-center justify-center gap-3 shadow-lg shadow-timber-accent/30 hover:shadow-xl hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 fill-current text-[#25D366]" />
              שלחו תמונה בוואטסאפ לקבלת כיוון ראשוני
            </a>
            <a
              href="tel:0543962871"
              className="border border-white/40 bg-black/20 backdrop-blur-sm text-white hover:bg-white hover:text-black px-8 py-5 text-base font-bold transition-all duration-300 min-w-[200px] flex items-center justify-center gap-3"
            >
              <Phone className="w-4 h-4" />
              תיאום בדיקה/מדידה
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
