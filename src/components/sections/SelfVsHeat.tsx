import SectionTitle from "@/components/ui/SectionTitle";

const rows = [
  ["Пошук авто", "десятки сайтів, складно порівняти", "добірка авто під бюджет і задачу"],
  ["Перевірка історії", "ризик пропустити ДТП, пробіг або документи", "VIN-звіт, фото, історія, ризики до купівлі"],
  ["Розрахунок ціни", "часто видно тільки ціну авто", "повна сума: доставка, мито, оформлення, ремонт"],
  ["Логістика", "потрібно самому розуміти порти й перевезення", "контроль статусів і пояснення етапів"],
  ["Документи", "ризик помилки на митниці або сертифікації", "супровід документів до постановки на облік"]
];

export default function SelfVsHeat() {
  return (
    <section aria-label="Порівняння самостійної купівлі та HEAT AUTO" data-reveal className="section">
      <div className="container">
        <SectionTitle
          kicker="Порівняння"
          title="Чому не варто купувати авто з-за кордону навмання"
          text="На перший погляд самостійна купівля здається дешевшою. На практиці найбільші витрати зʼявляються там, де не було перевірки, розрахунку або досвіду."
          center
        />

        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[.035]">
          <div className="grid grid-cols-1 md:grid-cols-[.8fr_1fr_1fr]">
            <div className="bg-white/[.05] p-5 font-black">Етап</div>
            <div className="bg-white/[.035] p-5 font-black text-zinc-300">Самостійно</div>
            <div className="bg-[color:var(--red)]/15 p-5 font-black text-white">З HEAT AUTO</div>
            {rows.map(([step, alone, heat]) => (
              <div key={step} className="contents">
                <div className="border-t border-white/10 p-5 font-black">{step}</div>
                <div className="border-t border-white/10 p-5 text-sm leading-7 text-[color:var(--muted)]">{alone}</div>
                <div className="border-t border-white/10 p-5 text-sm leading-7 text-white">
                  <span className="mr-2 text-[color:var(--red)]">✓</span>{heat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
