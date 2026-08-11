import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full bg-[#0a071b] text-slate-100 px-4 py-20 flex items-center justify-center">
      <main className="max-w-md w-full glass-card p-8 rounded-3xl text-center border border-[#8E24AA]/40 shadow-2xl">
        <div className="text-4xl mb-4 text-[#FFD700]">🌌</div>
        <h1 className="text-2xl font-extralight text-white mb-2">Sign Not Found</h1>
        <p className="text-xs text-slate-300 font-light mb-6 leading-relaxed">
          We couldn't locate that zodiac sign in our celestial catalog. Please select a valid Rashi sign.
        </p>
        <Link
          href="/horoscope"
          className="inline-block px-6 py-2.5 rounded-full bg-[#8E24AA]/30 hover:bg-[#8E24AA]/50 border border-[#FFD700]/40 text-[#FFD700] text-xs font-light transition-all smooth-transition"
        >
          ← Back to All Signs
        </Link>
      </main>
    </div>
  );
}
