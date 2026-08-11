import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import CosmicBackground from "@/components/CosmicBackground";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Horoscope",
  description: "Explore daily horoscope readings, Rashi alignment, and cosmic energy for all 12 zodiac signs in a deep night sky experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col bg-[#0a071b] text-slate-100 font-sans selection:bg-[#8E24AA] selection:text-white" suppressHydrationWarning>
        {/* background — stars, glow, aura blobs */}
        <CosmicBackground />
        {/* Page content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}


