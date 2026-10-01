import "./disco.css";
import Script from "next/script";
import { Bebas_Neue, Caveat, Inter } from "next/font/google";
import {
  ARTIST_NAME,
  BASE_PATH,
  SEATED_ARTIST_ID,
  SITE_URL,
  SPOTIFY_EMBED_URI,
  contactEmails,
  socialLinks,
  streamingLinks,
} from "@/lib/constants";
import { StickyNav, Videos } from "./home-client";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: "500",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const img = (name: string) => `${BASE_PATH}/images/${name}`;

const contacts = contactEmails.filter((c) => c.email);
const navItems = ["Music", "Shows", "Videos", "About", ...(contacts.length ? ["Contact"] : [])];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: ARTIST_NAME,
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/og.jpg`,
  genre: ["Folk", "Americana"],
  sameAs: socialLinks.map((link) => link.url),
};

function GradientBar({ colors = "gold-coral" }: { colors?: string }) {
  return <div className={`disco-gradient-bar disco-gradient-${colors}`} />;
}

function SocialLinks({ className }: { className: string }) {
  return (
    <div className={className}>
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
            <Icon aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}

export default function Home() {
  return (
    <div className={`disco-page ${bebas.variable} ${caveat.variable} ${inter.variable}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <a href="#music" className="disco-skip">Skip to content</a>
      <StickyNav items={navItems} />

      {/* Hero — massive type */}
      <header id="top" className="disco-hero">
        <div className="disco-hero-bg">
          <img
            src={img("hero-2400.jpg")}
            srcSet={`${img("hero-1200.jpg")} 1200w, ${img("hero-2400.jpg")} 2400w`}
            sizes="100vw"
            width={2400}
            height={1678}
            alt=""
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div className="disco-hero-overlay" />
        <div className="disco-hero-content">
          <h1 className="disco-title">
            {ARTIST_NAME.split(" ").map((word, i) => (
              <span key={i}>{word} </span>
            ))}
          </h1>
          <p className="disco-tagline">is a singer, songwriter, and guitarist from North Carolina</p>
          <nav className="disco-hero-nav" aria-label="Main">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
            ))}
          </nav>
          <SocialLinks className="disco-hero-social" />
        </div>
      </header>

      <GradientBar colors="gold-coral" />

      <main>
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
            <div className="disco-spotify">
              <iframe
                src={`https://open.spotify.com/embed/${SPOTIFY_EMBED_URI}?utm_source=generator&theme=0`}
                title={`${ARTIST_NAME} on Spotify`}
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Full-width photo break */}
        <div className="disco-photo-break">
          <img
            src={img("break-2000.jpg")}
            srcSet={`${img("break-1000.jpg")} 1000w, ${img("break-2000.jpg")} 2000w`}
            sizes="100vw"
            width={2000}
            height={1335}
            alt=""
            loading="lazy"
            decoding="async"
          />
          <div className="disco-photo-break-overlay" />
        </div>

        {/* Tour */}
        <section id="shows" className="disco-section disco-tour">
          <h2 className="disco-section-title">Shows</h2>
          <div className="disco-tour-container">
            <div
              id="seated-55fdf2c0"
              data-artist-id={SEATED_ARTIST_ID}
              data-css-version="3"
            />
          </div>
          <p className="disco-tour-note">
            For new dates, follow Joseph on{" "}
            <a
              href={socialLinks.find((l) => l.name === "Instagram")?.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            .
          </p>
        </section>

        <GradientBar colors="coral-violet" />

        {/* Videos */}
        <section id="videos" className="disco-section disco-videos">
          <h2 className="disco-section-title">Videos</h2>
          <Videos />
        </section>

        {/* About */}
        <section id="about" className="disco-section disco-about">
          <div className="disco-split">
            <div className="disco-split-img">
              <img
                src={img("about-1400.jpg")}
                srcSet={`${img("about-800.jpg")} 800w, ${img("about-1400.jpg")} 1400w`}
                sizes="(max-width: 767px) 100vw, 550px"
                width={1400}
                height={2100}
                alt="Black-and-white portrait of Joseph Terrell in profile"
                loading="lazy"
                decoding="async"
              />
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

        {/* Newsletter — not wired to a provider yet */}
        <section className="disco-section disco-newsletter">
          <h2 className="disco-section-title">Mailing List</h2>
          <div className="disco-mail-form" role="group" aria-label="Mailing list signup">
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Email address"
              aria-label="Email address"
            />
            <button type="button">Subscribe</button>
          </div>
        </section>

        {/* Contact */}
        {contacts.length > 0 && (
          <section id="contact" className="disco-section disco-contact">
            <h2 className="disco-section-title">Contact</h2>
            <dl className="disco-contact-list">
              {contacts.map((c) => (
                <div key={c.label}>
                  <dt>{c.label}</dt>
                  <dd><a href={`mailto:${c.email}`}>{c.email}</a></dd>
                </div>
              ))}
            </dl>
          </section>
        )}
      </main>

      <GradientBar colors="violet-blue" />

      {/* Footer */}
      <footer className="disco-footer">
        <SocialLinks className="disco-footer-social" />
        <a
          href="https://www.sleepycatrec.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="disco-label"
        >
          Sleepy Cat Records
        </a>
        <p>&copy; {new Date().getFullYear()} {ARTIST_NAME}. All rights reserved.</p>
      </footer>

      <Script src="https://widget.seated.com/app.js" strategy="lazyOnload" />
    </div>
  );
}
