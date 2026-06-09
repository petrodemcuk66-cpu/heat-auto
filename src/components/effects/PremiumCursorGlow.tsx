"use client";

import { useEffect, useRef } from "react";

export default function PremiumCursorGlow() {
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function move(event: MouseEvent) {
      const element = glowRef.current;

      if (!element) {
        return;
      }

      element.style.transform = `translate3d(${event.clientX - 180}px, ${event.clientY - 180}px, 0)`;
    }

    window.addEventListener("mousemove", move, { passive: true });

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      data-cursor-glow
      className="pointer-events-none fixed left-0 top-0 z-[1] hidden h-[360px] w-[360px] rounded-full bg-[color:var(--red)]/10 blur-3xl lg:block"
      aria-hidden="true"
    />
  );
}