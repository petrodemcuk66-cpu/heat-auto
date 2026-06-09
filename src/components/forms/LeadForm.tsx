"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

type Status = "idle" | "loading" | "success" | "error";

type UtmState = {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  page_url: string;
  referrer: string;
};

const emptyUtm: UtmState = {
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_term: "",
  utm_content: "",
  page_url: "",
  referrer: ""
};

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [utm, setUtm] = useState<UtmState>(emptyUtm);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtm({
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_term: params.get("utm_term") || "",
      utm_content: params.get("utm_content") || "",
      page_url: window.location.href,
      referrer: document.referrer || ""
    });
  }, []);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setServerMessage("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    const response = await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json().catch(() => null);

    if (response.ok) {
      setStatus("success");
      setServerMessage(result?.message || "Дякуємо! Ми зателефонуємо протягом 15 хвилин.");
      form.reset();
    } else {
      setStatus("error");
      setServerMessage(result?.message || "Не вдалося відправити заявку. Спробуйте ще раз або напишіть у месенджер.");
    }
  }

  if (status === "success") {
    return (
      <div className="animate-fadeIn rounded-[28px] border border-green-500/30 bg-green-500/10 p-8 text-center">
        <p className="text-4xl">✓</p>
        <p className="mt-4 text-xl font-black text-green-400">Заявку отримано!</p>
        <p className="mt-2 text-sm text-zinc-400">Менеджер зателефонує протягом 15 хвилин.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="glass glow-border rounded-[32px] p-5 sm:p-7">
      <div className="mb-5 rounded-2xl border border-[color:var(--line2)] bg-[color:var(--red)]/10 p-4 text-sm leading-6 text-red-100">
        Розкажіть, яке авто шукаєте — менеджер підготує перші варіанти та попередній розрахунок.
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-black">Імʼя</span>
          <input className="input" name="name" placeholder="Ваше імʼя" required />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-black">Телефон</span>
          <input className="input" name="phone" placeholder="+38..." required />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-black">Email</span>
          <input className="input" name="email" type="email" placeholder="email@example.com" />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-black">Бюджет</span>
          <input className="input" name="budget" placeholder="Наприклад: $30 000" />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-black">Країна</span>
          <select className="input" name="country" defaultValue="">
            <option value="" disabled>Оберіть напрямок</option>
            <option>США</option>
            <option>Європа</option>
            <option>Ще не знаю</option>
          </select>
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-black">Бажане авто</span>
          <input className="input" name="car" placeholder="BMW, Mercedes, Toyota..." />
        </label>
      </div>

      <label className="mt-4 grid gap-2">
        <span className="text-sm font-black">Побажання</span>
        <textarea className="input min-h-28 resize-none" name="message" placeholder="Рік, комплектація, тип кузова, терміни, важливі деталі..." />
      </label>

      {Object.entries(utm).map(([key, value]) => (
        <input key={key} type="hidden" name={key} value={value} readOnly />
      ))}

      <Button type="submit" className="mt-5 w-full min-h-[56px]">
        {status === "loading" ? "Відправляємо заявку..." : "Отримати підбір авто"}
      </Button>

      {status === "error" && (
        <p className="mt-4 rounded-2xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200">
          {serverMessage}
        </p>
      )}
    </form>
  );
}
