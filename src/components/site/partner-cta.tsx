import Image from "next/image";
import {
  Award,
  Building2,
  Dumbbell,
  GraduationCap,
  Trophy,
  Users,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const AUDIENCES = [
  "Government Institutions",
  "Regional & Local Authorities",
  "Schools",
  "Corporate Sponsors",
  "Foundations",
  "Sports Organisations",
  "International Boxing Stakeholders",
];

const SUPPORT_AREAS = [
  { icon: Building2, label: "Completing & equipping the academy" },
  { icon: GraduationCap, label: "Coaching & youth programmes" },
  { icon: Dumbbell, label: "Providing boxing equipment" },
  { icon: Users, label: "Funding athlete development" },
  { icon: Trophy, label: "Organising competitions & shows" },
  { icon: Award, label: "Establishing training camps" },
];

export function PartnerCta() {
  return (
    <section id="partner" className="relative scroll-mt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/gloves-bw.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-[#0a0a0c]/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c] via-transparent to-[#0a0a0c]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
        <SectionHeading
          align="center"
          kicker="Partnership Opportunities"
          title="Let's Build Champions Together"
          description="We welcome partnerships that help create sustainable sports infrastructure and give young Namibians access to safe training environments, quality coaching and the chance to compete at higher levels."
        />

        <Reveal delay={0.12}>
          <ul className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-2.5">
            {AUDIENCES.map((audience) => (
              <li
                key={audience}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-zinc-300 backdrop-blur"
              >
                {audience}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SUPPORT_AREAS.map((area, i) => (
            <Reveal key={area.label} delay={i * 0.06}>
              <div className="flex h-full items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur transition-colors hover:border-[#e11d2e]/50">
                <area.icon className="h-5 w-5 shrink-0 text-[#e11d2e]" aria-hidden="true" />
                <p className="text-sm font-medium text-zinc-200">{area.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block rounded-sm bg-[#e11d2e] px-9 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-[#e11d2e]/30 transition-all hover:bg-[#c41423]"
          >
            Start a Conversation
          </a>
        </Reveal>
      </div>
    </section>
  );
}
