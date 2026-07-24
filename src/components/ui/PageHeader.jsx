import { motion } from "framer-motion";
import TerminalTag from "./TerminalTag";

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <div className="border-b border-[var(--color-border)] px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-6xl"
      >
        <TerminalTag>{eyebrow}</TerminalTag>
        <h1 className="mt-4 font-display text-4xl font-semibold text-[var(--color-text)] sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-xl text-[var(--color-text-muted)]">
            {description}
          </p>
        )}
      </motion.div>
    </div>
  );
}
