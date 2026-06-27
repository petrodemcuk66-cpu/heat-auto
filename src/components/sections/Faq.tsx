import { faq } from "@/data/faq";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Faq() {
  return (
    <section aria-label="Питання про імпорт авто" data-reveal id="faq" className="section">
      <div className="container">
        <SectionTitle
          kicker="FAQ"
          title="Питання, які найчастіше ставлять перед замовленням авто"
          text="Відповідаємо чесно: про розмитнення, строки, ризики, гарантії, документи та повну вартість автомобіля."
        />

        <div className="grid gap-4">
          {faq.map((item) => (
            <details key={item.question} className="group rounded-[26px] border border-white/10 bg-white/[.045] p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black">
                {item.question}
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[.08] text-[color:var(--red)] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-4xl text-sm leading-7 text-[color:var(--muted)]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
