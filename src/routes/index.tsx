import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Leaf, Sparkles, ShieldCheck, Truck, Award, Heart } from "lucide-react";
import heroImg from "@/assets/hero-products.jpg";
import { CATEGORIES, PRODUCTS, INGREDIENTS } from "@/lib/brand";
import { ProductCard } from "@/components/product-card";
import { Reveal, RevealWords } from "@/components/reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SS Herbal — Nature's Touch. Beautifully Yours." },
      { name: "description", content: "Premium herbal cosmetics crafted with Ayurvedic ingredients. Natural skincare and haircare for radiant beauty." },
      { property: "og:title", content: "SS Herbal — Premium Herbal Cosmetics" },
      { property: "og:description", content: "Reveal your natural beauty with Ayurvedic-inspired skincare." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <Bestsellers />
      <HerbalPromise />
      <Ingredients />
      <WhyChoose />
      <Reviews />
      <OurStory />
      <CTA />
      <Newsletter />
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-gradient-hero pt-28">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-32 top-40 h-96 w-96 rounded-full bg-secondary/60 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-accent/30 blur-3xl animate-blob" style={{ animationDelay: "-4s" }} />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-20 lg:grid-cols-2">
        <motion.div style={{ y, opacity }} className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-2 text-xs font-medium text-primary"
          >
            <Sparkles className="h-3.5 w-3.5" />
            100% Ayurvedic · Lab Tested
          </motion.div>

          <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            <RevealWords text="Reveal Your" />
            <br />
            <span className="italic gradient-text"><RevealWords text="Natural Beauty." /></span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground"
          >
            Experience the purity of herbal skincare crafted with nature's finest ingredients and the timeless wisdom of Ayurveda.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link to="/products" className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-sm font-medium text-white btn-magnetic">
              Shop Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/categories" className="inline-flex items-center gap-2 rounded-full bg-white/70 px-7 py-4 text-sm font-medium text-foreground backdrop-blur border border-border hover:bg-white transition-colors">
              Explore Products
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-4"
          >
            {[
              { n: "50k+", l: "Happy customers" },
              { n: "100%", l: "Natural" },
              { n: "4.9★", l: "Rated" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl gradient-text">{s.n}</div>
                <div className="text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-soft blur-2xl" />
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-[3rem] shadow-glow"
          >
            <img src={heroImg} alt="SS Herbal premium herbal cosmetics" width={1600} height={1280} className="h-auto w-full" />
          </motion.div>

          {/* Floating cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, duration: 0.8 }}
            className="absolute -left-4 top-12 hidden rounded-2xl glass-panel p-4 shadow-card sm:block animate-float-slow"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-accent/40">
                <Leaf className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <div className="text-sm font-medium">Pure Botanicals</div>
                <div className="text-xs text-muted-foreground">Farm to face</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute -right-4 bottom-16 hidden rounded-2xl glass-panel p-4 shadow-card sm:block animate-float"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-secondary">
                <Heart className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-sm font-medium">Cruelty Free</div>
                <div className="text-xs text-muted-foreground">Always & forever</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Trust strip */}
      <div className="relative border-y border-border/50 bg-white/40 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-around gap-6 px-6 py-6 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {["Lab Tested", "GMP Certified", "ISO Certified", "Organic", "Free Shipping ₹499+", "COD Available"].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCategories() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Reveal as="p" className="text-xs uppercase tracking-[0.3em] text-primary">Shop by Category</Reveal>
          <Reveal as="h2" className="mt-3 max-w-2xl font-display text-4xl sm:text-5xl">
            Curated collections, <span className="italic gradient-text">crafted by nature.</span>
          </Reveal>
        </div>
        <Link to="/categories" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
          View all <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {CATEGORIES.map((c, i) => (
          <Reveal key={c.slug} delay={i * 0.05}>
            <Link to="/categories" className="group relative block aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-blush shadow-card card-lift">
              <img src={c.image} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-xl text-white">{c.name}</h3>
                <div className="mt-1 inline-flex items-center gap-1 text-xs text-white/80">
                  Shop now <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Bestsellers() {
  return (
    <section className="relative bg-gradient-blush py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <Reveal as="p" className="text-xs uppercase tracking-[0.3em] text-primary">Bestsellers</Reveal>
          <Reveal as="h2" className="mt-3 font-display text-4xl sm:text-5xl">
            Loved by <span className="italic gradient-text">thousands.</span>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.slice(0, 4).map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HerbalPromise() {
  const promises = [
    { icon: Leaf, t: "100% Natural", d: "No parabens, sulphates or harsh chemicals." },
    { icon: ShieldCheck, t: "Lab Tested", d: "Every batch verified for purity and safety." },
    { icon: Award, t: "GMP Certified", d: "Manufactured under strict quality standards." },
    { icon: Truck, t: "Free Shipping", d: "Complimentary delivery on orders above ₹499." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Reveal as="p" className="text-xs uppercase tracking-[0.3em] text-primary">Our Promise</Reveal>
          <Reveal as="h2" className="mt-3 font-display text-4xl sm:text-5xl">
            A promise we<br /><span className="italic gradient-text">keep, every drop.</span>
          </Reveal>
          <Reveal as="p" className="mt-6 max-w-md text-muted-foreground">
            Every SS Herbal formula is a quiet vow — to your skin, to nature, to the women who once whispered these secrets across generations.
          </Reveal>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {promises.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.08}>
              <div className="group rounded-3xl glass-panel p-6 shadow-card card-lift">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-white transition-transform group-hover:rotate-6">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-xl">{p.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ingredients() {
  return (
    <section className="relative overflow-hidden bg-gradient-soft py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <Reveal as="p" className="text-xs uppercase tracking-[0.3em] text-primary">Featured Ingredients</Reveal>
          <Reveal as="h2" className="mt-3 font-display text-4xl sm:text-5xl">
            Powered by <span className="italic gradient-text">nature's pharmacy.</span>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {INGREDIENTS.map((ing, i) => (
            <Reveal key={ing.name} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -8, rotate: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-3xl bg-white p-6 text-center shadow-card"
              >
                <div
                  className="mx-auto grid h-20 w-20 place-items-center rounded-full text-4xl animate-float"
                  style={{ backgroundColor: `color-mix(in oklab, ${ing.color} 25%, white)`, animationDelay: `${i * 0.3}s` }}
                >
                  {ing.emoji}
                </div>
                <h3 className="mt-4 font-display text-lg">{ing.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{ing.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const items = [
    { n: "01", t: "Ayurvedic Heritage", d: "Formulations rooted in 5000 years of plant wisdom." },
    { n: "02", t: "Modern Science", d: "Time-tested herbs amplified by clinical research." },
    { n: "03", t: "Sustainable Sourcing", d: "Ethically harvested from organic farms across India." },
    { n: "04", t: "Visible Results", d: "Real, glowing transformations within 4 weeks." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-14 text-center">
        <Reveal as="p" className="text-xs uppercase tracking-[0.3em] text-primary">Why SS Herbal</Reveal>
        <Reveal as="h2" className="mt-3 font-display text-4xl sm:text-5xl">
          The difference is in <span className="italic gradient-text">every detail.</span>
        </Reveal>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <Reveal key={it.n} delay={i * 0.08}>
            <div className="group h-full rounded-3xl border border-border bg-white p-8 transition-all duration-500 hover:border-primary hover:-translate-y-2 hover:shadow-glow">
              <div className="font-display text-5xl gradient-text">{it.n}</div>
              <h3 className="mt-4 font-display text-2xl">{it.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    { name: "Ananya R.", text: "My skin has never felt this alive. The rose face pack is pure magic.", rating: 5 },
    { name: "Priya M.", text: "Finally a hair oil that actually works. My hair fall reduced in 3 weeks.", rating: 5 },
    { name: "Sneha K.", text: "Beautiful packaging, divine fragrance, and visible results. Obsessed.", rating: 5 },
  ];
  return (
    <section className="relative bg-gradient-blush py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <Reveal as="p" className="text-xs uppercase tracking-[0.3em] text-primary">Customer Love</Reveal>
          <Reveal as="h2" className="mt-3 font-display text-4xl sm:text-5xl">
            Voices of <span className="italic gradient-text">glowing skin.</span>
          </Reveal>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1}>
              <div className="h-full rounded-3xl glass-panel p-8 shadow-card">
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Sparkles key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 font-display text-xl leading-relaxed text-foreground">"{r.text}"</p>
                <p className="mt-6 text-sm font-medium text-primary">— {r.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function OurStory() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <div className="relative overflow-hidden rounded-[3rem] shadow-glow">
            <img src={heroImg} alt="Our story" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </Reveal>
        <div>
          <Reveal as="p" className="text-xs uppercase tracking-[0.3em] text-primary">Our Story</Reveal>
          <Reveal as="h2" className="mt-3 font-display text-4xl sm:text-5xl">
            Born from a <span className="italic gradient-text">grandmother's garden.</span>
          </Reveal>
          <Reveal as="p" className="mt-6 text-muted-foreground leading-relaxed">
            SS Herbal began as a love letter to the rituals our grandmothers practiced — a handful of rose, a pinch of turmeric, a drop of neem oil. We bottled that intuition with modern care.
          </Reveal>
          <Reveal>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background btn-magnetic">
              Read Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="relative overflow-hidden rounded-[3rem] bg-gradient-primary px-8 py-20 text-center text-white shadow-glow">
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-accent/40 blur-3xl" />
        <Reveal as="h2" className="font-display text-4xl sm:text-6xl">
          Your glow ritual begins here.
        </Reveal>
        <Reveal as="p" className="mx-auto mt-4 max-w-xl text-white/90">
          Discover skincare designed by nature, perfected for you.
        </Reveal>
        <Reveal>
          <Link to="/products" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-primary btn-magnetic">
            Explore Collection <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 text-center">
      <Reveal as="h2" className="font-display text-3xl sm:text-4xl">Join the SS Herbal ritual.</Reveal>
      <Reveal as="p" className="mt-3 text-muted-foreground">Early access, beauty rituals, and 10% off your first order.</Reveal>
      <Reveal>
        <form onSubmit={(e) => e.preventDefault()} className="mx-auto mt-8 flex max-w-md flex-col gap-2 sm:flex-row">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 rounded-full border border-border bg-white px-5 py-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
          <button className="rounded-full bg-gradient-primary px-6 py-4 text-sm font-medium text-white btn-magnetic">
            Subscribe
          </button>
        </form>
      </Reveal>
    </section>
  );
}
