import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import { gallery } from "@/data/gallery";

export default function Gallery() {
  return (
    <section aria-label="Галерея авто" data-reveal className="section bg-black/30">
      <div className="container">
        <SectionTitle
          kicker="Галерея"
          title="Автомобілі, які хочеться отримати без зайвих ризиків"
          text="Преміальні седани, сімейні кросовери, електро та гібриди — підбираємо формат під задачі клієнта, а не під випадкову пропозицію."
          center
        />

        <div className="grid gap-4 md:grid-cols-2">
          {gallery.map((item, index) => (
            <article
              key={item.title}
              className={`group relative overflow-hidden rounded-[32px] border border-white/10 ${index === 0 ? "md:row-span-2" : ""}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={1400}
                height={900}
                className={`w-full object-cover transition duration-700 group-hover:scale-105 ${index === 0 ? "h-[520px]" : "h-[250px]"}`}
               
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-2xl font-black">{item.title}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
