"use client";

import { socialLinks, ARTIST_NAME } from "@/lib/constants";

const CURRENT_YEAR = 2026;

export default function Footer() {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-brand-amber/15">
      <div className="max-w-4xl mx-auto text-center">
        {/* Social links */}
        <div className="flex items-center justify-center gap-6 mb-10">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-brand-cream/50 hover:text-brand-amber transition-colors text-2xl"
              >
                <Icon />
              </a>
            );
          })}
        </div>

        {/* Contact */}
        <div className="mb-10">
          <h3 className="text-xs uppercase tracking-widest text-brand-cream/40 mb-3">
            Booking &amp; Inquiries
          </h3>
          <a
            href="mailto:booking@example.com"
            className="text-brand-cream/70 hover:text-brand-teal transition-colors"
          >
            booking@example.com
          </a>
        </div>

        {/* Label */}
        <a
          href="https://www.sleepycatrec.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-8 opacity-50 hover:opacity-100 transition-opacity"
        >
          <img
            src="/images/sleepy-cat-logo.webp"
            alt="Sleepy Cat Records"
            className="h-12 mx-auto invert"
          />
        </a>

        {/* Copyright */}
        <p className="text-brand-cream/30 text-xs">
          &copy; {CURRENT_YEAR} {ARTIST_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
