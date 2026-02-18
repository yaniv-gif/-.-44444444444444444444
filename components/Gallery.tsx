import React from 'react';

const Gallery: React.FC = () => {
  const projects = [
    {
      title: "פישבון אלון מעושן",
      desc: "הדבקה מלאה, 45 מ\"ר (רמת גן)",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2669&auto=format&fit=crop",
      size: "col-span-1 md:col-span-2 row-span-2",
      alt: "התקנת פרקט פישבון אלון מעושן רמת גן ג'ריקו אספינוזה"
    },
    {
      title: "חידוש דק איפאה",
      desc: "ליטוש ושימון אחרי נזקי חורף (הרצליה)",
      image: "https://images.unsplash.com/photo-1621252179027-94459d27d3ee?q=80&w=2670&auto=format&fit=crop",
      size: "col-span-1 row-span-1",
      alt: "חידוש דק איפאה מרפסת גג הרצליה"
    },
    {
      title: "מתיחת שטיח אמריקאית",
      desc: "משרד עורכי דין, כולל מדרגות (פתח תקווה)",
      image: "https://images.unsplash.com/photo-1574873215043-44119961dc42?q=80&w=2574&auto=format&fit=crop",
      size: "col-span-1 row-span-1",
      alt: "מתיחת שטיח מקיר לקיר שיטה אמריקאית פתח תקווה"
    },
    {
      title: "תלת-שכבתי מודבק",
      desc: "דירה שלמה, 90 מ\"ר (תל אביב)",
      image: "https://images.unsplash.com/photo-1581850518616-bcb8077a2536?q=80&w=800&auto=format&fit=crop",
      size: "col-span-1 md:col-span-2 row-span-1",
      alt: "התקנת פרקט תלת שכבתי מודבק תל אביב"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-timber-black tracking-tight">
            פרויקטים נבחרים
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
          {projects.map((project, index) => (
            <div key={index} className={`relative group overflow-hidden bg-gray-100 ${project.size}`}>
              {/* Image */}
              <img 
                src={project.image} 
                alt={project.alt} 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center p-6">
                <h3 className="text-white text-2xl font-black tracking-wide mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.title}
                </h3>
                <p className="text-gray-300 font-light text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
            <a 
              href="https://wa.me/972543962871"
              className="inline-block border-b-2 border-black pb-1 text-sm font-bold hover:text-timber-accent hover:border-timber-accent transition-colors"
            >
              צפה בעבודות נוספות באינסטגרם
            </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;