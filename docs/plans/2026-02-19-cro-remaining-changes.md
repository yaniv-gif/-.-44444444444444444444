# CRO Remaining Changes — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Complete 4 remaining items from the full-page CRO optimization plan — Hero micro-trust row, Services restructure to 3 grouped categories, new Objection Block component, and SEO meta/H1 corrections.

**Architecture:** All changes are isolated to existing TSX component files + index.html. One new component (ObjectionBlock.tsx) is created and wired into App.tsx. No new dependencies. No state changes. Pure copy/structure updates.

**Tech Stack:** React 19, TypeScript, Tailwind CSS (CDN), Lucide React icons, RTL Hebrew layout.

---

## Task 1: SEO — Update H1, meta title, meta description to exact plan spec

**Files:**
- Modify: `index.html` (meta title, meta description)
- Modify: `components/Hero.tsx` (H1 text)

**Step 1: Update meta title in `index.html`**

Find:
```html
<title>ג'ריקו אספינוזה | התקנת פרקט ותיקוני פרקט | שטיחים מקיר לקיר ודקים (מרכז/שרון/שפלה)</title>
```
Replace with:
```html
<title>התקנת פרקטים ושטיחים מקיר לקיר | התקנה ותיקונים לפי מצב התשתית</title>
```

**Step 2: Update meta description in `index.html`**

Find:
```html
<meta name="description" content="התקנת פרקט (כולל פישבון ותלת־שכבתי), תיקוני פרקט, שטיחים מקיר לקיר (הדבקה/מתיחה בשיטה אמריקאית/הולנדית) וחידוש/התקנת דקים. שירות במרכז/שרון/שפלה. שלחו תמונה בוואטסאפ לקבלת הערכה ראשונית." />
```
Replace with:
```html
<meta name="description" content="התקנת פרקטים, שטיחים מקיר לקיר וחידוש דקים. התאמה למצב התשתית, עבודה מדויקת ונקייה. שירות במרכז, שרון ושפלה." />
```

**Step 3: Update H1 in `components/Hero.tsx`**

Find:
```tsx
<h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight mb-6 text-white">
  התקנת פרקט ותיקוני פרקט<br/>
  שטיחים מקיר לקיר<br/>
  וחידוש דקים.
</h1>
```
Replace with:
```tsx
<h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight mb-6 text-white">
  התקנת פרקטים<br/>
  ושטיחים מקיר לקיר.
</h1>
```

**Step 4: Commit**
```bash
git add index.html components/Hero.tsx
git commit -m "seo: update H1, meta title, meta description to CRO plan spec"
```

---

## Task 2: Hero — Add micro-trust row under CTA buttons

**Files:**
- Modify: `components/Hero.tsx`

**Step 1: Locate the closing `</div>` after the CTA buttons block**

The CTAs block ends at:
```tsx
          </div>
        </div>
      </div>
    </section>
```

**Step 2: Add micro-trust row immediately after the CTA `</div>` (the one closing `flex flex-col sm:flex-row gap-4 mt-8`)**

Find:
```tsx
          </div>
        </div>
      </div>
    </section>
```

Replace with:
```tsx
          </div>

          {/* Micro-trust row */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-white/60 text-xs font-medium">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-timber-accent inline-block"></span>
              התאמה למצב התשתית
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-timber-accent inline-block"></span>
              עבודה מדויקת ונקייה
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-timber-accent inline-block"></span>
              פתרון מלא מהכנה עד גימור
            </span>
          </div>

        </div>
      </div>
    </section>
```

**Step 3: Commit**
```bash
git add components/Hero.tsx
git commit -m "feat: add micro-trust row under hero CTAs"
```

---

## Task 3: Services — Restructure to 3 grouped category blocks

**Files:**
- Modify: `components/Services.tsx` (full rewrite of data + JSX)

**Step 1: Replace the entire Services component content**

The new structure uses 3 category columns instead of 4 image cards. Each column has a header, bullet list of sub-services, and one WhatsApp CTA.

Replace the full file content with:

```tsx
import React from 'react';
import { MessageCircle, ChevronLeft } from 'lucide-react';

const categories = [
  {
    title: "פרקטים",
    items: [
      "התקנת פרקט למינציה",
      "פרקט פישבון",
      "פרקט תלת־שכבתי",
      "תיקוני פרקט מכל הסוגים",
    ],
    waText: "היי ג'ריקו, אשמח לשאול לגבי פרקטים",
  },
  {
    title: "שטיחים מקיר לקיר",
    items: [
      "התקנה מלאה",
      "הדבקה מקצועית",
      "מתיחה בשיטה אמריקאית/הולנדית",
      "תיקונים והתאמות",
    ],
    waText: "היי ג'ריקו, אשמח לשאול לגבי שטיחים מקיר לקיר",
  },
  {
    title: "דקים",
    items: [
      "חידוש דקים קיימים",
      "תיקונים והחלפות",
      "התקנה חדשה לפי מצב התשתית",
    ],
    waText: "היי ג'ריקו, אשמח לשאול לגבי דקים",
  },
];

const Services: React.FC = () => {
  return (
    <section className="pt-0 pb-16 bg-white">
      <div className="container mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-black pb-4 mt-6 md:mt-8 reveal">
          <div>
            <h2 className="text-5xl md:text-7xl font-black text-timber-black tracking-tight">
              שירותי פרקטים, שטיחים ודקים
            </h2>
            <p className="text-xl mt-4 font-light text-gray-500">
              התקנה, תיקונים וגימור — לפי מצב התשתית והחומרים
            </p>
          </div>
        </div>

        {/* 3-Column Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal delay-100">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="flex flex-col bg-gray-50 border border-gray-200 hover:border-black transition-colors duration-300 p-8"
            >
              <h3 className="text-2xl font-black text-timber-black mb-6 pb-4 border-b border-gray-200">
                {cat.title}
              </h3>

              <ul className="flex-grow space-y-3 mb-8">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-gray-700 text-sm font-medium leading-snug">
                    <ChevronLeft className="w-4 h-4 text-timber-accent shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/972543962871?text=${encodeURIComponent(cat.waText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between bg-white border border-gray-200 px-4 py-3 text-sm font-bold text-timber-black hover:bg-timber-black hover:text-white hover:border-timber-black transition-all"
              >
                <span>שלחו תמונה לקבלת כיוון</span>
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Microcopy */}
        <p className="mt-8 text-center text-gray-500 font-light text-sm reveal delay-200">
          לא בטוחים מה נכון אצלכם? שלחו תמונה קצרה + מידה משוערת, ותקבלו הסבר מה אפשרויות העבודה.
        </p>
      </div>
    </section>
  );
};

export default Services;
```

**Step 2: Commit**
```bash
git add components/Services.tsx
git commit -m "feat: restructure Services to 3 grouped category blocks with sub-item lists"
```

---

## Task 4: Create ObjectionBlock component + wire into App.tsx

**Files:**
- Create: `components/ObjectionBlock.tsx`
- Modify: `App.tsx`

**Step 1: Create `components/ObjectionBlock.tsx`**

```tsx
import React from 'react';
import { MessageCircle } from 'lucide-react';

const situations = [
  {
    situation: "לוחות בודדים פגועים או שבורים",
    answer: "לרוב ניתן להחליף את הלוחות הפגועים בלבד, בלי לפרק את כל הרצפה.",
  },
  {
    situation: "חריקות, שקיעות או פערים",
    answer: "תלוי במקור הבעיה — לפעמים מדובר בתיקון נקודתי, לפעמים בבעיית תשתית. חייבים לבדוק.",
  },
  {
    situation: "נזק רחב, לחות, או תשתית לא ישרה",
    answer: "במצבים כאלה לרוב נדרשת עבודה רחבה יותר — החלפה חלקית או מלאה, לפי הממצאים.",
  },
];

const ObjectionBlock: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12 reveal">

        <div className="max-w-3xl mx-auto text-right">
          <span className="text-timber-accent font-bold tracking-widest text-xs uppercase mb-3 block">
            שאלה נפוצה
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-timber-black mb-4 leading-tight">
            מתי אפשר לתקן —<br/>ומתי צריך להחליף?
          </h2>
          <p className="text-gray-500 font-light mb-10 text-base leading-relaxed">
            התשובה תמיד תלויה במצב קיים. כמה מצבים נפוצים:
          </p>

          <div className="space-y-6 mb-10">
            {situations.map((s, i) => (
              <div key={i} className="flex gap-6 items-start border-r-2 border-timber-accent pr-5">
                <div>
                  <p className="font-bold text-timber-black text-base mb-1">{s.situation}</p>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">{s.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/972543962871?text=%D7%94%D7%99%D7%99%20%D7%92%27%D7%A8%D7%99%D7%A7%D7%95%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%90%D7%95%D7%9C%20%D7%90%D7%9D%20%D7%A6%D7%A8%D7%99%D7%9A%20%D7%AA%D7%99%D7%A7%D7%95%D7%9F%20%D7%90%D7%95%20%D7%94%D7%97%D7%9C%D7%A4%D7%94"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-timber-black text-white px-8 py-4 font-bold text-sm hover:bg-timber-accent hover:text-timber-black transition-colors duration-300"
          >
            <MessageCircle className="w-4 h-4 fill-current text-[#25D366]" />
            שלחו תמונה + תיאור — ואסביר מה האפשרויות
          </a>
        </div>
      </div>
    </section>
  );
};

export default ObjectionBlock;
```

**Step 2: Wire ObjectionBlock into `App.tsx`**

Add import at top (after existing imports):
```tsx
import ObjectionBlock from './components/ObjectionBlock';
```

Find in JSX:
```tsx
        <BeforeAfter />
```

Replace with:
```tsx
        <ObjectionBlock />
        <BeforeAfter />
```

**Step 3: Commit**
```bash
git add components/ObjectionBlock.tsx App.tsx
git commit -m "feat: add ObjectionBlock section (מתי תיקון ומתי החלפה)"
```

---

## Final Verification

After all 4 tasks, visually confirm:
1. Hero H1 reads: `התקנת פרקטים / ושטיחים מקיר לקיר.`
2. Hero has 3 bullet micro-trust items below CTA buttons
3. Services section H2 reads: `שירותי פרקטים, שטיחים ודקים` with 3 columns
4. ObjectionBlock appears between Services and BeforeAfter
5. `index.html` `<title>` matches: `התקנת פרקטים ושטיחים מקיר לקיר | התקנה ותיקונים לפי מצב התשתית`
