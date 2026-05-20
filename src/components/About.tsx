export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-brand-surface/50">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Photo */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/images/indyweek.png)" }}
          />
        </div>

        {/* Bio */}
        <div>
          <h2 className="font-display text-4xl sm:text-5xl text-brand-offwhite mb-6">
            About
          </h2>
          <div className="space-y-4 text-brand-cream/70 leading-relaxed">
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
      </div>
    </section>
  );
}
