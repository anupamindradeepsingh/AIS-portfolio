export default function Badge({ children }) {
  return (
    <span className="inline-block rounded border border-[var(--color-border)] bg-[var(--color-bg-inset)] px-2.5 py-1 font-mono text-xs text-[var(--color-text-muted)]">
      {children}
    </span>
  );
}
