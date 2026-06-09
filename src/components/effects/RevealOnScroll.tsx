"use client";

import { useEffect } from "react";

export default function RevealOnScroll() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    elements.forEach((element) => {
      element.classList.add("opacity-0", "translate-y-10", "transition-all", "duration-[600ms]", "ease-out");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            target.classList.add("is-visible", "opacity-100", "translate-y-0");
            target.classList.remove("opacity-0", "translate-y-10");
            observer.unobserve(target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -80px 0px"
      }
    );

    elements.forEach((element, index) => {
      element.style.setProperty("--reveal-delay", `${Math.min(index * 55, 420)}ms`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
