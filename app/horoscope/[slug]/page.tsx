import Link from "next/link";
import { notFound } from "next/navigation";
import { getSignBySlug, zodiacSigns } from "@/data/zodiac";
import { fetchDailyHoroscope } from "@/lib/horoscope";
import Navbar from "@/components/Navbar";
import SignSwitcherDock from "@/components/ZodiacDock";
import HeroHoroscopeCard from "@/components/HeroHoroscopeCard";
import TodaysInsightsRow from "@/components/DailyInsight";
import PrimaryCTARow from "@/components/consult_banner";
import MoreForSignSidebar from "@/components/MoreSidebar";
import PersonalReadingCTA from "@/components/chat_banner";
import LCFHBlock from "@/components/lcfhBlock";

export async function generateStaticParams() {
  return zodiacSigns.map((sign) => ({
    slug: `daily-${sign.slug}-horoscope`,
  }));
}

export default async function HoroscopeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolvedParams = await params;
  const rawSlug = resolvedParams?.slug;
  const sign = getSignBySlug(rawSlug);

  // Render not-found page if sign is invalid
  if (!sign) {
    notFound();
  }

  // Dynamic API Fetching on Server Component
  let apiPrediction = "";
  let luckyNumber = "";
  let luckyColor = "";
  let mood = sign.mood.label;
  let apiLove = "";
  let apiCareer = "";
  let apiHealth = "";
  let apiTravel = "";
  let apiPercentages: { personal: number; health: number; profession: number; emotions: number; travel: number } | undefined;
  let apiLuckyAlphabets = "";
  let apiLuckyColorCodes: string[] = [];
  let apiCosmicTip = "";
  let apiTipsForSingles = "";
  let apiTipsForCouples = "";

  try {
    const apiData = await fetchDailyHoroscope(sign.name);
    if (apiData && apiData.prediction) {
      apiPrediction = apiData.prediction;
      if (apiData.luckyNumber) luckyNumber = apiData.luckyNumber;
      if (apiData.luckyColor)  luckyColor  = apiData.luckyColor;
      if (apiData.mood)        mood        = apiData.mood;
      if (apiData.love)        apiLove     = apiData.love;
      if (apiData.career)      apiCareer   = apiData.career;
      if (apiData.health)      apiHealth   = apiData.health;
      if (apiData.travel)      apiTravel   = apiData.travel;
      if (apiData.percentages) apiPercentages = apiData.percentages;
      if (apiData.luckyAlphabets) apiLuckyAlphabets = apiData.luckyAlphabets;
      if (apiData.luckyColorCodes) apiLuckyColorCodes = apiData.luckyColorCodes;
      if (apiData.cosmicTip)      apiCosmicTip      = apiData.cosmicTip;
      if (apiData.tipsForSingles) apiTipsForSingles = apiData.tipsForSingles;
      if (apiData.tipsForCouples) apiTipsForCouples = apiData.tipsForCouples;
    }
  } catch (error) {
    console.warn(`Falling back to curated forecast for ${sign.name}:`, error);
  }

  return (
    <div className="min-h-screen w-full text-slate-100 pb-20 md:pb-10">
      {/* Global Sticky Top Navbar */}
      <Navbar />

      {/* MacOS DOCK EFFECT Sign Switcher Strip */}
      <SignSwitcherDock currentSlug={sign.slug} />

      {/* Main Content Container*/}
      <main className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        {/* Navigation */}
        <div className="mb-4">
          <Link
            href="/horoscope"
            className="inline-flex items-center gap-2 text-xs font-light text-slate-400 hover:text-[#FFD700] transition-colors"
          >
            ← Back to All Signs
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT MAIN COLUMN (8 cols on desktop) */}
          <div className="lg:col-span-8 space-y-6">
            {/* 3. Hero Horoscope Card with Category Tabs */}
            <HeroHoroscopeCard sign={sign} apiPrediction={apiPrediction} />

            {/* "Today's Insights"*/}
            <TodaysInsightsRow
              sign={sign}
              luckyNumber={luckyNumber}
              luckyColor={luckyColor}
              mood={mood}
              luckyAlphabets={apiLuckyAlphabets}
              luckyColorCodes={apiLuckyColorCodes}
              cosmicTip={apiCosmicTip}
              tipsForSingles={apiTipsForSingles}
              tipsForCouples={apiTipsForCouples}
            />

            {/* ("Talk to Expert" & "Get Free Kundli") */}
            <PrimaryCTARow signName={sign.name} />

            {/* Live LCFH Daily Readings Block */}
            <LCFHBlock
              signName={sign.name}
              love={apiLove}
              career={apiCareer}
              health={apiHealth}
              travel={apiTravel}
              percentages={apiPercentages}
            />

            {/* Conversion Card */}
            <PersonalReadingCTA signName={sign.name} />
          </div>

          {/* RIGHT SIDEBAR COLUMN (4 cols on desktop) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            {/* 7. "More for [Sign]" Side Card */}
            <MoreForSignSidebar signName={sign.name} signSlug={sign.slug} />
          </aside>
        </div>
      </main>
    </div>
  );
}
