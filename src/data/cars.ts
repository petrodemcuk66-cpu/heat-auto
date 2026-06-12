import type { Car } from "@/types";

const lines = (items: string[]) => items.join("\n");

export const cars: Car[] = [
  {
    id: "1",
    title: "Volkswagen Golf VI 2.0 TSI GTI adidas",
    country: "Європа",
    image: "/images/cars/volkswagen-golf-gti-adidas-2010.jpg",
    price: "Heat Auto: 7600$",
    year: 2010,
    mileage: "148,727 km",
    engine: "1986 cm",
    fuel: "Бензин",
    transmission: "Механічна",
    status: "GTI",
    tag: "хетчбек",
    description: lines([
      "Рік випуску: 2010",
      "Показання одометра: 148,727 km",
      "Тип палива: Бензин",
      "Об'єм двигуна: 1986 cm",
      "Коробка передач: Механічна",
      "Авторіа: 9200$",
      "Heat Auto: 7600$"
    ])
  },
  {
    id: "2",
    title: "Volkswagen Golf VI 1.2 TSI Style",
    country: "Європа",
    image: "/images/cars/volkswagen-golf-tsi-style-2012.jpg",
    price: "Heat Auto: 5200$",
    year: 2012,
    mileage: "119,243 km",
    engine: "1,197 ccm",
    fuel: "Бензин",
    transmission: "Механічна",
    status: "TSI",
    tag: "хетчбек",
    description: lines([
      "Рік випуску: 2012",
      "Показання одометра: 119,243 km",
      "Тип палива: Бензин",
      "Об'єм двигуна: 1,197 ccm",
      "Коробка передач: Механічна",
      "Авторіа: 7500$",
      "Heat Auto: 5200$"
    ])
  },
  {
    id: "3",
    title: "Renault Megane 1.5 dCi Energy Zen",
    country: "Європа",
    image: "/images/cars/renault-megane-energy-zen-2016.jpg",
    price: "Heat Auto: 9 400$",
    year: 2016,
    mileage: "74,310 km",
    engine: "1498 cm",
    fuel: "Дизель",
    transmission: "Механіка",
    status: "dCi",
    tag: "економний",
    description: lines([
      "Рік випуску: 2016",
      "Показання одометра: 74,310 km",
      "Тип палива: Дизель",
      "Об'єм двигуна: 1498 cm",
      "Коробка передач: Механіка",
      "Авторіа: 12 500$",
      "Heat Auto: 9 400$"
    ])
  },
  {
    id: "4",
    title: "Hyundai Tucson 1.7 CRDi Xpossible ISG 2WD",
    country: "Європа",
    image: "/images/cars/hyundai-tucson-xpossible-2016.jpg",
    price: "Heat Auto: 12 800$",
    year: 2016,
    mileage: "178,467 km",
    engine: "1698 cm",
    fuel: "Дизель",
    transmission: "Механіка",
    status: "SUV",
    tag: "кросовер",
    description: lines([
      "Рік випуску: 2016",
      "Показання одометра: 178,467 km",
      "Тип палива: Дизель",
      "Об'єм двигуна: 1698 cm",
      "Коробка передач: Механіка",
      "Авторіа: 16 600$",
      "Heat Auto: 12 800$"
    ])
  },
  {
    id: "5",
    title: "Skoda Octavia 1.4 TSI Ambiente",
    country: "Європа",
    image: "/images/cars/skoda-octavia-ambiente-2009.jpg",
    price: "Heat Auto: 5360$",
    year: 2009,
    mileage: "172,899 km",
    engine: "1398 cm",
    fuel: "Бензин",
    transmission: "Механіка",
    status: "універсал",
    tag: "практичний",
    description: lines([
      "Рік випуску: 2009",
      "Показання одометра: 172,899 km",
      "Тип палива: Бензин",
      "Об'єм двигуна: 1398 cm",
      "Коробка передач: Механіка",
      "Авторіа: 7100$",
      "Heat Auto: 5360$"
    ])
  },
  {
    id: "6",
    title: "Nissan Qashqai 1.6 Acenta",
    country: "Європа",
    image: "/images/cars/nissan-qashqai-acenta-2013.jpg",
    price: "Heat Auto: 9250$",
    year: 2013,
    mileage: "109,906 km",
    engine: "1598 cm",
    fuel: "Бензин",
    transmission: "Механіка",
    status: "SUV",
    tag: "міський SUV",
    description: lines([
      "Рік випуску: 2013",
      "Показання одометра: 109,906 km",
      "Тип палива: Бензин",
      "Об'єм двигуна: 1598 cm",
      "Коробка передач: Механіка",
      "Авторіа: 11 400$",
      "Heat Auto: 9250$"
    ])
  },
  {
    id: "7",
    title: "Audi A4 Avant 2.0 TDI",
    country: "Європа",
    image: "/images/cars/audi-a4-avant-2012.jpg",
    price: "під запит",
    year: 2012,
    mileage: "157,367 км",
    engine: "1968 см³",
    fuel: "Дизель",
    transmission: "Механіка",
    status: "Avant",
    tag: "універсал",
    description: lines([
      "Рік випуску: 2012",
      "Показання одометра: 157,367 км",
      "Тип палива: Дизель",
      "Обʼєм двигуна: 1968 см³",
      "Коробка передач: Механіка"
    ])
  },
  {
    id: "8",
    title: "Ford Focus 1.6 TDCi",
    country: "Європа",
    image: "/images/cars/ford-focus-tdci-2014.jpg",
    price: "під запит",
    year: 2014,
    mileage: "177,202 км",
    engine: "1560 см³",
    fuel: "Дизель",
    transmission: "Механіка",
    status: "TDCi",
    tag: "економний",
    description: lines([
      "Рік випуску: 2014",
      "Показання одометра: 177,202 км",
      "Тип палива: Дизель",
      "Обʼєм двигуна: 1560 см³",
      "Коробка передач: Механіка"
    ])
  },
  {
    id: "9",
    title: "Kia Sorento 2.2 CRDi",
    country: "Європа",
    image: "/images/cars/kia-sorento-crdi-2013.jpg",
    price: "під запит",
    year: 2013,
    mileage: "156,250 км",
    engine: "2199 см³",
    fuel: "Дизель",
    transmission: "Автомат",
    status: "SUV",
    tag: "автомат",
    description: lines([
      "Рік випуску: 2013",
      "Показання одометра: 156,250 км",
      "Тип палива: Дизель",
      "Обʼєм двигуна: 2199 см³",
      "Коробка передач: Автомат"
    ])
  },
  {
    id: "10",
    title: "Volkswagen Passat Variant 2.0 TDI",
    country: "Європа",
    image: "/images/cars/volkswagen-passat-variant-2010.jpg",
    price: "під запит",
    year: 2010,
    mileage: "180,240 км",
    engine: "1968 см³",
    fuel: "Дизель",
    transmission: "Механіка",
    status: "Variant",
    tag: "універсал",
    description: lines([
      "Рік випуску: 2010",
      "Показання одометра: 180,240 км",
      "Тип палива: Дизель",
      "Обʼєм двигуна: 1968 см³",
      "Коробка передач: Механіка"
    ])
  },
  {
    id: "11",
    title: "Volkswagen Tiguan 2.0 TSI",
    country: "Європа",
    image: "/images/cars/volkswagen-tiguan-tsi-2012.jpg",
    price: "під запит",
    year: 2012,
    mileage: "133,029 км",
    engine: "1984 см³",
    fuel: "Бензин",
    transmission: "Автомат",
    status: "SUV",
    tag: "автомат",
    description: lines([
      "Рік випуску: 2012",
      "Показання одометра: 133,029 км",
      "Тип палива: Бензин",
      "Обʼєм двигуна: 1984 см³",
      "Коробка передач: Автомат"
    ])
  },
  {
    id: "12",
    title: "Renault Megane 1.6 dCi BOSE Edition",
    country: "Європа",
    image: "/images/cars/renault-megane-bose-edition-2015.jpg",
    price: "Heat Auto: 7100$",
    year: 2015,
    mileage: "143,622 km",
    engine: "1589 cm",
    fuel: "Дизель",
    transmission: "Механіка",
    status: "BOSE",
    tag: "універсал",
    description: lines([
      "Рік випуску: 2015",
      "Показання одометра: 143,622 km",
      "Тип палива: Дизель",
      "Об'єм двигуна: 1589 cm",
      "Коробка передач: Механіка",
      "Авторіа: 9 800$",
      "Heat Auto: 7100$"
    ])
  },
  {
    id: "13",
    title: "Ford Escape 1.5 EcoBoost",
    country: "США",
    image: "/images/cars/ford-escape-15-2018.jpg",
    price: "Heat Auto: 10 300$",
    year: 2018,
    mileage: "85,709 mi",
    engine: "1.5",
    fuel: "Бензин",
    transmission: "Автомат",
    status: "SUV",
    tag: "автомат",
    description: lines([
      "Рік випуску: 2018",
      "Показання одометра: 85,709 mi",
      "Тип палива: Бензин",
      "Об'єм двигуна: 1.5",
      "Коробка передач: Автомат",
      "Авторіа: 16 790$",
      "Heat Auto: 10 300$"
    ])
  },
  {
    id: "14",
    title: "Peugeot 3008 1.6 HDi Business Pack",
    country: "Європа",
    image: "/images/cars/peugeot-3008-business-pack-2012.jpg",
    price: "Heat Auto: 7200$",
    year: 2012,
    mileage: "220,326 km",
    engine: "1598 cm",
    fuel: "Дизель",
    transmission: "Механіка",
    status: "HDi",
    tag: "кросовер",
    description: lines([
      "Рік випуску: 2012",
      "Показання одометра: 220,326 km",
      "Тип палива: Дизель",
      "Об'єм двигуна: 1598 cm",
      "Коробка передач: Механіка",
      "Авторіа: 9 600$",
      "Heat Auto: 7200$"
    ])
  }
];
