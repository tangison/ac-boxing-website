import { Motion } from "./motion";

export function Hero() {
  return (
    <header className="relative flex min-h-[88svh] flex-col" id="top">
      {/* Top row: wordmark, links on the axis, one action */}
      <div className="wrap grid grid-cols-2 items-baseline gap-y-3 pt-11 md:grid-cols-12">
        <a
          href="#top"
          className="text-lg font-bold tracking-tight md:col-span-5"
          aria-label="AC Boxing, back to top"
        >
          AC Boxing
        </a>

        <nav
          aria-label="Main"
          className="hidden text-[1.0625rem] min-[900px]:col-span-4 min-[900px]:col-start-6 min-[900px]:block"
        >
          <a className="link mr-8" href="#gym">
            The gym
          </a>
          <a className="link" href="#contact">
            Contact
          </a>
        </nav>

        <div className="justify-self-end min-[900px]:col-span-3 min-[900px]:col-start-10">
          <a href="#academy" className="button hidden min-[900px]:inline-block">
            Support the academy
          </a>
        </div>

        {/* Phone: the two links fold behind a menu word */}
        <details className="relative min-[900px]:hidden">
          <summary className="cursor-pointer list-none text-[1.0625rem] font-medium underline underline-offset-[0.18em] decoration-[0.07em]">
            Menu
          </summary>
          <nav
            aria-label="Main"
            className="absolute right-0 top-8 z-10 flex w-56 flex-col gap-4 bg-white p-6"
          >
            <a className="link" href="#gym">
              The gym
            </a>
            <a className="link" href="#academy">
              The academy
            </a>
            <a className="link" href="#contact">
              Contact
            </a>
          </nav>
        </details>
      </div>

      {/* A deliberate void, then the statement on the axis, in the bottom third */}
      <div className="wrap mt-auto grid grid-cols-1 items-end gap-y-8 pb-[72px] md:grid-cols-12">
        <p
          data-load
          style={{ "--d": "480ms" } as React.CSSProperties}
          className="max-w-[32ch] text-lg leading-relaxed md:order-1 md:col-span-4 md:row-start-1 md:mb-1"
        >
          A non-profit gym in Windhoek developing young boxers and professional
          champions, at Eros Primary School.
        </p>

        <div className="md:order-2 md:col-span-7 md:col-start-6 md:row-start-1">
          <h1 className="lines display hero-display max-w-[15ch]">
            <span className="line">
              <span data-line style={{ "--i": 0 } as React.CSSProperties}>
                From age four
              </span>
            </span>
            <span className="line">
              <span data-line style={{ "--i": 1 } as React.CSSProperties}>
                to fight night
              </span>
            </span>
          </h1>

          <div
            data-load
            style={{ "--d": "620ms" } as React.CSSProperties}
            className="mt-9 min-[900px]:hidden"
          >
            <a href="#academy" className="button">
              Support the academy
            </a>
          </div>
        </div>
      </div>
      <Motion />
    </header>
  );
}
