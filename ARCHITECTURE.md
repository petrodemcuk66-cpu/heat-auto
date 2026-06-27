# Повна архітектура проєкту HEAT AUTO

```txt
heat-auto-usa-europe-final/
├── public/
│   ├── images/
│   │   ├── logo/
│   │   ├── hero/
│   │   ├── cars/
│   │   ├── backgrounds/
│   │   └── icons/
│   ├── og/
│   └── favicon.ico
│
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
│
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── leads/
│   │   │   │   └── route.ts
│   │   │   ├── reviews/
│   │   │   │   └── route.ts
│   │   │   ├── calculate/
│   │   │   │   └── route.ts
│   │   │   ├── health/
│   │   │   │   └── route.ts
│   │   │   └── keycrm/
│   │   │       └── status/
│   │   │           └── route.ts
│   │   ├── privacy/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── loading.tsx
│   │
│   ├── components/
│   │   ├── effects/
│   │   │   ├── RevealOnScroll.tsx
│   │   │   ├── ScrollProgress.tsx
│   │   │   └── PremiumCursorGlow.tsx
│   │   │
│   │   ├── forms/
│   │   │   ├── LeadForm.tsx
│   │   │   └── ReviewForm.tsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── FloatingActions.tsx
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── TrustBanner.tsx
│   │   │   ├── BrandStrip.tsx
│   │   │   ├── AboutCompany.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── SelfVsHeat.tsx
│   │   │   ├── CountryDirections.tsx
│   │   │   ├── Showcase.tsx
│   │   │   ├── DeliveredCars.tsx
│   │   │   ├── Gallery.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── Guarantees.tsx
│   │   │   ├── DocumentsPack.tsx
│   │   │   ├── Advantages.tsx
│   │   │   ├── Calculator.tsx
│   │   │   ├── Reviews.tsx
│   │   │   ├── RequestProcess.tsx
│   │   │   ├── Faq.tsx
│   │   │   └── Contacts.tsx
│   │   │
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── MetricCard.tsx
│   │       ├── SectionTitle.tsx
│   │       └── IconBadge.tsx
│   │
│   ├── data/
│   │   ├── site.ts
│   │   ├── cars.ts
│   │   ├── deliveredCars.ts
│   │   ├── reviews.ts
│   │   ├── faq.ts
│   │   ├── gallery.ts
│   │   └── services.ts
│   │
│   ├── lib/
│   │   ├── prisma.ts
│   │   ├── keycrm.ts
│   │   ├── lead.ts
│   │   ├── publicData.ts
│   │   ├── telegram.ts
│   │   └── email.ts
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   └── types/
│       └── index.ts
│
├── .env
├── .env.local
├── .env.example
├── package.json
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── vercel.json
├── README.md
├── ARCHITECTURE.md
└── CHANGED_FILES_FULL_CODE.md
```

## Головні дані

```txt
Телефон: +38 (063) 654-06-00
Telegram: @HeatAuto
Напрямки: США та Європа
Економія: 30–40%
```


## Mobile quick access

```txt
src/components/layout/Header.tsx
├── desktop navigation
├── active section observer
├── body scroll lock
└── mobile menu
    ├── quick access cards
    │   ├── phone
    │   ├── Telegram
    │   ├── calculator
    │   └── cars
    ├── navigation links
    ├── lead CTA
    └── phone card
```


## Fixed mobile overlay architecture

```txt
Header.tsx
├── fixed header z-[100]
├── desktop navigation
├── hamburger button
└── mobile overlay z-[90]
    ├── fixed top-20 bottom-0
    ├── quick access cards
    ├── section navigation
    ├── lead CTA
    └── phone card
```
