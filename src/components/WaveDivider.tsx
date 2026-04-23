export function WaveDivider({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      className="wave-divider"
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
      aria-hidden
    >
      <path
        d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
        fill="currentColor"
      />
    </svg>
  );
}
