type Props = {
  emoji: string;
  label: string;
  title: string;
  accent?: "rosa" | "verde" | "cielo";
};

export default function SectionHeading({ emoji, label, title, accent = "rosa" }: Props) {
  const bg = { rosa: "bg-rosa", verde: "bg-menta", cielo: "bg-cielo" }[accent];

  return (
    <div className="mx-auto mb-14 flex max-w-xl flex-col items-center text-center">
      <span
        className={`sticker-btn inline-flex items-center gap-2 rounded-full ${bg} px-4 py-1.5 font-display text-sm`}
      >
        <span aria-hidden="true">{emoji}</span> {label}
      </span>
      <h2 className="mt-5 font-display text-3xl text-tinta sm:text-4xl">{title}</h2>
    </div>
  );
}