"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { metrics, site } from "@/data/site";
import Button from "@/components/ui/Button";
import MetricCard from "@/components/ui/MetricCard";

const heroPoints = [
  "Підбір під бюджет — показуємо варіанти, а не нав'язуємо перший",
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
    <section aria-label="Головний екран" id="home" className="relative min-h-screen overflow-hidden pt-28">
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

      <div className="container grid min-h-[calc(100vh-7rem)] items-center gap-8 pb-16 lg:grid-cols-[1.02fr_.98fr]">
        <div className="reveal animate-fadeIn max-w-3xl opacity-0">
          <p className="kicker animate-fadeInUp" style={{ animationDelay: "0s" }}>
            Premium auto import
          </p>

          <h1
            className="red-gradient-text mt-5 animate-fadeInUp text-2xl font-black leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl"
            style={{ animationDelay: "0s" }}
          >
            {site.title}
          </h1>

          <p
            className="mt-6 max-w-2xl animate-fadeInUp text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8"
            style={{ animationDelay: "0.2s" }}
          >
            {site.description}
          </p>

          <div
            className="mt-8 flex animate-fadeInUp flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "0.4s" }}
          >
            <Button href="#contacts" className="min-h-[54px]">Отримати розрахунок</Button>
            <Button href="#cars" variant="outline" className="min-h-[54px]">Дивитися авто</Button>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <MetricCard
                key={metric.label}
                value={metric.value}
                label={metric.label}
                className="animate-fadeInUp opacity-0"
                style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
              />
            ))}
          </div>
        </div>

        <div
          className="glass glow-border animate-slideInRight relative overflow-hidden rounded-[34px] p-5 opacity-0 md:block lg:p-6"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[color:var(--red)]/25 blur-3xl" />
          <p className="kicker">Чому HEAT AUTO</p>
          <h2 className="mt-5 text-xl font-black leading-tight sm:text-2xl lg:text-3xl">
            Спочатку рахуємо повну ціну. Потім радимо, чи варто купувати.
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
