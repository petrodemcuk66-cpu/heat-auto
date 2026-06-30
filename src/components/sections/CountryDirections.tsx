import SectionTitle from "@/components/ui/SectionTitle";

const countries = [
  {
    title: "Авто зі США",
    text: "Підходить для клієнтів, які хочуть ширший вибір комплектацій, вигідні аукціонні пропозиції та можливість зекономити на популярних моделях.",
    points: ["Copart / IAAI", "Carfax", "широкий вибір"]
  },
  {
    title: "Авто з Європи",
    text: "Хороший напрямок для бізнес-класу, дизельних авто, універсалів, кросоверів і машин з прозорою сервісною історією.",
    points: ["швидша доставка", "сервісна історія", "бізнес-клас"]
  }
];

export default function CountryDirections() {
  return (
    <section aria-label="Напрямки імпорту авто" data-reveal className="section">
      <div className="container">
        <SectionTitle
          kicker="Напрямки"
          title="Підбираємо країну під бюджет, модель і терміни"
          text="Ми порівнюємо ринки між собою і пояснюємо, де конкретний автомобіль буде вигіднішим: у США чи Європі."
          center
        />

        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
          {countries.map((item) => (
            <article key={item.title} className="glass glow-border premium-shine rounded-[32px] p-4 sm:p-6">
              <h3 className="text-base font-black sm:text-lg">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">{item.text}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.points.map((point) => (
                  <span key={point} className="rounded-full border border-white/10 bg-white/[.05] px-3 py-2 text-xs font-black">
                    {point}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
