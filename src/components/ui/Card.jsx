import { motion } from "framer-motion";

export default function Card({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      className={`group rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 transition-colors duration-300 hover:border-[var(--color-accent-dim)] ${className}`}
    >
      {children}
    </motion.div>
  );
}
