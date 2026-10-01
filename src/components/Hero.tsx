"use client";

import { useEffect, useRef, useState } from "react";
import { ARTIST_NAME, BASE_PATH, socialLinks } from "@/lib/constants";

export default function Hero() {
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Respect reduced-motion: leave the still image in place
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      v.pause();
      return;
    }

    const markReady = () => setVideoReady(true);
    v.addEventListener("playing", markReady, { once: true });
    // Autoplay can be blocked (e.g. Low Power Mode); the still stays visible if so
    v.play().catch(() => {});
    return () => v.removeEventListener("playing", markReady);
  }, []);

  return (
    <section className="relative w-full h-screen h-[100svh] min-h-[560px] overflow-hidden bg-brand-dark">
      {/* Still frame — shown until the video is playing, and whenever it can't */}
      <img
        src={`${BASE_PATH}/images/hero-video-poster.jpg`}
        alt=""
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
        src={`${BASE_PATH}/videos/hero-bg.mp4`}
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/25 to-brand-dark/30 pointer-events-none" />

      <div className="absolute inset-x-0 bottom-0 px-6 pb-[calc(3rem+env(safe-area-inset-bottom))] md:pb-16">
        <div className="max-w-5xl mx-auto text-center md:text-left">
          {/* On desktop the large name lives in the nav */}
          <h1 className="font-display font-semibold text-5xl text-brand-offwhite mb-3 md:sr-only">
            {ARTIST_NAME}
          </h1>
          <p className="font-[family-name:var(--font-caveat)] text-2xl md:text-4xl tracking-wide text-brand-offwhite text-balance">
            Singer, songwriter, and guitarist from North Carolina
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a
              href="#music"
              className="px-8 py-3 bg-brand-amber text-brand-dark font-medium rounded-full hover:bg-brand-amber-light transition-colors uppercase text-sm tracking-widest"
            >
              Listen
            </a>
            <div className="flex items-center">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="w-11 h-11 inline-flex items-center justify-center text-xl text-brand-offwhite/80 hover:text-brand-amber transition-colors"
                  >
                    <Icon aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
