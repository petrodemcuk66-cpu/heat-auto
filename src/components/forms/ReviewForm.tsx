"use client";

import { useState } from "react";

export default function ReviewForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    const response = await fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={submit} className="glass rounded-[30px] p-5">
      <h3 className="text-2xl font-black">Залишити відгук</h3>
      <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
        Відгук буде збережений і перевірений перед публікацією.
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <input className="input" name="name" placeholder="Імʼя" required />
        <input className="input" name="city" placeholder="Місто" required />
        <input className="input" name="car" placeholder="Авто" required />
        <select className="input" name="rating" defaultValue="5">
          <option value="5">5 зірок</option>
          <option value="4">4 зірки</option>
          <option value="3">3 зірки</option>
        </select>
      </div>

      <textarea className="input mt-3 min-h-28 resize-none" name="text" placeholder="Напишіть кілька речень про ваш досвід" required />

      <button className="mt-4 min-h-[54px] w-full rounded-2xl bg-[color:var(--red)] px-5 py-3 font-black hover:bg-[color:var(--red-dark)]">
        Надіслати відгук
      </button>

      {status === "success" && (
        <p className="mt-4 rounded-2xl border border-green-500/30 bg-green-500/10 p-3 text-sm text-green-200">
          Дякуємо! Відгук отримано.
        </p>
      )}

      {status === "error" && (
        <p className="mt-4 rounded-2xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200">
          Не вдалося надіслати відгук. Спробуйте ще раз.
        </p>
      )}
    </form>
  );
}
