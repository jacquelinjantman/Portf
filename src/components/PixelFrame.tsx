type Props = {className?: string};

function PixelCorner({className = ""}:{className?: string}) {
  return(
    <svg viewBox="0 0 40 40" aria-hidden="true" focusable="false" className={className}>
      <g fill="currentColor">
        <rect x="0" y="0" width="8" height="8" />
        <rect x="8" y="0" width="8" height="8" />
        <rect x="16" y="0" width="8" height="8" />
        <rect x="0" y="8" width="8" height="8" />
        <rect x="0" y="16" width="8" height="8" />
      </g>
      <g className="fill-tinta">
        <rect x="24" y="0" width="8" height="8" />
        <rect x="0" y="24" width="8" height="8" />
      </g>
    </svg>
  );
}

export function PixelFrame({ className = ""}: Props) {
  const base = "absolute size-8 sm:size-10";
  return(
     <div aria-hidden="true" className={`pointer-events-none ${className}`}>
      <PixelCorner className={`${base} -left-1 -top-1`} />
      <PixelCorner className={`${base} -right-1 -top-1 rotate-90`} />
      <PixelCorner className={`${base} -right-1 -bottom-1 rotate-180`} />
      <PixelCorner className={`${base} -left-1 -bottom-1 -rotate-90`} />
    </div>

  );
}
