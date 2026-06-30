import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SS Herbal" },
      { name: "description", content: "Get in touch with SS Herbal. Phone, email, address and contact form." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="bg-gradient-hero pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal as="p" className="text-xs uppercase tracking-[0.3em] text-primary">Get in Touch</Reveal>
        <Reveal as="h1" className="mt-3 font-display text-5xl sm:text-6xl">
          We'd love to <span className="italic gradient-text">hear from you.</span>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            {[
              { icon: Phone, t: "Phone", v: "+91 93549 03225", href: "tel:+919354903225" },
              { icon: Mail, t: "Email", v: "ssherbalcare5@gmail.com", href: "mailto:ssherbalcare5@gmail.com" },
              { icon: MapPin, t: "Address", v: "Delhi NCR, India", href: "#" },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.08}>
                <a href={c.href} className="flex items-center gap-4 rounded-3xl glass-panel p-6 shadow-card card-lift">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-white">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.t}</div>
                    <div className="mt-1 font-display text-xl">{c.v}</div>
                  </div>
                </a>
              </Reveal>
            ))}

            <Reveal>
              <div className="overflow-hidden rounded-3xl shadow-card">
                <iframe
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.40277623306!2d77.06889754454617!3d28.527280143669843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1700000000000"
                  className="aspect-[4/3] w-full border-0"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>

          <Reveal>
            <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl glass-panel p-8 shadow-card space-y-4">
              <h2 className="font-display text-3xl">Send a message</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Your name" />
                <input className="rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Email" type="email" />
              </div>
              <input className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Subject" />
              <textarea rows={6} className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="How can we help?" />
              <button className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-sm font-medium text-white btn-magnetic">
                Send Message <Send className="h-4 w-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
