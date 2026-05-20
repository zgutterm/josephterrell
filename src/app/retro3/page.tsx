"use client";

import "./folk.css";
import { useState, useEffect } from "react";
import {
  ARTIST_NAME,
  SPOTIFY_EMBED_URI,
  socialLinks,
  streamingLinks,
  videos,
} from "@/lib/constants";

function SunDivider() {
  return (
    <div className="folk-divider">
      <svg viewBox="0 0 120 40" className="folk-sun">
        <circle cx="60" cy="28" r="10" fill="currentColor" />
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 - 90) * (Math.PI / 180);
          const x1 = 60 + Math.cos(angle) * 14;
          const y1 = 28 + Math.sin(angle) * 14;
          const x2 = 60 + Math.cos(angle) * (i % 2 === 0 ? 22 : 18);
          const y2 = 28 + Math.sin(angle) * (i % 2 === 0 ? 22 : 18);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          );
        })}
      </svg>
    </div>
  );
}

function WaveDivider() {
  return (
    <div className="folk-divider">
      <svg viewBox="0 0 300 16" className="folk-wave" preserveAspectRatio="none">
        <path
          d="M0 8 Q15 0 30 8 T60 8 T90 8 T120 8 T150 8 T180 8 T210 8 T240 8 T270 8 T300 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

export default function FolkPage() {
  const [mounted, setMounted] = useState(false);
  const [activeVideo, setActiveVideo] = useState(0);

  useEffect(() => setMounted(true), []);

  return (
    <div className="folk-page">
      {/* Paper texture overlay */}
      <div className="folk-texture" />

      {/* Header / poster-style hero */}
      <header className="folk-hero">
        <div className="folk-poster">
          <div className="folk-poster-border">
            <p className="folk-presents">&#10045; Proudly Presents &#10045;</p>
            <h1 className="folk-name">{ARTIST_NAME}</h1>
            <p className="folk-tagline">Singer &#8226; Songwriter &#8226; Guitarist</p>

            <div className="folk-hero-img-wrap">
              <img src="/images/print1.jpeg" alt={ARTIST_NAME} />
            </div>

            <nav className="folk-nav">
              {["Music", "Tour", "Videos", "About"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`}>
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="folk-main">
        <WaveDivider />

        {/* Music */}
        <section id="music" className="folk-section">
          <h2>&#9835; Music &#9835;</h2>
          <div className="folk-music-layout">
            <div className="folk-listen">
              <p className="folk-subhead">Available on</p>
              {streamingLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="folk-text-link"
                >
                  &#10147; {link.name}
                </a>
              ))}
            </div>
            {mounted && SPOTIFY_EMBED_URI !== "SPOTIFY_URI_HERE" && (
              <div className="folk-spotify">
                <iframe
                  src={`https://open.spotify.com/embed/${SPOTIFY_EMBED_URI}?utm_source=generator&theme=0`}
                  width="100%"
                  height="352"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
            )}
          </div>
        </section>

        <WaveDivider />

        {/* Tour */}
        <section id="tour" className="folk-section">
          <h2>&#10038; On Tour &#10038;</h2>
          <div className="folk-handbill">
            {[
              { date: "June 15", city: "Asheville, NC", venue: "The Orange Peel", avail: true },
              { date: "June 22", city: "Nashville, TN", venue: "The Ryman", avail: true },
              { date: "July 4", city: "Floyd, VA", venue: "Floyd Fest", avail: true },
              { date: "July 18", city: "Brooklyn, NY", venue: "Brooklyn Bowl", avail: true },
              { date: "August 1", city: "Denver, CO", venue: "Red Rocks", avail: false },
            ].map((show, i) => (
              <div key={i} className="folk-show">
                <span className="folk-show-date">{show.date}</span>
                <span className="folk-show-details">
                  {show.venue} &mdash; <em>{show.city}</em>
                </span>
                <span className={`folk-show-status ${!show.avail ? "sold-out" : ""}`}>
                  {show.avail ? "Tickets" : "Sold Out"}
                </span>
              </div>
            ))}
          </div>
        </section>

        <WaveDivider />

        {/* Videos */}
        <section id="videos" className="folk-section">
          <h2>&#9654; Videos</h2>
          <div className="folk-video-player">
            {mounted ? (
              <iframe
                src={`https://www.youtube.com/embed/${videos[activeVideo].id}`}
                title={`Video ${activeVideo + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="folk-video-placeholder" />
            )}
          </div>
          <div className="folk-video-thumbs">
            {videos.map((v, i) => (
              <button
                key={v.id}
                onClick={() => setActiveVideo(i)}
                className={i === activeVideo ? "active" : ""}
              >
                <img
                  src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                  alt={`Video ${i + 1}`}
                />
              </button>
            ))}
          </div>
        </section>

        <WaveDivider />

        {/* About */}
        <section id="about" className="folk-section">
          <h2>&#9672; About</h2>
          <div className="folk-about-layout">
            <div className="folk-about-photo">
              <img src="/images/print2.jpeg" alt={ARTIST_NAME} />
            </div>
            <div className="folk-about-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>
        </section>

        <WaveDivider />

        {/* Mailing List */}
        <section className="folk-section folk-mailing">
          <h2>&#9993; Stay Connected</h2>
          <p>Join the mailing list for news, tour dates & new music.</p>
          <form onSubmit={(e) => e.preventDefault()} className="folk-mail-form">
            <input type="email" placeholder="your@email.com" />
            <button type="submit">Join</button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="folk-footer">
        <div className="folk-footer-social">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
            </a>
          ))}
        </div>
        <a
          href="https://www.sleepycatrec.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="folk-label"
        >
          Sleepy Cat Records
        </a>
        <p>&copy; 2026 {ARTIST_NAME}</p>
        <p className="folk-alt-links">
          <a href="/">Modern</a> &middot; <a href="/retro">Retro</a> &middot; <a href="/retro2">Estate</a>
        </p>
      </footer>
    </div>
  );
}
