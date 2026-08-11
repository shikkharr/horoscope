import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full text-slate-100 flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <p className="text-8xl mb-4 select-none">✦</p>
        <h1
          className="text-5xl sm:text-6xl font-light text-white mb-3 tracking-tight"
          style={{ fontFamily: "'Cardo', serif" }}
        >
          Lost in the Cosmos
        </h1>
        <p className="text-slate-400 text-base font-light max-w-sm leading-relaxed mb-8">
          The stars couldn&apos;t locate this page. It may have drifted into a
          different dimension.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#8E24AA]/25 hover:bg-[#8E24AA]/40 border border-[#8E24AA]/50 hover:border-[#FFD700]/50 text-white text-sm font-light transition-all"
        >
          ← Return to All Signs
        </Link>
      </main>
    </div>
  );
}
