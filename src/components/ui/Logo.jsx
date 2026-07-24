// Minimal AIS monogram — terminal-bracket motif, doubles as the home link mark.
export default function Logo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 40 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* terminal bracket */}
      <path
        d="M4 6 L11 16 L4 26"
        stroke="var(--color-accent)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* AIS monogram, condensed */}
      <text
        x="15"
        y="23"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="17"
        letterSpacing="-0.5"
        fill="var(--color-text)"
      >
        AIS
      </text>
      {/* underscore cursor accent */}
      <rect x="15" y="26.5" width="9" height="2" rx="1" fill="var(--color-accent)" opacity="0.55" />
    </svg>
  );
}
