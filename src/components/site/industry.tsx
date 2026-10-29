const ORGS = [
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

export function Industry() {
  return (
    <section className="industry-band py-[110px] md:py-[150px]">
      <div className="wrap">
        <h2 className="head" data-reveal>
          Known to the industry
        </h2>
        <p
          className="mt-6 max-w-[46ch] text-[var(--field-4-muted)]"
          style={{ fontSize: "var(--step-body)" }}
          data-reveal
        >
          The promotional work engages the international boxing scene, opening
          doors for Namibian boxers.
        </p>

        <ul
          className="mt-16 grid grid-cols-1 gap-x-16 gap-y-8 sm:grid-cols-2 md:gap-y-10"
          data-reveal
          data-stagger
        >
          {ORGS.map((org) => (
            <li key={org} className="industry-name">
              {org}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
