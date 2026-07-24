import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import profile from "../../data/profile";
import Logo from "../ui/Logo";

const navLinks = [
  { to: "/", label: "home" },
  { to: "/about", label: "about" },
  { to: "/experience", label: "experience" },
  { to: "/projects", label: "projects" },
  { to: "/achievements", label: "achievements" },
  { to: "/contact", label: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink
          to="/"
          aria-label="Anupam Indradeep Singh — home"
          className="flex items-center gap-0.5 transition-opacity hover:opacity-80"
        >
          <Logo className="h-7 w-9" />
        </NavLink>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `font-mono text-sm transition-colors duration-200 ${
                  isActive
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={profile.resumeUrl}
            download
            className="rounded-md border border-[var(--color-border)] px-4 py-1.5 font-mono text-sm text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            resume ↓
          </a>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--color-border)] font-mono text-[var(--color-text)] md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-mono text-sm ${
                    isActive
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-text-muted)]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={profile.resumeUrl}
              download
              className="font-mono text-sm text-[var(--color-accent)]"
            >
              resume ↓
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
