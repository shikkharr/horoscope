// components/MoreForSignSidebar.tsx
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

interface MoreForSignSidebarProps {
  signName: string;
  signSlug: string;
}

export default function MoreForSignSidebar({ signName, signSlug }: MoreForSignSidebarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!sidebarRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sidebarRef.current,
        { scale: 0.96, opacity: 0.8 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "power2.out" }
      );
    });
    return () => ctx.revert();
  }, []);

  const variants = [
    { label: "Tomorrow's Horoscope", href: `/horoscope/tomorrow-${signSlug}-horoscope`, icon: "🌅" },
    { label: "Yesterday's Horoscope", href: `/horoscope/yesterday-${signSlug}-horoscope`, icon: "🌘" },
    { label: "Weekly Horoscope", href: `/horoscope/weekly-${signSlug}-horoscope`, icon: "📅" },
    { label: "Monthly Horoscope", href: `/horoscope/monthly-${signSlug}-horoscope`, icon: "🌙" },
    { label: "Yearly Horoscope 2026", href: `/horoscope/yearly-${signSlug}-horoscope`, icon: "🌟" },
  ];

  return (
    <div
      ref={sidebarRef}
      className="w-full glass-card p-6 rounded-3xl border border-[#8E24AA]/30 shadow-xl space-y-4"
    >
      {/* Non-clickable Header */}
      <div className="border-b border-slate-800/80 pb-3">
        <span className="text-[10px] uppercase tracking-widest text-[#FFD700] font-light block">
          Current View
        </span>
        <h3 className="text-base font-normal text-white flex items-center gap-2">
          ✨ Daily {signName} Horoscope
        </h3>
      </div>

      <div className="space-y-1.5">
        <span className="text-[11px] font-light tracking-wide text-slate-400 block mb-2">
          More Time Frames for {signName}:
        </span>
        {variants.map((v) => (
          <Link
            key={v.label}
            href={v.href}
            className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#0a071b]/60 hover:bg-[#8E24AA]/25 border border-slate-800/80 hover:border-[#FFD700]/40 text-xs text-slate-200 hover:text-[#FFD700] transition-all smooth-transition group"
          >
            <span className="flex items-center gap-2 font-light">
              <span>{v.icon}</span> {v.label}
            </span>
            <span className="text-[10px] text-slate-400 group-hover:text-[#FFD700] group-hover:translate-x-0.5 transition-transform">
              →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
