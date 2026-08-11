// components/lcfhBlock.tsx
"use client";

interface LCFHBlockProps {
  signName: string;
  love: string;
  career: string;
  health: string;
  travel: string;
  percentages?: {
    personal: number;
    health: number;
    profession: number;
    emotions: number;
    travel: number;
  };
}

interface CategoryCard {
  title: string;
  icon: string;
  text: string;
  scoreKey: keyof NonNullable<LCFHBlockProps["percentages"]>;
  accentFrom: string;
  accentTo: string;
  borderColor: string;
  glowColor: string;
}

export default function LCFHBlock({
  signName,
  love,
  career,
  health,
  travel,
  percentages,
}: LCFHBlockProps) {
  const pct = percentages ?? { personal: 0, health: 0, profession: 0, emotions: 0, travel: 0 };

  const categories: CategoryCard[] = [
    {
      title: "Love & Relationships",
      icon: "❤️",
      text: love,
      scoreKey: "emotions",
      accentFrom: "#c41e3a",
      accentTo: "#8E24AA",
      borderColor: "border-rose-800/40",
      glowColor: "bg-rose-900/20",
    },
    {
      title: "Career & Profession",
      icon: "💼",
      text: career,
      scoreKey: "profession",
      accentFrom: "#303F9F",
      accentTo: "#1565C0",
      borderColor: "border-blue-800/40",
      glowColor: "bg-blue-900/20",
    },
    {
      title: "Travel & Exploration",
      icon: "✈️",
      text: travel,
      scoreKey: "travel",
      accentFrom: "#0284c7",
      accentTo: "#0369a1",
      borderColor: "border-sky-800/40",
      glowColor: "bg-sky-900/20",
    },
    {
      title: "Health & Vitality",
      icon: "💪",
      text: health,
      scoreKey: "health",
      accentFrom: "#16a34a",
      accentTo: "#15803d",
      borderColor: "border-emerald-800/40",
      glowColor: "bg-emerald-900/20",
    },
  ];

  return (
    <div className="w-full my-10">
      {/* Section header */}
      <div className="border-b border-slate-800/80 pb-3 mb-6">
        <h2 className="text-xl sm:text-2xl font-extralight text-white tracking-wide">
          Daily{" "}
          <span className="text-[#FFD700] font-normal">{signName}</span>{" "}
          Readings
        </h2>
        <p className="text-xs text-slate-400 font-light mt-0.5">
          Live astrological insights for today across all life areas.
        </p>
      </div>

      {/* 2 x 2 grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {categories.map((cat) => {
          const score = pct[cat.scoreKey] ?? 0;

          return (
            <div
              key={cat.title}
              className={`relative rounded-2xl glass-card p-5 border ${cat.borderColor} flex flex-col gap-3 overflow-hidden`}
            >
              {/* Subtle background glow */}
              <div
                className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl pointer-events-none ${cat.glowColor}`}
              />

              {/* Card header */}
              <div className="flex items-center justify-between relative">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl">{cat.icon}</span>
                  <h3 className="text-sm font-medium text-white tracking-wide">
                    {cat.title}
                  </h3>
                </div>

                {/* Score badge */}
                {score > 0 && (
                  <span
                    className="text-xs font-bold px-2.5 py-0.5 rounded-full"
                    style={{
                      background: `linear-gradient(to right, ${cat.accentFrom}33, ${cat.accentTo}33)`,
                      border: `1px solid ${cat.accentFrom}55`,
                      color: cat.accentFrom === "#FFD700" ? "#FFD700" : "#fff",
                    }}
                  >
                    {score}%
                  </span>
                )}
              </div>

              {/* Progress bar */}
              {score > 0 && (
                <div className="w-full h-1 rounded-full bg-slate-800/60 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${score}%`,
                      background: `linear-gradient(to right, ${cat.accentFrom}, ${cat.accentTo})`,
                    }}
                  />
                </div>
              )}

              {/* Prediction text */}
              <p className="text-xs text-slate-300 font-light leading-relaxed relative">
                {cat.text || "Loading today's reading…"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
