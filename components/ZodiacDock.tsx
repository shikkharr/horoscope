
"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { zodiacSigns, ZodiacSign } from "@/data/zodiac";
import { gsap } from "gsap";

interface SignSwitcherDockProps {
  currentSlug: string;
}

export default function SignSwitcherDock({ currentSlug }: SignSwitcherDockProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeItemRef = useRef<HTMLAnchorElement>(null);
  const dockContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll so active sign is centered on mount (especially mobile)
  useEffect(() => {
    if (activeItemRef.current && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const activeItem = activeItemRef.current;
      const scrollLeft =
        activeItem.offsetLeft - container.offsetWidth / 2 + activeItem.offsetWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [currentSlug]);

  // MacOS Dock Expansion Effect on Mouse Move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dockContainerRef.current) return;
    const items = dockContainerRef.current.querySelectorAll<HTMLAnchorElement>(".dock-item");
    const mouseX = e.clientX;

    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const itemCenterX = rect.left + rect.width / 2;
      const distance = Math.abs(mouseX - itemCenterX);
      const maxDistance = 120; // Radius of dock effect

      if (distance < maxDistance) {
        const scale = 1 + (1 - distance / maxDistance) * 0.35; // Max 1.35x scale
        gsap.to(item, { scale, duration: 0.25, ease: "power2.out" });
      } else {
        gsap.to(item, { scale: 1, duration: 0.25, ease: "power2.out" });
      }
    });
  };

  const handleMouseLeave = () => {
    if (!dockContainerRef.current) return;
    const items = dockContainerRef.current.querySelectorAll<HTMLAnchorElement>(".dock-item");
    items.forEach((item) => {
      gsap.to(item, { scale: 1, duration: 0.3, ease: "power2.out" });
    });
  };

  return (
    <div className="w-full bg-[#0a071b]/90 border-y border-[#8E24AA]/30 backdrop-blur-md py-3 px-2 my-6">
      <div
        ref={scrollContainerRef}
        className="mx-auto max-w-7xl overflow-x-auto no-scrollbar scroll-smooth"
      >
        <div
          ref={dockContainerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="flex items-center justify-start sm:justify-center gap-2 sm:gap-4 min-w-max px-4 py-1"
        >
          {zodiacSigns.map((sign) => {
            const isActive =
              currentSlug.toLowerCase() === sign.slug.toLowerCase() ||
              currentSlug.toLowerCase() === `daily-${sign.slug}-horoscope`;

            return (
              <Link
                key={sign.slug}
                ref={isActive ? activeItemRef : null}
                href={`/horoscope/daily-${sign.slug}-horoscope`}
                className={`dock-item flex flex-col items-center gap-1 px-3 py-1.5 rounded-2xl transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#8E24AA]/30 border border-[#FFD700]/50 shadow-[0_0_15px_rgba(255,215,0,0.25)]"
                    : "hover:bg-slate-800/40 border border-transparent"
                }`}
              >
                <span className="text-2xl sm:text-3xl text-[#FFD700] filter drop-shadow">
                  {sign.symbol}
                </span>
                <span
                  className={`text-[11px] font-light tracking-wide ${
                    isActive ? "text-[#FFD700] font-normal underline underline-offset-4 decoration-[#FFD700]" : "text-slate-300"
                  }`}
                >
                  {sign.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
