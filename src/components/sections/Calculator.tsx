"use client";

import { useMemo, useState } from "react";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Calculator() {
  const [price, setPrice] = useState(32000);
  const [delivery, setDelivery] = useState(2300);
  const [customs, setCustoms] = useState(6200);
  const [service, setService] = useState(900);

  const total = useMemo(() => price + delivery + customs + service, [price, delivery, customs, service]);

  return (
    <section aria-label="Калькулятор вартості авто" data-reveal id="calculator" className="section">
      <div className="container grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <SectionTitle
          kicker="Калькулятор"
          title="Попередній розрахунок вартості під ключ"
          text="Введіть орієнтовні суми, щоб побачити загальну картину витрат. Точний розрахунок менеджер готує після вибору конкретного авто."
        />

        <div className="glass glow-border rounded-[34px] p-5 sm:p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Ціна авто, $" value={price} onChange={setPrice} />
            <Field label="Доставка, $" value={delivery} onChange={setDelivery} />
            <Field label="Розмитнення, $" value={customs} onChange={setCustoms} />
            <Field label="Послуги компанії, $" value={service} onChange={setService} />
          </div>

          <div className="mt-6 rounded-[28px] border border-[color:var(--line2)] bg-[color:var(--red)]/10 p-5">
            <p className="text-sm font-bold text-red-100">Орієнтовна ціна під ключ</p>
            <p className="mt-2 text-4xl font-black sm:text-5xl">${total.toLocaleString("en-US")}</p>
            <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
              Це попередній розрахунок. Фінальна сума залежить від конкретного авто, країни, доставки, митних платежів і стану.
            </p>
          </div>

          <Button href="#contacts" className="mt-5 w-full min-h-[54px]">
            Отримати точний розрахунок
          </Button>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-black">{label}</span>
      <input
        className="input"
        type="number"
        min={0}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  );
}
