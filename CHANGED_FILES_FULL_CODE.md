# Повний код змінених файлів — fixed mobile menu overlay

## `src/components/layout/Header.tsx`

```tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navigation, site } from "@/data/site";
import Button from "@/components/ui/Button";

const quickAccess = [
  {
    label: "Подзвонити",
    text: "швидка консультація",
    href: `tel:${site.phone}`,
    icon: "☎"
  },
  {
    label: "Telegram",
    text: "@HeatAuto",
    href: site.telegram,
    icon: "TG"
  },
  {
    label: "Калькулятор",
    text: "розрахунок ціни",
    href: "#calculator",
    icon: "$"
  },
  {
    label: "Авто",
    text: "приклади варіантів",
    href: "#cars",
    icon: "▣"
  }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, [open]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive("#" + entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  function closeMenu() {
    setOpen(false);
  }

  function handleAnchorClick(href: string) {
    closeMenu();

    if (!href.startsWith("#")) {
      return;
    }

    window.setTimeout(() => {
      const element = document.querySelector(href);

      if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY - 88;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 80);
  }

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-[100] border-b border-white/10 bg-black/85 backdrop-blur-2xl">
        <div className="container flex h-20 items-center justify-between gap-4">
          <a
            href="#home"
            aria-label="HEAT AUTO"
            className="relative h-[52px] w-[168px] shrink-0 overflow-hidden rounded-[18px] bg-black sm:w-[180px]"
            onClick={(event) => {
              event.preventDefault();
              handleAnchorClick("#home");
            }}
          >
            <Image src={site.logo} alt={site.companyName} fill priority className="object-contain p-1" />
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-xl px-3 py-2 text-sm font-bold transition hover:bg-white/[.07] hover:text-white ${
                  active === item.href ? "bg-white/[.1] text-white" : "text-zinc-300"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href={`tel:${site.phone}`} className="text-sm font-black transition hover:text-[color:var(--red2)]">
              {site.phone}
            </a>
            <Button href="#contacts">Заявка</Button>
          </div>

          <button
            className="focus flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[.06] text-2xl font-black transition hover:bg-white/[.1] lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Меню"
            aria-expanded={open}
          >
            {open ? "×" : "☰"}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-x-0 bottom-0 top-20 z-[90] block overflow-y-auto border-t border-white/10 bg-[#050507] shadow-[0_30px_90px_rgba(0,0,0,.85)] lg:hidden">
          <div className="container grid min-h-full gap-5 py-5 pb-28">
            <div className="rounded-[28px] border border-white/10 bg-white/[.04] p-4">
              <p className="kicker">Швидкий доступ</p>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {quickAccess.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(event) => {
                      if (item.href.startsWith("#")) {
                        event.preventDefault();
                        handleAnchorClick(item.href);
                      } else {
                        closeMenu();
                      }
                    }}
                    className="group rounded-2xl border border-white/10 bg-white/[.06] p-4 transition hover:border-[color:var(--line2)] hover:bg-white/[.09]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--red)] text-sm font-black text-white shadow-[0_12px_35px_rgba(229,9,20,.32)]">
                      {item.icon}
                    </span>
                    <span className="mt-3 block text-sm font-black text-white">{item.label}</span>
                    <span className="mt-1 block text-xs leading-5 text-[color:var(--muted)]">{item.text}</span>
                  </a>
                ))}
              </div>
            </div>

            <nav className="grid gap-2">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => {
                    event.preventDefault();
                    handleAnchorClick(item.href);
                  }}
                  className={`flex min-h-[54px] items-center justify-between rounded-2xl border border-white/10 px-4 py-3 text-base font-black transition hover:bg-white/[.07] ${
                    active === item.href ? "bg-white/[.1] text-white" : "bg-white/[.035] text-zinc-200"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-[color:var(--red)]">›</span>
                </a>
              ))}
            </nav>

            <div className="grid gap-3 rounded-[28px] border border-[color:var(--line2)] bg-[color:var(--red)]/10 p-4">
              <p className="text-sm font-black text-white">Потрібен швидкий розрахунок?</p>
              <p className="text-xs leading-6 text-[color:var(--muted)]">
                Залиште заявку або напишіть у Telegram — менеджер підкаже реальні варіанти зі США чи Європи.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href="#contacts"
                  onClick={(event) => {
                    event.preventDefault();
                    handleAnchorClick("#contacts");
                  }}
                  className="flex min-h-[54px] items-center justify-center rounded-2xl bg-[color:var(--red)] px-4 py-3 text-sm font-black text-white"
                >
                  Залишити заявку
                </a>
                <a
                  href={site.telegram}
                  onClick={closeMenu}
                  className="flex min-h-[54px] items-center justify-center rounded-2xl border border-white/15 bg-white/[.06] px-4 py-3 text-sm font-black text-white"
                >
                  Telegram
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[.04] p-4 text-center">
              <p className="text-xs text-[color:var(--muted)]">Телефон для консультації</p>
              <a href={`tel:${site.phone}`} className="mt-1 block text-lg font-black text-white" onClick={closeMenu}>
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

```
