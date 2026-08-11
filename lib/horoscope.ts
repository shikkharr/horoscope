// lib/horoscope.ts

export type HoroscopeData = {
  prediction: string;   // personal / general
  love: string;         // emotions field
  career: string;       // profession field
  health: string;       // health field
  travel: string;       // travel field
  luckyNumber: string;
  luckyColor: string;
  luckyAlphabets: string;
  luckyColorCodes: string[]; // hex codes from special.lucky_color_codes
  mood: string;
  cosmicTip?: string;
  tipsForSingles?: string;
  tipsForCouples?: string;
  percentages: {
    personal: number;
    health: number;
    profession: number;
    emotions: number;
    travel: number;
  };
};

export async function fetchDailyHoroscope(signName: string): Promise<HoroscopeData> {
  const today = new Date();
  const apiUrl = process.env.DIVINE_API_URL || "https://astroapi-5.divineapi.com/api/v5/daily-horoscope";
  const apiToken = process.env.DIVINE_API_TOKEN || "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2RpdmluZWFwaS5jb20vc2lnbnVwIiwiaWF0IjoxNzg2Mjk4NDUyLCJuYmYiOjE3ODYyOTg0NTIsImp0aSI6ImpxYWNXeDZwTE1pYTV1dkEiLCJzdWIiOiI1NjE4IiwicHJ2IjoiZTZlNjRiYjBiNjEyNmQ3M2M2Yjk3YWZjM2I0NjRkOTg1ZjQ2YzlkNyJ9.ANMhEwfbGnDGgLo1-VkpFd9KQI-RSD_MmbasxRTPv0g";
  const apiKey = process.env.DIVINE_API_KEY || "505108f9659f620040c9a96ee973f6d3";

  // Ensure sign name has first letter capital
  const formattedSign = signName.charAt(0).toUpperCase() + signName.slice(1).toLowerCase();

  const form = new FormData();
  form.append("api_key", apiKey);
  form.append("sign", formattedSign);
  form.append("h_day", "today");
  form.append("day", String(today.getDate()));
  form.append("month", String(today.getMonth() + 1));
  form.append("year", String(today.getFullYear()));
  form.append("tzone", "5.5");
  form.append("lan", "en");

  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
      body: form,
      next: { revalidate: 3600 }, // ISR caching — revalidate once per hour
    });

    if (!res.ok) {
      throw new Error(`Divine API error: status ${res.status}`);
    }

    const json = await res.json();

    const pred = json?.data?.prediction ?? {};

    //  General / Personal prediction
    const predictionText: string = pred.personal || pred.emotions || "";

    //  Category predictions
    const love: string   = pred.emotions   || "";
    const career: string = pred.profession || "";
    const health: string = pred.health     || "";
    const travel: string = pred.travel     || "";

    // ── Luck array  e.g. "Lucky Numbers of the day : 9, 18, 27"
    const luckArray: string[] = Array.isArray(pred.luck) ? pred.luck : [];

    const luckyNumberEntry = luckArray.find((s: string) =>
      s.toLowerCase().includes("lucky numbers")
    );
    const luckyNumber =
      luckyNumberEntry?.split(":")?.[1]?.trim().split(",")?.[0]?.trim() || "";

    const luckyColorEntry = luckArray.find((s: string) =>
      s.toLowerCase().includes("colors of the day")
    );
    const luckyColor = luckyColorEntry?.split(":")?.[1]?.trim() || "";

    // Lucky alphabets  e.g. "Lucky Alphabets you will be in sync with : A, R"
    const luckyAlphabetsEntry = luckArray.find((s: string) =>
      s.toLowerCase().includes("lucky alphabets")
    );
    const luckyAlphabets = luckyAlphabetsEntry?.split(":")?.[1]?.trim() || "";

    // Lucky color hex codes from special block
    const luckyColorCodes: string[] = Array.isArray(json?.data?.special?.lucky_color_codes)
      ? json.data.special.lucky_color_codes
      : [];

    // Cosmic tip, Tips for Singles, Tips for Couples
    const cosmicTipEntry = luckArray.find((s: string) =>
      s.toLowerCase().includes("cosmic tip")
    );
    const cosmicTip = cosmicTipEntry?.split(":")?.[1]?.trim() || "";

    const singlesEntry = luckArray.find((s: string) =>
      s.toLowerCase().includes("tips for singles")
    );
    const tipsForSingles = singlesEntry?.split(":")?.[1]?.trim() || "";

    const couplesEntry = luckArray.find((s: string) =>
      s.toLowerCase().includes("tips for couples")
    );
    const tipsForCouples = couplesEntry?.split(":")?.[1]?.trim() || "";

    const mood = cosmicTip;

    // Percentages
    const rawPct = json?.data?.special?.horoscope_percentage ?? {};
    const percentages = {
      personal:   Number(rawPct.personal)   || 0,
      health:     Number(rawPct.health)     || 0,
      profession: Number(rawPct.profession) || 0,
      emotions:   Number(rawPct.emotions)   || 0,
      travel:     Number(rawPct.travel)     || 0,
    };

    return {
      prediction: predictionText,
      love,
      career,
      health,
      travel,
      luckyNumber,
      luckyColor,
      luckyAlphabets,
      luckyColorCodes,
      mood,
      cosmicTip,
      tipsForSingles,
      tipsForCouples,
      percentages,
    };
  } catch (error) {
    console.error(`fetchDailyHoroscope error for ${formattedSign}:`, error);
    throw error;
  }
}