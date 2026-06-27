import SectionTitle from "@/components/ui/SectionTitle";

const items = [
  {
    title: "Заявка",
    text: "Клієнт залишає бюджет, напрямок і бажану модель автомобіля."
  },
  {
    title: "Уточнення",
    text: "Менеджер телефонує, ставить правильні питання і формує реальний запит на підбір."
  },
  {
    title: "Підбір",
    text: "Порівнюємо варіанти, рахуємо повну вартість і відсіюємо ризикові авто."
  },
  {
    title: "Супровід",
    text: "Після погодження супроводжуємо купівлю, доставку, документи та фінальне оформлення."
  }
];

export default function RequestProcess() {
  return (
    <section aria-label="Обробка заявки клієнта" data-reveal className="section-sm">
      <div className="container">
        <SectionTitle
          kicker="Заявка"
          title="Що відбувається після звернення"
          text="Клієнт не залишається сам із десятками посилань і незрозумілими платежами. Ми перетворюємо запит на чіткий план купівлі."
          center
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <div key={item.title} className="glass rounded-[26px] p-5">
              <p className="text-4xl font-black text-[color:var(--red)]">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-lg font-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
