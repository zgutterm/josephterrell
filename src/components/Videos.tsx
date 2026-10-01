"use client";

import { useState } from "react";
import { videos } from "@/lib/constants";

export default function Videos() {
  const [active, setActive] = useState(0);

  return (
    <section id="videos" className="py-24 px-6 bg-brand-surface/50 scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-4xl sm:text-5xl text-brand-offwhite mb-16 text-center">
          Videos
        </h2>

        {/* Featured video */}
        <div className="w-full aspect-video bg-brand-surface rounded-xl">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videos[active].id}`}
            title={videos[active].title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="rounded-xl border-0 w-full h-full"
          />
        </div>
        <p className="text-center text-brand-offwhite mt-4 mb-6" aria-live="polite">
          {videos[active].title}
        </p>

        {/* Thumbnail nav */}
        <div className="flex flex-wrap justify-center gap-3">
          {videos.map((video, i) => (
            <button
              key={video.id}
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              aria-label={`Play ${video.title}`}
              className={`w-28 sm:w-40 aspect-video rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
                i === active
                  ? "border-brand-teal opacity-100"
                  : "border-transparent opacity-60 hover:opacity-90"
              }`}
            >
              <img
                src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                alt=""
                width={320}
                height={180}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
