import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-[var(--color-accent)]">$ cd ./this-page</p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-[var(--color-text)]">
        404: command not found
      </h1>
      <p className="mt-2 text-[var(--color-text-muted)]">
        This route doesn't exist. Try heading back home.
      </p>
      <Link
        to="/"
        className="mt-6 rounded-md border border-[var(--color-border)] px-5 py-2 font-mono text-sm text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
      >
        ← back home
      </Link>
    </section>
  );
}
