import Image from "next/image";

const PANELS = [
  {
    src: "/images/spar.jpg",
    alt: "Two boxers sparring beside the ring",
    title: "Windhoek, Namibia",
    grow: 5,
  },
  {
    src: "/images/gloves-bw.jpg",
    alt: "Worn boxing gloves hanging from a rack",
    title: "",
    grow: 2,
  },
  {
    src: "/images/hero.jpg",
    alt: "A boxer celebrating a victory with his arm raised",
    title: "",
    grow: 3,
  },
  {
    src: "/images/promoter.jpg",
    alt: "A professional boxer working punches in the gym",
    title: "",
    grow: 2,
  },
];

export function Band() {
  return (
    <section className="py-[110px] md:py-[150px]">
      <div className="wrap">
        <h2 className="head col-start-3" data-reveal>
          Inside the gym
        </h2>
        <div className="h-16" />
      </div>

      <div className="band">
        {PANELS.map((panel) => (
          <figure key={panel.src} data-reveal="settle">
            <Image
              src={panel.src}
              alt={panel.alt}
              width={1400}
              height={1000}
              className="photo"
              loading="lazy"
            />
            {panel.title ? (
              <figcaption
                className="absolute left-0 top-0 p-6 text-white"
                style={{
                  // neutral scrim over the photo corner for legibility (the allowed exception)
                  background:
                    "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0))", // taste-skill-ignore
                  fontSize: "var(--step-lead)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                {panel.title}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>

      <div className="wrap">
        <p className="small muted mt-4" data-reveal>
          Training, sparring and fight nights: the gym, its boxers and its
          shows.
        </p>
      </div>
    </section>
  );
}
