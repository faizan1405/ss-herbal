import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Minus, Plus, ShoppingBag, Heart, Star, ShieldCheck, Truck, Leaf } from "lucide-react";
import { PRODUCTS } from "@/lib/brand";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/products/$slug")({
  head: ({ params }) => {
    const p = PRODUCTS.find((x) => x.slug === params.slug);
    return {
      meta: [
        { title: p ? `${p.name} — SS Herbal` : "Product — SS Herbal" },
        { name: "description", content: p?.tagline ?? "Premium herbal product." },
        { property: "og:image", content: p?.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="grid min-h-[60vh] place-items-center px-6 pt-32">
      <div className="text-center">
        <h1 className="font-display text-4xl">Product not found</h1>
        <Link to="/products" className="mt-6 inline-block rounded-full bg-gradient-primary px-6 py-3 text-sm text-white btn-magnetic">Back to shop</Link>
      </div>
    </div>
  ),
  errorComponent: () => (
    <div className="grid min-h-[60vh] place-items-center px-6 pt-32"><p className="text-muted-foreground">Couldn't load product.</p></div>
  ),
  component: ProductPage,
  loader: ({ params }) => {
    const p = PRODUCTS.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return p;
  },
});

function ProductPage() {
  const p = Route.useLoaderData();
  const [qty, setQty] = useState(1);
  const related = PRODUCTS.filter((x) => x.slug !== p.slug).slice(0, 4);

  return (
    <div className="bg-gradient-hero pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <nav className="mb-8 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link> / <Link to="/products" className="hover:text-primary">Shop</Link> / <span className="text-foreground">{p.name}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="sticky top-28 overflow-hidden rounded-[3rem] bg-gradient-blush shadow-glow">
              <img src={p.image} alt={p.name} className="h-auto w-full" />
            </div>
          </Reveal>

          <div>
            <Reveal as="p" className="text-xs uppercase tracking-[0.3em] text-primary">{p.category.replace("-", " ")}</Reveal>
            <Reveal as="h1" className="mt-3 font-display text-4xl sm:text-5xl">{p.name}</Reveal>
            <Reveal as="p" className="mt-3 text-lg text-muted-foreground">{p.tagline}</Reveal>

            <Reveal>
              <div className="mt-4 flex items-center gap-2 text-sm">
                <div className="flex text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="font-medium">{p.rating}</span>
                <span className="text-muted-foreground">({p.reviews} reviews)</span>
              </div>

              <div className="mt-6 flex items-baseline gap-3">
                <span className="font-display text-4xl gradient-text">₹{p.price}</span>
                <span className="text-lg text-muted-foreground line-through">₹{p.mrp}</span>
                <span className="rounded-full bg-accent/30 px-3 py-1 text-xs font-medium text-accent-foreground">
                  Save ₹{p.mrp - p.price}
                </span>
              </div>

              <div className="mt-8 space-y-3">
                <h3 className="font-display text-lg">Key Benefits</h3>
                <div className="flex flex-wrap gap-2">
                  {p.benefits.map((b) => (
                    <span key={b} className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground">
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <h3 className="font-display text-lg">Ingredients</h3>
                <p className="text-sm text-muted-foreground">{p.ingredients.join(" · ")}</p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex items-center gap-3 rounded-full border border-border bg-white p-1">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="grid h-10 w-10 place-items-center rounded-full hover:bg-secondary">
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-6 text-center font-medium">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="grid h-10 w-10 place-items-center rounded-full hover:bg-secondary">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-medium text-white btn-magnetic">
                  <ShoppingBag className="h-4 w-4" /> Add to Cart
                </button>
                <button className="grid h-14 w-14 place-items-center rounded-full border border-border bg-white hover:text-primary transition-colors" aria-label="Wishlist">
                  <Heart className="h-5 w-5" />
                </button>
              </div>

              <Link to="/checkout" className="mt-3 block w-full rounded-full bg-foreground py-4 text-center text-sm font-medium text-background btn-magnetic">
                Buy Now
              </Link>

              <div className="mt-8 grid grid-cols-3 gap-3 border-t border-border pt-6 text-xs text-muted-foreground">
                <div className="flex flex-col items-center gap-1 text-center"><Leaf className="h-5 w-5 text-primary" /> 100% Natural</div>
                <div className="flex flex-col items-center gap-1 text-center"><ShieldCheck className="h-5 w-5 text-primary" /> Lab Tested</div>
                <div className="flex flex-col items-center gap-1 text-center"><Truck className="h-5 w-5 text-primary" /> Free Shipping</div>
              </div>
            </Reveal>
          </div>
        </div>

        <section className="mt-24">
          <h2 className="font-display text-3xl">You may also love</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (<ProductCard key={r.slug} product={r} />))}
          </div>
        </section>
      </div>
    </div>
  );
}
