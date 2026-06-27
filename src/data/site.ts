export const site = {
  companyName: "HEAT AUTO",
  legalName: "HEAT AUTO IMPORT",

  logo: "/images/logo/heat-auto-header-client.png",
  phone: process.env.NEXT_PUBLIC_PHONE || "+38 (063) 654-06-00",
  email: process.env.NEXT_PUBLIC_EMAIL || "heatauto44@gmail.com",
  telegram: process.env.NEXT_PUBLIC_TELEGRAM || "https://t.me/HeatAuto",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM || "https://instagram.com/heatauto",
  address: "Микулинецька 3А",
  workTime: "Пн–Сб: 09:00–19:00",
  title: "Ваше авто з США або Європи — без переплат і нервів",
  description:
    "Підбираємо авто під ваш бюджет та потреби. Показуємо реальну вартість під ключ. Супроводжуємо до отримання авто.",
  seoTitle: "HEAT AUTO — авто зі США та Європи під ключ",
  seoDescription:
    "Професійний імпорт авто під ключ: підбір, VIN-перевірка, аукціони, доставка, розмитнення, сертифікація та оформлення в Україні."
};

export const navigation = [
  { label: "Головна", href: "#home" },
  { label: "Про нас", href: "#about" },
  { label: "Послуги", href: "#services" },
  { label: "Авто", href: "#cars" },
  { label: "Гарантії", href: "#guarantees" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакти", href: "#contacts" }
];

export const metrics = [
  { value: "420+", label: "автомобілів доставлено клієнтам" },
  { value: "5–25", label: "днів від отримання заявки до ключів" },
  { value: "30–40%", label: "економія проти купівлі на ринку України" },
  { value: "5 років", label: "досвіду в імпорті та логістиці авто" }
];

export const trustLogos = ["Carfax", "Copart", "IAAI", "AutoBid", "Manheim", "AutoCheck"];
