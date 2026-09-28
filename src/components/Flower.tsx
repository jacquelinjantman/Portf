type Props = {
  className?: string;
  delay?: string; // ej. "0.3s", controla cuándo empieza a florecer
};

export default function Flower({ className = "", delay = "0s" }: Props) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      focusable="false"
      className={`flower-bloom ${className}`}
      style={{ animationDelay: delay }}
    >
      <g transform="translate(50,50)" className="flower-sway">
        <g fill="var(--color-rosa)" stroke="var(--color-tinta)" strokeWidth="2.5">
          <ellipse cx="0" cy="-22" rx="13" ry="20" />
          <ellipse cx="21" cy="-7" rx="13" ry="20" transform="rotate(72 21 -7)" />
          <ellipse cx="13" cy="18" rx="13" ry="20" transform="rotate(144 13 18)" />
          <ellipse cx="-13" cy="18" rx="13" ry="20" transform="rotate(216 -13 18)" />
          <ellipse cx="-21" cy="-7" rx="13" ry="20" transform="rotate(288 -21 -7)" />
        </g>
        <circle r="12" fill="var(--color-neon)" stroke="var(--color-tinta)" strokeWidth="2.5" />
      </g>
    </svg>
  );
}