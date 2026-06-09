import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { getPublicCars } from "@/lib/publicData";

export default async function Showcase() {
  const cars = await getPublicCars();

  return (
    <section aria-label="Популярні авто для імпорту" data-reveal id="cars" className="section bg-black/30">
      <div className="container">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            kicker="Авто"
            title="Популярні авто для замовлення"
            text="У добірці — формати автомобілів, які найчастіше шукають клієнти: бізнес-клас, сімейні кросовери, електро, гібриди та авто для щоденної експлуатації."
          />
          <Button href="#contacts" variant="outline" className="mb-10 w-full lg:w-auto">
            Підібрати авто під бюджет
          </Button>
        </div>

        <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {cars.map((car) => (
            <article key={car.id} className="group flex h-full flex-col overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0b10] shadow-[0_26px_80px_rgba(0,0,0,.32)]">
              <div className="relative aspect-[16/11] w-full overflow-hidden">
                <Image src={car.image} alt={car.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-black backdrop-blur">
                  {car.country}
                </div>
                <div className="absolute right-4 top-4 rounded-full bg-[color:var(--red)] px-3 py-1 text-xs font-black">
                  {car.status}
                </div>
                <div className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-black backdrop-blur">
                  {car.tag}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-black">{car.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{car.description}</p>
                  </div>
                  <p className="shrink-0 text-right text-lg font-black text-[color:var(--red2)]">{car.price}</p>
                </div>

                <div className="mt-auto grid grid-cols-3 gap-2 pt-5 text-xs text-[color:var(--muted)]">
                  <div className="rounded-2xl bg-white/[.055] p-3">
                    <b className="block text-white">{car.year}</b>Рік
                  </div>
                  <div className="rounded-2xl bg-white/[.055] p-3">
                    <b className="block text-white">{car.mileage}</b>Пробіг
                  </div>
                  <div className="rounded-2xl bg-white/[.055] p-3">
                    <b className="block text-white">{car.engine}</b>Двигун
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
