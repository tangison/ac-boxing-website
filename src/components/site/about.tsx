import Image from "next/image";
import { Eye, Target } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              kicker="About Us"
              title="More Than a Gym — A Pathway"
            />
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-zinc-300 sm:text-lg">
                <p>
                  AC Boxing Sport &amp; Entertainment is a Namibia-based
                  non-profit sports development organisation committed to
                  advancing boxing, nurturing young talent and creating positive
                  opportunities for children and young people through sport.
                </p>
                <p>
                  Based in Windhoek, the organisation combines grassroots athlete
                  development with professional boxing promotion and
                  international industry relationships. Through its
                  community-focused work and its professional activities under
                  AC Promotions, it helps athletes develop their skills, access
                  competitive opportunities and build pathways from grassroots
                  participation to the professional level.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="relative">
            <div
              className="absolute -left-3 -top-3 h-full w-full rounded-2xl border-2 border-[#e11d2e]/40"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/gym.jpg"
                alt="A boxing gym with a ring ready for training"
                fill
                loading="eager"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-sm border border-white/15 bg-black/60 px-4 py-2 backdrop-blur">
                <p className="font-display text-sm font-semibold uppercase tracking-widest text-white">
                  Eros, Windhoek · Namibia
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Vision & Mission */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-2xl border border-white/10 bg-[#131316] p-8 transition-colors hover:border-[#e11d2e]/40">
              <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-[#e11d2e]">
                <Eye className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold uppercase tracking-wide text-white">
                Our Vision
              </h3>
              <p className="mt-4 leading-relaxed text-zinc-400">
                To contribute to a strong and sustainable boxing environment in
                Namibia — where young people can access quality coaching and
                facilities, talented athletes can progress to national and
                international competition, and boxing creates lasting social and
                sporting opportunities.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.12}>
            <article className="h-full rounded-2xl border border-white/10 bg-[#131316] p-8 transition-colors hover:border-[#e11d2e]/40">
              <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-[#e11d2e]">
                <Target className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold uppercase tracking-wide text-white">
                Our Mission
              </h3>
              <p className="mt-4 leading-relaxed text-zinc-400">
                To develop boxers at every stage of their journey through
                coaching, mentorship, athlete development, competition,
                partnerships and improved sports infrastructure — while
                promoting discipline, respect, resilience, education and
                community participation.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
