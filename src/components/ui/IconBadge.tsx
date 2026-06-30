import Image from "next/image";

const iconMap: Record<string, string> = {
  search: "/images/icons/search.svg",
  shield: "/images/icons/shield.svg",
  ship: "/images/icons/ship.svg",
  doc: "/images/icons/doc.svg"
};

export default function IconBadge({ icon }: { icon: string }) {
  return (
    <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/[.06] ring-1 ring-white/10">
      <Image src={iconMap[icon] || iconMap.search} alt="" width={32} height={32} />
    </span>
  );
}
