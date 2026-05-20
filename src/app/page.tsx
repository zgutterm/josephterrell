"use client";

import "./disco.css";
import { useState, useEffect } from "react";
import {
  ARTIST_NAME,
  SPOTIFY_EMBED_URI,
  socialLinks,
  streamingLinks,
  videos,
} from "@/lib/constants";

function GradientBar({ colors = "gold-coral" }: { colors?: string }) {
  return <div className={`disco-gradient-bar disco-gradient-${colors}`} />;
}

function PhotoStrip({ src, position = "center" }: { src: string; position?: string }) {
  return (
    <div className="disco-photo-strip">
      <img src={src} alt="" style={{ objectPosition: position }} />
      <div className="disco-photo-strip-fade" />
    </div>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeVideo, setActiveVideo] = useState(0);

  useEffect(() => setMounted(true), []);

  return (
    <div className="disco-page">
      {/* Hero — massive type */}
      <section className="disco-hero">
        <div className="disco-hero-bg">
          <img src="/images/print1.jpeg" alt="" />
        </div>
        <div className="disco-hero-overlay" />
        <div className="disco-hero-content">
          <h1 className="disco-title">
            {ARTIST_NAME.split(" ").map((word, i) => (
              <span key={i}>{word}</span>
            ))}
          </h1>
          <p className="disco-tagline">is a singer, songwriter, and guitarist from North Carolina</p>
          <nav className="disco-hero-nav">
            {["Music", "Shows", "Videos", "About"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
            ))}
          </nav>
          <div className="disco-hero-social">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <GradientBar colors="gold-coral" />

      {/* Music */}
      <section id="music" className="disco-section disco-music">
        <h2 className="disco-section-title">Music</h2>
        <div className="disco-music-layout">
          <div className="disco-stream-links">
            {streamingLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="disco-stream-pill"
              >
                {link.name}
              </a>
            ))}
          </div>
          {mounted && SPOTIFY_EMBED_URI !== "SPOTIFY_URI_HERE" && (
            <div className="disco-spotify">
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

      {/* Full-width photo break */}
      <div className="disco-photo-break">
        <img src="/images/IMG_9172.JPG" alt={ARTIST_NAME} />
        <div className="disco-photo-break-overlay" />
      </div>

      {/* Tour */}
      <section id="shows" className="disco-section disco-tour">
        <h2 className="disco-section-title">Shows</h2>
        <div className="disco-tour-grid">
          {[
            { date: "JUN 15", city: "Asheville, NC", venue: "The Orange Peel", avail: true },
            { date: "JUN 22", city: "Nashville, TN", venue: "The Ryman", avail: true },
            { date: "JUL 04", city: "Floyd, VA", venue: "Floyd Fest", avail: true },
            { date: "JUL 18", city: "Brooklyn, NY", venue: "Brooklyn Bowl", avail: true },
            { date: "AUG 01", city: "Denver, CO", venue: "Red Rocks", avail: false },
          ].map((show, i) => (
            <div key={i} className="disco-tour-card">
              <span className="disco-tour-date">{show.date}</span>
              <span className="disco-tour-venue">{show.venue}</span>
              <span className="disco-tour-city">{show.city}</span>
              <a
                href="#"
                className={`disco-tour-btn ${!show.avail ? "sold-out" : ""}`}
              >
                {show.avail ? "Get Tickets" : "Sold Out"}
              </a>
            </div>
          ))}
        </div>
      </section>

      <GradientBar colors="coral-violet" />

      {/* Videos */}
      <section id="videos" className="disco-section disco-videos">
        <h2 className="disco-section-title">Videos</h2>
        <div className="disco-video-player">
          {mounted ? (
            <iframe
              src={`https://www.youtube.com/embed/${videos[activeVideo].id}`}
              title={`Video ${activeVideo + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="disco-video-placeholder" />
          )}
        </div>
        <div className="disco-video-thumbs">
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

      {/* About */}
      <section id="about" className="disco-section disco-about">
        <div className="disco-split">
          <div className="disco-split-img">
            <img src="/images/bbjt-32.JPEG" alt={ARTIST_NAME} />
          </div>
          <div className="disco-split-text">
            <h2>About</h2>
            <p>
              Joseph Terrell spent 13 years singing, writing songs, and playing
              guitar with Americana quartet Mipso. His debut solo album
              &ldquo;Good For Nothing Howl&rdquo; features members of Bon Iver,
              Hiss Golden Messenger, and Bonny Light Horseman.
            </p>
            <p>
              Joseph&rsquo;s new singles are stripped-down folk gems showcasing
              his prowess on the acoustic guitar and much-admired lyrics, which
              Indy Week called &ldquo;dark and mature...awash in mystical sound
              and symbolism.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="disco-section disco-newsletter">
        <h2 className="disco-section-title">Mailing List</h2>
        <p>Be the first to know about new music, shows, and more.</p>
        <form onSubmit={(e) => e.preventDefault()} className="disco-mail-form">
          <input type="email" placeholder="Email address" />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      <GradientBar colors="violet-blue" />

      {/* Footer */}
      <footer className="disco-footer">
        <div className="disco-footer-social">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                <Icon />
              </a>
            );
          })}
        </div>
        <a
          href="https://www.sleepycatrec.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="disco-label"
        >
          Sleepy Cat Records
        </a>
        <p>&copy; 2026 {ARTIST_NAME}. All rights reserved.</p>
        <p className="disco-alt-links">
          <a href="/original">Original</a> &middot; <a href="/retro">Retro</a> &middot;{" "}
          <a href="/retro2">Estate</a> &middot; <a href="/retro3">Folk</a>
        </p>
      </footer>
    </div>
  );
}
