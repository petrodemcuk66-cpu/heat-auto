"use client";

import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  type?: "button" | "submit";
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button"
}: Props) {
  const base =
    "focus inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-black transition duration-200 active:scale-[.98] sm:px-6";
  const variants = {
    primary: "bg-[color:var(--red)] text-white shadow-[0_20px_70px_rgba(229,9,20,.35)] hover:bg-[color:var(--red-dark)]",
    outline: "border border-white/15 bg-white/[.04] text-white hover:border-[color:var(--line2)] hover:bg-white/[.075]",
    ghost: "bg-transparent text-white hover:bg-white/[.06]"
  };
  const cls = `${base} ${variants[variant]} ${className}`;

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!href?.startsWith("#")) {
      return;
    }

    event.preventDefault();

    const element = document.querySelector(href);

    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }

  if (href) {
    return (
      <Link href={href} className={cls} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return <button type={type} className={cls}>{children}</button>;
}
