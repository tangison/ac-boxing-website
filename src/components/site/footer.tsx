const QUICK_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Grassroots & Youth", href: "#grassroots" },
  { label: "Academy Project", href: "#academy" },
  { label: "AC Promotions", href: "#promotions" },
  { label: "Community Work", href: "#community" },
  { label: "Partnerships", href: "#partner" },
];

const FOCUS_AREAS = [
  "Grassroots boxing & youth development",
  "Athlete pathways & mentorship",
  "The AC Boxing Academy facility",
  "Professional promotion via AC Promotions",
  "Education & community support",
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[#08080a]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center bg-[#e11d2e] font-display text-lg font-bold text-white">
                AC
              </span>
              <span className="leading-none">
                <span className="block font-display text-lg font-semibold uppercase tracking-wide text-white">
                  AC Boxing
                </span>
                <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-400">
                  Sport &amp; Entertainment
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-zinc-400">
              A Namibia-based non-profit sports development organisation —
              developing boxers, building champions and creating opportunity in
              Windhoek and beyond.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Focus areas */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Our Focus
            </h3>
            <ul className="mt-5 space-y-3">
              {FOCUS_AREAS.map((area) => (
                <li key={area} className="text-sm leading-relaxed text-zinc-400">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} AC Boxing Sport &amp; Entertainment. All rights reserved.
          </p>
          <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Developing Boxers · Building Champions · Creating Opportunity
          </p>
        </div>
      </div>
    </footer>
  );
}
