# Horoscope

A modern astrology experience built with Next.js 16.3, React 19, Tailwind CSS, and GSAP. The app includes a zodiac overview with interactive flip cards and detailed daily horoscope pages for each sign.

## Features

- Zodiac overview with 12 sign cards
- 3D flip card UI for quick summaries
- Daily horoscope detail pages
- Horoscope API integration via Divine API
- Lucky colors, numbers, alphabets, and tips
- Ambient cosmic background and UI animations
- Responsive layout with mobile navigation
- Custom error and not-found screens

## Tech Stack

- Next.js 16.3
- React 19.2.8
- Tailwind CSS v4
- TypeScript
- GSAP animation library

## Project Structure

- `app/`
  - `layout.tsx` — global page shell and fonts
  - `page.tsx` — homepage / horoscope overview
  - `horoscope/`
    - `page.tsx` — alias for `/horoscope`
    - `[slug]/page.tsx` — horoscope detail page
    - `[slug]/loading.tsx` — route loading UI
    - `[slug]/not-found.tsx` — invalid sign page
  - `error.tsx` — global error boundary
  - `globals.css` — Tailwind import plus custom styles
- `components/`
  - `Navbar.tsx`
  - `CosmicBackground.tsx`
  - `HeroHoroscopeCard.tsx`
  - `DailyInsight.tsx`
  - `consult_banner.tsx`
  - `MoreSidebar.tsx`
  - `chat_banner.tsx`
  - `lcfhBlock.tsx`
- `data/`
  - `zodiac.ts` — zodiac metadata and lookup helper
- `lib/`
  - `horoscope.ts` — API fetch and data parsing

## Environment Variables

Set these values in `.env.local`:

```env
DIVINE_API_URL=https://astroapi-5.divineapi.com/api/v5/daily-horoscope
DIVINE_API_TOKEN=your_api_token_here
DIVINE_API_KEY=your_api_key_here
