import Image from "next/image";
import { Building2, Check } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const FEATURES = [
  "A dedicated training environment for boxing and athlete development",
  "Preparation for national and international competitions",
  "Hosting of training camps for athletes and coaches",
  "A community asset supporting youth participation and mentorship",
];

export function Academy() {
  return (
    <section id="academy" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              kicker="AC Boxing Academy · Infrastructure Project"
              title="A Home for Namibian Boxing"
            />
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-zinc-300 sm:text-lg">
                <p>
                  We are developing the AC Boxing Academy facility at Eros
                  Primary School in Windhoek — a planned facility valued at
                  approximately <span className="font-semibold text-white">N$1.5 million</span>,
                  designed to give boxers a dedicated environment in which to
                  train and grow.
                </p>
                <p>
                  The project responds to the need for suitable training
                  infrastructure in Namibia, and support from public
                  institutions, corporate partners and donors can help bring it
                  to completion and expand the opportunities it provides.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <ul className="mt-8 space-y-4">
                {FEATURES.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e11d2e]/15">
                      <Check className="h-4 w-4 text-[#e11d2e]" aria-hidden="true" />
                    </span>
                    <span className="text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#partner"
                  className="rounded-sm bg-[#e11d2e] px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#c41423]"
                >
                  Help Complete the Academy
                </a>
                <span className="inline-flex items-center gap-2 text-sm text-zinc-400">
                  <Building2 className="h-4 w-4 text-[#d9a441]" aria-hidden="true" />
                  Eros Primary School · Windhoek
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/training.jpg"
                alt="A coach holding pads while a boxer trains in a modern gym"
                fill
                loading="eager"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/80 via-transparent to-transparent" />
            </div>
            {/* Floating value card */}
            <div className="absolute -bottom-6 left-5 rounded-xl border border-[#d9a441]/30 bg-[#131316]/95 px-6 py-5 shadow-2xl backdrop-blur sm:left-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d9a441]">
                Planned facility value
              </p>
              <p className="mt-1 font-display text-3xl font-bold text-white">N$1.5 Million</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
