import Image from "next/image";

export function Mosaic() {
  return (
    <section id="gym" className="wrap py-[110px] md:py-[150px]">
      <div className="mosaic" data-stagger>
        {/* Heading tile */}
        <div
          className="col-span-6 row-span-5 bg-[var(--field-1)] text-[var(--field-1-ink)]"
          data-reveal="settle"
          style={{ gridRow: "span 5" }}
        >
          <h2
            className="font-bold leading-[1.02] tracking-[-0.02em]"
            style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
          >
            Where champions begin
          </h2>
        </div>

        {/* Photograph tile */}
        <figure className="col-span-6 row-span-3" data-reveal="settle">
          <Image
            src="/images/youth-1.jpg"
            alt="A young boxer practising punches against a coach's gloves inside the ring"
            width={1200}
            height={800}
            className="photo"
            loading="lazy"
          />
        </figure>

        {/* Figure tile */}
        <div
          className="col-span-3 row-span-2 bg-[var(--field-4)] text-[var(--field-4-ink)]"
          data-reveal="settle"
          style={{ gridRow: "span 2" }}
        >
          <p className="font-bold leading-none" style={{ fontSize: "var(--step-display)", letterSpacing: "-0.035em" }}>
            4
          </p>
          <p className="mt-3 text-[var(--field-4-muted)]" style={{ fontSize: "var(--step-small)" }}>
            the age of our youngest boxers
          </p>
        </div>

        {/* List tile */}
        <div className="col-span-3 row-span-2" data-reveal="settle" style={{ gridRow: "span 2" }}>
          <ul style={{ fontSize: "1.25rem", lineHeight: 1.28 }}>
            <li>Fitness</li>
            <li>Discipline</li>
            <li>Confidence</li>
            <li>Teamwork</li>
            <li>Respect</li>
          </ul>
        </div>

        {/* Photograph tile */}
        <figure className="col-span-6 row-span-3" data-reveal="settle">
          <Image
            src="/images/youth-2.jpg"
            alt="Boys drilling pad work in a school gym"
            width={1200}
            height={800}
            className="photo"
            loading="lazy"
          />
        </figure>

        {/* Sentence tile */}
        <div
          className="col-span-3 row-span-3 bg-[var(--surface)]"
          data-reveal="settle"
          style={{ gridRow: "span 3" }}
        >
          <p style={{ fontSize: "var(--step-lead)", lineHeight: 1.3 }}>
            The path runs from first pads to amateur bouts to the professional
            ranks.
          </p>
        </div>

        {/* Photograph tile: an 1896 print of the sport the gym carries on */}
        <figure className="col-span-3 row-span-3" data-reveal="settle">
          <Image
            src="/images/don-chepito-witnessing-a-boxing-match-between.jpg"
            alt="An 1896 print of two men boxing in a ring while a crowd reacts"
            width={1658}
            height={1174}
            className="photo-colour"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}
