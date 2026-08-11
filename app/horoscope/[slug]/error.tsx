"use client";

import Link from "next/link";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="relative min-h-screen w-full bg-[#0a071b] text-slate-100 px-4 py-20 flex items-center justify-center">
      <main className="max-w-md w-full glass-card p-8 rounded-3xl text-center border border-[#8E24AA]/40 shadow-2xl">
        <div className="text-4xl mb-4 text-[#FFD700]">✨</div>
        <h2 className="text-xl font-light text-white mb-2">Unable to Load Horoscope</h2>
        <p className="text-xs text-slate-300 font-light mb-6 leading-relaxed">
          The connection was temporarily interrupted. Please try again later.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={reset}
            className="px-5 py-2 rounded-xl bg-[#8E24AA]/30 hover:bg-[#8E24AA]/50 border border-[#8E24AA]/60 text-white text-xs font-light transition-all smooth-transition"
          >
            Try Again
          </button>
          <Link
            href="/horoscope"
            className="px-5 py-2 rounded-xl bg-[#303F9F]/30 hover:bg-[#303F9F]/50 border border-[#303F9F]/60 text-white text-xs font-light transition-all smooth-transition"
          >
            Back to All Signs
          </Link>
        </div>
      </main>
    </div>
  );
}
