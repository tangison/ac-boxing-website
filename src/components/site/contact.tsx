"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send, User } from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const CONTACT_ROWS = [
  { icon: User, label: "Contact Person", value: "Immanuel Paulus — Founder / Promoter" },
  { icon: MapPin, label: "Location", value: "Windhoek, Namibia" },
  {
    icon: Phone,
    label: "Telephone",
    value: "Full contact details available on request",
  },
  { icon: Mail, label: "Email", value: "Reach us via the form or through our partners" },
];

const inputClasses =
  "w-full rounded-sm border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-[#e11d2e] focus:bg-white/[0.07]";

export function Contact() {
  const [ submitting, setSubmitting ] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      toast.error("Please fill in your name, email and message.");
      return;
    }

    setSubmitting(true);
    // Simulate async submission — backend hookup can be added later.
    window.setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast.success("Thank you — your message has been received.", {
        description: "The AC Boxing team will get back to you shortly.",
      });
    }, 700);
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-white/5 bg-[#0f0f12] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Info panel */}
          <div className="lg:col-span-2">
            <SectionHeading
              kicker="Contact"
              title="Get in Touch"
              description="Whether you are a potential sponsor, partner institution or a young boxer looking for a gym — we would like to hear from you."
            />
            <div className="mt-8 space-y-5">
              {CONTACT_ROWS.map((row, i) => (
                <Reveal key={row.label} delay={i * 0.08}>
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-white/10 bg-white/5">
                      <row.icon className="h-4.5 w-4.5 text-[#e11d2e]" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                        {row.label}
                      </p>
                      <p className="mt-1 text-sm text-zinc-200">{row.value}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Form */}
          <Reveal delay={0.15} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-[#131316] p-6 sm:p-10"
              aria-label="Contact form"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                    Full Name *
                  </label>
                  <input id="name" name="name" type="text" required placeholder="Your name" className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                    Email Address *
                  </label>
                  <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputClasses} />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="organisation" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                  Organisation <span className="text-zinc-600">(optional)</span>
                </label>
                <input id="organisation" name="organisation" type="text" placeholder="Company, institution or foundation" className={inputClasses} />
              </div>
              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell us how you would like to work with AC Boxing…"
                  className={`${inputClasses} resize-none`}
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-sm bg-[#e11d2e] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#c41423] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                {submitting ? "Sending…" : "Send Message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
