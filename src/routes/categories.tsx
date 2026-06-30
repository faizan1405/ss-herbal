import { createFileRoute, Link } from "@tanstack/react-router";
import { CATEGORIES } from "@/lib/brand";
import { Reveal } from "@/components/reveal";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Categories — SS Herbal" },
      { name: "description", content: "Explore SS Herbal categories: face packs, hair oils, soaps, serums and more." },
    ],
  }),
  component: Categories,
});

function Categories() {
  return (
    <div className="bg-gradient-hero pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal as="p" className="text-xs uppercase tracking-[0.3em] text-primary">Collections</Reveal>
        <Reveal as="h1" className="mt-3 font-display text-5xl sm:text-6xl">
          Curated <span className="italic gradient-text">Categories</span>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.05}>
              <Link to="/products" className="group relative block aspect-[4/5] overflow-hidden rounded-3xl shadow-card card-lift">
                <img src={c.image} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-2xl text-white">{c.name}</h3>
                  <div className="mt-1 inline-flex items-center gap-1 text-sm text-white/80">
                    Shop collection <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
