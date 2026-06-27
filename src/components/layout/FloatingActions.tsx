"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

export default function FloatingActions() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const baseClass =
    "focus flex h-12 w-12 items-center justify-center rounded-full text-lg font-black transition-all duration-200 hover:scale-110";

  return (
    <>
      <div className="fixed bottom-24 right-4 z-[60] flex flex-col gap-3 sm:bottom-6 sm:right-6">
        <a
          href={site.telegram}
          className={`${baseClass} bg-[#229ED9] shadow-[0_16px_50px_rgba(34,158,217,.35)] ${
            mounted ? "translate-y-0 opacity-100 delay-100" : "translate-y-4 opacity-0"
          }`}
          aria-label="Telegram"
        >
          TG
        </a>

        <a
          href={`tel:${site.phone}`}
          className={`${baseClass} bg-[color:var(--red)] shadow-[0_16px_50px_rgba(229,9,20,.35)] ${
            mounted ? "translate-y-0 opacity-100 delay-200" : "translate-y-4 opacity-0"
          }`}
          aria-label="Телефон"
        >
          ☎
        </a>
      </div>

      <div className="mobile-sticky-cta fixed bottom-0 left-0 right-0 z-[65] border-t border-white/10 bg-black/90 p-3 backdrop-blur-xl sm:hidden">
        <a
          href="#contacts"
          className="flex min-h-[56px] items-center justify-center rounded-2xl bg-[color:var(--red)] px-5 py-3 text-base font-black text-white shadow-[0_18px_50px_rgba(229,9,20,.35)]"
        >
          Отримати розрахунок безкоштовно
        </a>
      </div>
    </>
  );
}
