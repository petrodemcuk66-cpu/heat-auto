import Image from "next/image";
import { navigation, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pb-20 sm:pb-0">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.15fr_.7fr_.9fr_.9fr]">
        <div>
          <div className="relative h-[95px] w-[305px] overflow-hidden rounded-[18px]">
          <div className="relative h-[56px] w-[190px] overflow-hidden rounded-[18px] bg-black">
            <Image src={site.logo} alt={site.companyName} fill className="object-contain p-1" />
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-[color:var(--muted)]">
            Імпорт авто зі США та Європи під ключ: підбір, перевірка, доставка, розмитнення та оформлення.
          </p>
        </div>

        <div>
          <h3 className="font-black">Навігація</h3>
          <div className="mt-4 grid gap-2">
            {navigation.slice(1).map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-[color:var(--muted)] hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-black">Контакти</h3>
          <div className="mt-4 grid gap-2 text-sm text-[color:var(--muted)]">
            <a href={`tel:${site.phone}`} className="hover:text-white">{site.phone}</a>
            <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
            <span>{site.address}</span>
            <span>{site.workTime}</span>
          </div>
        </div>

        <div>
          <h3 className="font-black">Соцмережі</h3>
          <div className="mt-4 grid gap-2 text-sm text-[color:var(--muted)]">
            <a href={site.telegram} className="hover:text-white">Telegram — швидка консультація</a>
            <a href={site.instagram} className="hover:text-white">Instagram — авто клієнтів</a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-[color:var(--muted)]">
        © 2026 {site.companyName}. Автоімпорт під ключ.
      </div>
    </footer>
  );
}
