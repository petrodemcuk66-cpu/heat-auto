import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";

const values = [
  "не беремо авто, якщо ризик більший за вигоду",
  "показуємо повну вартість до купівлі",
  "пояснюємо пошкодження простими словами",
  "супроводжуємо клієнта до отримання ключів"
];

export default function AboutCompany() {
  return (
    <section aria-label="Про компанію HEAT AUTO" data-reveal id="about" className="section">
      <div className="container grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
        <div className="relative overflow-hidden rounded-[34px] border border-white/10">
          <Image
            src="https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?auto=format&fit=crop&w=1400&q=85"
            alt="Преміальний автомобіль"
            width={1400}
            height={950}
            className="h-full min-h-[420px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/10 bg-black/60 p-5 backdrop-blur-xl">
            <p className="text-sm font-black text-[color:var(--red2)]">HEAT AUTO IMPORT</p>
            <p className="mt-2 text-2xl font-black">Ми відповідаємо за шлях авто, а не тільки за консультацію</p>
          </div>
        </div>

        <div>
          <SectionTitle
            kicker="Про нас"
            title="Ми створили HEAT AUTO, бо ринок авто з-за кордону занадто часто лякає клієнтів"
            text="Багато людей хочуть зекономити на авто зі США чи Європи, але бояться аукціонів, прихованих пошкоджень, митниці та незрозумілих платежів. Ми закриваємо цю проблему: перевіряємо авто до купівлі, пояснюємо ризики, рахуємо повну суму й супроводжуємо процес до фінального оформлення. Понад 420 клієнтів пройшли цей шлях разом з нами."
          />

          <div className="grid gap-3">
            {values.map((value) => (
              <div key={value} className="glass rounded-2xl p-4">
                <span className="mr-3 text-[color:var(--red)]">✓</span>
                <span className="font-bold">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
