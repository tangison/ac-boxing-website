export function Figures() {
  return (
    <section id="record" className="bg-[var(--field-1)] text-[var(--field-1-ink)]">
      <div className="wrap flex flex-col justify-center py-[110px] md:py-[170px]">
        <h2 className="sr-only">The record so far</h2>
        <p
          data-reveal
          className="max-w-[1100px] text-[clamp(1.375rem,2.5vw,2.25rem)] font-normal leading-[1.4] md:leading-[1.35]"
        >
          <strong className="font-bold text-[var(--ink)]">45</strong>{" "}
          amateurs aged 4 to 20 train here,{" "}
          <strong className="font-bold text-[var(--ink)]">20</strong> fight as
          professionals,{" "}
          <strong className="font-bold text-[var(--ink)]">18</strong> shows
          promoted, and the{" "}
          <strong className="font-bold text-[var(--ink)]">
            N$1.5&nbsp;million
          </strong>{" "}
          academy rises at Eros.
        </p>
      </div>
    </section>
  );
}
