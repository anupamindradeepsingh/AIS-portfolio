import { useEffect, useRef } from "react";

/**
 * A subtle radial glow that follows the cursor, themed to the site's
 * accent color. Disabled entirely on touch/coarse-pointer devices to
 * avoid any mobile performance cost, and updates via rAF (not React
 * state) so it never triggers re-renders.
 */
export default function CursorGlow() {
  const glowRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const frame = useRef(null);

  useEffect(() => {
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isCoarsePointer || prefersReducedMotion) return;

    const el = glowRef.current;
    if (!el) return;

    const handleMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // ease toward target for a smooth, weighted feel
      pos.current.x += (target.current.x - pos.current.x) * 0.12;
      pos.current.y += (target.current.y - pos.current.y) * 0.12;
      el.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      frame.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    frame.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[1] hidden h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.10] md:block"
      style={{
        background:
          "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}
