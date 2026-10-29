import Image from "next/image";
import { BedDouble, BookOpen, Droplets } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const CONTRIBUTIONS = [
  {
    icon: BedDouble,
    amount: "N$1.2 Million",
    title: "Girls' Hostel Renovation",
    text: "Donations facilitated from Los Angeles towards renovating the Eros girls' school hostel, improving student welfare and living conditions.",
  },
  {
    icon: BookOpen,
    amount: "N$300,000",
    title: "School Library Development",
    text: "Support towards a library at Eros Primary School — including 45 computers and a projector — expanding access to learning resources.",
  },
  {
    icon: Droplets,
    amount: "4 Facilities",
    title: "Sanitation Improvement",
    text: "Construction of four toilets at Eros Primary School, helping address the school's sanitation and infrastructure needs.",
  },
];

export function Community() {
  return (
    <section id="community" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Beyond Boxing"
          title="Investing in Education & Community"
          description="Our commitment to community development reaches past the ring — supporting education, student welfare and improved school facilities at Eros Primary School and the Eros girls' school hostel."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Images */}
          <Reveal className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/images/community-1.jpg"
                  alt="Schoolchildren writing at their desks in a sunlit classroom"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/images/community-2.jpg"
                  alt="A smiling schoolgirl learning with a tablet and headphones"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-sm border border-white/15 bg-black/60 px-4 py-2 backdrop-blur">
              <p className="whitespace-nowrap font-display text-xs font-semibold uppercase tracking-widest text-white">
                Eros Primary School · Windhoek
              </p>
            </div>
          </Reveal>

          {/* Cards */}
          <div className="space-y-5">
            {CONTRIBUTIONS.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <article className="flex gap-5 rounded-2xl border border-white/10 bg-[#131316] p-6 transition-colors hover:border-[#e11d2e]/40 sm:p-7">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-[#e11d2e]">
                    <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-[#d9a441]">
                      {item.amount}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-semibold uppercase tracking-wide text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <p className="text-xs leading-relaxed text-zinc-500">
                Figures describe contributions and donations facilitated by the
                organisation; supporting records can be provided where available.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
