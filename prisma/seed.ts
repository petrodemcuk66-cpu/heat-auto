import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.car.deleteMany();
  await prisma.review.deleteMany();

  await prisma.car.createMany({
    data: [
      {
        title: "BMW 330i xDrive",
        country: "США",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1400&q=85",
        price: "від $27 900",
        year: 2021,
        mileage: "48 000 км",
        engine: "2.0 Turbo AWD",
        status: "вигідний седан",
        tag: "економія 30–40%",
        description: "Динамічний седан для міста і траси. Часто вигідний у США завдяки широкому вибору комплектацій.",
        visible: true,
        sortOrder: 1
      },
      {
        title: "Mercedes-Benz GLE",
        country: "Європа",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1400&q=85",
        price: "від $48 500",
        year: 2021,
        mileage: "61 000 км",
        engine: "3.0 Diesel",
        status: "business SUV",
        tag: "преміум",
        description: "Комфортний SUV для сімʼї та бізнесу з високим рівнем безпеки і представницьким виглядом.",
        visible: true,
        sortOrder: 2
      },
      {
        title: "Toyota RAV4 Hybrid",
        country: "США",
        image: "https://images.unsplash.com/photo-1583267746897-2cf415887172?auto=format&fit=crop&w=1400&q=85",
        price: "від $31 500",
        year: 2022,
        mileage: "42 000 км",
        engine: "2.5 Hybrid",
        status: "family SUV",
        tag: "надійність",
        description: "Практичний гібридний кросовер для сімʼї, міста, подорожей і щоденної експлуатації.",
        visible: true,
        sortOrder: 3
      }
    ]
  });

  await prisma.review.createMany({
    data: [
      {
        name: "Олександр",
        city: "Львів",
        car: "BMW 330i",
        rating: 5,
        visible: true,
        text: "Думав брати BMW уже в Україні за 31 000$, але HEAT AUTO знайшли варіант зі США, який вийшов дешевше майже на 4 000$. Менеджер відповідав навіть о 23:00, коли були торги. Через 58 днів авто було у Львові."
      },
      {
        name: "Марія",
        city: "Тернопіль",
        car: "Toyota RAV4 Hybrid",
        rating: 5,
        visible: true,
        text: "Мені потрібен був сімейний кросовер без сюрпризів. Показали три варіанти, по кожному пояснили пошкодження і витрати. RAV4 зі США приїхав за 51 день, розрахунок майже збігся з фінальною сумою."
      },
      {
        name: "Андрій",
        city: "Київ",
        car: "Mercedes-Benz GLE",
        rating: 5,
        visible: true,
        text: "Найбільше сподобалось, що мене не вмовляли купувати перший варіант. Один GLE відхилили через історію удару, хоча він виглядав красиво. У результаті взяли чистіший варіант з Європи."
      }
    ]
  });

  console.log("Seed completed");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
