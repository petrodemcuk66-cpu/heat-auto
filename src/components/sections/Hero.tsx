"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { metrics, site } from "@/data/site";
import Button from "@/components/ui/Button";
import MetricCard from "@/components/ui/MetricCard";

const heroPoints = [
  "Підбір під бюджет — показуємо варіанти під ваші побажання",
  "VIN-перевірка до ставки — знаємо про авто більше ніж продавець",
  "Прозорий розрахунок — фінальна сума до купівлі, без сюрпризів",
  "Оформлення в Україні — до ключів у руках клієнта"
];

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      aria-label="Головний екран"
      id="home"
      className="relative overflow-hidden pb-24 pt-24 sm:min-h-screen sm:pt-28"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero/premium-hero.jpg"
          alt="Автомобіль HEAT AUTO"
          fill
          priority
          className="object-cover opacity-60 will-change-transform"
          style={{ transform: `translateY(${scrollY * 0.3}px) scale(1.08)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/82 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--bg)] via-transparent to-black/55" />
      </div>

      <div className="container grid items-start gap-8 sm:min-h-[calc(100vh-7rem)] sm:items-center sm:pb-16 lg:grid-cols-[1.02fr_.98fr]">
        <div className="max-w-3xl">
          <p className="kicker">
            Premium auto import
          </p>

          <h1 className="red-gradient-text mt-5 text-3xl font-black leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
            {site.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-base sm:leading-8">
            {site.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#contacts" className="min-h-[54px]">Отримати розрахунок</Button>
            <Button href="#cars" variant="outline" className="min-h-[54px]">Дивитися авто</Button>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {metrics.map((metric) => (
              <MetricCard
                key={metric.label}
                value={metric.value}
                label={metric.label}
              />
            ))}
          </div>
        </div>

        <div className="glass glow-border relative hidden overflow-hidden rounded-[34px] p-5 md:block lg:p-6">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[color:var(--red)]/25 blur-3xl" />
          <p className="kicker">Чому HEAT AUTO</p>
          <h2 className="mt-5 text-xl font-black leading-tight sm:text-2xl lg:text-3xl">
            Підбираємо авто під ваш бюджет та потреби. Показуємо реальну вартість під ключ. Супроводжуємо до отримання авто.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
            Клієнт бачить не тільки ціну авто за кордоном, а фінальну картину: доставка, мито, сертифікація,
            оформлення, можливий ремонт і реальна вигода.
          </p>

          <div className="mt-7 grid gap-3">
            {heroPoints.map((item, index) => (
              <div key={item} className="flex items-center gap-4 rounded-2xl bg-white/[.055] p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[color:var(--red)] font-black">
                  {index + 1}
                </span>
                <span className="text-xs font-black sm:text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
