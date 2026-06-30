# Хостинг

## Vercel

1. Завантаж проєкт у GitHub.
2. Імпортуй у Vercel.
3. Додай Environment Variables з `.env` / `.env.local`.
4. Deploy.
5. Для production бази виконай:

```bash
npx prisma migrate deploy
npm run db:seed
```

## VPS

```bash
npm install
npx prisma generate
npx prisma migrate deploy
npm run db:seed
npm run build
npm run start
```
