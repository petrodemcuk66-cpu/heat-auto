const brands = ["BMW", "Mercedes-Benz", "Audi", "Porsche", "Toyota", "Tesla", "Lexus", "Range Rover", "Ford", "Dodge"];
const doubled = [...brands, ...brands];

export default function BrandStrip() {
  return (
    <section data-reveal className="border-y border-white/10 bg-black/45 py-5">
      <div className="overflow-hidden">
        <div className="marquee-track flex w-max gap-3 px-3">
          {doubled.map((brand, index) => (
            <span key={`${brand}-${index}`} className="shrink-0 rounded-full border border-white/10 bg-white/[.04] px-5 py-3 text-sm font-black text-zinc-300">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
