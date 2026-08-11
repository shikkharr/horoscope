export default function Loading() {
  return (
    <div className="relative min-h-screen w-full bg-[#0a071b] text-slate-100 px-4 py-12 sm:py-16">
      <main className="relative z-10 max-w-2xl mx-auto animate-pulse">
        <div className="h-8 w-36 bg-slate-800/60 rounded-full mb-8" />
        <div className="rounded-3xl bg-slate-900/40 border border-slate-800/60 p-6 sm:p-10">
          <div className="flex items-center gap-5 border-b border-slate-800/60 pb-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-800/80" />
            <div className="space-y-3">
              <div className="h-8 w-44 bg-slate-800/80 rounded" />
              <div className="h-4 w-64 bg-slate-800/60 rounded" />
            </div>
          </div>
          <div className="my-8 space-y-3">
            <div className="h-4 w-32 bg-slate-800/60 rounded" />
            <div className="h-4 w-full bg-slate-800/40 rounded" />
            <div className="h-4 w-5/6 bg-slate-800/40 rounded" />
            <div className="h-4 w-4/6 bg-slate-800/40 rounded" />
          </div>
          <div className="grid grid-cols-3 gap-3 my-8">
            <div className="h-16 bg-slate-800/60 rounded-2xl" />
            <div className="h-16 bg-slate-800/60 rounded-2xl" />
            <div className="h-16 bg-slate-800/60 rounded-2xl" />
          </div>
        </div>
      </main>
    </div>
  );
}
