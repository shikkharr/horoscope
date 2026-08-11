// data/zodiac.ts

export type ZodiacElement = "🔥" | "🌍" | "💨" | "🌊";

export type ZodiacSign = {
  slug: string;        // e.g. "aries"
  code: string;        // 3-letter code e.g. "ARI"
  name: string;        // English name e.g. "Aries"
  rashiName: string;   // Sanskrit/Hindi name e.g. "Mesh"
  dateRange: string;   // e.g. "Mar 21 – Apr 19"
  symbol: string;      // Zodiac symbol e.g. "♈"
  element: ZodiacElement;
  elementName: string; // "Fire" | "Earth" | "Air" | "Water"
  rulingPlanet: string;
  mood: {
    emoji: string;
    label: string;
  };
  summary: {
    general: string;
  };
};

export const zodiacSigns: ZodiacSign[] = [
  {
    slug: "aries",
    code: "ARI",
    name: "Aries",
    rashiName: "Mesh",
    dateRange: "Mar 21 – Apr 19",
    symbol: "♈",
    element: "🔥",
    elementName: "Fire",
    rulingPlanet: "Mars",
    mood: { emoji: "🔥", label: "Dynamic & Bold" },
    summary: {
      general: "Mars fuels your ascendant today, unlocking high vitality and spontaneous breakthrough energy.",
    },
  },
  {
    slug: "taurus",
    code: "TAU",
    name: "Taurus",
    rashiName: "Vrishabh",
    dateRange: "Apr 20 – May 20",
    symbol: "♉",
    element: "🌍",
    elementName: "Earth",
    rulingPlanet: "Venus",
    mood: { emoji: "🌿", label: "Serene & Grounded" },
    summary: {
      general: "Venus brings soothing aesthetic balance and steadfast grounding today. Prioritize comfort and calm sensory appreciation.",
    },
  },
  {
    slug: "gemini",
    code: "GEM",
    name: "Gemini",
    rashiName: "Mithun",
    dateRange: "May 21 – Jun 20",
    symbol: "♊",
    element: "💨",
    elementName: "Air",
    rulingPlanet: "Mercury",
    mood: { emoji: "💡", label: "Curious & Inspired" },
    summary: {
      general: "Mercury stimulates rapid mental synthesis and sparkling social connections. Write down epiphanies as they strike.",
    },
  },
  {
    slug: "cancer",
    code: "CAN",
    name: "Cancer",
    rashiName: "Kark",
    dateRange: "Jun 21 – Jul 22",
    symbol: "♋",
    element: "🌊",
    elementName: "Water",
    rulingPlanet: "Moon",
    mood: { emoji: "🌙", label: "Intuitive & Warm" },
    summary: {
      general: "The Moon enhances your intuitive empathy today. Trust your gut feelings regarding family matters and sanctuary upgrades.",
    },
  },
  {
    slug: "leo",
    code: "LEO",
    name: "Leo",
    rashiName: "Simha",
    dateRange: "Jul 23 – Aug 22",
    symbol: "♌",
    element: "🔥",
    elementName: "Fire",
    rulingPlanet: "Sun",
    mood: { emoji: "✨", label: "Radiant & Regal" },
    summary: {
      general: "The Sun amplifies your magnetic charm and creative confidence. Step into the spotlight with generous poise and warm authority.",
    },
  },
  {
    slug: "virgo",
    code: "VIR",
    name: "Virgo",
    rashiName: "Kanya",
    dateRange: "Aug 23 – Sep 22",
    symbol: "♍",
    element: "🌍",
    elementName: "Earth",
    rulingPlanet: "Mercury",
    mood: { emoji: "🎯", label: "Focused & Precise" },
    summary: {
      general: "Mercury bestows analytical precision today. Organizing routines and streamlining operational workflows brings quiet satisfaction.",
    },
  },
  {
    slug: "libra",
    code: "LIB",
    name: "Libra",
    rashiName: "Tula",
    dateRange: "Sep 23 – Oct 22",
    symbol: "♎",
    element: "💨",
    elementName: "Air",
    rulingPlanet: "Venus",
    mood: { emoji: "⚖️", label: "Balanced & Graceful" },
    summary: {
      general: "Venus enhances diplomatic charm and artistic equilibrium. Restoring balance to your surroundings brings profound serenity.",
    },
  },
  {
    slug: "scorpio",
    code: "SCO",
    name: "Scorpio",
    rashiName: "Vrishchik",
    dateRange: "Oct 23 – Nov 21",
    symbol: "♏",
    element: "🌊",
    elementName: "Water",
    rulingPlanet: "Pluto & Mars",
    mood: { emoji: "👁️", label: "Deep & Transformative" },
    summary: {
      general: "Pluto and Mars grant penetrating intuitive depth. Shed old limiting patterns and embrace powerful internal rebirth.",
    },
  },
  {
    slug: "sagittarius",
    code: "SAG",
    name: "Sagittarius",
    rashiName: "Dhanu",
    dateRange: "Nov 22 – Dec 21",
    symbol: "♐",
    element: "🔥",
    elementName: "Fire",
    rulingPlanet: "Jupiter",
    mood: { emoji: "🏹", label: "Optimistic & Adventurous" },
    summary: {
      general: "Jupiter expands your horizon with optimism and serendipity. Philosophical insights and new adventures call out to you.",
    },
  },
  {
    slug: "capricorn",
    code: "CAP",
    name: "Capricorn",
    rashiName: "Makar",
    dateRange: "Dec 22 – Jan 19",
    symbol: "♑",
    element: "🌍",
    elementName: "Earth",
    rulingPlanet: "Saturn",
    mood: { emoji: "🏔️", label: "Steadfast & Masterful" },
    summary: {
      general: "Saturn fortifies your executive discipline and patient endurance. Foundations built today endure long into the future.",
    },
  },
  {
    slug: "aquarius",
    code: "AQU",
    name: "Aquarius",
    rashiName: "Kumbh",
    dateRange: "Jan 20 – Feb 18",
    symbol: "♒",
    element: "💨",
    elementName: "Air",
    rulingPlanet: "Uranus",
    mood: { emoji: "⚡", label: "Visionary & Inventive" },
    summary: {
      general: "Uranus sparks original epiphanies and humanitarian insights. Breakthrough ideas break through traditional boundaries today.",
    },
  },
  {
    slug: "pisces",
    code: "PIS",
    name: "Pisces",
    rashiName: "Meen",
    dateRange: "Feb 19 – Mar 20",
    symbol: "♓",
    element: "🌊",
    elementName: "Water",
    rulingPlanet: "Neptune",
    mood: { emoji: "🎨", label: "Dreamy & Artistic" },
    summary: {
      general: "Neptune enhances artistic intuition and mystical resonance. Quiet meditation and creative flow unlock deep cosmic wisdom.",
    },
  },
];

export function getSignBySlug(slug?: string): ZodiacSign | undefined {
  if (!slug) return undefined;
  const cleanSlug = slug.toLowerCase().replace(/^daily-/, "").replace(/-horoscope$/, "");
  return zodiacSigns.find((s) => s.slug.toLowerCase() === cleanSlug || s.slug.toLowerCase() === slug.toLowerCase());
}