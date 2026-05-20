"use client";

import "./retro.css";
import { useState, useEffect, useRef } from "react";
import {
  ARTIST_NAME,
  SPOTIFY_EMBED_URI,
  socialLinks,
  streamingLinks,
  videos,
} from "@/lib/constants";

const VISITOR_COUNT = 4_832;
const STAR_COUNT = 120;

function Stars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.8 + 0.4,
      speed: Math.random() * 1.2 + 0.6,
      phase: Math.random() * Math.PI * 2,
      minAlpha: Math.random() * 0.15,
      maxAlpha: Math.random() * 0.4 + 0.6,
    }));

    function draw(t: number) {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      for (const s of stars) {
        const wave = (Math.sin(t * 0.002 * s.speed + s.phase) + 1) / 2;
        const alpha = s.minAlpha + (s.maxAlpha - s.minAlpha) * wave;
        ctx!.fillStyle = `rgba(255,204,0,${alpha})`;
        ctx!.beginPath();
        ctx!.arc(s.x * canvas!.width, s.y * canvas!.height, s.r, 0, Math.PI * 2);
        ctx!.fill();
      }
      animId = requestAnimationFrame(draw);
    }
    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="retro-stars-canvas" />;
}

function Divider() {
  return (
    <div className="retro-divider" role="separator">
      <span>~ * ~</span>
    </div>
  );
}

function Marquee({ children }: { children: React.ReactNode }) {
  return (
    <div className="retro-marquee-wrap">
      <div className="retro-marquee">{children}</div>
    </div>
  );
}

export default function RetroPage() {
  const [mounted, setMounted] = useState(false);
  const [activeVideo, setActiveVideo] = useState(0);
  const [email, setEmail] = useState("");
  const [guestbookName, setGuestbookName] = useState("");
  const [guestbookMsg, setGuestbookMsg] = useState("");
  const [guestbookEntries, setGuestbookEntries] = useState([
    {
      name: "MusicFan92",
      date: "05/10/2026",
      msg: "Great show in Asheville last night! You rocked!!",
    },
    {
      name: "bluegrass_betty",
      date: "05/08/2026",
      msg: "Love the new tunes. Can't wait for the album!",
    },
    {
      name: "PickinSteve",
      date: "05/01/2026",
      msg: "Visited your site! Very cool. See you on tour!",
    },
  ]);

  useEffect(() => setMounted(true), []);

  function handleGuestbook(e: React.FormEvent) {
    e.preventDefault();
    if (!guestbookName.trim() || !guestbookMsg.trim()) return;
    setGuestbookEntries((prev) => [
      { name: guestbookName.trim(), date: "05/14/2026", msg: guestbookMsg.trim() },
      ...prev,
    ]);
    setGuestbookName("");
    setGuestbookMsg("");
  }

  return (
    <div className="retro-page">
      {/* Animated starfield */}
      <Stars />

      <div className="retro-container">
        {/* Header */}
        <header className="retro-header">
          <div className="retro-header-border">
            <h1>{ARTIST_NAME}</h1>
            <p className="retro-subtitle">
              &#127926; Official Home Page &#127926;
            </p>
            <nav className="retro-nav">
              {["Music", "Videos", "Tour Dates", "About", "Guestbook"].map(
                (item) => (
                  <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`}>
                    [{item}]
                  </a>
                )
              )}
            </nav>
          </div>
        </header>

        <Marquee>
          &#9733; Welcome to the official {ARTIST_NAME} website! &#9733; New
          music coming soon! &#9733; Check below for tour dates! &#9733; Sign
          the guestbook! &#9733;
        </Marquee>

        {/* Hero GIF */}
        <section className="retro-section">
          <div className="retro-img-frame">
            <img
              src="/images/hero-retro.gif"
              alt={ARTIST_NAME}
              className="retro-hero-img"
            />
          </div>
          <p className="retro-caption">
            &#127916; {ARTIST_NAME} live &mdash;{" "}
            <a href="/images/JT_Bathtub_1.png" target="_blank">
              click here for press photo
            </a>
          </p>
        </section>

        <Divider />

        {/* Music */}
        <section id="music" className="retro-section">
          <h2>&#127911; Music</h2>
          <p>Listen to {ARTIST_NAME} on your favorite platform:</p>
          <ul className="retro-link-list">
            {streamingLinks.map((link) => (
              <li key={link.name}>
                &#9654;{" "}
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {mounted && SPOTIFY_EMBED_URI !== "SPOTIFY_URI_HERE" && (
            <div className="retro-embed-wrap">
              <p className="retro-embed-label">
                &#128266; Now Playing (Spotify):
              </p>
              <iframe
                src={`https://open.spotify.com/embed/${SPOTIFY_EMBED_URI}?utm_source=generator&theme=0`}
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="retro-spotify"
              />
            </div>
          )}
        </section>

        <Divider />

        {/* Tour Dates */}
        <section id="tour-dates" className="retro-section">
          <h2>&#128197; Tour Dates</h2>
          <table className="retro-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>City</th>
                <th>Venue</th>
                <th>Tickets</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>06/15/2026</td>
                <td>Asheville, NC</td>
                <td>The Orange Peel</td>
                <td>
                  <a href="#">BUY</a>
                </td>
              </tr>
              <tr>
                <td>06/22/2026</td>
                <td>Nashville, TN</td>
                <td>The Ryman</td>
                <td>
                  <a href="#">BUY</a>
                </td>
              </tr>
              <tr>
                <td>07/04/2026</td>
                <td>Floyd, VA</td>
                <td>Floyd Fest</td>
                <td>
                  <a href="#">BUY</a>
                </td>
              </tr>
              <tr>
                <td>07/18/2026</td>
                <td>Brooklyn, NY</td>
                <td>Brooklyn Bowl</td>
                <td>
                  <a href="#">BUY</a>
                </td>
              </tr>
              <tr>
                <td>08/01/2026</td>
                <td>Denver, CO</td>
                <td>Red Rocks</td>
                <td>
                  <a href="#">SOLD OUT</a>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="retro-note">
            * More dates to be announced! Check back often! *
          </p>
        </section>

        <Divider />

        {/* Videos */}
        <section id="videos" className="retro-section">
          <h2>&#128253; Videos</h2>
          <div className="retro-video-main">
            {mounted ? (
              <iframe
                src={`https://www.youtube.com/embed/${videos[activeVideo].id}`}
                title={`Video ${activeVideo + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="retro-video-iframe"
              />
            ) : (
              <div className="retro-video-placeholder" />
            )}
          </div>
          <div className="retro-video-list">
            {videos.map((v, i) => (
              <button
                key={v.id}
                onClick={() => setActiveVideo(i)}
                className={`retro-video-btn ${i === activeVideo ? "active" : ""}`}
              >
                Video #{i + 1} {i === activeVideo && " ◀ NOW PLAYING"}
              </button>
            ))}
          </div>
        </section>

        <Divider />

        {/* About */}
        <section id="about" className="retro-section">
          <h2>&#128220; About</h2>
          <div className="retro-about-grid">
            <div className="retro-img-frame retro-about-img">
              <img
                src="/images/indyweek.png"
                alt={`${ARTIST_NAME} press photo`}
              />
            </div>
            <div>
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

        <Divider />

        {/* Guestbook (retro newsletter replacement) */}
        <section id="guestbook" className="retro-section">
          <h2>&#128221; Guestbook</h2>
          <p>Sign the guestbook and say hello!</p>

          <form onSubmit={handleGuestbook} className="retro-guestbook-form">
            <div>
              <label htmlFor="gb-name">Name:</label>
              <input
                id="gb-name"
                type="text"
                value={guestbookName}
                onChange={(e) => setGuestbookName(e.target.value)}
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="gb-msg">Message:</label>
              <textarea
                id="gb-msg"
                value={guestbookMsg}
                onChange={(e) => setGuestbookMsg(e.target.value)}
                placeholder="Leave a message..."
                rows={3}
                required
              />
            </div>
            <button type="submit">[ Sign Guestbook ]</button>
          </form>

          <div className="retro-guestbook-entries">
            {guestbookEntries.map((entry, i) => (
              <div key={i} className="retro-gb-entry">
                <strong>{entry.name}</strong>{" "}
                <span className="retro-gb-date">({entry.date})</span>
                <br />
                {entry.msg}
              </div>
            ))}
          </div>

          <Divider />

          <h3>&#128232; Mailing List</h3>
          <p>Enter your e-mail address to receive updates:</p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="retro-mail-form"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
            />
            <button type="submit">[ Subscribe ]</button>
          </form>
        </section>

        <Divider />

        {/* Footer */}
        <footer className="retro-footer">
          <p>&#128279; Links:</p>
          <div className="retro-social-links">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                [{link.name}]
              </a>
            ))}
          </div>

          <div className="retro-label-link">
            <a
              href="https://www.sleepycatrec.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              &#128049; Sleepy Cat Records &#128049;
            </a>
          </div>

          <div className="retro-counter">
            <span>
              You are visitor #{VISITOR_COUNT.toLocaleString()}
            </span>
          </div>

          <p className="retro-copy">
            &copy; 2026 {ARTIST_NAME}. All rights reserved.
          </p>
          <p className="retro-best-viewed">
            Best viewed with Netscape Navigator 4.0 at 800x600
          </p>
          <p className="retro-built">
            <a href="/">&#9654; View the modern site</a>
          </p>
        </footer>
      </div>
    </div>
  );
}
