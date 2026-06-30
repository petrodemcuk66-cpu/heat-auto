type Props = {
  kicker: string;
  title: string;
  text?: string;
  center?: boolean;
};

export default function SectionTitle({ kicker, title, text, center = false }: Props) {
  return (
    <div className={`mb-10 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <p className={`kicker ${center ? "justify-center" : ""}`}>{kicker}</p>
      <h2 className="mt-4 text-xl font-black leading-[1.12] tracking-tight sm:text-2xl lg:text-3xl xl:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-5 text-sm leading-7 text-[color:var(--muted)] sm:text-base sm:leading-8">{text}</p>}
    </div>
  );
}
