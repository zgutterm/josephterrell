"use client";

import { useState, type FormEvent } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: Wire up to mailing list provider (MailerLite, Kit, Mailchimp, etc.)
    setSubmitted(true);
  }

  return (
    <section className="py-24 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-display text-4xl sm:text-5xl text-brand-offwhite mb-4">
          Stay in Touch
        </h2>
        <p className="text-brand-cream/60 mb-10">
          Sign up to hear about new music, tour dates, and more.
        </p>

        {submitted ? (
          <p className="text-brand-teal text-lg">
            Thanks for subscribing!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-5 py-3 bg-brand-surface/60 border border-brand-amber/20 rounded-full text-brand-cream placeholder:text-brand-cream/40 focus:outline-none focus:border-brand-teal transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-brand-amber text-brand-dark font-medium rounded-full hover:bg-brand-amber-light transition-colors uppercase text-sm tracking-widest"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
