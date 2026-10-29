import { Reveal } from "./reveal";

interface SectionHeadingProps {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "text-center" : ""}>
      <div
        className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}
      >
        <span className="h-[3px] w-10 bg-[#e11d2e]" aria-hidden="true" />
        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e11d2e]">
          {kicker}
        </span>
        {centered && <span className="h-[3px] w-10 bg-[#e11d2e]" aria-hidden="true" />}
      </div>
      <h2 className="mt-4 font-display text-4xl font-semibold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
