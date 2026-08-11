# Daily Horoscope Page — UI Spec Implementation (`explanation.md`)

This document details the architectural breakdown of the **Daily Horoscope Page** built according to the Astrotalk-inspired design specification.

---

## 🎨 Color Palette & Aesthetic

- **Deep Indigo (`#303F9F`)**: Background gradients, depth glow layers, and structural dividers.
- **Celestial Gold (`#FFD700`)**: Astrological symbols, highlight text, date indicators, badges, and key metrics.
- **Amethyst Purple (`#8E24AA`)**: Translucent glassmorphism (`glass-card`), soft line borders, and interactive category pills.

---

## 🧩 Component Architecture Breakdown

### 1. `components/Navbar.tsx` (Global Layout)
- **Sticky Top Navbar**: Displays brand logo, navigation links (`Consultations`, `Horoscope`, `Kundli`, `Panchang`), `Chat with Us` CTA button, language switcher (`ENG`/`HIN`), and `Sign In` action.
- **Sticky Bottom Mobile Bar**: 4 quick icons (`Home`, `Chat`, `Daily`, `You`) pinned to the viewport bottom on small devices.

### 2. `components/SignSwitcherDock.tsx` (MacOS Dock Effect)
- **Horizontal Zodiac Strip**: Displays all 12 signs with astrological glyphs (`♈`, `♉`, ...) and English names.
- **MacOS Dock Physics**: Utilizes **GSAP** to dynamically scale hovered items (`1.35x`) and adjacent items for a Mac OS Dock magnification effect.
- **Auto-Centering**: Smoothly scrolls the active sign into view on mount.

### 3. `components/HeroHoroscopeCard.tsx` (Hero Reading & Tabs)
- **Header Details**: Large sign glyph, sign name, Sanskrit Rashi name, dynamic date, date range, element badge (`🔥 Fire`), and mood indicator (`emoji + label`).
- **Interactive Category Tabs**: `GENERAL`, `LOVE`, `CAREER`, `MONEY` pill tabs that swap prediction text locally without triggering a page reload.

### 4. `components/TodaysInsightsRow.tsx` (Stat Chips)
- **3 Self-Contained Chips**:
  1. **Mood**: Emoji + label (e.g. `🔥 Dynamic & Bold`).
  2. **Lucky Colour**: Visual color swatch + color name (e.g. `Celestial Gold`).
  3. **Lucky Number**: Styled number badge.

### 5. `components/CategoryQuickCards.tsx` (Category Slider)
- **4 Compact Quick Cards**: ❤️ Love, 💪 Health, 💼 Career, 💰 Finance with GSAP scale transitions on hover.

### 6. `components/PrimaryCTARow.tsx` (Conversion CTAs)
- **2 Equal-Weight Pill Buttons**: "Talk to [Sign] Expert" (directing to chat flow) and "Get Free Kundli Chart" (directing to birth-chart tool).

### 7. `components/MoreForSignSidebar.tsx` (Time-Range Variants)
- **Sidebar Navigation**: Desktop sticky sidebar (with GSAP scroll zoom effect) listing time-range variants: Tomorrow's, Yesterday's, Weekly, Monthly, and Yearly Horoscopes with an active non-clickable Daily header.

### 8. `components/PersonalReadingCTA.tsx` (Conversion Banner)
- **Re-conversion Card**: Visual gradient card with live astrologer indicator and "Chat with Astrologer" CTA. Instantiated **twice** per page (after Hero section and after Detailed Reading).

### 9. `components/DetailedReadingGrid.tsx` (Teaser Cards)
- **4 Category Teasers**: Love, Career, Finance, and Health cards featuring truncated preview sentences ending in "..." and "Read More →" links.

### 10. `components/CompatibilityGrid.tsx` (Matching Pills)
- **12 Sign Pairing Pills**: Displays paired glyphs (`♈♉`), 3-letter codes (`ARI & TAU`), and match percentage.
- **Color-Coded Bands**:
  - `<50%`: Red (`bg-rose-950/40`)
  - `50–74%`: Yellow (`bg-amber-950/40`)
  - `75%+`: Green (`bg-emerald-950/40`)

### 11. `components/SEOContentBlock.tsx` (Long-Form SEO Copy)
- **Text-Heavy SEO Block**: H2/H3 subheadings covering general traits, career, love, luck, and health evergreen content with inline consultation CTAs.
