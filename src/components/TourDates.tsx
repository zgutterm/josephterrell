"use client";

import Script from "next/script";
import { SEATED_ARTIST_ID } from "@/lib/constants";

export default function TourDates() {
  return (
    <section id="tour" className="py-24 px-6 bg-brand-surface/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-4xl sm:text-5xl text-brand-offwhite mb-4 text-center">
          Tour Dates
        </h2>
        <p className="text-brand-cream/60 mb-12 text-center max-w-lg mx-auto">
          Catch a show near you
        </p>

        {SEATED_ARTIST_ID === "ARTIST_ID_HERE" ? (
          <div className="text-center py-16 border border-dashed border-brand-amber/25 rounded-lg">
            <p className="text-brand-cream/50 text-sm uppercase tracking-widest mb-2">
              Tour dates will appear here
            </p>
            <p className="text-brand-cream/30 text-xs">
              Connect your Seated artist ID to display upcoming shows
            </p>
          </div>
        ) : (
          <>
            <div
              id="seated-55f07390"
              data-artist-id={SEATED_ARTIST_ID}
              data-css-version="3"
            />
            <Script
              src="https://widget.seated.com/app.js"
              strategy="lazyOnload"
            />
          </>
        )}
      </div>
    </section>
  );
}
