const LINKS = [
  { label: "The gym", href: "#gym" },
  { label: "The academy", href: "#academy" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="footer-field">
      <div className="wrap flex-1 pt-10 pb-10 flex flex-col">
        {/* Top row of notes */}
        <div className="grid grid-cols-2 gap-y-6 md:grid-cols-12">
          <p className="font-medium md:col-span-7" style={{ fontSize: "var(--step-small)" }}>
            AC Boxing Sport &amp; Entertainment
          </p>
          <p className="md:col-span-5 md:text-right" style={{ fontSize: "var(--step-small)" }}>
            <a className="link" href="#top">
              Back to top
            </a>
          </p>
          <p className="md:col-span-7" style={{ fontSize: "var(--step-small)" }}>Eros Primary School, Windhoek, Namibia</p>
          <p className="md:col-span-7" style={{ fontSize: "var(--step-small)" }}>
            Founder and promoter: Immanuel Paulus
          </p>
        </div>

        {/* Tall gap, then the contact line as the display type */}
        <div className="mt-auto pt-[12svh]">
          <a className="footer-email block" href="mailto:info@acboxing.org.na">
            info@acboxing
            <wbr />
            .org.na
          </a>

          <div className="mt-14 flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between" style={{ fontSize: "var(--step-small)" }}>
            <nav aria-label="Footer" className="flex gap-8">
              {LINKS.map((link) => (
                <a key={link.href} className="link" href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
            <p className="max-w-[62ch]">
              Print and pictures: José Guadalupe Posada, The Metropolitan Museum
              of Art (public domain); Wellcome Collection via Wikimedia Commons
              (CC BY 4.0); "Boxing training" by Evworo (CC BY-SA 3.0); stock
              photographs awaiting the gym's own.
            </p>
            <p>Windhoek, 2026</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
