import Image from "next/image";

const PILLARS = [
  {
    id: "grassroots",
    title: ["Grassroots &", "youth development"],
    description:
      "Around 45 amateurs train regularly, from four-year-olds taking their first class to twenty-year-olds on the amateur circuit. The gym gives young people fitness, discipline, confidence, teamwork and respect, and a structured place to spend their time.",
    visual: { src: "/images/youth-2.jpg", alt: "Boys drilling pad work in a school gym", height: "80svh" },
    small: {
      src: "/images/community-2.jpg",
      alt: "A schoolgirl learning with a tablet in class",
    },
  },
  {
    id: "academy",
    title: ["The academy", "at Eros"],
    description:
      "A dedicated boxing academy is being built at Eros Primary School, a planned facility of about N$1.5 million. It will host training and camps, prepare boxers for national and international competition, and stand as a community asset for the whole school.",
    visual: { src: "/images/gym.jpg", alt: "The ring in a gym, ready for training", height: "60svh" },
    small: {
      src: "/images/community-1.jpg",
      alt: "Schoolchildren writing at their desks in a classroom",
    },
  },
  {
    id: "promotions",
    title: ["AC Promotions", "fight nights"],
    description:
      "The professional arm has signed about 20 boxers and promoted 18 shows, connecting Namibian fighters with audiences and with the wider professional scene. Its record includes Julius Indongo, Paulus Moses, Paulus Ambunda and Walter Kautondokwa.",
    visual: { src: "/images/training.jpg", alt: "A coach holding pads for a boxer in a modern gym", height: "90svh" },
    video: {
      src: "/images/boxing-training-bw.webm",
      poster: "/images/boxing-training-bw-poster.jpg",
    },
  },
];

export function Pillars() {
  return (
    <section className="overflow-x-clip">
      {PILLARS.map((pillar, index) => (
        <article
          key={pillar.id}
          id={pillar.id}
          className="wrap grid grid-cols-1 items-end gap-y-10 scroll-mt-8 min-[900px]:grid-cols-12 min-[900px]:gap-y-0"
          style={{ marginTop: index === 0 ? 0 : "140px" }}
        >
          {/* Oversized visual bleeding off the left viewport edge */}
          <figure
            className="pillar-visual pillar-bleed min-[900px]:col-span-7"
            data-reveal="settle"
            style={{ height: pillar.visual.height }}
          >
            <Image
              src={pillar.visual.src}
              alt={pillar.visual.alt}
              width={1600}
              height={1000}
              className="photo"
              loading="lazy"
            />
          </figure>

          {/* Small cluster in the right third */}
          <div className="min-[900px]:col-start-9 min-[900px]:col-span-4">
            <figure
              className="aspect-[16/10] overflow-hidden min-[900px]:max-w-[340px]"
              data-reveal
            >
              {pillar.video ? (
                <video
                  data-play-in-view
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={pillar.video.poster}
                  width={854}
                  height={480}
                  aria-hidden="true"
                  className="photo-colour"
                >
                  <source src={pillar.video.src} type="video/webm" />
                </video>
              ) : (
                <Image
                  src={pillar.small!.src}
                  alt={pillar.small!.alt}
                  width={680}
                  height={425}
                  className="photo"
                  loading="lazy"
                />
              )}
            </figure>

            <h2
              className="head mt-8"
              style={{ fontSize: "clamp(1.75rem, 2.4vw, 2.375rem)" }}
              data-reveal
            >
              {pillar.title[0]}
              <br />
              {pillar.title[1]}
            </h2>
            <p className="mt-5 max-w-[52ch] leading-relaxed" data-reveal>
              {pillar.description}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}
