"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin } from "lucide-react";

const STATS = [
  { value: "45+", label: "Amateur boxers, ages 4–20" },
  { value: "~20", label: "Professional boxers signed" },
  { value: "18", label: "Boxing shows promoted" },
  { value: "N$1.5M", label: "Academy facility project" },
];

export function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/75 to-[#0a0a0c]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-[#0a0a0c]/60" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pb-16 pt-32 sm:px-6 md:pt-36 lg:px-8">
        <motion.div {...rise(0)} className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-zinc-200 backdrop-blur">
            <MapPin className="h-3.5 w-3.5 text-[#e11d2e]" />
            Windhoek, Namibia
          </span>
          <span className="inline-flex items-center rounded-full border border-[#e11d2e]/40 bg-[#e11d2e]/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#ff8f9a] backdrop-blur">
            Non-Profit Sports Development
          </span>
        </motion.div>

        <motion.h1
          {...rise(0.12)}
          className="mt-7 max-w-4xl font-display text-5xl font-bold uppercase leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-8xl"
        >
          Developing Boxers.
          <span className="block text-[#e11d2e]">Building Champions.</span>
          <span className="block">Creating Opportunity.</span>
        </motion.h1>

        <motion.p {...rise(0.24)} className="mt-7 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
          AC Boxing Sport &amp; Entertainment nurtures young talent and advances
          the sport of boxing in Namibia — from grassroots participation in
          Windhoek to the professional stage through AC Promotions.
        </motion.p>

        <motion.div {...rise(0.36)} className="mt-9 flex flex-wrap gap-4">
          <a
            href="#academy"
            className="rounded-sm bg-[#e11d2e] px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-[#e11d2e]/25 transition-all hover:bg-[#c41423] hover:shadow-[#e11d2e]/40"
          >
            Support the Academy
          </a>
          <a
            href="#about"
            className="rounded-sm border border-white/25 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur transition-colors hover:border-white/60 hover:bg-white/5"
          >
            Explore Our Work
          </a>
        </motion.div>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="relative border-t border-white/10 bg-black/45 backdrop-blur-md"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 px-4 py-7 sm:px-6 md:grid-cols-4 lg:px-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="pr-4">
              <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-400 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
