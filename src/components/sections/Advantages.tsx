import { premiumFeatures } from "@/data/services";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Advantages() {
  return (
    <section aria-label="Переваги HEAT AUTO" data-reveal id="advantages" className="section bg-black/30">
      <div className="container">
        <SectionTitle
          kicker="Переваги"
          title="Комплексний підхід до автоімпорту"
          text="HEAT AUTO поєднує підбір, перевірку, логістику, документи і комунікацію в одному процесі, щоб клієнт отримав автомобіль без зайвих ризиків."
          center
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {premiumFeatures.map((feature) => (
            <div key={feature} className="glass rounded-[26px] p-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--red)] text-sm font-black">✓</span>
              <p className="mt-4 font-black leading-7">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
