<<<<<<< HEAD
import SectionTitle from "@/components/ui/SectionTitle";
import RouteMap from "@/components/ui/RouteMap";
=======
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
>>>>>>> 70792aded3fa030693e10a1467fd5df52f0d9740

const steps = [
  ["01", "Консультація", "Уточнюємо бюджет, модель, країну, терміни та очікування від автомобіля."],
  ["02", "Підбір", "Формуємо добірку варіантів і пояснюємо, які авто мають найкраще співвідношення ціни та стану."],
  ["03", "Перевірка", "Аналізуємо VIN, історію, пробіг, комплектацію, документи та потенційні ризики."],
  ["04", "Купівля", "Супроводжуємо ставку, викуп, оплату, документи та фіксацію умов."],
  ["05", "Доставка", "Контролюємо логістику, маршрут, статуси та строки прибуття автомобіля."],
  ["06", "Оформлення", "Допомагаємо з митницею, сертифікацією, постановкою на облік і передачею авто клієнту."]
];

export default function Process() {
  return (
    <section aria-label="Процес імпорту авто" data-reveal id="process" className="section">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <SectionTitle
              kicker="Процес"
              title="Зрозумілий маршрут від заявки до ключів"
              text="Кожен етап має свою задачу, відповідальність і результат. Клієнт розуміє, що відбувається з автомобілем і коли очікувати наступний крок."
            />
<<<<<<< HEAD
            <RouteMap />
=======
            <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] border border-white/10">
              <Image src="/images/backgrounds/route-map.jpg" alt="Логістика авто" fill className="object-cover" />
            </div>
>>>>>>> 70792aded3fa030693e10a1467fd5df52f0d9740
          </div>

          <div data-reveal className="grid gap-4 sm:grid-cols-2">
            {steps.map(([num, title, text], index) => (
              <div
                key={num}
                className="glass animate-fadeInUp rounded-[28px] p-4 opacity-0 sm:p-5"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <p className="text-4xl font-black text-[color:var(--red)]">{num}</p>
                <h3 className="mt-3 text-base font-black sm:text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
