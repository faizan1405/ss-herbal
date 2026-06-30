import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/account")({
  head: () => ({ meta: [{ title: "Account — SS Herbal" }] }),
  component: Account,
});

function Account() {
  return (
    <div className="bg-gradient-hero pt-32 pb-24">
      <div className="mx-auto grid max-w-md gap-6 px-6">
        <Reveal as="h1" className="text-center font-display text-5xl">Welcome back</Reveal>
        <Reveal as="p" className="text-center text-muted-foreground">Sign in to access orders and rituals.</Reveal>
        <Reveal>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4 rounded-3xl glass-panel p-8 shadow-card">
            <input type="email" placeholder="Email" className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm" />
            <input type="password" placeholder="Password" className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm" />
            <button className="w-full rounded-full bg-gradient-primary py-3 text-sm font-medium text-white btn-magnetic">Sign In</button>
            <p className="text-center text-xs text-muted-foreground">
              New here? <Link to="/account" className="text-primary">Create an account</Link>
            </p>
          </form>
        </Reveal>
      </div>
    </div>
  );
}
