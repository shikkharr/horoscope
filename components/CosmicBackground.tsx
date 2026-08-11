"use client";

import { useEffect, useState } from "react";

interface Star {
  id: number;
  top: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

export default function CosmicBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Client-only: avoids SSR hydration mismatch
    setStars(
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        top: Math.floor(Math.random() * 100),
        left: Math.floor(Math.random() * 100),
        size: Number((Math.random() * 1.8 + 0.6).toFixed(2)),
        delay: Number((Math.random() * 4).toFixed(2)),
        duration: Number((Math.random() * 3 + 2.5).toFixed(2)),
        opacity: Number((Math.random() * 0.6 + 0.2).toFixed(2)),
      }))
    );
  }, []);

  return (
    <>
      {/* Deep space radial gradient */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle at 50% 0%, #1f1442 0%, #0a071b 72%)",
        }}
      />

      {/* Ambient aura blobs */}
      <div className="fixed -top-40 -left-40 w-96 h-96 rounded-full bg-[#303F9F]/20 blur-3xl pointer-events-none animate-aura" />
      <div
        className="fixed top-1/3 -right-40 w-96 h-96 rounded-full bg-[#8E24AA]/20 blur-3xl pointer-events-none animate-aura"
        style={{ animationDelay: "4s" }}
      />
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#303F9F]/10 blur-3xl pointer-events-none animate-aura" style={{ animationDelay: "2s" }} />

      {/* Starfield */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              ["--star-opacity" as string]: star.opacity,
              ["--star-delay" as string]: `${star.delay}s`,
              ["--star-duration" as string]: `${star.duration}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}
