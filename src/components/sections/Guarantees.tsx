import SectionTitle from "@/components/ui/SectionTitle";

const guarantees = [
  {
    title: "Фіксуємо умови до старту",
    text: "Перед роботою клієнт розуміє бюджет, комісію, етапи, терміни та відповідальність сторін."
  },
  {
    title: "Не приховуємо ризики",
    text: "Якщо авто має сумнівну історію, серйозні пошкодження або невигідну фінальну ціну — ми прямо про це говоримо."
  },
  {
    title: "Показуємо структуру витрат",
    text: "Окремо рахуємо ціну авто, доставку, митні платежі, сертифікацію, оформлення й можливі додаткові витрати."
  },
  {
    title: "Супроводжуємо до оформлення",
    text: "Наша робота не закінчується після купівлі. Ми супроводжуємо клієнта до моменту, коли авто можна легально використовувати в Україні."
  }
];

export default function Guarantees() {
  return (
    <section aria-label="Гарантії HEAT AUTO" data-reveal id="guarantees" className="section bg-black/30">
      <div className="container">
        <SectionTitle
          kicker="Гарантії"
          title="Що ми гарантуємо — прозоро і по процесу"
          text="Вживане авто не може мати гарантію як нове з салону, але клієнт має отримати гарантію прозорого процесу, перевірки та супроводу."
          center
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {guarantees.map((item, index) => (
            <article key={item.title} className="glass glow-border rounded-[30px] p-4 sm:p-6">
              <p className="text-4xl font-black text-[color:var(--red)]">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-base font-black sm:text-lg">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
