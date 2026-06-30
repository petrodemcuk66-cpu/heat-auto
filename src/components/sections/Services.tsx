import { services } from "@/data/services";
import SectionTitle from "@/components/ui/SectionTitle";
import IconBadge from "@/components/ui/IconBadge";

export default function Services() {
  return (
    <section aria-label="Послуги HEAT AUTO" data-reveal id="services" className="section">
      <div className="container">
        <SectionTitle
          kicker="Послуги"
          title="Беремо на себе весь шлях автомобіля"
          text="Клієнт отримує комплексний супровід: від вибору моделі й перевірки історії до доставки, документів і фінального оформлення."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="glass glow-border rounded-[32px] p-4 sm:p-6 transition duration-300 hover:-translate-y-1">
              <div className="flex gap-4">
                <IconBadge icon={service.icon} />
                <div>
                  <h3 className="text-base font-black sm:text-lg">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{service.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
