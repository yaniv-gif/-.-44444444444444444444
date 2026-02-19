import React, { useState, useRef } from 'react';
import { ChevronsLeftRight, Sparkles } from 'lucide-react';

const BeforeAfter: React.FC = () => {
  const sliderRef = useRef<HTMLInputElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
    }
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  const handleInteractionStart = () => setIsDragging(true);
  const handleInteractionEnd = () => setIsDragging(false);

  const beforeImage = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2670&auto=format&fit=crop"; 
  const afterImage = "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=2574&auto=format&fit=crop"; 

  return (
    <section className="py-24 bg-timber-black text-white relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 reveal">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1 rounded-full mb-4 backdrop-blur-sm border border-white/10">
             <Sparkles className="w-4 h-4 text-timber-accent" />
             <span className="text-xs font-bold uppercase tracking-widest text-timber-accent">לפני / אחרי</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            ההבדל שיום עבודה אחד עושה.
          </h2>
          <p className="text-gray-400 mt-4 font-light max-w-lg">
            גררו את הסמן ימינה ושמאלה.
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative w-full max-w-5xl mx-auto aspect-[4/3] md:aspect-[21/9] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
          onMouseDown={handleInteractionStart}
          onMouseUp={handleInteractionEnd}
          onMouseLeave={handleInteractionEnd}
          onMouseMove={onMouseMove}
          onTouchStart={handleInteractionStart}
          onTouchEnd={handleInteractionEnd}
          onTouchMove={onTouchMove}
        >
          {/* Before Image */}
          <img 
            src={beforeImage} 
            loading="lazy"
            alt="לפני" 
            className="absolute top-0 left-0 w-full h-full object-cover grayscale brightness-50"
            draggable="false"
          />
          <div className="absolute top-6 left-6 bg-black/80 text-white/70 px-4 py-2 text-xs font-bold tracking-widest uppercase rounded-md backdrop-blur-md">
            לפני: ריצוף ישן וסדוק
          </div>

          {/* After Image */}
          <div 
            className="absolute top-0 left-0 h-full w-full overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img 
              src={afterImage} 
              loading="lazy"
              alt="אחרי" 
              className="absolute top-0 left-0 w-full h-full object-cover"
              draggable="false"
            />
            <div className="absolute top-6 right-6 bg-timber-accent text-timber-black px-4 py-2 text-xs font-black tracking-widest uppercase rounded-md shadow-lg">
              אחרי: פרקט פישבון אלון
            </div>
          </div>

          {/* Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-timber-accent cursor-ew-resize z-20 shadow-[0_0_30px_rgba(198,168,124,0.5)]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-timber-accent rounded-full flex items-center justify-center shadow-2xl transform transition-transform hover:scale-110 active:scale-95">
              <ChevronsLeftRight className="w-6 h-6 text-timber-black" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;