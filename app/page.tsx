"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { zodiacSigns } from "@/data/zodiac";
import Navbar from "@/components/Navbar";
import { fetchDailyHoroscope } from "@/lib/horoscope";


// Minimal shape — only what the homepage cards need
interface LuckyInfo {
  luckyColor: string;
  luckyNumber: string;
}

// Cache key format: "lucky-<slug>-<YYYY-MM-DD"
function cacheKey(slug: string): string {
  const d = new Date();
  const date = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  return `lucky-${slug}-${date}`;
}

// Fetch lucky color & number for one sign, reading from sessionStorage cache first
async function fetchLucky(signName: string, slug: string): Promise<LuckyInfo> {
  const key = cacheKey(slug);
  try {
    const cached = sessionStorage.getItem(key);
    if (cached) return JSON.parse(cached) as LuckyInfo;
  } catch { /* sessionStorage unavailable */ }

  const data = await fetchDailyHoroscope(signName);
  const info: LuckyInfo = {
    luckyColor:  data.luckyColor  || "",
    luckyNumber: data.luckyNumber || "",
  };

  try { sessionStorage.setItem(key, JSON.stringify(info)); } catch { /* ignore */ }
  return info;
}

export default function ZodiacOverviewPage() {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [todayFormatted, setTodayFormatted] = useState<string>("");
  const [luckyMap, setLuckyMap] = useState<Record<string, LuckyInfo>>({});

  useEffect(() => {
    setTodayFormatted(
      new Date().toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    );

    // Fetch lucky color + number for all 12 signs, with per-sign sessionStorage cache
    async function loadLucky() {
      const results = await Promise.allSettled(
        zodiacSigns.map(async (sign) => {
          const info = await fetchLucky(sign.name, sign.slug);
          return { slug: sign.slug, info };
        })
      );
      const map: Record<string, LuckyInfo> = {};
      results.forEach((res) => {
        if (res.status === "fulfilled") map[res.value.slug] = res.value.info;
      });
      setLuckyMap(map);
    }

    loadLucky();
  }, []);

  const toggleCardFlip = (slug: string) => {
    setFlippedCards((prev) => ({ ...prev, [slug]: !prev[slug] }));
  };

  const handleKeyDown = (e: React.KeyboardEvent, slug: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleCardFlip(slug);
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden text-slate-100">
      <Navbar />

      {/* Main Container */}
      <main className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 flex flex-col items-center">
        {/* Header Badge & Title */}
        <header className="text-center mb-12 sm:mb-16 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extralight tracking-tight mb-4 text-white">
            Cosmic <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#c41e3a] via-[#FFD700] to-[#8E24AA]"
            style={{fontFamily: "'Cardo', serif"}}><em>&nbsp;Daily Horoscope</em></span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
            Explore daily forecast readings for all 12 Zodiac signs. 
            <br/>
            Select any card to uncover detailed astrological guidance for &nbsp;
            <br/>
            <span className="text-[#FFD700] font-normal">{todayFormatted || "Today"}</span>.
          </p>
        </header>

        {/* Responsive 12 Zodiac Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {zodiacSigns.map((sign) => {
            const isFlipped = !!flippedCards[sign.slug];
            const lucky = luckyMap[sign.slug];

            // Front: static summary (no API call needed)
            // Back: same static summary — clean & instant
            const luckyColor  = lucky?.luckyColor  || "—";
            const luckyNumber = lucky?.luckyNumber || "—";

            return (
              <div
                key={sign.slug}
                role="button"
                tabIndex={0}
                aria-pressed={isFlipped}
                aria-label={`${sign.name} (${sign.rashiName}) Rashi Card`}
                onClick={() => toggleCardFlip(sign.slug)}
                onKeyDown={(e) => handleKeyDown(e, sign.slug)}
                className="group relative w-full h-[270px] cursor-pointer perspective-1000 focus:outline-none focus:ring-1 focus:ring-[#FFD700]/60 rounded-2xl"
              >
                {/* 3D Flip Card Container */}
                <div
                  className={`relative w-full h-full duration-500 transform-style-3d smooth-transition ${
                    isFlipped ? "rotate-y-180" : ""
                  }`}
                >
                  {/* FRONT FACE OF CARD */}
                  <div className="absolute inset-0 w-full h-full rounded-2xl p-6 flex flex-col justify-between overflow-hidden backface-hidden glass-card transition-all">
                    {/* Top Row: Symbol and Sanskrit Rashi Badge */}
                    <div className="flex items-start justify-between">
                      <span className="text-4xl text-[#FFD700] transition-transform duration-300 group-hover:scale-110">
                        {sign.symbol}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium tracking-wide text-[#FFD700] bg-[#FFD700]/10 border border-[#FFD700]/30">
                        {sign.rashiName}
                      </span>
                    </div>

                    {/* Middle Info: English Name, Date Range, Summary */}
                    <div>
                      <h2 className="text-xl font-light text-white tracking-wide group-hover:text-[#FFD700] transition-colors">
                        {sign.name}
                      </h2>
                      <p className="text-xs text-slate-400 font-light mt-0.5">
                        {sign.dateRange}
                      </p>
                      <p className="text-xs text-slate-300 font-light mt-2.5 line-clamp-2 leading-relaxed opacity-90">
                        {sign.summary.general}
                      </p>
                    </div>

                    {/* Bottom Row: Element & Flip Indicator */}
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-2xl">
                        {sign.element}
                       </span>
                      <span className="text-[#FFD700]/80 group-hover:text-[#FFD700] transition-colors flex items-center gap-1">
                        {sign.elementName}
                      </span>
                    </div>
                  </div>

                  {/* BACK FACE OF CARD */}
                  <div className="absolute inset-0 w-full h-full rounded-2xl p-6 flex flex-col justify-between overflow-hidden backface-hidden rotate-y-180 glass-card border-[#FFD700]/40">
                    <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="text-lg text-[#FFD700]">{sign.symbol}</span>
                        <span className="text-sm font-medium text-white">
                          {sign.name} Quick View
                        </span>
                      </div>
                      <span className="text-[10px] text-[#FFD700] bg-[#303F9F]/30 px-2 py-0.5 rounded border border-[#303F9F]/60">
                        {sign.rashiName}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 font-light leading-relaxed line-clamp-3 my-1">
                      {sign.summary.general}
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-[11px] bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80 font-light">
                      <div>
                        <span className="text-slate-400 block text-[10px]">Lucky Color</span>
                        <span className="text-[#FFD700] truncate block">{luckyColor}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">Lucky No.</span>
                        <span className="text-[#FFD700]">{luckyNumber}</span>
                      </div>
                    </div>

                    {/* Direct Client-Side Link to Detail Page */}
                    <div onClick={(e) => e.stopPropagation()} className="pt-1">
                      <Link
                        href={`/horoscope/daily-${sign.slug}-horoscope`}
                        className="w-full py-2 rounded-xl bg-[#8E24AA]/25 hover:bg-[#8E24AA]/40 border border-[#8E24AA]/50 text-white text-xs font-light text-center block transition-all smooth-transition hover:border-[#FFD700]/50"
                      >
                        View Full Horoscope →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <footer className="w-full mt-16 sm:mt-20 pt-8 border-t border-slate-800/60 text-center">
          <p className="text-xs text-slate-400 font-light tracking-wide">
             • Dynamic Daily Horoscope • 
          </p>
        </footer>
      </main>
    </div>
  );
}