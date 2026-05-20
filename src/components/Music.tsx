"use client";

import { useEffect, useState } from "react";
import { streamingLinks, SPOTIFY_EMBED_URI } from "@/lib/constants";

export default function Music() {
  const hasSpotify = (SPOTIFY_EMBED_URI as string) !== "SPOTIFY_URI_HERE";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="music" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-4xl sm:text-5xl text-brand-offwhite mb-16 text-center">
          Music
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Streaming buttons — stacked, filled */}
          <div className="flex flex-col gap-4 max-w-sm mx-auto md:mx-0 w-full">
            {streamingLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-brand-surface border border-brand-amber/25 rounded-full text-center text-sm uppercase tracking-widest text-brand-cream hover:bg-brand-teal hover:text-brand-dark hover:border-brand-teal transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Spotify embed */}
          <div className="w-full">
            {hasSpotify && mounted ? (
              <iframe
                src={`https://open.spotify.com/embed/${SPOTIFY_EMBED_URI}?utm_source=generator&theme=0`}
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-xl border-0"
              />
            ) : (
              <div className="w-full h-[352px] border border-dashed border-brand-amber/30 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <p className="text-brand-cream/50 text-sm uppercase tracking-widest mb-2">
                    {hasSpotify ? "Loading player..." : "Spotify player"}
                  </p>
                  {!hasSpotify && (
                    <p className="text-brand-cream/30 text-xs">
                      Add a Spotify URI in constants.ts
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
