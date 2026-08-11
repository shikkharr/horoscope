"use client";

import { useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global app error:", error);
  }, [error]);

  return (
    <div className="min-h-screen w-full text-slate-100 flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <p className="text-7xl mb-4 select-none">⚠️</p>
        <h1
          className="text-4xl sm:text-5xl font-light text-white mb-3 tracking-tight"
          style={{ fontFamily: "'Cardo', serif" }}
        >
          Cosmic Interference
        </h1>
        <p className="text-slate-400 text-base font-light max-w-sm leading-relaxed mb-8">
          A celestial anomaly disrupted this reading. The stars will realign
          shortly.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 rounded-xl bg-[#303F9F]/30 hover:bg-[#303F9F]/50 border border-[#303F9F]/60 hover:border-[#FFD700]/50 text-white text-sm font-light transition-all"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-[#8E24AA]/25 hover:bg-[#8E24AA]/40 border border-[#8E24AA]/50 hover:border-[#FFD700]/50 text-white text-sm font-light transition-all"
          >
            ← Return to All Signs
          </Link>
        </div>
      </main>
    </div>
  );
}
