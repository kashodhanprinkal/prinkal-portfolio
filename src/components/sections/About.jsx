import HighlightText from "@/components/ui/HighlightText";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
const tape = (
  <svg xmlns="http://www.w3.org/2000/svg" width="95" height="80" viewBox="0 0 95 80" fill="none">
    <path
      d="M1 45L70.282 5L88.282 36.1769L19 76.1769L1 45Z"
      className="fill-slate-900"
    />
  </svg>
);

const quickFacts = [
  "Modern Web Development",
  "User-Centered Design",
  "Clean & Scalable Code",
  "Performance Optimization",
  "Continuous Learning",
  "Attention to Every Detail",
];

export default function About() {
  return (
    <section id="about" className=" max-w-7xl mx-auto py-4">
      <div className="flex justify-center mb-10">
  <AnimatedHeading>About Me</AnimatedHeading>
</div>

      <div className="relative bg-amber-100  px-8 py-12">
        {/* Tape decorations */}
        <div className="hidden md:block absolute -top-4 -left-8 w-[80px] h-[36px] scale-75">
          {tape}
        </div>
        <div className="hidden md:block absolute -top-4 -right-8 rotate-90 w-[80px] h-[36px] scale-75">
          {tape}
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left div — paragraph */}
          <div>
            <p className="text-2xl text-muted-foreground leading-relaxed ">
              I craft{" "}
              <HighlightText text="modern, high-performance, and user-centered" />{" "}
              web applications that transform ideas into seamless digital
              experiences. Driven by a passion for clean code, thoughtful design,
              and meaningful interactions, I focus on building products that are{" "}
              <HighlightText text="intuitive, accessible, and built to last" />.
              Every project is an opportunity to solve real problems, create
              lasting impact, and deliver experiences users genuinely enjoy.
            </p>
          </div>

          {/* Right div — quick facts, numbered style */}
          <div className="bg-white/50 border border-zinc-400/30 rounded-2xl p-6 space-y-4">
            <h3 className="font-semibold text-lg mb-2">Quick Facts</h3>
            {quickFacts.map((fact, index) => (
              <div key={fact} className="flex items-center gap-4">
                <span className="text-sm font-mono text-zinc-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-zinc-700 font-medium">{fact}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}