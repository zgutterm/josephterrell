import { socialLinks, contactEmails, ARTIST_NAME, BASE_PATH } from "@/lib/constants";

const contacts = contactEmails.filter((c) => c.email);

export default function Footer() {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-brand-amber/15">
      <div className="max-w-4xl mx-auto text-center">
        {/* Social links */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="w-11 h-11 inline-flex items-center justify-center text-brand-cream/70 hover:text-brand-amber transition-colors text-2xl"
              >
                <Icon aria-hidden="true" />
              </a>
            );
          })}
        </div>

        {/* Contact — hidden until addresses are set in constants.ts */}
        {contacts.length > 0 && (
          <div className="mb-10">
            <h3 className="text-xs uppercase tracking-widest text-brand-cream/70 mb-3">
              Booking &amp; Inquiries
            </h3>
            {contacts.map((c) => (
              <p key={c.label}>
                <a
                  href={`mailto:${c.email}`}
                  className="text-brand-cream hover:text-brand-teal transition-colors"
                >
                  {c.email}
                </a>
              </p>
            ))}
          </div>
        )}

        {/* Label */}
        <a
          href="https://www.sleepycatrec.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-8 opacity-70 hover:opacity-100 transition-opacity"
        >
          <img
            src={`${BASE_PATH}/images/sleepy-cat-logo.webp`}
            alt="Sleepy Cat Records"
            className="h-12 mx-auto invert"
          />
        </a>

        {/* Copyright */}
        <p className="text-brand-cream/70 text-xs">
          &copy; {new Date().getFullYear()} {ARTIST_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
