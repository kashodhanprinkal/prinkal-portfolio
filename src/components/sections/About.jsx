import HighlightText from "@/components/ui/HighlightText";

export default function About(){
    return(
        <section id="about" className="bg-zinc-300 text-2xl px-8 max-w-7xl mc-auto">
            <p className="text-muted-foreground leading-relaxed">
  I specialize in developing{" "}
  <HighlightText text="responsive, accessible, and high-performance" /> user
  interfaces that deliver seamless digital experiences. By combining
  thoughtful design with <HighlightText text="modern technologies" />, I
  transform concepts into <HighlightText text="interactive applications" />{" "}
  that users enjoy using.
</p>
        </section>
    )
}