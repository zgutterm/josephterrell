"use client";

import { useEffect, useRef, useState } from "react";

// Set to "video" for the self-hosted clip, or "image" for the static photo
const HERO_MODE: "video" | "image" = "video";

export default function Hero() {
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || HERO_MODE !== "video") return;

    function markReady() {
      setVideoReady(true);
    }

    // In case the video is already playing (event fired before hydration)
    if (v.readyState >= 3) {
      markReady();
      return;
    }

    v.addEventListener("playing", markReady, { once: true });
    return () => v.removeEventListener("playing", markReady);
  }, []);

  const showImage = HERO_MODE === "image";
  const showLoader = HERO_MODE === "video" && !videoReady;

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-brand-dark">
      {/* Loading spinner while video buffers */}
      {showLoader && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-10 h-10 border-2 border-brand-cream/20 border-t-brand-amber rounded-full animate-spin" />
        </div>
      )}

      {/* Static image — only used in image mode */}
      {showImage && (
        <div
          className="absolute inset-0 bg-cover bg-[position:center_30%] bg-no-repeat"
          style={{ backgroundImage: "url(/images/JT_Bathtub_1.png)" }}
        />
      )}

      {/* Self-hosted video background */}
      {HERO_MODE === "video" && (
        <video
          ref={videoRef}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto min-w-full min-h-full object-cover transition-opacity duration-1000 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          src="/videos/hero-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      )}

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-brand-dark/30 pointer-events-none" />
    </section>
  );
}
