import React, { useState, useRef, useEffect } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

const BeforeAfter: React.FC = () => {
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
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-timber-black tracking-tight">
            המהפך המושלם
          </h2>
          <p className="text-gray-500 mt-4 font-light max-w-lg">
            גררו את הסמן כדי לראות את ההבדל בין רצפה ישנה לגימור של ג'ריקו.
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative w-full max-w-5xl mx-auto aspect-[16/9] md:aspect-[21/9] overflow-hidden cursor-ew-resize select-none shadow-2xl reveal delay-200"
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
            alt="לפני" 
            className="absolute top-0 left-0 w-full h-full object-cover grayscale brightness-75"
            draggable="false"
          />
          <div className="absolute top-6 left-6 bg-black/70 text-white px-3 py-1 text-xs font-bold tracking-widest uppercase">
            לפני
          </div>

          {/* After Image */}
          <div 
            className="absolute top-0 left-0 h-full w-full overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img 
              src={afterImage} 
              alt="אחרי" 
              className="absolute top-0 left-0 w-full h-full object-cover"
              draggable="false"
            />
            <div className="absolute top-6 right-6 bg-white/90 text-black px-3 py-1 text-xs font-bold tracking-widest uppercase">
              אחרי
            </div>
          </div>

          {/* Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
              <ChevronsLeftRight className="w-6 h-6 text-black" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;