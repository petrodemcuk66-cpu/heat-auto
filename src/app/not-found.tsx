import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container flex min-h-screen flex-col items-center justify-center text-center">
      <p className="kicker">404</p>
      <h1 className="mt-5 text-4xl font-black md:text-6xl">Сторінку не знайдено</h1>
      <p className="mt-4 max-w-xl text-[color:var(--muted)]">
        Можливо, посилання неправильне або сторінку було переміщено.
      </p>
      <Link href="/" className="focus mt-8 rounded-2xl bg-[color:var(--red)] px-7 py-4 font-black hover:bg-[color:var(--red-dark)]">
        На головну
      </Link>
    </main>
  );
}
