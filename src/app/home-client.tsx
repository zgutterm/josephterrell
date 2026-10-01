"use client";

import { useEffect, useState } from "react";
import { ARTIST_NAME, videos } from "@/lib/constants";

export function StickyNav({ items }: { items: string[] }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.05 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`disco-sticky${visible ? " visible" : ""}`}
      inert={!visible}
    >
      <a href="#top" className="disco-sticky-name">{ARTIST_NAME}</a>
      <nav aria-label="Sections">
        {items.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
        ))}
      </nav>
    </header>
  );
}

export function Videos() {
  const [activeVideo, setActiveVideo] = useState(0);
  const active = videos[activeVideo];

  return (
    <>
      <div className="disco-video-player">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${active.id}`}
          title={active.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <p className="disco-video-title" aria-live="polite">{active.title}</p>
      <div className="disco-video-thumbs">
        {videos.map((v, i) => (
          <button
            key={v.id}
            onClick={() => setActiveVideo(i)}
            className={i === activeVideo ? "active" : ""}
            aria-pressed={i === activeVideo}
            aria-label={`Play ${v.title}`}
          >
            <img
              src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
              alt=""
              width={320}
              height={180}
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </>
  );
}
