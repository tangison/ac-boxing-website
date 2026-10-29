"use client";

import Image from "next/image";
import { useState } from "react";

const CHOICES = [
  {
    id: "academy",
    label: "The academy",
    subject: "Supporting the academy",
    body: "Hello Immanuel,%0D%0A%0D%0AI would like to help bring the AC Boxing Academy at Eros Primary School to completion.%0D%0A%0D%0A",
  },
  {
    id: "youth",
    label: "The youth programme",
    subject: "Backing the youth programme",
    body: "Hello Immanuel,%0D%0A%0D%0AI would like to support coaching and the youth programme at AC Boxing.%0D%0A%0D%0A",
  },
  {
    id: "fight",
    label: "A fight night",
    subject: "Putting on a fight night",
    body: "Hello Immanuel,%0D%0A%0D%0AI would like to talk about putting an AC Promotions fight night together.%0D%0A%0D%0A",
  },
];

export function Contact() {
  const [picked, setPicked] = useState(CHOICES[0]);

  const mailto = `mailto:info@acboxing.org.na?subject=${encodeURIComponent(
    picked.subject
  )}&body=${picked.body}`;

  return (
    <section id="contact" className="wrap scroll-mt-8 py-[110px] md:py-[150px]">
      <div className="grid grid-cols-1 gap-y-14 min-[900px]:grid-cols-12 min-[900px]:gap-y-0">
        {/* The sentence that opens the section */}
        <div className="min-[900px]:col-span-5">
          <h2 className="head" data-reveal>
            Talk to us
          </h2>
          <p
            className="mt-10 max-w-[30ch] font-medium leading-[1.1]"
            style={{ fontSize: "clamp(1.375rem, 2.5vw, 2.25rem)" }}
            data-reveal
          >
            Bring the academy to completion, back the youth programme, or put a
            fight night on.
          </p>
        </div>

        {/* Square portrait: a fight poster from the archives */}
        <figure className="min-[900px]:col-start-8 min-[900px]:col-span-2" data-reveal>
          <div className="aspect-square w-[160px] overflow-hidden">
            <Image
              src="/images/poster-south-london-palace-boxing-night-every.jpg"
              alt="A vintage letterpress poster advertising a boxing night"
              width={1920}
              height={2856}
              className="photo-colour"
              loading="lazy"
            />
          </div>
          <figcaption className="small muted mt-3 max-w-[180px]">
            A boxing-night poster, 1900s, in the spirit of the 18 shows.
          </figcaption>
        </figure>

        {/* The live thing: pick your corner, the email writes itself */}
        <div className="min-[900px]:col-start-10 min-[900px]:col-span-3" data-reveal>
          <p className="font-medium" style={{ fontSize: "var(--step-body)" }}>
            What would you back?
          </p>
          <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="What would you back?">
            {CHOICES.map((choice) => (
              <button
                key={choice.id}
                type="button"
                className="choice"
                aria-pressed={picked.id === choice.id}
                onClick={() => setPicked(choice)}
              >
                {choice.label}
              </button>
            ))}
          </div>
          <a href={mailto} className="button mt-7">
            Email Immanuel Paulus
          </a>
          <p className="mt-6" style={{ fontSize: "var(--step-body)" }}>
            <a className="link" href="mailto:info@acboxing.org.na">
              info@acboxing.org.na
            </a>
          </p>
          <p className="small muted mt-2">Windhoek, Namibia</p>
        </div>
      </div>
    </section>
  );
}
