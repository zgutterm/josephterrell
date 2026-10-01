import { BASE_PATH } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-brand-surface/50 scroll-mt-16">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Photo */}
        <img
          src={`${BASE_PATH}/images/about-alt.jpg`}
          alt="Joseph Terrell standing in front of a red truck"
          width={900}
          height={1225}
          loading="lazy"
          decoding="async"
          className="w-full aspect-[3/4] object-cover rounded-lg"
        />

        {/* Bio */}
        <div>
          <h2 className="font-display text-4xl sm:text-5xl text-brand-offwhite mb-6">
            About
          </h2>
          <div className="space-y-4 text-lg text-brand-cream leading-relaxed">
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
      </div>
    </section>
  );
}
