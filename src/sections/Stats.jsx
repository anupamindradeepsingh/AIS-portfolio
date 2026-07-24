import { motion } from "framer-motion";
import profile from "../data/profile";

export default function Stats() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-elevated)]/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden bg-[var(--color-border)] md:grid-cols-4">
        {profile.stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-[var(--color-bg-elevated)] px-4 py-8 text-center md:px-6"
          >
            <p className="font-display text-2xl font-semibold text-[var(--color-accent)] sm:text-3xl">
              {stat.value}
              <span className="text-[var(--color-text-muted)]">{stat.suffix}</span>
            </p>
            <p className="mt-1 font-mono text-xs uppercase tracking-wide text-[var(--color-text-faint)]">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
