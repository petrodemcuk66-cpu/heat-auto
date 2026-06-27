import SectionTitle from "@/components/ui/SectionTitle";
import { getPublicReviews } from "@/lib/publicData";

export default async function Reviews() {
  const reviews = await getPublicReviews();

  return (
    <section aria-label="Відгуки клієнтів" data-reveal className="section bg-black/30">
      <div className="container">
        <SectionTitle
          kicker="Відгуки"
          title="Клієнти цінують прозорість і супровід"
          text="Найчастіше клієнти відзначають не тільки фінальну економію, а й спокій: зрозумілі розрахунки, швидкі відповіді менеджера і контроль статусів."
        />

        <div className="grid items-stretch gap-5 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <article
              key={review.id || `${review.name}-${review.car}`}
              className="glass animate-fadeInUp flex h-full flex-col rounded-[30px] p-4 sm:p-6 opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-[color:var(--gold)]">★★★★★</p>
              <p className="mt-5 flex-1 text-sm leading-7 text-[color:var(--muted)]">“{review.text}”</p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="font-black">{review.name}, {review.city}</p>
                <p className="mt-1 text-sm text-[color:var(--red2)]">{review.car}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
