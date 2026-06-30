import { createFileRoute, Link } from "@tanstack/react-router";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Cart — SS Herbal" }] }),
  component: Cart,
});

function Cart() {
  return (
    <div className="bg-gradient-hero pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-primary text-white shadow-glow">
            <ShoppingBag className="h-10 w-10" />
          </div>
        </Reveal>
        <Reveal as="h1" className="mt-8 font-display text-5xl">Your cart awaits.</Reveal>
        <Reveal as="p" className="mt-4 text-muted-foreground">Add a little luxury to your daily ritual.</Reveal>
        <Reveal>
          <Link to="/products" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-medium text-white btn-magnetic">
            Browse Products <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
