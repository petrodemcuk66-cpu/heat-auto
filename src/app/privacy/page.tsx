import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="container min-h-screen py-28">
      <Link href="/" className="text-sm text-[color:var(--red)]">← На головну</Link>
      <h1 className="mt-8 text-4xl font-black">Політика конфіденційності</h1>
      <div className="mt-8 max-w-3xl space-y-5 text-sm leading-8 text-[color:var(--muted)]">
        <p>
          Цей сайт збирає контактні дані, які користувач добровільно залишає у формі заявки:
          імʼя, телефон, email, бюджет, побажання щодо авто та коментар.
        </p>
        <p>
          Дані використовуються лише для звʼязку з клієнтом, підбору автомобіля та обробки заявки в CRM-системі.
        </p>
        <p>
          Дані можуть передаватися у KeyCRM для ведення клієнтської бази, історії комунікації та статусів обробки заявки.
        </p>
      </div>
    </main>
  );
}
