"use client";

import Link from "next/link";

interface PersonalReadingCTAProps {
  signName: string;
}

export default function PersonalReadingCTA({ signName }: PersonalReadingCTAProps) {
  return (
    <div className="w-full my-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#303F9F]/50 via-[#8E24AA]/40 to-[#0a071b] border border-[#FFD700]/40 shadow-2xl relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFD700]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="space-y-1.5 text-center sm:text-left z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FFD700]/15 text-[#FFD700] text-[10px] uppercase font-medium tracking-wider">
          <span>⚡</span> Live Astrologer Online
        </div>
        <h3 className="text-xl sm:text-2xl font-light text-white tracking-wide">
          Want a personal reading for <span className="font-normal text-[#FFD700]">{signName}</span>?
        </h3>
        <p className="text-xs text-slate-300 font-light flex items-center justify-center sm:justify-start gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Verified astrologers online • Just waiting to reply</span>
        </p>
      </div>

      <Link
        href="/chat"
        className="z-10 py-3 px-7 rounded-full bg-[#FFD700] hover:bg-[#ffe033] text-[#0a071b] text-xs font-semibold tracking-wide transition-all smooth-transition shadow-lg shadow-[#FFD700]/25 whitespace-nowrap hover:scale-105"
      >
        💬 Chat with Astrologer
      </Link>
    </div>
  );
}
