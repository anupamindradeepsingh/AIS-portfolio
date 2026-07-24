import { motion } from "framer-motion";

export default function SectionHeading({ index, label, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-12"
    >
      <div className="flex items-center gap-3 mb-3">
        {index && (
          <span className="font-mono text-xs text-[var(--color-accent)]">
            {index}
          </span>
        )}
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-text-faint)]">
          {label}
        </span>
        <span className="h-px flex-1 bg-[var(--color-border)]" />
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-[var(--color-text)]">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-[var(--color-text-muted)] leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
