import profile from "../../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <p className="font-mono text-xs text-[var(--color-text-faint)]">
          © {year} {profile.name} · built from scratch, shipped by hand
        </p>
        <div className="flex items-center gap-5 font-mono text-xs text-[var(--color-text-muted)]">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--color-accent)]"
          >
            github
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--color-accent)]"
          >
            linkedin
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-[var(--color-accent)]"
          >
            email
          </a>
          <a href="#top" className="hover:text-[var(--color-accent)]">
            back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
