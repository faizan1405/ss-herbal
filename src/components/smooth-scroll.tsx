import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    let raf = 0;
    let lenisInstance: { raf: (t: number) => void; destroy: () => void } | null = null;

    (async () => {
      const Lenis = (await import("lenis")).default;
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      lenisInstance = lenis;
      const loop = (time: number) => {
        lenis.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    })();

    return () => {
      cancelAnimationFrame(raf);
      lenisInstance?.destroy();
    };
  }, []);

  return null;
}
