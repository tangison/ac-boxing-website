const ROWS = [
  {
    project: "Girls' hostel renovation, donations facilitated from Los Angeles",
    where: "Eros girls' school hostel",
    amount: "N$1.2 million",
  },
  {
    project: "School library with 45 computers and a projector",
    where: "Eros Primary School",
    amount: "N$300,000",
  },
  {
    project: "Four new toilets serving the school",
    where: "Eros Primary School",
    amount: "4 facilities",
  },
];

export function Record() {
  return (
    <section id="community" className="wrap py-[110px] md:py-[150px]">
      <h2 className="head md:col-start-1" data-reveal>
        Beyond
        <span className="block md:ml-[17%]">the ring</span>
      </h2>

      <div className="mt-[72px] md:pr-0" data-reveal data-stagger>
        <table className="record-table">
          <caption className="sr-only">
            Contributions to education and school infrastructure
          </caption>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.project}>
                <td className="w-[42%] pr-6">{row.project}</td>
                <td className="w-[38%] pr-6 text-[#5f5f5f]">{row.where}</td>
                <td className="w-[20%] text-right font-medium tabular-nums">
                  {row.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="small muted mt-8 max-w-[52ch]">
          Contributions and donations facilitated by the organisation.
          Supporting records can be provided where required.
        </p>
      </div>
    </section>
  );
}
