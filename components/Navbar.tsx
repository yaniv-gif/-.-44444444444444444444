import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b ${
        isScrolled 
          ? 'bg-white text-timber-black border-gray-100 py-4 shadow-sm' 
          : 'bg-transparent text-white border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo (Hebrew) */}
        <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="font-black text-xl tracking-tight leading-none">
            ג'ריקו אספינוזה
          </span>
          <span className={`text-[11px] font-medium tracking-wide opacity-80 transition-colors ${isScrolled ? 'text-gray-500' : 'text-white/80'}`}>
            אומן פרקט ודקים
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {['השירותים', 'תהליך', 'פרויקטים', 'שאלות נפוצות'].map((item, idx) => {
             const map: {[key:string]: string} = { 'השירותים': 'services', 'תהליך': 'process', 'פרויקטים': 'gallery', 'שאלות נפוצות': 'faq' };
             return (
              <button 
                key={idx}
                onClick={() => scrollToSection(map[item])}
                className="text-sm font-bold hover:text-timber-accent transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-timber-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
             )
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
           <button 
             onClick={() => scrollToSection('contact-form')}
             className={`px-6 py-3 text-sm font-bold border transition-all duration-300 bg-timber-accent text-timber-black border-timber-accent hover:bg-white hover:border-white`}
           >
             הצעת מחיר
           </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {/* Fixed: Use -translate-x-full to slide from correct side in RTL */}
      <div className={`fixed inset-0 bg-timber-black text-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
         {['השירותים', 'תהליך', 'פרויקטים', 'שאלות נפוצות'].map((item, idx) => {
             const map: {[key:string]: string} = { 'השירותים': 'services', 'תהליך': 'process', 'פרויקטים': 'gallery', 'שאלות נפוצות': 'faq' };
             return (
              <button 
                key={idx}
                onClick={() => scrollToSection(map[item])}
                className="text-2xl font-bold hover:text-timber-accent transition-colors"
              >
                {item}
              </button>
             )
          })}
          <button 
             onClick={() => scrollToSection('contact-form')}
             className="mt-8 px-8 py-4 bg-timber-accent text-timber-black text-sm font-bold"
           >
             תיאום ייעוץ
           </button>
      </div>
    </nav>
  );
};

export default Navbar;