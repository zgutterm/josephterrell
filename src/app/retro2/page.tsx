"use client";

import "./film.css";
import { useState, useEffect } from "react";
import {
  ARTIST_NAME,
  BASE_PATH,
  SPOTIFY_EMBED_URI,
  socialLinks,
  streamingLinks,
  videos,
} from "@/lib/constants";

export default function EstatePage() {
  const [mounted, setMounted] = useState(false);
  const [activeVideo, setActiveVideo] = useState(0);

  useEffect(() => setMounted(true), []);

  return (
    <div className="estate-page">
      {/* Accent stripe */}
      <div className="estate-stripe" />

      {/* Nav bar */}
      <nav className="estate-nav">
        <div className="estate-nav-inner">
          {["Home", "Music", "Tour", "Videos", "About"].map((item) => (
            <a
              key={item}
              href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
              className={item === "Home" ? "active" : ""}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <header className="estate-hero">
        <div className="estate-hero-layout">
          <div className="estate-hero-photo">
            <img src={`${BASE_PATH}/images/print1.jpeg`} alt={ARTIST_NAME} />
          </div>
          <div className="estate-hero-text">
            <h1>{ARTIST_NAME}</h1>
            <p className="estate-tagline">Singer &middot; Songwriter &middot; Guitarist</p>
            <p className="estate-bio-intro">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="estate-social">
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
        </div>
      </header>

      <main className="estate-main">
        {/* Music */}
        <section id="music" className="estate-section">
          <h2>Music</h2>
          <div className="estate-music-layout">
            <div>
              <h3>Listen Now</h3>
              <ul className="estate-link-list">
                {streamingLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.name} &rarr;
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {mounted && (SPOTIFY_EMBED_URI as string) !== "SPOTIFY_URI_HERE" && (
              <div className="estate-spotify">
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

        {/* Tour */}
        <section id="tour" className="estate-section">
          <h2>Tour Dates</h2>
          <table className="estate-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Venue</th>
                <th>City</th>
                <th>Tickets</th>
              </tr>
            </thead>
            <tbody>
              {[
                { date: "June 15, 2026", city: "Asheville, NC", venue: "The Orange Peel", avail: true },
                { date: "June 22, 2026", city: "Nashville, TN", venue: "The Ryman", avail: true },
                { date: "July 4, 2026", city: "Floyd, VA", venue: "Floyd Fest", avail: true },
                { date: "July 18, 2026", city: "Brooklyn, NY", venue: "Brooklyn Bowl", avail: true },
                { date: "August 1, 2026", city: "Denver, CO", venue: "Red Rocks", avail: false },
              ].map((show, i) => (
                <tr key={i}>
                  <td>{show.date}</td>
                  <td><strong>{show.venue}</strong></td>
                  <td>{show.city}</td>
                  <td>
                    <a href="#" className={`estate-ticket-link ${!show.avail ? "sold-out" : ""}`}>
                      {show.avail ? "Buy Tickets" : "Sold Out"}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Videos */}
        <section id="videos" className="estate-section">
          <h2>Videos</h2>
          <div className="estate-video-player">
            {mounted ? (
              <iframe
                src={`https://www.youtube.com/embed/${videos[activeVideo].id}`}
                title={`Video ${activeVideo + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="estate-video-placeholder" />
            )}
          </div>
          <div className="estate-video-nav">
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
        <section id="about" className="estate-section">
          <h2>About</h2>
          <div className="estate-about-layout">
            <div className="estate-about-photo">
              <img src={`${BASE_PATH}/images/print2.jpeg`} alt={`${ARTIST_NAME}`} />
            </div>
            <div className="estate-about-text">
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

        {/* Newsletter */}
        <section className="estate-section estate-newsletter">
          <h2>Mailing List</h2>
          <p>Subscribe to receive updates on new music and tour dates.</p>
          <form onSubmit={(e) => e.preventDefault()} className="estate-mail-form">
            <input type="email" placeholder="Email address" />
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="estate-footer">
        <div className="estate-footer-inner">
          <div className="estate-footer-nav">
            {["Home", "Music", "Tour", "Videos", "About"].map((item) => (
              <a
                key={item}
                href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="estate-footer-meta">
            <a
              href="https://www.sleepycatrec.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="estate-label"
            >
              <img src={`${BASE_PATH}/images/sleepy-cat-logo.webp`} alt="Sleepy Cat Records" />
            </a>
            <p>&copy; 2026 {ARTIST_NAME}. All rights reserved.</p>
            <p className="estate-alt-links">
              <a href={`${BASE_PATH}/`}>Modern version</a> | <a href={`${BASE_PATH}/retro`}>Retro version</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
