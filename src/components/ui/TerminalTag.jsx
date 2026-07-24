/**
 * A small pill-shaped "terminal command" tag — used for eyebrow labels like
 * `$ cat about.md`. Replaces plain mono text with a bordered, dotted-prompt
 * badge with a soft blinking caret, consistent with the terminal identity.
 */
export default function TerminalTag({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-3.5 py-1.5 font-mono text-xs text-[var(--color-accent)] sm:text-sm">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
      {children}
      <span className="caret h-3.5" />
    </span>
  );
}
