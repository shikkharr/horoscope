# Daily Horoscope Web Application

A dynamic, minimal, and aesthetic **Daily Horoscope** web application built with **Next.js (App Router)**, strictly complying with the Product Requirements Document (PRD).

---

## 🎨 Theme & Color Palette

The web application features a refined celestial aesthetic using the required color palette:
- **Deep Indigo (`#303F9F`)**: Radial background glows, depth layers, and accent borders.
- **Celestial Gold (`#FFD700`)**: Astrological icons, date badges, titles, and highlight metrics.
- **Amethyst Purple (`#8E24AA`)**: Translucent glassmorphism (`glass-card`), subtle hover borders, and interactive elements.

---

## 🚀 Getting Started & Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000/horoscope](http://localhost:3000/horoscope) in your browser.

---

## 🏛️ Architectural Decisions

### 1. Next.js App Router & Server Components for Data Fetching
- **Performance & SEO**: Data fetching (`fetchDailyHoroscope`) is executed on the server inside Server Components (`app/horoscope/daily-[slug]-horoscope/page.tsx`). This pre-renders horoscope predictions on the server, eliminating client-side loading delays and ensuring fast search engine indexing.
- **API Security**: API keys and tokens are securely accessed server-side, keeping sensitive headers hidden from client browsers.

### 2. ISR Caching Strategy (`revalidate: 3600`)
- Per PRD Section 4.2, fetch requests include `next: { revalidate: 3600 }`. Horoscope predictions refresh daily, so caching responses for 1 hour optimizes initial page load times and minimizes redundant external API requests.

### 3. Sparingly Used Client Components
- Interactive elements like Quick-Switcher (`components/QuickSwitcher.tsx`) and 3D card flips (`app/page.tsx`) use `"use client"` sparingly to maintain lightweight JavaScript bundles.

### 4. Resilient Error Handling & Loading States
- **Invalid Signs**: Navigating to an unknown route (e.g. `/horoscope/daily-unknown-horoscope`) triggers `notFound()`, rendering `not-found.tsx`.
- **API Failure**: Managed gracefully with `error.tsx` error boundaries and fallback curated dataset.
- **Transitions**: Smooth skeleton loading provided via `loading.tsx`.

---

## 📖 File Documentation
For a complete line-by-line explanation of every file in this codebase, please refer to [explanation.md](explanation.md).
