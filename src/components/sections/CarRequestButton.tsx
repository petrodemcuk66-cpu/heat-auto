"use client";

type Props = {
  title: string;
  country: string;
  year: number;
  mileage: string;
  fuel?: string;
  engine: string;
  transmission?: string;
  price: string;
  description?: string;
};

type SelectedCarPayload = {
  car: string;
  message: string;
  country: string;
};

const STORAGE_KEY = "heatAutoSelectedCarPayload";

export default function CarRequestButton({
  title,
  country,
  year,
  mileage,
  fuel,
  engine,
  transmission,
  price,
  description
}: Props) {
  function selectCar() {
    const carDetails = [
      title,
      `${year}`,
      mileage,
      fuel,
      engine,
      transmission
    ].filter(Boolean).join(" — ");

    const message = [
      "Заявка на авто з каталогу:",
      `Назва: ${title}`,
      `Рік випуску: ${year}`,
      `Показання одометра: ${mileage}`,
      fuel ? `Тип палива: ${fuel}` : "",
      `Обʼєм двигуна: ${engine}`,
      transmission ? `Коробка передач: ${transmission}` : "",
      `Країна: ${country}`,
      `Ціна: ${price}`
    ].filter(Boolean).join("\n");

    const payload: SelectedCarPayload = {
      car: carDetails,
      message,
      country
    };

    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // Якщо браузер не дозволяє sessionStorage, форма все одно отримає дані через подію.
    }

    window.dispatchEvent(new CustomEvent<SelectedCarPayload>("heat-auto:select-car", { detail: payload }));

    const contacts = document.getElementById("contacts");
    if (contacts) {
      const top = contacts.getBoundingClientRect().top + window.scrollY - 118;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }

  return (
    <button
      type="button"
      onClick={selectCar}
      className="focus mt-5 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-2xl bg-[color:var(--red)] px-5 py-3 text-sm font-black text-white shadow-[0_20px_70px_rgba(229,9,20,.35)] transition duration-200 hover:bg-[color:var(--red-dark)] active:scale-[.98] sm:px-6"
    >
      Залишити заявку
    </button>
  );
}
