# Landing Page Optimization Design
**Date:** 2026-02-19
**Project:** Jericho Espinoza Flooring — Hebrew RTL Landing Page
**Approach:** Targeted Premium (Option A)
**Aesthetic:** Refine existing wood-luxury (timber-black / timber-accent #C6A87C / Heebo)

---

## Goals
1. Fix P0 bugs that break conversion or structured data
2. Activate the `Guarantee` component (best trust section, currently invisible)
3. Premium Hero redesign: cinematic overlay, trust pre-badge, prefilled WhatsApp CTA
4. Micro-polish RTL/layout/typography issues across other sections

---

## P0 Fixes (must ship)

| # | File | Fix |
|---|---|---|
| 1 | `App.tsx` | Import and render `<Guarantee />` after `<Testimonials />` |
| 2 | `Hero.tsx` | Add `?text=...` prefilled Hebrew message to WhatsApp href |
| 3 | `Hero.tsx` | Replace flat `bg-black/60` with cinematic gradient overlay |
| 4 | `index.html` | Remove `YOUR_CID_HERE` placeholder from JSON-LD (or note to fill) |

## P1 Fixes (high ROI)

| # | File | Fix |
|---|---|---|
| 5 | `Hero.tsx` | Add trust pre-badge above H1: `★ 5.0 בגוגל · 500+ פרויקטים` |
| 6 | `Hero.tsx` | Reposition content from bottom-anchor to center (remove `items-end`, use `items-center` with padding) |
| 7 | `TrustBar.tsx` | Add `divide-x-reverse` to fix RTL divider direction |
| 8 | `Guarantee.tsx` | Fix `md:border-l` → `md:border-r` for RTL column separators |
| 9 | `Guarantee.tsx` | Remove `font-handwriting` class (doesn't exist in config) |

## P2 Polish

| # | File | Fix |
|---|---|---|
| 10 | `Hero.tsx`, Gallery | Add `loading="lazy"` to non-hero images |
| 11 | `index.html` | Add `og:url` meta tag |

---

## Hero Premium Redesign

**Overlay:** Replace flat `bg-black/60` with:
```css
background: linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0.15) 100%)
```
This creates cinematic depth — heavy at bottom (where text lives), near-transparent at top (showing the craft).

**Layout:**
- Remove two-column flex (`flex-row items-end justify-between`)
- Single centered column with `items-center justify-center` + manual bottom padding
- Better mobile: content stays above keyboard fold

**Pre-badge** (above H1):
```tsx
<div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20
                rounded-full px-4 py-1.5 text-xs font-bold tracking-widest text-timber-accent
                uppercase mb-8">
  ★ 5.0 בגוגל &nbsp;·&nbsp; 500+ פרויקטים בגוש דן
</div>
```

**Typography:**
- Subtext: `leading-loose` (was `leading-relaxed`) — Hebrew needs more air
- Font weights unchanged (Heebo black for H1 is correct)

**WhatsApp CTA:**
```
href="https://wa.me/972543962871?text=היי%20ג%27ריקו%2C%20אשמח%20לקבל%20הצעת%20מחיר%20%F0%9F%99%8F"
```

---

## Guarantee Placement
Insert after `<Testimonials />` and before `<LeadForm />` in `App.tsx`.
This follows the classic conversion pattern: Social Proof → Objection Removal → Action.

---

## Design Tokens (unchanged)
```
timber-black:  #121212
timber-dark:   #1A1A1A
timber-accent: #C6A87C
Font:          Heebo (already loaded, weights 300–900)
```
