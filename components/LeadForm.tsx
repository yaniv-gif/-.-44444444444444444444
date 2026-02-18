import React, { useState } from 'react';
import { Loader2, ArrowLeft, ChevronDown, ShieldCheck, Send } from 'lucide-react';

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    serviceType: 'התקנת פרקט (למינציה / עץ / פולימרי)'
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const WHATSAPP_NUMBER_E164 = '972543962871';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) return;

    setStatus('submitting');

    const text =
      `שלום ג'ריקו,` +
      `\nשמי: ${formData.name}` +
      `\nטלפון: ${formData.phone}` +
      `\nעיר: ${formData.city}` +
      `\nשירות: ${formData.serviceType}`;

    // Simulate delay for effect, then open WhatsApp
    setTimeout(() => {
        window.open(
        `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${encodeURIComponent(text)}`,
        '_blank',
        'noopener,noreferrer'
        );
        setStatus('success');
    }, 1000);
  };

  return (
    <section id="contact-form" className="bg-timber-black text-white relative">
      <div className="flex flex-col md:flex-row min-h-[800px]">
        
        {/* Form Side */}
        <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center order-2 md:order-1 reveal">
          
          <div className="mb-8">
            <span className="inline-block bg-white/10 px-3 py-1 rounded text-xs font-bold text-timber-accent mb-4 border border-white/10">
              זמינות: עד 4 פרויקטים בחודש
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
              כמה זה יעלה?
            </h2>
            <h3 className="text-xl md:text-2xl text-gray-300 font-bold mb-4">
              תוך 24 שעות, אחרי תמונה — תקבלו מחיר סופי שלא יזוז.
            </h3>
          </div>

          <p className="text-gray-400 font-light mb-12">
            השאירו פרטים ואפתח לכם חלון וואטסאפ עם הודעה מוכנה.
          </p>
          
          {status === 'success' ? (
            <div className="bg-[#075E54]/20 p-8 border border-[#25D366]/30 rounded-xl text-center animate-fade-in relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#25D366]"></div>
              <div className="flex justify-center mb-4">
                 <div className="bg-[#25D366] p-3 rounded-full">
                    <Send className="w-6 h-6 text-white" />
                 </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">ההודעה מוכנה לשליחה</h3>
              <p className="text-gray-300 font-light mb-6">
                חלון הוואטסאפ נפתח אצלכם.
              </p>
              
              <div className="bg-[#25D366]/20 border border-[#25D366] rounded-lg p-4 mb-6">
                <p className="text-[#25D366] font-black text-center text-lg">
                  👆 לחצו "שלח" בחלון הוואטסאפ שנפתח
                </p>
              </div>

              <button onClick={() => setStatus('idle')} className="text-sm font-bold text-gray-400 hover:text-white underline">
                שלחתי, חזרה לאתר
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="space-y-8">
                <div className="relative group">
                  <input 
                    type="text" 
                    id="lead-name"
                    name="name" 
                    required
                    placeholder=" "
                    className="block w-full px-0 py-4 bg-transparent border-b border-gray-700 text-white focus:border-timber-accent focus:ring-0 peer placeholder-transparent transition-colors"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <label htmlFor="lead-name" className="absolute right-0 top-4 text-gray-500 text-sm font-bold uppercase tracking-wider duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[100%_0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-timber-accent pointer-events-none">
                    שם מלא
                  </label>
                </div>

                <div className="relative group">
                  <input 
                    type="tel" 
                    id="lead-phone"
                    name="phone" 
                    required
                    dir="ltr"
                    placeholder=" "
                    className="block w-full px-0 py-4 bg-transparent border-b border-gray-700 text-white focus:border-timber-accent focus:ring-0 peer placeholder-transparent transition-colors text-right"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                   <label htmlFor="lead-phone" className="absolute right-0 top-4 text-gray-500 text-sm font-bold uppercase tracking-wider duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[100%_0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-timber-accent pointer-events-none">
                    טלפון
                  </label>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                   <div className="relative group">
                    <input 
                      type="text" 
                      id="lead-city"
                      name="city" 
                      placeholder=" "
                      className="block w-full px-0 py-4 bg-transparent border-b border-gray-700 text-white focus:border-timber-accent focus:ring-0 peer placeholder-transparent transition-colors"
                      value={formData.city}
                      onChange={handleChange}
                    />
                     <label htmlFor="lead-city" className="absolute right-0 top-4 text-gray-500 text-sm font-bold uppercase tracking-wider duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[100%_0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-timber-accent pointer-events-none">
                      עיר מגורים
                    </label>
                  </div>
                  <div className="relative group">
                    <div className="relative">
                        <select 
                        id="lead-service"
                        name="serviceType"
                        className="block w-full px-0 py-4 bg-transparent border-b border-gray-700 text-white focus:border-timber-accent focus:ring-0 appearance-none rounded-none cursor-pointer"
                        value={formData.serviceType}
                        onChange={handleChange}
                        >
                        <option className="bg-timber-black text-gray-400" value="התקנת פרקט (למינציה / עץ / פולימרי)">התקנת פרקט</option>
                        <option className="bg-timber-black text-gray-400" value="פרקט פישבון">פרקט פישבון</option>
                        <option className="bg-timber-black text-gray-400" value="שטיחים מקיר לקיר">שטיחים מקיר לקיר</option>
                        <option className="bg-timber-black text-gray-400" value="דקים (התקנה / חידוש / שימון)">דקים (התקנה / חידוש)</option>
                        <option className="bg-timber-black text-gray-400" value="תיקון ושיקום">תיקון ושיקום</option>
                        <option className="bg-timber-black text-gray-400" value="לא בטוח — צריך ייעוץ">לא בטוח — צריך ייעוץ</option>
                        </select>
                        <ChevronDown className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                    </div>
                    <label htmlFor="lead-service" className="absolute right-0 -top-2 text-gray-500 text-[10px] font-bold uppercase tracking-widest pointer-events-none">
                      מה מעניין אתכם?
                    </label>
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-timber-accent text-timber-black hover:bg-white mt-8 py-5 text-sm font-black tracking-widest uppercase transition-colors duration-300 flex items-center justify-center gap-3"
              >
                {status === 'submitting' ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    המשך לוואטסאפ <ArrowLeft className="w-4 h-4" />
                  </>
                )}
              </button>
              
              <div className="text-center mt-6 space-y-4">
                 <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-timber-accent" />
                    המספר שלך נשאר אצלי בלבד.
                 </p>
              </div>
            </form>
          )}
        </div>

        {/* Image Side */}
        <div className="w-full md:w-1/2 order-1 md:order-2 relative min-h-[400px] md:min-h-auto">
           <img 
            src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=2574&auto=format&fit=crop" 
            alt="Interior Design" 
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
          />
        </div>

      </div>
    </section>
  );
};

export default LeadForm;