import React from 'react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="bg-timber-gray">
      <div className="grid md:grid-cols-2 min-h-[80vh]">
        
        {/* Image Side - Portrait */}
        <div className="relative h-[50vh] md:h-auto overflow-hidden order-1 md:order-2">
          <img 
            src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?q=80&w=2670&auto=format&fit=crop" 
            loading="lazy"
            alt="ג'ריקו אספינוזה בודק פרקט בהתקנה" 
            className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
          />
        </div>

        {/* Text Side - Story */}
        <div className="flex flex-col justify-center px-8 py-16 md:px-24 md:py-24 bg-timber-black text-white order-2 md:order-1 reveal">
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight tracking-tight">
            אני ג׳ריקו.<br/>
            לא "צוות". לא "מנהל עבודה".
          </h2>
          
          <div className="space-y-6 text-gray-400 font-light text-lg leading-relaxed max-w-xl">
            <p>
              נולדתי בפיליפינים וגדלתי כאן בישראל. בפיליפינים, אין תרבות של 'מספיק טוב'. הבאתי אותה איתי לכל פרויקט.
            </p>
            <p>
              המספר שמתקשרים אליו — הוא גם זה שמגיע. בשוק של "צוותים" וקבלני משנה, אני עובד אחרת.
            </p>
            <p>
               אני לא שולח פועלים. כל פרויקט עובר דרך הידיים שלי — מהמדידה הראשונה, דרך בדיקת התשתית ועד הגימור האחרון בפנלים.
            </p>
            <p className="text-white font-medium border-r-2 border-timber-accent pr-4">
              אני לא עוזב עד שכל לוח שכב היה בדיוק כמו שתכננתי. לא כמו שציפיתם — כמו שתכננתי.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSolution;