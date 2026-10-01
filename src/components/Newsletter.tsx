// Not wired to a provider yet — the button does nothing until Mailchimp is set up
export default function Newsletter() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-display text-4xl sm:text-5xl text-brand-offwhite mb-4">
          Stay in Touch
        </h2>
        <p className="text-brand-cream/80 mb-10">
          Sign up to hear about new music, tour dates, and more.
        </p>

        <div
          role="group"
          aria-label="Mailing list signup"
          className="flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            name="email"
            autoComplete="email"
            aria-label="Email address"
            placeholder="Your email address"
            className="flex-1 px-5 py-3 bg-brand-surface/60 border border-brand-amber/20 rounded-full text-brand-cream placeholder:text-brand-cream/60 focus:border-brand-teal transition-colors"
          />
          <button
            type="button"
            className="px-8 py-3 bg-brand-amber text-brand-dark font-medium rounded-full hover:bg-brand-amber-light transition-colors uppercase text-sm tracking-widest cursor-pointer"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
