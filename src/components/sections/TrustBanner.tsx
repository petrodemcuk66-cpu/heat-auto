import { trustLogos } from "@/data/site";

export default function TrustBanner() {
  const items = [...trustLogos, ...trustLogos];

  return (
    <section aria-label="Партнерські майданчики" data-reveal className="border-y border-white/10 bg-black/55 py-6">
      <div className="container">
        <p className="mb-4 text-center text-xs font-black uppercase tracking-[.25em] text-[color:var(--muted)]">
          Працюємо з популярними звітами, аукціонами та майданчиками
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="marquee-track flex w-max gap-3 px-3">
          {items.map((brand, index) => (
            <span key={`${brand}-${index}`} className="shrink-0 rounded-2xl border border-white/10 bg-white/[.045] px-6 py-3 text-sm font-black text-zinc-200">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
