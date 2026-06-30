import type { Car } from "@/types";

const lines = (items: string[]) => items.join("\n");

export const cars: Car[] = [
  {
    id: "1",
    title: "Volkswagen Golf VI 2.0 TSI GTI adidas",
    country: "Європа",
    image: "/images/cars/volkswagen-golf-gti-adidas-2010.jpg",
<<<<<<< HEAD
    price: "",
    year: 2010,
    mileage: "148,727 km",
    engine: "1 986 см³",
    fuel: "Бензин",
    transmission: "Механічна",
    status: "хетчбек",
    tag: "GTI · adidas",
=======
    price: "Під запит $",
    year: 2010,
    mileage: "148,727 km",
    engine: "1986 cm",
    fuel: "Бензин",
    transmission: "Механічна",
    status: "GTI",
    tag: "хетчбек",
>>>>>>> 70792aded3fa030693e10a1467fd5df52f0d9740
    description: lines([
      "Рік випуску: 2010",
      "Показання одометра: 148,727 km",
      "Тип палива: Бензин",
<<<<<<< HEAD
      "Об'єм двигуна: 1 986 см³",
      "Коробка передач: Механічна",
      "Легендарна GTI версія у коллаборації з Adidas — спортивний хетчбек з характером і обмеженим тиражем.",
=======
      "Об'єм двигуна: 1986 cm",
      "Коробка передач: Механічна",
>>>>>>> 70792aded3fa030693e10a1467fd5df52f0d9740
    ])
  },
  {
    id: "2",
    title: "Volkswagen Golf VI 1.2 TSI Style",
    country: "Європа",
    image: "/images/cars/volkswagen-golf-tsi-style-2012.jpg",
<<<<<<< HEAD
    price: "",
    year: 2012,
    mileage: "119,243 km",
    engine: "1 197 см³",
    fuel: "Бензин",
    transmission: "Механічна",
    status: "хетчбек",
    tag: "TSI · Style",
=======
    price: "Під запит $",
    year: 2012,
    mileage: "119,243 km",
    engine: "1,197 ccm",
    fuel: "Бензин",
    transmission: "Механічна",
    status: "TSI",
    tag: "хетчбек",
>>>>>>> 70792aded3fa030693e10a1467fd5df52f0d9740
    description: lines([
      "Рік випуску: 2012",
      "Показання одометра: 119,243 km",
      "Тип палива: Бензин",
<<<<<<< HEAD
      "Об'єм двигуна: 1 197 см³",
      "Коробка передач: Механічна",
      "Економічний Golf у комплектації Style — чудовий варіант для міста з низькою витратою палива.",
=======
      "Об'єм двигуна: 1,197 ccm",
      "Коробка передач: Механічна",
>>>>>>> 70792aded3fa030693e10a1467fd5df52f0d9740
    ])
  },
  {
    id: "3",
    title: "Renault Megane 1.5 dCi Energy Zen",
    country: "Європа",
    image: "/images/cars/renault-megane-energy-zen-2016.jpg",
<<<<<<< HEAD
    price: "",
    year: 2016,
    mileage: "74,310 km",
    engine: "1 498 см³",
    fuel: "Дизель",
    transmission: "Механіка",
    status: "хетчбек",
    tag: "dCi · економний",
=======
    price: "Під запит $",
    year: 2016,
    mileage: "74,310 km",
    engine: "1498 cm",
    fuel: "Дизель",
    transmission: "Механіка",
    status: "dCi",
    tag: "економний",
>>>>>>> 70792aded3fa030693e10a1467fd5df52f0d9740
    description: lines([
      "Рік випуску: 2016",
      "Показання одометра: 74,310 km",
      "Тип палива: Дизель",
<<<<<<< HEAD
      "Об'єм двигуна: 1 498 см³",
      "Коробка передач: Механіка",
      "Дизельний Megane з пробігом 74 тис. km — свіжий стан і мінімальна витрата на трасі.",
=======
      "Об'єм двигуна: 1498 cm",
      "Коробка передач: Механіка",
>>>>>>> 70792aded3fa030693e10a1467fd5df52f0d9740
    ])
  },
  {
    id: "4",
    title: "Hyundai Tucson 1.7 CRDi Xpossible ISG 2WD",
    country: "Європа",
    image: "/images/cars/hyundai-tucson-xpossible-2016.jpg",
<<<<<<< HEAD
    price: "",
    year: 2016,
    mileage: "178,467 km",
    engine: "1 698 см³",
    fuel: "Дизель",
    transmission: "Механіка",
    status: "кросовер",
    tag: "CRDi · ISG",
=======
    price: "Під запит $",
    year: 2016,
    mileage: "178,467 km",
    engine: "1698 cm",
    fuel: "Дизель",
    transmission: "Механіка",
    status: "SUV",
    tag: "кросовер",
>>>>>>> 70792aded3fa030693e10a1467fd5df52f0d9740
    description: lines([
      "Рік випуску: 2016",
      "Показання одометра: 178,467 km",
      "Тип палива: Дизель",
<<<<<<< HEAD
      "Об'єм двигуна: 1 698 см³",
      "Коробка передач: Механіка",
      "Надійний дизельний кросовер Hyundai з системою старт-стоп — практично і вигідно в обслуговуванні.",
=======
      "Об'єм двигуна: 1698 cm",
      "Коробка передач: Механіка",
>>>>>>> 70792aded3fa030693e10a1467fd5df52f0d9740
    ])
  },
  {
    id: "5",
    title: "Skoda Octavia 1.4 TSI Ambiente",
    country: "Європа",
    image: "/images/cars/skoda-octavia-ambiente-2009.jpg",
<<<<<<< HEAD
    price: "",
    year: 2009,
    mileage: "172,899 km",
    engine: "1 398 см³",
    fuel: "Бензин",
    transmission: "Механіка",
    status: "ліфтбек",
    tag: "TSI · Ambiente",
=======
    price: "Під запит $",
    year: 2009,
    mileage: "172,899 km",
    engine: "1398 cm",
    fuel: "Бензин",
    transmission: "Механіка",
    status: "універсал",
    tag: "практичний",
>>>>>>> 70792aded3fa030693e10a1467fd5df52f0d9740
    description: lines([
      "Рік випуску: 2009",
      "Показання одометра: 172,899 km",
      "Тип палива: Бензин",
<<<<<<< HEAD
      "Об'єм двигуна: 1 398 см³",
      "Коробка передач: Механіка",
      "Skoda Octavia — простора та практична у виконанні Ambiente, одна з найпопулярніших моделей в Україні.",
=======
      "Об'єм двигуна: 1398 cm",
      "Коробка передач: Механіка",
>>>>>>> 70792aded3fa030693e10a1467fd5df52f0d9740
    ])
  },
  {
    id: "6",
    title: "Nissan Qashqai 1.6 Acenta",
    country: "Європа",
    image: "/images/cars/nissan-qashqai-acenta-2013.jpg",
<<<<<<< HEAD
    price: "",
    year: 2013,
    mileage: "109,906 km",
    engine: "1 598 см³",
    fuel: "Бензин",
    transmission: "Механіка",
    status: "кросовер",
    tag: "Acenta · міський SUV",
=======
    price: "Під запит $",
    year: 2013,
    mileage: "109,906 km",
    engine: "1598 cm",
    fuel: "Бензин",
    transmission: "Механіка",
    status: "SUV",
    tag: "міський SUV",
>>>>>>> 70792aded3fa030693e10a1467fd5df52f0d9740
    description: lines([
      "Рік випуску: 2013",
      "Показання одометра: 109,906 km",
      "Тип палива: Бензин",
<<<<<<< HEAD
      "Об'єм двигуна: 1 598 см³",
      "Коробка передач: Механіка",
      "Qashqai Acenta — міський кросовер з повною комплектацією, ідеальний для сімейного використання.",
=======
      "Об'єм двигуна: 1598 cm",
      "Коробка передач: Механіка",
>>>>>>> 70792aded3fa030693e10a1467fd5df52f0d9740
    ])
  },
  {
    id: "7",
    title: "Audi A4 Avant 2.0 TDI",
    country: "Європа",
    image: "/images/cars/audi-a4-avant-2012.jpg",
<<<<<<< HEAD
    price: "",
    year: 2012,
    mileage: "157,367 km",
    engine: "1 968 см³",
    fuel: "Дизель",
    transmission: "Механіка",
    status: "універсал",
    tag: "Avant · TDI",
    description: lines([
      "Рік випуску: 2012",
      "Показання одометра: 157,367 km",
      "Тип палива: Дизель",
      "Об'єм двигуна: 1 968 см³",
      "Коробка передач: Механіка",
      "Audi A4 Avant — бізнес-клас у кузові універсал з чудовою динамікою та простором у багажнику.",
=======
    price: "Під запит $",
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
>>>>>>> 70792aded3fa030693e10a1467fd5df52f0d9740
    ])
  },
  {
    id: "8",
    title: "Ford Focus 1.6 TDCi",
    country: "Європа",
    image: "/images/cars/ford-focus-tdci-2014.jpg",
<<<<<<< HEAD
    price: "",
    year: 2014,
    mileage: "177,202 km",
    engine: "1 560 см³",
    fuel: "Дизель",
    transmission: "Механіка",
    status: "хетчбек",
    tag: "TDCi · економний",
    description: lines([
      "Рік випуску: 2014",
      "Показання одометра: 177,202 km",
      "Тип палива: Дизель",
      "Об'єм двигуна: 1 560 см³",
      "Коробка передач: Механіка",
      "Ford Focus TDCi — перевірений хетчбек з дизельним двигуном і мінімальними витратами на паливо.",
=======
    price: "Під запит $",
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
>>>>>>> 70792aded3fa030693e10a1467fd5df52f0d9740
    ])
  },
  {
    id: "9",
    title: "Kia Sorento 2.2 CRDi",
    country: "Європа",
    image: "/images/cars/kia-sorento-crdi-2013.jpg",
<<<<<<< HEAD
    price: "",
    year: 2013,
    mileage: "156,250 km",
    engine: "2 199 см³",
    fuel: "Дизель",
    transmission: "Автомат",
    status: "SUV",
    tag: "CRDi · автомат",
    description: lines([
      "Рік випуску: 2013",
      "Показання одометра: 156,250 km",
      "Тип палива: Дизель",
      "Об'єм двигуна: 2 199 см³",
      "Коробка передач: Автомат",
      "Просторий 7-місний позашляховик Kia Sorento з потужним дизелем і автоматичною коробкою передач.",
=======
    price: "Під запит $",
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
>>>>>>> 70792aded3fa030693e10a1467fd5df52f0d9740
    ])
  },
  {
    id: "10",
    title: "Volkswagen Passat Variant 2.0 TDI",
    country: "Європа",
    image: "/images/cars/volkswagen-passat-variant-2010.jpg",
<<<<<<< HEAD
    price: "",
    year: 2010,
    mileage: "180,240 km",
    engine: "1 968 см³",
    fuel: "Дизель",
    transmission: "Механіка",
    status: "універсал",
    tag: "Variant · TDI",
    description: lines([
      "Рік випуску: 2010",
      "Показання одометра: 180,240 km",
      "Тип палива: Дизель",
      "Об'єм двигуна: 1 968 см³",
      "Коробка передач: Механіка",
      "VW Passat Variant — класичний бізнес-універсал з дизелем, великим багажником і чудовою ходовою.",
=======
    price: "Під запит $",
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
>>>>>>> 70792aded3fa030693e10a1467fd5df52f0d9740
    ])
  },
  {
    id: "11",
    title: "Volkswagen Tiguan 2.0 TSI",
    country: "Європа",
    image: "/images/cars/volkswagen-tiguan-tsi-2012.jpg",
<<<<<<< HEAD
    price: "",
    year: 2012,
    mileage: "133,029 km",
    engine: "1 984 см³",
    fuel: "Бензин",
    transmission: "Автомат",
    status: "кросовер",
    tag: "TSI · автомат",
    description: lines([
      "Рік випуску: 2012",
      "Показання одометра: 133,029 km",
      "Тип палива: Бензин",
      "Об'єм двигуна: 1 984 см³",
      "Коробка передач: Автомат",
      "Volkswagen Tiguan TSI з автоматом — надійний і комфортний кросовер з повним набором опцій.",
=======
    price: "Під запит $",
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
>>>>>>> 70792aded3fa030693e10a1467fd5df52f0d9740
    ])
  },
  {
    id: "12",
    title: "Renault Megane 1.6 dCi BOSE Edition",
    country: "Європа",
    image: "/images/cars/renault-megane-bose-edition-2015.jpg",
<<<<<<< HEAD
    price: "",
    year: 2015,
    mileage: "143,622 km",
    engine: "1 589 см³",
    fuel: "Дизель",
    transmission: "Механіка",
    status: "хетчбек",
    tag: "BOSE · dCi",
=======
    price: "Під запит $",
    year: 2015,
    mileage: "143,622 km",
    engine: "1589 cm",
    fuel: "Дизель",
    transmission: "Механіка",
    status: "BOSE",
    tag: "універсал",
>>>>>>> 70792aded3fa030693e10a1467fd5df52f0d9740
    description: lines([
      "Рік випуску: 2015",
      "Показання одометра: 143,622 km",
      "Тип палива: Дизель",
<<<<<<< HEAD
      "Об'єм двигуна: 1 589 см³",
      "Коробка передач: Механіка",
      "Megane BOSE Edition — топова комплектація з аудіосистемою Bose, підігрівом і повним пакетом безпеки.",
=======
      "Об'єм двигуна: 1589 cm",
      "Коробка передач: Механіка",
>>>>>>> 70792aded3fa030693e10a1467fd5df52f0d9740
    ])
  },
  {
    id: "13",
    title: "Ford Escape 1.5 EcoBoost",
    country: "США",
    image: "/images/cars/ford-escape-15-2018.jpg",
<<<<<<< HEAD
    price: "",
    year: 2018,
    mileage: "85,709 mi",
    engine: "1 497 см³",
    fuel: "Бензин",
    transmission: "Автомат",
    status: "кросовер",
    tag: "EcoBoost · автомат",
=======
    price: "Під запит $",
    year: 2018,
    mileage: "85,709 mi",
    engine: "1.5",
    fuel: "Бензин",
    transmission: "Автомат",
    status: "SUV",
    tag: "автомат",
>>>>>>> 70792aded3fa030693e10a1467fd5df52f0d9740
    description: lines([
      "Рік випуску: 2018",
      "Показання одометра: 85,709 mi",
      "Тип палива: Бензин",
<<<<<<< HEAD
      "Об'єм двигуна: 1 497 см³",
      "Коробка передач: Автомат",
      "Ford Escape EcoBoost зі США — динамічний кросовер з турбованим двигуном і сучасною мультимедіа.",
=======
      "Об'єм двигуна: 1.5",
      "Коробка передач: Автомат",
>>>>>>> 70792aded3fa030693e10a1467fd5df52f0d9740
    ])
  },
  {
    id: "14",
    title: "Peugeot 3008 1.6 HDi Business Pack",
    country: "Європа",
    image: "/images/cars/peugeot-3008-business-pack-2012.jpg",
<<<<<<< HEAD
    price: "",
    year: 2012,
    mileage: "220,326 km",
    engine: "1 598 см³",
    fuel: "Дизель",
    transmission: "Механіка",
    status: "кросовер",
    tag: "HDi · Business",
=======
    price: "Під запит $",
    year: 2012,
    mileage: "220,326 km",
    engine: "1598 cm",
    fuel: "Дизель",
    transmission: "Механіка",
    status: "HDi",
    tag: "кросовер",
>>>>>>> 70792aded3fa030693e10a1467fd5df52f0d9740
    description: lines([
      "Рік випуску: 2012",
      "Показання одометра: 220,326 km",
      "Тип палива: Дизель",
<<<<<<< HEAD
      "Об'єм двигуна: 1 598 см³",
      "Коробка передач: Механіка",
      "Peugeot 3008 Business Pack — оригінальний кросовер з бізнес-комплектацією та дизельним двигуном.",
=======
      "Об'єм двигуна: 1598 cm",
      "Коробка передач: Механіка",
>>>>>>> 70792aded3fa030693e10a1467fd5df52f0d9740
    ])
  }
];
