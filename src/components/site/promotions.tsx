import Image from "next/image";
import { Handshake, Trophy, Users } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const BOXERS = [
  "Julius Indongo",
  "Paulus Moses",
  "Sakaria Lukas",
  "Walter Kautondokwa",
  "Flame Nangolo",
  "Vikapita Meroro",
  "Charles Shinima",
  "Paulus Ambunda",
  "Hafeni Ngesheya",
  "Divas Namugongo",
];

const PARTNERS = [
  "Matchroom Boxing",
  "Top Rank, Inc.",
  "Knuckleheads Boxing",
  "Viva Promotions",
  "Manny Pacquiao Promotions",
  "Boxxer",
  "Golden Boy Promotions",
  "Premier Boxing Champions",
  "Golden Gloves",
];

export function Promotions() {
  return (
    <section
      id="promotions"
      className="scroll-mt-20 border-y border-white/5 bg-[#0f0f12] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Intro split */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl lg:max-w-none">
              <Image
                src="/images/promoter.jpg"
                alt="A professional boxer mid-punch wearing gold and blue gloves"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f12]/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-sm border border-white/15 bg-black/60 px-4 py-2 backdrop-blur">
                <p className="font-display text-sm font-semibold uppercase tracking-widest text-white">
                  AC Promotions · Fight Night
                </p>
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              kicker="Professional Boxing · AC Promotions"
              title="The Professional Stage"
            />
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-zinc-300 sm:text-lg">
                <p>
                  Alongside its grassroots work, the organisation operates
                  professional boxing promotion through{" "}
                  <span className="font-semibold text-white">AC Promotions</span> —
                  creating opportunities for boxers to gain professional
                  experience, compete before audiences and progress in their
                  careers.
                </p>
                <p>
                  Our promotional work connects local boxing talent with the
                  wider professional ecosystem and contributes to the visibility
                  and development of Namibian boxing.
                </p>
              </div>
            </Reveal>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <Reveal delay={0.16}>
                <div className="rounded-2xl border border-white/10 bg-[#131316] p-6">
                  <Users className="h-6 w-6 text-[#e11d2e]" aria-hidden="true" />
                  <p className="mt-3 font-display text-4xl font-bold text-white">~20</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
                    Pro boxers signed
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.22}>
                <div className="rounded-2xl border border-white/10 bg-[#131316] p-6">
                  <Trophy className="h-6 w-6 text-[#d9a441]" aria-hidden="true" />
                  <p className="mt-3 font-display text-4xl font-bold text-white">18</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
                    Shows promoted
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Roster */}
        <div className="mt-24">
          <SectionHeading
            kicker="The Roster"
            title="Boxers We Have Promoted"
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {BOXERS.map((name, i) => {
              const [first, ...rest] = name.split(" ");
              const last = rest.join(" ");
              return (
                <Reveal key={name} delay={(i % 5) * 0.06}>
                  <article className="group relative h-full overflow-hidden rounded-lg border border-white/10 bg-[#131316] p-5 transition-all hover:-translate-y-1 hover:border-[#e11d2e]/50">
                    <span
                      className="absolute right-0 top-0 h-10 w-10 bg-[#e11d2e]/15 [clip-path:polygon(100%_0,100%_100%,0_0)] transition-colors group-hover:bg-[#e11d2e]/40"
                      aria-hidden="true"
                    />
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                      № {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-3 text-sm font-medium text-zinc-400">{first}</p>
                    <p className="font-display text-xl font-semibold uppercase leading-tight tracking-wide text-white">
                      {last}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-3xl text-xs leading-relaxed text-zinc-500">
              The roster above reflects names provided by the organisation.
              Specific fighter-management, promotional or event roles can be
              confirmed and described individually where required for formal due
              diligence or partnership submissions.
            </p>
          </Reveal>
        </div>

        {/* International relationships */}
        <div className="mt-24">
          <SectionHeading
            kicker="International Relationships"
            title="Connected to the Global Ring"
            description="Our promotional activities have worked with or engaged organisations across the international boxing industry — engagement that opens doors for Namibian boxers."
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PARTNERS.map((partner, i) => (
              <Reveal key={partner} delay={(i % 3) * 0.08}>
                <div className="flex h-full items-center gap-4 rounded-lg border border-[#d9a441]/20 bg-[#d9a441]/[0.04] px-6 py-5 transition-colors hover:border-[#d9a441]/50 hover:bg-[#d9a441]/[0.08]">
                  <Handshake className="h-5 w-5 shrink-0 text-[#d9a441]" aria-hidden="true" />
                  <p className="font-display text-lg font-medium uppercase tracking-wide text-zinc-100">
                    {partner}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-3xl text-xs leading-relaxed text-zinc-500">
              These relationships reflect international industry engagement and
              the ambition to create further opportunities for Namibian boxers.
              The nature and scope of each relationship can be documented with
              supporting records where required by sponsors, institutions or
              prospective partners.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
