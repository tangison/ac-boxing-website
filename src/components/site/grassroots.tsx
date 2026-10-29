import Image from "next/image";
import {
  ChevronRight,
  Dumbbell,
  Handshake,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const VALUES = [
  { icon: Dumbbell, label: "Fitness" },
  { icon: ShieldCheck, label: "Discipline" },
  { icon: Sparkles, label: "Confidence" },
  { icon: Users, label: "Teamwork" },
  { icon: Handshake, label: "Respect" },
];

const PATHWAY = [
  { step: "01", title: "Beginner Participation", text: "First steps in the gym, from age 4" },
  { step: "02", title: "Amateur Competition", text: "Structured training and national contests" },
  { step: "03", title: "Professional Ranks", text: "AC Promotions careers for suitable athletes" },
];

export function Grassroots() {
  return (
    <section
      id="grassroots"
      className="scroll-mt-20 border-y border-white/5 bg-[#0f0f12] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image collage */}
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl sm:aspect-[5/5]">
              <Image
                src="/images/youth-1.jpg"
                alt="A young boxer practising punches with a coach inside the ring"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 right-0 hidden w-56 overflow-hidden rounded-2xl border-4 border-[#0f0f12] shadow-2xl sm:block lg:right-8 lg:w-64">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/youth-2.jpg"
                  alt="Young boxers drilling pad work in a school gym"
                  fill
                  sizes="256px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute left-5 top-5 rounded-sm bg-[#e11d2e] px-4 py-2 shadow-lg shadow-[#e11d2e]/30">
              <p className="font-display text-xl font-bold text-white">Ages 4–20</p>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/80">
                ~45 amateur boxers
              </p>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              kicker="Grassroots & Youth Development"
              title="Where Champions Begin"
            />
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-zinc-300 sm:text-lg">
                <p>
                  Our gym welcomes approximately 45 amateur boxers who train
                  regularly, with young participants ranging from 4 to 20 years
                  old. The programme provides a structured sporting environment
                  where children and young people build their boxing skills while
                  growing as individuals.
                </p>
                <p>
                  By making boxing training accessible, AC Boxing contributes to
                  youth development and encourages constructive use of time —
                  with the longer-term ambition of strengthening pathways from
                  beginner participation to amateur competition and, for suitable
                  athletes, professional boxing.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <ul className="mt-8 flex flex-wrap gap-3" aria-label="Programme values">
                {VALUES.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200"
                  >
                    <Icon className="h-4 w-4 text-[#e11d2e]" aria-hidden="true" />
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Pathway */}
        <div className="mt-20">
          <Reveal>
            <h3 className="font-display text-xl font-semibold uppercase tracking-widest text-zinc-400">
              The Athlete Pathway
            </h3>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {PATHWAY.map((item, i) => (
              <Reveal key={item.step} delay={i * 0.1}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#131316] p-7 transition-colors hover:border-[#e11d2e]/40">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-4xl font-bold text-white/10 transition-colors group-hover:text-[#e11d2e]/30">
                      {item.step}
                    </span>
                    {i < PATHWAY.length - 1 && (
                      <ChevronRight
                        className="h-5 w-5 text-zinc-600 transition-colors group-hover:text-[#e11d2e]"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <h4 className="mt-4 font-display text-lg font-semibold uppercase tracking-wide text-white">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
