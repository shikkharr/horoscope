"use client";

import type { ZodiacSign } from "@/data/zodiac";

interface HeroHoroscopeCardProps {
  sign: ZodiacSign;
  apiPrediction?: string;
}

export default function HeroHoroscopeCard({ sign, apiPrediction }: HeroHoroscopeCardProps) {
  const todayFormatted = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const paragraph = apiPrediction || "Couldn't load the prediction. Please try again later.";

  return (
    <div className="w-full rounded-3xl glass-card p-6 sm:p-8 border border-[#8E24AA]/35 shadow-2xl relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#303F9F]/20 blur-3xl pointer-events-none" />

      {/* Top Row: Symbol, Name, Badges & Mood */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#8E24AA] via-[#303F9F] to-[#0a071b] p-0.5 shadow-lg flex items-center justify-center">
            <div className="w-full h-full rounded-[14px] bg-[#0a071b] flex items-center justify-center text-4xl sm:text-5xl text-[#FFD700]">
              {sign.symbol}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h1 className="text-3xl sm:text-4xl font-extralight text-white tracking-wide"
              style={{ fontFamily: "'Cardo', serif" }}>
                {sign.name}
              </h1>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#FFD700]/10 text-[#FFD700] border border-[#FFD700]/30 font-medium">
                {sign.rashiName}
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#303F9F]/30 text-[#FFD700] border border-[#303F9F]/60 font-light flex items-center gap-1">
                {sign.element} {sign.elementName}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-light mt-1">
              {sign.dateRange} • <span className="text-[#FFD700]">{todayFormatted}</span>
            </p>
          </div>
        </div>

        {/* Mood Indicator Badge */}
        <div className="self-start sm:self-center bg-[#0a071b]/80 border border-[#8E24AA]/40 px-3.5 py-2 rounded-2xl flex items-center gap-2">
          <span className="text-xl">{sign.mood.emoji}</span>
          <div>
            <span className="text-[10px] uppercase text-slate-400 block font-light">Mood</span>
            <span className="text-xs text-[#FFD700] font-medium">{sign.mood.label}</span>
          </div>
        </div>
      </div>

      {/* Today's General Horoscope */}
      <br/>
        <p className="text-sm sm:text-base text-slate-200 font-light leading-relaxed tracking-wide">
          {paragraph}
        </p>
    </div>
  );
}
