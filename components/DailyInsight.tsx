"use client";

import type { ZodiacSign } from "@/data/zodiac";

interface TodaysInsightsRowProps {
  sign: ZodiacSign;
  luckyNumber?: string;
  luckyColor?: string;
  mood?: string;
  luckyAlphabets?: string; // e.g. "A, R"
  luckyColorCodes?: string[]; // e.g. ["#E25822", "#F7CAC9"]
  cosmicTip?: string;
  tipsForSingles?: string;
  tipsForCouples?: string;
}

export default function TodaysInsightsRow({
  sign,
  luckyNumber,
  luckyColor,
  luckyAlphabets,
  luckyColorCodes,
  cosmicTip,
  tipsForSingles,
  tipsForCouples,
}: TodaysInsightsRowProps) {
  const displayNumber = luckyNumber || "—";

  // Splitting "A, R" → ["A", "R"]
  const alphabetList: string[] = luckyAlphabets
    ? luckyAlphabets.split(",").map((a) => a.trim()).filter(Boolean)
    : [];

  // Making the color names e.g. "Flame Red, Rose Quartz" → ["Flame Red", "Rose Quartz"]
  const colorNames: string[] = luckyColor
    ? luckyColor.split(",").map((c) => c.trim()).filter(Boolean)
    : [];

  const colorItems = colorNames.map((name, index) => {
    const hex = luckyColorCodes && luckyColorCodes[index] ? luckyColorCodes[index] : "#FFD700";
    return { name, hex };
  });

  return (
    <div className="w-full my-6">
      <h2 className="text-xl uppercase tracking-widest text-[#FFD700] font-light mb-3"
      style={{ fontFamily: "'Playfair Display', serif" }}>
      ✨ Today's Insights
      </h2>

      {/* Top Row: 3 Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">

        {/* Lucky Alphabets Box */}
        <div className="rounded-2xl glass-card p-4 flex items-center justify-center gap-3.5 border border-[#8E24AA]/30 ">
          <div className="min-w-0 w-full text-center  ">
            <span className="text-[13px] uppercase tracking-wider text-slate-400 font-light block">
              Lucky Alphabets
            </span>
            {alphabetList.length > 0 ? (
              <div className="flex flex-wrap gap-1.5 mt-1 justify-center">
                {alphabetList.map((letter) => (
                  <span
                    key={letter}
                    className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-[#FFD700]/15 border border-[#FFD700]/40 text-[#FFD700] text-xs font-bold"
                  >
                    {letter}
                  </span>
                ))}
              </div>
            ) : (
              <span className="text-xs sm:text-sm font-medium text-slate-400 tracking-wide">
                —
              </span>
            )}
          </div>
        </div>

        {/* Lucky Color Box */}
        <div className="rounded-2xl glass-card p-4 flex flex-col justify-center border border-[#8E24AA]/30 min-w-0">
          <span className="text-[13px] uppercase gap-10 text-center tracking-wider text-slate-400 font-light block mb-2">
            {colorItems.length > 1 ? "Lucky Colours" : "Lucky Colour"}
          </span>
          <div className="flex items-start gap-5 flex-wrap justify-center">
            {colorItems.map((item, idx) => (
              <div key={idx} className="flex flex-col text-center items-center gap-1 min-w-[50px]">
                <div
                  className="w-10 w-full text-center h-6 sm:w-11 sm:h-6 rounded border border-white/30 shadow-md transition-transform hover:scale-105"
                  style={{ backgroundColor: item.hex }}
                  title={`${item.name} (${item.hex})`}
                />
                <span className="text-[11px] font-medium text-[#FFD700] tracking-wide text-center leading-tight">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/*  Lucky Number Box */}
        <div className="rounded-2xl glass-card p-4 flex items-center gap-3.5 border border-[#8E24AA]/30">
          <div className="w-10 h-10 rounded-xl bg-[#303F9F]/30 border border-[#303F9F]/60 flex items-center justify-center text-[#FFD700] font-bold text-base">
            {displayNumber}
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-light block">
              Lucky Number
            </span>
            <span className="text-xs sm:text-sm font-medium text-[#FFD700] tracking-wide">
              Number {displayNumber}
            </span>
          </div>
        </div>

      </div>

      {cosmicTip && (
        <div className="mt-5 mb-2">
          <h3
            className="text-[#FFD700] text-lg uppercase tracking-widest font-normal mb-1.5 flex items-center gap-1.5"
            style={{ fontFamily: "'Cardo', serif" }}
          >
             Cosmic Daily Tip
          </h3>
          <p
            className="text-slate-200 text-xl sm:text-xl italic font-normal leading-relaxed"
            style={{ fontFamily: "'Cardo', serif" }}
          >
            {cosmicTip}
          </p>
        </div>
      )}

      {/* 2-Column Split: Tips for Singles (Left) & Tips for Couples (Right) */}
      {(tipsForSingles || tipsForCouples) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-3.5">
          {/* Left Half: Tips for Singles */}
          <div className="rounded-2xl glass-card p-4 sm:p-5 border border-[#8E24AA]/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-base">💘</span>
                <span className="text-xs uppercase tracking-wider text-rose-300 font-medium" >
                  Tips for Singles
                </span>
              </div>
              <p  className="text-slate-200 text-xl sm:text-xl italic font-normal leading-relaxed"
            style={{ fontFamily: "'Cardo', serif" }}>
                {tipsForSingles || "Focus on building genuine self-connection today."}
              </p>
            </div>
          </div>

          {/* Right Half: Tips for Couples */}
          <div className="rounded-2xl glass-card p-4 sm:p-5 border border-[#8E24AA]/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-base">💞</span>
                <span className="text-xs uppercase tracking-wider text-purple-300 font-medium">
                  Tips for Couples
                </span>
              </div>
              <p  className="text-slate-200 text-xl sm:text-xl italic font-normal leading-relaxed"
            style={{ fontFamily: "'Cardo', serif" }} >
                {tipsForCouples || "Communicate with warmth and active listening."}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


