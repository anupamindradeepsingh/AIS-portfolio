import { motion } from "framer-motion";
import Terminal from "../components/terminal/Terminal";
import Button from "../components/ui/Button";
import TerminalTag from "../components/ui/TerminalTag";
import profile from "../data/profile";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-20 md:pt-24 md:pb-28">
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full opacity-[0.12] blur-3xl"
        style={{ background: "var(--color-accent)" }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-4">
            <TerminalTag>$ cat intro.txt</TerminalTag>
          </div>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-[var(--color-text)] sm:text-5xl md:text-6xl">
            {profile.name.split(" ")[0]}{" "}
            <span className="text-gradient">{profile.name.split(" ").slice(1).join(" ")}</span>
          </h1>
          <p className="mt-5 max-w-md text-lg text-[var(--color-text-muted)]">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button as="a" href="#featured-projects" variant="primary">
              View Projects →
            </Button>
            <Button as="a" href={profile.resumeUrl} download variant="outline">
              Download Resume
            </Button>
            <Button as="a" href="/contact" variant="ghost">
              Get in Touch
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-sm text-[var(--color-text-muted)]">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--color-accent)]"
            >
              GitHub
            </a>
            <span className="text-[var(--color-border)]">/</span>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--color-accent)]"
            >
              LinkedIn
            </a>
            <span className="text-[var(--color-border)]">/</span>
            <a
              href={profile.links.codeforces}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--color-accent)]"
            >
              Codeforces
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <Terminal />
        </motion.div>
      </div>
    </section>
  );
}
