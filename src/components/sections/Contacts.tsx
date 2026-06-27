import LeadForm from "@/components/forms/LeadForm";
import SectionTitle from "@/components/ui/SectionTitle";
import { site } from "@/data/site";

export default function Contacts() {
  return (
    <section aria-label="Контакти HEAT AUTO" data-reveal id="contacts" className="section bg-black/35">
      <div className="container grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
        <div>
          <SectionTitle
            kicker="Контакти"
            title="Готові підібрати автомобіль?"
            text="Залиште заявку або напишіть у Telegram. Менеджер уточнить бюджет, бажану модель і підготує перші варіанти."
          />

          <div className="grid gap-3">
            <a className="glass rounded-2xl p-4 text-sm text-[color:var(--muted)] hover:text-white" href={`tel:${site.phone}`}>
              Телефон: <b className="text-white">{site.phone}</b>
            </a>
            <a className="glass rounded-2xl p-4 text-sm text-[color:var(--muted)] hover:text-white" href={site.telegram}>
              Telegram: <b className="text-white">написати менеджеру</b>
            </a>
            <a className="glass rounded-2xl p-4 text-sm text-[color:var(--muted)] hover:text-white" href={`mailto:${site.email}`}>
              Email: <b className="text-white">{site.email}</b>
            </a>
            <div className="glass rounded-2xl p-4 text-sm text-[color:var(--muted)]">
              Адреса: <b className="text-white">{site.address}</b>
              <br />
              Режим роботи: <b className="text-white">{site.workTime}</b>
            </div>
          </div>
        </div>

        <LeadForm />
      </div>
    </section>
  );
}
