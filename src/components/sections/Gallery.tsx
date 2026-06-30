import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import CarRequestButton from "@/components/sections/CarRequestButton";
import { auctionGalleryCars } from "@/data/gallery";

export default function Gallery() {
  return (
    <section aria-label="Авто з аукціонів" data-reveal className="section bg-black/30">
      <div className="container">
        <SectionTitle
          kicker="Авто з аукціонів"
          title="Приклади авто під замовлення з розрахунком"
          text="Підібрані варіанти з аукціонів: рік, пробіг, паливо, коробка передач та порівняння вартості Авторіа / Heat Auto."
          center
        />

        <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {auctionGalleryCars.map((car) => (
            <article
              key={car.id}
              className="group flex h-full flex-col overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0b10] shadow-[0_26px_80px_rgba(0,0,0,.32)]"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden">
                <Image
                  src={car.image}
                  alt={car.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
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
                  </div>
                  <p className="shrink-0 text-right text-lg font-black text-[color:var(--red2)]">
                    {car.price}
                  </p>
                </div>

                <div className="mt-4 space-y-1 text-sm leading-6 text-[color:var(--muted)]">
                  {car.description.split("\n").map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>

                <div className="mt-auto grid grid-cols-3 gap-2 pt-5 text-xs text-[color:var(--muted)]">
                  <div className="rounded-2xl bg-white/[.055] p-3">
                    <b className="block text-white">{car.year}</b>Рік
                  </div>
                  <div className="rounded-2xl bg-white/[.055] p-3">
                    <b className="block text-white">{car.mileage}</b>Пробіг
                  </div>
                  <div className="rounded-2xl bg-white/[.055] p-3">
                    <b className="block text-white">{car.fuel}</b>Паливо
                  </div>
                </div>

                <CarRequestButton
                  title={car.title}
                  country={car.country}
                  year={car.year}
                  mileage={car.mileage}
                  fuel={car.fuel}
                  engine={car.engine}
                  transmission={car.transmission}
                  price={car.price}
                  description={car.description}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
