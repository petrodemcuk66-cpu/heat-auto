import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import { deliveredCars } from "@/data/deliveredCars";

export default function DeliveredCars() {
  return (
    <section aria-label="Реальні авто клієнтів" data-reveal className="section bg-black/30">
      <div className="container">
        <SectionTitle
          kicker="Авто клієнтів"
          title="Приклади авто, які найчастіше замовляють клієнти"
          text="Показуємо формат результату: марка, напрямок, термін і причина вибору. Реальні фото компанії можна замінити в будь-який момент."
          center
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {deliveredCars.map((car) => (
            <article key={`${car.title}-${car.city}`} className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[.035]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={car.image} alt={car.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-2xl font-black">{car.title}</p>
                  <p className="mt-1 text-sm text-zinc-300">{car.city} · {car.country} · {car.term}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="rounded-2xl bg-white/[.055] p-4 text-sm font-bold text-zinc-200">{car.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
