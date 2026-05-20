"use client";

import { useEffect, useState, useRef } from "react";
import { videos } from "@/lib/constants";

export default function Videos() {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  function scrollTo(index: number) {
    setActive(index);
    scrollRef.current?.children[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <section id="videos" className="py-24 px-6 bg-brand-surface/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-4xl sm:text-5xl text-brand-offwhite mb-16 text-center">
          Videos
        </h2>

        {/* Featured video */}
        <div className="w-full aspect-video mb-6">
          {mounted ? (
            <iframe
              src={`https://www.youtube.com/embed/${videos[active].id}`}
              width="100%"
              height="100%"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl border-0 w-full h-full"
            />
          ) : (
            <div className="w-full h-full bg-brand-surface rounded-xl" />
          )}
        </div>

        {/* Thumbnail nav */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide"
        >
          {videos.map((video, i) => (
            <button
              key={video.id}
              onClick={() => scrollTo(i)}
              className={`flex-shrink-0 w-40 sm:w-48 aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                i === active
                  ? "border-brand-teal opacity-100"
                  : "border-transparent opacity-50 hover:opacity-80"
              }`}
            >
              <img
                src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                alt={`Video ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
