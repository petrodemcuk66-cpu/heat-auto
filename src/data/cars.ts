import type { Car } from "@/types";

export const cars: Car[] = [
  {
    id: "1",
    title: "BMW 330i xDrive",
    country: "США",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1400&q=85",
    price: "від $27 900",
    year: 2021,
    mileage: "48 000 км",
    engine: "2.0 Turbo AWD",
    status: "вигідний седан",
    tag: "економія 30–40%",
    description: "Динамічний седан для міста і траси. Часто вигідний у США завдяки широкому вибору комплектацій."
  },
  {
    id: "2",
    title: "Mercedes-Benz GLE",
    country: "Європа",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1400&q=85",
    price: "від $48 500",
    year: 2021,
    mileage: "61 000 км",
    engine: "3.0 Diesel",
    status: "business SUV",
    tag: "преміум",
    description: "Комфортний SUV для сімʼї та бізнесу з високим рівнем безпеки і представницьким виглядом."
  },
  {
    id: "3",
    title: "Toyota RAV4 Hybrid",
    country: "США",
    image: "https://images.unsplash.com/photo-1583267746897-2cf415887172?auto=format&fit=crop&w=1400&q=85",
    price: "від $31 500",
    year: 2022,
    mileage: "42 000 км",
    engine: "2.5 Hybrid",
    status: "family SUV",
    tag: "надійність",
    description: "Практичний гібридний кросовер для сімʼї, міста, подорожей і щоденної експлуатації."
  },
  {
    id: "4",
    title: "Tesla Model Y",
    country: "США",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1400&q=85",
    price: "від $34 900",
    year: 2023,
    mileage: "19 000 км",
    engine: "Electric AWD",
    status: "electric",
    tag: "електро",
    description: "Сучасний електрокросовер з хорошою динамікою, економією на обслуговуванні та технологічним салоном."
  },
  {
    id: "5",
    title: "Audi Q5",
    country: "Європа",
    image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&w=1400&q=85",
    price: "від $32 800",
    year: 2020,
    mileage: "73 000 км",
    engine: "2.0 Diesel",
    status: "balanced choice",
    tag: "універсальний",
    description: "Збалансований кросовер для тих, хто хоче комфорт, преміум-салон і розумні витрати."
  },
  {
    id: "6",
    title: "Lexus NX",
    country: "Європа",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85",
    price: "від $36 400",
    year: 2021,
    mileage: "55 000 км",
    engine: "2.5 Hybrid",
    status: "premium hybrid",
    tag: "ліквідність",
    description: "Ліквідний преміум-кросовер з високою надійністю, гібридною економією та хорошою комплектацією."
  }
];
