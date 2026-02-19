# Landing Page Optimization Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Fix P0 conversion bugs, activate the Guarantee section, and deliver a premium Hero redesign for this Hebrew RTL flooring contractor landing page.

**Architecture:** Targeted Premium approach — fix bugs site-wide (small precise edits), activate the hidden Guarantee component, redesign Hero with cinematic gradient + trust pre-badge + prefilled WhatsApp CTA. No new dependencies, no structural refactors.

**Tech Stack:** React 19, TypeScript, Vite 6, Tailwind CSS (CDN in index.html), Heebo font, lucide-react icons.

**Note on testing:** This project has no test suite. "Verify" steps mean: run `npm run dev`, open localhost:3000, visually inspect the change, check browser console for errors.

---

### Task 1: Fix Hero WhatsApp CTA — add prefilled Hebrew message

**Files:**
- Modify: `components/Hero.tsx:54`

**Step 1: Open the file and locate the WhatsApp href**

Line 54: `href="https://wa.me/972543962871"`

**Step 2: Apply the fix**

Change:
```tsx
href="https://wa.me/972543962871"
```
To:
```tsx
href="https://wa.me/972543962871?text=%D7%94%D7%99%D7%99%20%D7%92%27%D7%A8%D7%99%D7%A7%D7%95%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%94%D7%A6%D7%A2%D7%AA%20%D7%9E%D7%97%D7%99%D7%A8%20%F0%9F%99%8F"
```
(Decoded: `היי ג'ריקו, אשמח לקבל הצעת מחיר 🙏`)

**Step 3: Verify**

Run dev server: `npm run dev`
Open: http://localhost:3000
Click the WhatsApp button → browser should open `wa.me` with pre-filled Hebrew text.

**Step 4: Commit**

```bash
git add components/Hero.tsx
git commit -m "fix: add prefilled Hebrew message to Hero WhatsApp CTA"
```

---

### Task 2: Fix JSON-LD schema — remove broken Google Maps placeholder

**Files:**
- Modify: `index.html:107-109`

**Step 1: Locate the broken sameAs entry**

Line 107-109 in index.html:
```json
"sameAs": [
  "https://www.google.com/maps?cid=YOUR_CID_HERE"
]
```

**Step 2: Apply the fix**

Replace with empty array (client will fill in real CID later):
```json
"sameAs": []
```

**Step 3: Also add missing og:url meta tag**

After line 17 (`<meta name="twitter:image" ...>`), add:
```html
<meta property="og:url" content="https://www.jerico-parquet.co.il/" />
```

**Step 4: Verify**

Open: http://localhost:3000
Open DevTools → Elements, search for `YOUR_CID_HERE` — must be gone.
Run JSON-LD through https://validator.schema.org (paste the script block).

**Step 5: Commit**

```bash
git add index.html
git commit -m "fix: remove broken Google Maps CID placeholder from JSON-LD, add og:url"
```

---

### Task 3: Fix TrustBar RTL dividers

**Files:**
- Modify: `components/TrustBar.tsx:16`

**Step 1: Locate the grid div**

Line 16:
```tsx
<div className="bg-white shadow-xl border-t border-gray-100 grid grid-cols-2 md:grid-cols-5 divide-x-0 md:divide-x md:divide-x-reverse divide-gray-200">
```

**Step 2: Understand the issue**

In RTL, `divide-x` adds `border-left` to each child. `divide-x-reverse` is needed to flip the direction so separators appear between columns correctly. The class is already present (`md:divide-x-reverse`) but `divide-x-0` on mobile overrides correctly. Verify this renders correctly at md+ breakpoint.

**Step 3: Verify visually**

Open: http://localhost:3000 at desktop width (≥768px).
Inspect the TrustBar — dividers should appear between each of the 5 stat columns, not on the outside edges.
If dividers appear on the wrong sides, change `md:divide-x md:divide-x-reverse` to `md:divide-x-reverse` only and add a custom border approach.

**Step 4: Commit (only if a change was needed)**

```bash
git add components/TrustBar.tsx
git commit -m "fix: correct RTL divide direction in TrustBar"
```

---

### Task 4: Fix Guarantee component RTL borders and font class

**Files:**
- Modify: `components/Guarantee.tsx:13,26,38,69`

**Step 1: Fix the header border direction**

Line 13: `border-l-4 border-timber-accent pl-8`
In RTL, a decorative left-border accent is on the WRONG side (it's the trailing edge in Hebrew).

Change:
```tsx
<div className="mb-16 border-l-4 border-timber-accent pl-8 py-2">
```
To:
```tsx
<div className="mb-16 border-r-4 border-timber-accent pr-8 py-2">
```

**Step 2: Fix the grid column border directions**

Line 26: `md:border-l` → `md:border-r`
Line 38: `md:border-l` → `md:border-r`

Before (Pillar 1):
```tsx
<div className="group border-b md:border-b-0 md:border-l border-gray-800 p-10 hover:bg-white/5 transition-colors duration-500">
```
After:
```tsx
<div className="group border-b md:border-b-0 md:border-r border-gray-800 p-10 hover:bg-white/5 transition-colors duration-500">
```

Before (Pillar 2):
```tsx
<div className="group border-b md:border-b-0 md:border-l border-gray-800 p-10 hover:bg-white/5 transition-colors duration-500">
```
After:
```tsx
<div className="group border-b md:border-b-0 md:border-r border-gray-800 p-10 hover:bg-white/5 transition-colors duration-500">
```

**Step 3: Remove font-handwriting class**

Line 69: Remove `font-handwriting` (class doesn't exist in config — falls back to serif which is unintentional):
```tsx
<div className="text-4xl text-gray-500 opacity-50 font-serif italic">
```

**Step 4: Commit**

```bash
git add components/Guarantee.tsx
git commit -m "fix: correct RTL borders in Guarantee component, remove undefined font-handwriting class"
```

---

### Task 5: Activate Guarantee component in App.tsx

**Files:**
- Modify: `App.tsx:17,59`

**Step 1: Add the import**

After line 17 (`import InterruptCTA from './components/InterruptCTA';`), add:
```tsx
import Guarantee from './components/Guarantee';
```

**Step 2: Render the component**

In the JSX, after `<Testimonials />` (line 59) and before `<LeadForm />`:
```tsx
<Testimonials />
<Guarantee />
<LeadForm />
```

**Step 3: Verify**

Open: http://localhost:3000
Scroll down past Testimonials — the dark "הסטנדרט שלי" section should now appear with 3 pillars.
Check mobile: borders between pillars should be horizontal (border-b), columns should render as single stack.

**Step 4: Commit**

```bash
git add App.tsx
git commit -m "feat: activate Guarantee section (Social Proof → Guarantee → CTA conversion pattern)"
```

---

### Task 6: Premium Hero redesign — cinematic overlay + trust badge + layout

**Files:**
- Modify: `components/Hero.tsx` (full component rewrite)

**Step 1: Replace with the upgraded Hero**

Full file replacement for `components/Hero.tsx`:

```tsx
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
        {/* Cinematic gradient: dense at bottom (text), transparent at top (shows craft) */}
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

      {/* Content — centered, shifted slightly down */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col items-end text-right w-full mt-16 md:mt-24">

        <div className={`max-w-4xl w-full transition-all duration-1000 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

          {/* Trust pre-badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold tracking-widest text-timber-accent uppercase mb-8">
            ★ 5.0 בגוגל &nbsp;·&nbsp; 500+ פרויקטים בגוש דן
          </div>

          {/* Headline — unchanged, it's strong */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight mb-6 text-white">
            התקנת פרקט<br/>
            שנראית כאילו<br/>
            תמיד הייתה כאן.
          </h1>

          {/* Subtext — more air for Hebrew */}
          <p className="text-lg md:text-xl text-white/90 font-light mb-10 max-w-2xl leading-loose border-r-2 border-timber-accent pr-6">
            מתקין אחד שעושה הכל בעצמו — בלי צוותים מתחלפים ובלי הפתעות.<br/>
            מחיר סופי שנקבע מראש. 5 שנות אחריות על ההתקנה.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="https://wa.me/972543962871?text=%D7%94%D7%99%D7%99%20%D7%92%27%D7%A8%D7%99%D7%A7%D7%95%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%94%D7%A6%D7%A2%D7%AA%20%D7%9E%D7%97%D7%99%D7%A8%20%F0%9F%99%8F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-timber-accent text-timber-black hover:bg-white px-8 py-5 text-base font-bold transition-all duration-300 min-w-[280px] flex items-center justify-center gap-3 shadow-lg shadow-timber-accent/30 hover:shadow-xl hover:-translate-y-0.5"
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
```

**Step 2: Verify**

Open: http://localhost:3000
Above the fold should show:
- [ ] Cinematic gradient (darker at bottom, lighter at top)
- [ ] Trust badge visible: "★ 5.0 בגוגל · 500+ פרויקטים בגוש דן"
- [ ] Hebrew headline with correct RTL alignment
- [ ] Subtext with right-side border accent and `leading-loose`
- [ ] WhatsApp CTA with gold background and slight hover lift
- [ ] Mobile (375px): all content visible without scrolling, no overlap with bottom bar

**Step 3: Commit**

```bash
git add components/Hero.tsx
git commit -m "feat: premium Hero redesign — cinematic gradient, trust pre-badge, prefilled WA CTA, leading-loose Hebrew subtext"
```

---

### Task 7: Add loading="lazy" to non-critical images

**Files:**
- Modify: `components/Gallery.tsx` (add `loading="lazy"` to all `<img>`)
- Modify: `components/ProblemSolution.tsx` (add `loading="lazy"`)
- Modify: `components/BeforeAfter.tsx` (add `loading="lazy"` to both images)
- Modify: `components/Services.tsx` (add `loading="lazy"` to service card images)

**Step 1: In each file, find `<img` tags that don't have `loading="lazy"`**

Add `loading="lazy"` to every `<img>` that is NOT in Hero.tsx (the Hero image should remain eager-loaded as LCP element).

**Step 2: Verify**

DevTools → Network tab → reload page → confirm images below fold are loaded lazily (they appear in network only after scrolling to them).

**Step 3: Commit**

```bash
git add components/Gallery.tsx components/ProblemSolution.tsx components/BeforeAfter.tsx components/Services.tsx
git commit -m "perf: add loading=lazy to all non-hero images"
```

---

## QA Checklist — Hebrew RTL (Desktop + Mobile)

After all tasks complete, verify:

### Correctness
- [ ] WhatsApp links in Hero open with pre-filled Hebrew message
- [ ] JSON-LD has no `YOUR_CID_HERE` (check with Ctrl+F in source)
- [ ] Guarantee section visible between Testimonials and LeadForm
- [ ] Browser console: zero React errors

### RTL / Layout
- [ ] Hero: content aligns RIGHT, badge and text both flush right
- [ ] Hero: on 375px mobile, H1 is readable, CTA is fully visible
- [ ] TrustBar: column dividers appear BETWEEN stats, not on outside edges
- [ ] Guarantee: heading has RIGHT-side gold border, pillars separated correctly
- [ ] StickyCTA mobile: WhatsApp is on the RIGHT (70%), Call on LEFT (30%) — correct for RTL

### Typography
- [ ] Hero subtext has noticeably more line-height than before (leading-loose)
- [ ] Guarantee: italic "Jericho." renders in serif (not broken box/fallback)
- [ ] No text truncation on mobile across all sections

### Accessibility
- [ ] Tab through page: focus rings visible (gold outline from index.html styles)
- [ ] WhatsApp links have `rel="noopener noreferrer"`
- [ ] Images have meaningful `alt` text (especially Hero img)

### Conversion
- [ ] Trust badge visible on Hero without scrolling (desktop + mobile)
- [ ] Guarantee "3 pillars" section appears after testimonials
- [ ] StickyCTA appears after 200px scroll

### Performance
- [ ] Below-fold images load lazily (check Network tab)
- [ ] Hero video/image loads immediately (not lazy)
