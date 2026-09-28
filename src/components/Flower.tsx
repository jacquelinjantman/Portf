type Props = {
  className?: string;
  delay?: string;
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
      {/* Grupo exterior: solo se balancea (animación CSS) */}
      <g className="flower-sway">
        {/* Grupo interior: solo posiciona la flor en el centro */}
        <g transform="translate(50,50)">
          <g fill="#FF9EC7" stroke="#2B2140" strokeWidth="2.5">
            <ellipse cx="0" cy="-20" rx="13" ry="20" />
            <ellipse cx="0" cy="-20" rx="13" ry="20" transform="rotate(72)" />
            <ellipse cx="0" cy="-20" rx="13" ry="20" transform="rotate(144)" />
            <ellipse cx="0" cy="-20" rx="13" ry="20" transform="rotate(216)" />
            <ellipse cx="0" cy="-20" rx="13" ry="20" transform="rotate(288)" />
          </g>
          <circle r="11" fill="#FFD86B" stroke="#2B2140" strokeWidth="2.5" />
        </g>
      </g>
    </svg>
  );
}