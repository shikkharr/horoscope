"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Consultations", href: "/consultations" },
    { name: "Horoscope", href: "/horoscope" },
    { name: "Kundli", href: "/kundli" },
    { name: "Panchang", href: "/panchang" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 w-full bg-[#0a071b]/80 backdrop-blur-xl border-b border-[#8E24AA]/25 smooth-transition">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo portion */}
          <Link href="/horoscope" className="flex items-center gap-2 group">
            <span className="text-lg font-bold tracking-wider text-white font-heading font-italic ">
              🔮 Jyotish<span className="text-[#FFD700] font-normal">9</span>
            </span>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-light tracking-wide transition-colors ${
                    isActive ? "text-[#FFD700] font-normal border-b border-[#FFD700] pb-0.5" : "text-slate-300 hover:text-[#FFD700]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Items */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/chat"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-light text-[#FFD700] bg-[#FFD700]/10 border border-[#FFD700]/30 hover:bg-[#FFD700]/20 px-3.5 py-1.5 rounded-full backdrop-blur-md smooth-transition"
            >
              <span>💬</span> Chat with Us
            </Link>

            {/* Sign In Button */}
            <Link
              href="/signin"
              className="text-xs font-light text-white bg-[#8E24AA]/30 border border-[#8E24AA]/60 hover:bg-[#8E24AA]/50 px-4 py-1.5 rounded-full backdrop-blur-md smooth-transition hover:border-[#FFD700]/40"
            >
              Sign In
            </Link>
          </div>
        </div>
      </header>

      {/* STICKY BOTTOM NAV (MOBILE ONLY) */}
      <nav aria-label="Mobile Navigation" className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0a071b]/95 backdrop-blur-2xl border-t border-[#8E24AA]/30 py-2 px-4 shadow-2xl">
        <div className="grid grid-cols-4 gap-1 text-center">
          <Link
            href="/horoscope"
            className={`flex flex-col items-center gap-0.5 text-[10px] font-light ${
              pathname === "/horoscope" || pathname === "/" ? "text-[#FFD700]" : "text-slate-400"
            }`}
          >
            <span className="text-base">🏠</span> Home
          </Link>
          <Link
            href="/chat"
            className="flex flex-col items-center gap-0.5 text-[10px] text-slate-400 font-light hover:text-[#FFD700]"
          >
            <span className="text-base">💬</span> Chat
          </Link>
          <Link
            href="/horoscope/daily-aries-horoscope"
            className={`flex flex-col items-center gap-0.5 text-[10px] font-light ${
              pathname.includes("daily-") ? "text-[#FFD700]" : "text-slate-400"
            }`}
          >
            <span className="text-base">✨</span> Daily
          </Link>
          <Link
            href="/profile"
            className="flex flex-col items-center gap-0.5 text-[10px] text-slate-400 font-light hover:text-[#FFD700]"
          >
            <span className="text-base">👤</span> You
          </Link>
        </div>
      </nav>
    </>
  );
}
