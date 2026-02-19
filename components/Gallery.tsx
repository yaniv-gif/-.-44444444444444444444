import React from 'react';
import { Instagram } from 'lucide-react';

const Gallery: React.FC = () => {
  const projects = [
    {
      title: "פישבון אלון מעושן",
      desc: "רמת גן",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2669&auto=format&fit=crop",
      size: "md:col-span-2 md:row-span-2",
    },
    {
      title: "חידוש דק איפאה",
      desc: "הרצליה",
      image: "https://images.unsplash.com/photo-1621252179027-94459d27d3ee?q=80&w=2670&auto=format&fit=crop",
      size: "md:col-span-1 md:row-span-1",
    },
    {
      title: "שטיח מקיר לקיר",
      desc: "פתח תקווה",
      image: "https://images.unsplash.com/photo-1574873215043-44119961dc42?q=80&w=2574&auto=format&fit=crop",
      size: "md:col-span-1 md:row-span-1",
    },
    {
      title: "תלת-שכבתי מודבק",
      desc: "תל אביב",
      image: "https://images.unsplash.com/photo-1581850518616-bcb8077a2536?q=80&w=800&auto=format&fit=crop",
      size: "md:col-span-2 md:row-span-1",
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="reveal">
             <span className="text-gray-500 font-bold tracking-[0.2em] text-xs uppercase mb-2 block">עבודות אמיתיות</span>
             <h2 className="text-4xl font-black tracking-tight">פרויקטים נבחרים</h2>
          </div>
          {/* Instagram link removed until profile is live */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[600px] reveal delay-200">
          {projects.map((project, index) => (
            <div key={index} className={`relative group overflow-hidden rounded-xl bg-gray-900 ${project.size}`}>
              {/* Image */}
              <img 
                src={project.image} 
                loading="lazy"
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-timber-accent text-xs font-bold uppercase tracking-wider translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;