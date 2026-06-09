import SectionTitle from "@/components/ui/SectionTitle";

const docs = [
  "попередній розрахунок вартості",
  "добірка автомобілів під бюджет",
  "результати VIN-перевірки",
  "інформація по логістиці",
  "митні документи",
  "сертифікація",
  "постановка на облік",
  "фінальні рекомендації"
];

export default function DocumentsPack() {
  return (
    <section aria-label="Документи та оформлення авто" data-reveal className="section bg-black/30">
      <div className="container grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <SectionTitle
          kicker="Документи"
          title="Порядок у платежах, документах і строках"
          text="Клієнт отримує зрозумілу структуру по витратах, документах, етапах доставки та фінальному оформленню автомобіля."
        />

        <div className="grid gap-3 sm:grid-cols-2">
          {docs.map((doc, index) => (
            <div key={doc} className="glass rounded-[24px] p-4">
              <p className="text-sm font-black text-[color:var(--red)]">{String(index + 1).padStart(2, "0")}</p>
              <p className="mt-2 font-black">{doc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
