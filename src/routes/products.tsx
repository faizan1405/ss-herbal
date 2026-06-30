import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PRODUCTS, CATEGORIES } from "@/lib/brand";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Shop All Products — SS Herbal" },
      { name: "description", content: "Browse the complete SS Herbal collection of premium herbal skincare and haircare." },
    ],
  }),
  component: Products,
});

function Products() {
  const [cat, setCat] = useState<string>("all");
  const list = cat === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat);

  return (
    <div className="bg-gradient-hero pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal as="p" className="text-xs uppercase tracking-[0.3em] text-primary">Shop</Reveal>
        <Reveal as="h1" className="mt-3 font-display text-5xl sm:text-6xl">
          All <span className="italic gradient-text">Products</span>
        </Reveal>
        <Reveal as="p" className="mt-4 max-w-xl text-muted-foreground">
          Premium herbal formulations for radiant skin and lustrous hair.
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2">
          <button
            onClick={() => setCat("all")}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              cat === "all" ? "bg-gradient-primary text-white shadow-soft" : "bg-white border border-border hover:border-primary"
            }`}
          >
            All
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c.slug}
              onClick={() => setCat(c.slug)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                cat === c.slug ? "bg-gradient-primary text-white shadow-soft" : "bg-white border border-border hover:border-primary"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
