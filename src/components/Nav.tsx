"use client";

import { useState, useEffect } from "react";
import { navItems, ARTIST_NAME } from "@/lib/constants";

const SCROLL_RANGE = 300;
const MD_BREAKPOINT = 768;

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    function update() {
      setIsDesktop(window.innerWidth >= MD_BREAKPOINT);
      const p = Math.min(window.scrollY / SCROLL_RANGE, 1);
      setProgress(p);
      setScrolled(window.scrollY > 50);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const nameScale = isDesktop ? 3.5 - progress * 2.5 : 1;
  const navHeight = isDesktop ? 120 - progress * 56 : 64;
  const paddingBottom = isDesktop ? 16 - progress * 4 : 0;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-brand-dark/90 backdrop-blur-sm border-b border-brand-amber/15"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div
        className="px-6 flex items-center md:items-end justify-between"
        style={{ height: `${navHeight}px`, paddingBottom: `${paddingBottom}px` }}
      >
        <a
          href="#"
          className="font-display text-xl font-semibold tracking-wide text-brand-offwhite hover:text-brand-amber transition-colors origin-bottom-left"
          style={{
            transform: `scale(${nameScale})`,
            willChange: isDesktop ? "transform" : "auto",
          }}
        >
          {ARTIST_NAME}
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm uppercase tracking-widest text-brand-cream/70 hover:text-brand-teal transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-brand-cream transition-transform ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-brand-cream transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-brand-cream transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-brand-dark/95 backdrop-blur-sm border-t border-brand-amber/15">
          <ul className="flex flex-col items-center gap-6 py-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm uppercase tracking-widest text-brand-cream/70 hover:text-brand-teal transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
