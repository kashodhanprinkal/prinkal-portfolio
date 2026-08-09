import HighlightText from "@/components/ui/HighlightText";
import AnimatedHeading from "@/components/ui/AnimatedHeading";

const quickFacts = [
  "Frontend & Backend Development",
  "QA & Software Testing",
  "Interactive Digital Experiences",
  "Clean & Scalable Code",
  "Performance Optimization",
  "Continuous Learning",
];

// Irregular jag heights on all four edges — hand-torn, not a repeating zigzag.
const TORN_SHEET_CLIP =
  "polygon(0.8% 1%, 4% 0.5%, 8% 1.2%, 12% 0.6%, 17% 1.1%, 22% 0.5%, 27% 1%, 32% 0.4%, 37% 1.1%, 42% 0.6%, 47% 1%, 52% 0.4%, 57% 1%, 62% 0.5%, 67% 1.1%, 72% 0.5%, 77% 1%, 82% 0.5%, 87% 1.1%, 92% 0.5%, 97% 1%, 99.3% 2%, 98.7% 8%, 99.4% 14%, 98.8% 20%, 99.4% 27%, 98.8% 34%, 99.3% 41%, 98.7% 48%, 99.4% 55%, 98.8% 62%, 99.3% 69%, 98.7% 76%, 99.4% 83%, 98.8% 90%, 99.2% 98%, 94% 98.7%, 89% 98%, 84% 98.8%, 79% 98.2%, 74% 98.8%, 69% 98.1%, 64% 98.7%, 59% 98.2%, 54% 98.8%, 49% 98.1%, 44% 98.7%, 39% 98.2%, 34% 98.8%, 29% 98.1%, 24% 98.7%, 19% 98.2%, 14% 98.8%, 9% 98.1%, 4% 98.7%, 0.8% 97%, 1.2% 91%, 0.6% 84%, 1.1% 77%, 0.5% 70%, 1.1% 63%, 0.6% 56%, 1.1% 49%, 0.5% 42%, 1.1% 35%, 0.6% 28%, 1.1% 21%, 0.5% 14%, 1.2% 7%)";

const PAPER_GRAIN =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.7'/%3E%3C/svg%3E\")";

export default function About() {
  return (
    <section
      id="about"
      style={{
        "--paper": "#f7f0df",
        "--ink": "#403b35",
        "--ink-soft": "#686054",
        "--ink-faint": "#918675",
        "--ink-faintest": "#aaa091",
        "--rule": "#b8aa94",
        "--accent": "#B5773A",
      }}
      className="py-16 md:py-24 dark:[--paper:#242019] dark:[--ink:#e9e2d4] dark:[--ink-soft:#c7bda9] dark:[--ink-faint:#8f8574] dark:[--ink-faintest:#766c5c] dark:[--rule:#4a4234] dark:[--accent:#d9995c]"
    >
      {/* Keep your consistent heading */}
      <AnimatedHeading>About Me</AnimatedHeading>

      <div className="relative mx-auto mt-10 max-w-6xl px-3 md:px-6">
        {/* Paper shadow underneath */}
        <div
          aria-hidden="true"
          className="absolute inset-2 translate-y-3 rotate-[0.5deg] bg-black/10 blur-md dark:bg-black/30"
        />

        {/* Notebook paper */}
        <div
          className="relative overflow-hidden bg-[var(--paper)] px-6 py-12 shadow-[0_12px_35px_rgba(60,45,25,0.12)] sm:px-8 md:px-16 md:py-16 dark:shadow-[0_12px_35px_rgba(0,0,0,0.4)]"
          style={{ clipPath: TORN_SHEET_CLIP }}
        >
          {/* Notebook ruled lines */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, transparent 0px, transparent 31px, color-mix(in srgb, var(--rule) 55%, transparent) 32px)",
            }}
          />

          {/* Paper texture */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-multiply dark:opacity-[0.06] dark:mix-blend-overlay"
            style={{ backgroundImage: PAPER_GRAIN }}
          />

          {/* Notebook red margin */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-8 top-0 hidden w-px bg-red-400/25 md:block dark:bg-red-400/20"
          />

          {/* Content */}
          <div className="relative z-10">
            {/* Small page details */}
            <div className="mb-10 flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                Personal Notes
              </span>
              <span className="font-mono text-xs text-[var(--ink-faintest)]">
                01 / 01
              </span>
            </div>

            <div className="grid items-start gap-14 md:grid-cols-[1.15fr_0.85fr]">
              {/* Main text */}
              <div>
                <p className="text-2xl leading-[1.8] text-[var(--ink)] md:text-[28px]">
                  I turn <HighlightText text="ideas into digital experiences" />{" "}
                  that feel smooth, intuitive, and engaging.
                </p>

                <p className="mt-7 text-lg leading-[1.9] text-[var(--ink-soft)]">
                  I work across frontend, backend, and QA, combining
                  technology with thoughtful design to build products that
                  are reliable, easy to use, and enjoyable to explore.
                </p>

                <p className="mt-7 text-lg leading-[1.9] text-[var(--ink-soft)]">
                  I care about the small details — interactions, performance,
                  accessibility, and those moments that make users{" "}
                  <HighlightText text="stop, explore, and remember" />.
                </p>
              </div>

              {/* Quick facts */}
              <div className="md:border-l md:border-[var(--rule)]/40 md:pl-10">
                <h3 className="mb-6 font-mono text-sm font-semibold uppercase tracking-[0.15em] text-[var(--ink-soft)]">
                  Quick Facts
                </h3>

                <div className="space-y-1">
                  {quickFacts.map((fact, index) => (
                    <div
                      key={fact}
                      className="group flex items-center gap-4 rounded-md py-2.5 px-1 -mx-1 transition-colors duration-300 hover:bg-black/[0.03] dark:hover:bg-white/[0.04]"
                    >
                      <span className="font-mono text-xs text-[var(--ink-faintest)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-medium text-[var(--ink)] transition-transform duration-300 group-hover:translate-x-1">
                        {fact}
                      </span>
                      <span className="ml-auto text-[var(--accent)] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                        ↗
                      </span>
                    </div>
                  ))}
                </div>

                {/*Handwritten note*/}
                <div className="mt-10 -rotate-2 border-l-2 border-[var(--accent)]/40 pl-4">
                  <p className="font-mono text-sm leading-6 text-[var(--accent)]">
                    "Make it work.
                    <br />
                    Make it feel right."
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="mt-14 flex items-center justify-between border-t border-[var(--rule)]/40 pt-6">
              <span className="font-mono text-xs text-[var(--ink-faintest)]">
                Keep building. Keep learning.
              </span>
              <span aria-hidden="true" className="text-[var(--accent)]">
                ✦
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}