"use client";

import { useEffect, useRef, useState } from "react";

type MetricCardProps = {
  value: string;
  label: string;
  className?: string;
  style?: React.CSSProperties;
};

function getNumber(value: string) {
  const match = value.match(/\d+/);
  return match ? Number(match[0]) : null;
}

function formatValue(original: string, current: number) {
  const number = getNumber(original);

  if (number === null) {
    return original;
  }

  return original.replace(String(number), String(current));
}

export default function MetricCard({ value, label, className = "", style }: MetricCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) {
      return;
    }

    const target = getNumber(value);

    if (target === null || value.includes("/")) {
      setDisplayValue(value);
      return;
    }

    let current = 0;
    const step = Math.max(1, Math.ceil(target / 28));

    const interval = window.setInterval(() => {
      current = Math.min(target, current + step);
      setDisplayValue(formatValue(value, current));

      if (current >= target) {
        window.clearInterval(interval);
      }
    }, 30);

    return () => window.clearInterval(interval);
  }, [visible, value]);

  return (
    <div
      ref={ref}
      className={`rounded-[24px] border border-white/10 bg-white/[.055] p-4 backdrop-blur-xl sm:p-5 ${className}`}
      style={style}
    >
      <p className="text-2xl font-black text-white sm:text-3xl">{displayValue}</p>
      <p className="mt-2 text-xs font-semibold leading-5 text-[color:var(--muted)]">{label}</p>
    </div>
  );
}
