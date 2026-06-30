import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, RevealWords } from "@/components/reveal";
import { ArrowRight, Leaf, Heart, Sparkles, Target } from "lucide-react";
import heroImg from "@/assets/hero-products.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SS Herbal" },
      { name: "description", content: "Discover the story, mission, and Ayurvedic philosophy behind SS Herbal premium cosmetics." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="bg-gradient-hero pt-32">
      <section className="mx-auto max-w-5xl px-6 text-center">
        <Reveal as="p" className="text-xs uppercase tracking-[0.3em] text-primary">Our Story</Reveal>
        <h1 className="mt-4 font-display text-5xl leading-[1.05] sm:text-7xl">
          <RevealWords text="A love letter to" />
          <br />
          <span className="italic gradient-text"><RevealWords text="nature's intelligence." /></span>
        </h1>
        <Reveal as="p" className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          SS Herbal was born from a simple belief — that nature already holds every secret for beautiful skin. We just bottle it, gently.
        </Reveal>
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-6">
        <Reveal>
          <div className="overflow-hidden rounded-[3rem] shadow-glow">
            <img src={heroImg} alt="SS Herbal" className="h-auto w-full" />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-10 md:grid-cols-2">
          {[
            { icon: Target, t: "Mission", d: "To craft uncompromisingly natural cosmetics that celebrate Indian botanicals and modern beauty rituals." },
            { icon: Sparkles, t: "Vision", d: "A world where skincare is honest, transparent, and gentle on people and planet alike." },
            { icon: Leaf, t: "Our Process", d: "Sourced from organic farms, slow-crafted in small batches, tested for purity in certified labs." },
            { icon: Heart, t: "Ayurvedic Philosophy", d: "We honour Ayurveda as a living science — pairing herbs with intent, balance, and care." },
          ].map((b, i) => (
            <Reveal key={b.t} delay={i * 0.08}>
              <div className="rounded-3xl glass-panel p-10 shadow-card card-lift">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-white">
                  <b.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 font-display text-3xl">{b.t}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-28 text-center">
        <Reveal as="h2" className="font-display text-4xl">Begin your ritual.</Reveal>
        <Reveal>
          <Link to="/products" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-medium text-white btn-magnetic">
            Shop Collection <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
