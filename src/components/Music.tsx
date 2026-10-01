import { ARTIST_NAME, streamingLinks, SPOTIFY_EMBED_URI } from "@/lib/constants";

export default function Music() {
  return (
    <section id="music" className="py-24 px-6 scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-4xl sm:text-5xl text-brand-offwhite mb-16 text-center">
          Music
        </h2>

        <div className="grid md:grid-cols-[minmax(0,20rem)_1fr] gap-12 items-center">
          {/* Streaming buttons — stacked, filled */}
          <div className="flex flex-col gap-4 max-w-sm mx-auto md:mx-0 w-full">
            {streamingLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-brand-surface border border-brand-amber/25 rounded-full text-center text-sm uppercase tracking-widest text-brand-cream hover:bg-brand-teal hover:text-brand-dark hover:border-brand-teal transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Spotify embed */}
          <div className="w-full h-[352px] rounded-xl bg-brand-surface">
            <iframe
              src={`https://open.spotify.com/embed/${SPOTIFY_EMBED_URI}?utm_source=generator&theme=0`}
              title={`${ARTIST_NAME} on Spotify`}
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-xl border-0 block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
