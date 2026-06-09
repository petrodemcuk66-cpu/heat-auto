import Button from "@/components/ui/Button";
import { site } from "@/data/site";

export default function FinalPremiumCta() {
  return (
    <section aria-label="Фінальний заклик залишити заявку" data-reveal className="section-sm">
      <div className="container">
        <div className="glass glow-border premium-shine rounded-[36px] p-6 text-center sm:p-10">
          <p className="kicker justify-center">Почати підбір</p>
          <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-black leading-tight sm:text-5xl">
            Готові знайти авто, яке відповідає бюджету і задачам?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[color:var(--muted)] sm:text-base">
            Залиште заявку — менеджер уточнить деталі, порадить напрямок пошуку та підготує перші варіанти.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="#contacts">Отримати консультацію</Button>
            <Button href={`tel:${site.phone}`} variant="outline">Подзвонити</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
