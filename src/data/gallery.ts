import type { Car } from "@/types";

const lines = (items: string[]) => items.join("\n");

export type AuctionGalleryCar = Car & {
  autoriaPrice: string;
  heatAutoPrice: string;
  copartUrl: string;
};

export const auctionGalleryCars: AuctionGalleryCar[] = [
  {
    id: "auction-1",
    title: "Volkswagen Tiguan S 2.0",
    country: "США",
    image: "/images/cars/copart-vw-tiguan-2022.jpg",
    price: "Heat Auto: 18 200$",
    autoriaPrice: "27 600$",
    heatAutoPrice: "18 200$",
    year: 2022,
    mileage: "100 000",
    engine: "2.0",
    fuel: "бенз",
    transmission: "автомат",
    status: "SUV",
    tag: "Copart",
    copartUrl: "https://www.copart.com/lot/56107266/clean-title-2022-volkswagen-tiguan-s-tx-dallas",
    description: lines([
      "Рік випуску: 2022",
      "Показання одометра: 100 000",
      "Тип палива: бенз",
      "Об'єм двигуна: 2.0",
      "Коробка передач: автомат",
      "Авторіа: 27 600$",
      "Heat Auto: 18 200$"
    ])
  },
  {
    id: "auction-2",
    title: "Volkswagen Tiguan S 2.0",
    country: "США",
    image: "/images/cars/copart-vw-tiguan-2015.jpg",
    price: "Heat Auto: 9 400$",
    autoriaPrice: "13 000$",
    heatAutoPrice: "9 400$",
    year: 2015,
    mileage: "104 000",
    engine: "2.0",
    fuel: "бензин",
    transmission: "автоматична",
    status: "SUV",
    tag: "Copart",
    copartUrl: "https://www.copart.com/lot/99489265/clean-title-2015-volkswagen-tiguan-s-ct-hartford-springfield",
    description: lines([
      "Рік випуску: 2015",
      "Показання одометра: 104 000",
      "Тип палива: бензин",
      "Об'єм двигуна: 2.0",
      "Коробка передач: автоматична",
      "Авторіа: 13 000$",
      "Heat Auto: 9 400$"
    ])
  },
  {
    id: "auction-3",
    title: "Ford Edge ST 2.7",
    country: "США",
    image: "/images/cars/copart-ford-edge-2019.jpg",
    price: "Heat Auto: 19 650$",
    autoriaPrice: "27 550$",
    heatAutoPrice: "19 650$",
    year: 2019,
    mileage: "109 000",
    engine: "2.7",
    fuel: "бензин",
    transmission: "автоматична",
    status: "ST",
    tag: "кросовер",
    copartUrl: "https://www.copart.com/lot/56307016/clean-title-2019-ford-edge-st-tx-dallas",
    description: lines([
      "Рік випуску: 2019",
      "Показання одометра: 109 000",
      "Тип палива: бензин",
      "Об'єм двигуна: 2.7",
      "Коробка передач: автоматична",
      "Авторіа: 27 550$",
      "Heat Auto: 19 650$"
    ])
  },
  {
    id: "auction-4",
    title: "Audi A6 Premium Plus 3.0",
    country: "США",
    image: "/images/cars/copart-audi-a6-2019.jpg",
    price: "Heat Auto: 29 900$",
    autoriaPrice: "37 500$",
    heatAutoPrice: "29 900$",
    year: 2019,
    mileage: "60 827",
    engine: "3.0",
    fuel: "бензин",
    transmission: "автоматична",
    status: "Premium",
    tag: "бізнес",
    copartUrl: "https://www.copart.com/ru/lot/56949276/clean-title-2019-audi-a6-premium-plus-ma-north-boston",
    description: lines([
      "Рік випуску: 2019",
      "Показання одометра: 60 827",
      "Тип палива: бензин",
      "Об'єм двигуна: 3.0",
      "Коробка передач: автоматична",
      "Авторіа: 37 500$",
      "Heat Auto: 29 900$"
    ])
  },
  {
    id: "auction-5",
    title: "Audi S4 Premium Plus 3.0",
    country: "США",
    image: "/images/cars/copart-audi-s4-2018.jpg",
    price: "Heat Auto: 19 150$",
    autoriaPrice: "26 500$",
    heatAutoPrice: "19 150$",
    year: 2018,
    mileage: "100,274 mi",
    engine: "3.0",
    fuel: "бензин",
    transmission: "автоматична",
    status: "S4",
    tag: "спорт",
    copartUrl: "https://www.copart.com/ru/lot/56966226/clean-title-2018-audi-s4-premium-plus-ma-north-boston",
    description: lines([
      "Рік випуску: 2018",
      "Показання одометра: 100,274 mi",
      "Тип палива: бензин",
      "Об'єм двигуна: 3.0",
      "Коробка передач: автоматична",
      "Авторіа: 26 500$",
      "Heat Auto: 19 150$"
    ])
  },
  {
    id: "auction-6",
    title: "Audi Q7 Premium Plus 3.0",
    country: "США",
    image: "/images/cars/copart-audi-q7-2017.jpg",
    price: "Heat Auto: 20 400$",
    autoriaPrice: "28 900$",
    heatAutoPrice: "20 400$",
    year: 2017,
    mileage: "109 000",
    engine: "3.0",
    fuel: "бензин",
    transmission: "автоматична",
    status: "Q7",
    tag: "SUV",
    copartUrl: "https://www.copart.com/ru/lot/79977895/clean-title-2017-audi-q7-premium-plus-ga-fairburn",
    description: lines([
      "Рік випуску: 2017",
      "Показання одометра: 109 000",
      "Тип палива: бензин",
      "Об'єм двигуна: 3.0",
      "Коробка передач: автоматична",
      "Авторіа: 28 900$",
      "Heat Auto: 20 400$"
    ])
  },
  {
    id: "auction-7",
    title: "BMW 330i 2.0",
    country: "США",
    image: "/images/cars/copart-bmw-330i-2019.jpg",
    price: "Heat Auto: 19 500$",
    autoriaPrice: "27 500$",
    heatAutoPrice: "19 500$",
    year: 2019,
    mileage: "92 557",
    engine: "2.0",
    fuel: "бензин",
    transmission: "автоматична",
    status: "330i",
    tag: "седан",
    copartUrl: "https://www.copart.com/lot/92696985/salvage-2019-bmw-330i-ca-martinez",
    description: lines([
      "Рік випуску: 2019",
      "Показання одометра: 92 557",
      "Тип палива: бензин",
      "Об'єм двигуна: 2.0",
      "Коробка передач: автоматична",
      "Авторіа: 27 500$",
      "Heat Auto: 19 500$"
    ])
  },
  {
    id: "auction-8",
    title: "BMW 328 xi SULEV 2.0",
    country: "США",
    image: "/images/cars/copart-bmw-328xi-2014.webp",
    price: "Heat Auto: 9 450$",
    autoriaPrice: "13 200$",
    heatAutoPrice: "9 450$",
    year: 2014,
    mileage: "113 000",
    engine: "2.0",
    fuel: "бензин",
    transmission: "автоматична",
    status: "328xi",
    tag: "седан",
    copartUrl: "https://www.copart.com/lot/57697216/clean-title-2014-bmw-328-xi-sulev-nj-somerville",
    description: lines([
      "Рік випуску: 2014",
      "Показання одометра: 113 000",
      "Тип палива: бензин",
      "Об'єм двигуна: 2.0",
      "Коробка передач: автоматична",
      "Авторіа: 13 200$",
      "Heat Auto: 9 450$"
    ])
  },
  {
    id: "auction-9",
    title: "Toyota Prius LE 2.0 Hybrid",
    country: "США",
    image: "/images/cars/copart-toyota-prius-2025.jpg",
    price: "Heat Auto: 25 600$",
    autoriaPrice: "30 900$",
    heatAutoPrice: "25 600$",
    year: 2025,
    mileage: "2 262",
    engine: "2.0",
    fuel: "гібрид",
    transmission: "автоматична",
    status: "Hybrid",
    tag: "економний",
    copartUrl: "https://www.copart.com/lot/54210136/salvage-2025-toyota-prius-le-or-portland-north",
    description: lines([
      "Рік випуску: 2025",
      "Показання одометра: 2 262",
      "Тип палива: гібрид",
      "Об'єм двигуна: 2.0",
      "Коробка передач: автоматична",
      "Авторіа: 30 900$",
      "Heat Auto: 25 600$"
    ])
  }
];
