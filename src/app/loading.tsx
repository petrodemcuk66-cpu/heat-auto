export default function Loading() {
  return (
    <main className="container flex min-h-screen items-center justify-center">
      <div className="glass rounded-[32px] p-8 text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-white/10 border-t-[color:var(--red)]" />
        <p className="mt-5 font-black">Завантаження HEAT AUTO...</p>
      </div>
    </main>
  );
}
