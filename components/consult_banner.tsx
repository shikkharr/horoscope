"use client";

import Link from "next/link";

interface PrimaryCTARowProps {
  signName: string;
}

export default function PrimaryCTARow({ signName }: PrimaryCTARowProps) {
  return (
    <div className="w-full my-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Link
        href="/chat"
        className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-[#8E24AA]/40 to-[#303F9F]/50 hover:from-[#8E24AA]/60 hover:to-[#303F9F]/70 border border-[#8E24AA]/60 hover:border-[#FFD700]/60 text-white text-xs sm:text-sm font-light text-center flex items-center justify-center gap-2 transition-all smooth-transition shadow-lg shadow-[#8E24AA]/20 group"
      >
        <span className="text-base group-hover:scale-110 transition-transform">🔮</span>
        <span>Talk to <strong className="font-medium text-[#FFD700]">{signName}</strong> Expert</span>
      </Link>

      <Link
        href="/kundli"
        className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-[#303F9F]/40 to-[#0a071b] hover:from-[#303F9F]/60 border border-[#FFD700]/40 hover:border-[#FFD700]/70 text-white text-xs sm:text-sm font-light text-center flex items-center justify-center gap-2 transition-all smooth-transition shadow-lg shadow-[#303F9F]/20 group"
      >
        <span className="text-base group-hover:scale-110 transition-transform">📜</span>
        <span>Get Free <strong className="font-medium text-[#FFD700]">Kundli Chart</strong></span>
      </Link>
    </div>
  );
}
