const ROSTER = [
  "Julius Indongo",
  "Paulus Moses",
  "Sakaria Lukas",
  "Walter Kautondokwa",
  "Flame Nangolo",
  "Vikapita Meroro",
  "Charles Shinima",
  "Paulus Ambunda",
  "Hafeni Ngesheya",
  "Divas Namugongo",
];

const INDUSTRY = [
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

const FACTS = [
  { label: "Based in", value: "Windhoek, Namibia" },
  { label: "What it is", value: "A non-profit sports development organisation" },
  { label: "Facility", value: "The AC Boxing Academy, Eros Primary School" },
];

export function About() {
  return (
    <section id="organisation" className="wrap py-[110px] md:py-[150px]">
      <h2 className="head" data-reveal>
        Who we are
      </h2>

      {/* Row one: side facts at the left margin, wide paragraph from the table line */}
      <div className="mt-14 grid grid-cols-1 gap-y-10 md:grid-cols-12 md:gap-y-0">
        <dl className="contents md:col-span-4">
          {FACTS.map((fact) => (
            <div key={fact.label} className="mb-5 max-w-[220px] md:block">
              <dt className="small muted">{fact.label}</dt>
              <dd className="small mt-1">{fact.value}</dd>
            </div>
          ))}
        </dl>
        <p
          data-reveal
          className="lead max-w-[56ch] md:col-span-8 md:col-start-5"
        >
          AC Boxing advances boxing in Namibia and creates opportunities for
          young people through sport. Grassroots coaching sits under the same
          name as professional promotion, so talent raised at Eros can train,
          compete and turn professional without leaving the family that
          developed it.
        </p>
      </div>

      {/* Row two: the record of the practice, two list columns from the table line */}
      <div className="mt-[100px] grid grid-cols-1 gap-y-12 md:mt-[130px] md:grid-cols-12">
        <p className="small muted md:col-span-4">The record</p>
        <div className="md:col-span-8 md:col-start-5" data-reveal data-stagger>
          <div className="grid grid-cols-1 gap-x-16 gap-y-12 sm:grid-cols-2">
            <div>
              <h3 className="small font-medium">Boxers we have promoted</h3>
              <ul className="mt-5 space-y-3" style={{ fontSize: "1.25rem", lineHeight: 1.3 }}>
                {ROSTER.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="small font-medium">Industry relationships</h3>
              <ul className="mt-5 space-y-3" style={{ fontSize: "1.25rem", lineHeight: 1.3 }}>
                {INDUSTRY.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="small muted mt-12 max-w-[52ch]">
            Names provided by the organisation. Specific promotional or
            management roles can be documented where due diligence requires it.
          </p>
        </div>
      </div>
    </section>
  );
}
