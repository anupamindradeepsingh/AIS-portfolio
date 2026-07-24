import { motion } from "framer-motion";
import PageHeader from "../components/ui/PageHeader";
import Badge from "../components/ui/Badge";
import experience from "../data/experience";

export default function Experience() {
  return (
    <>
      <PageHeader
        eyebrow="$ ls experience/"
        title="Where I've worked"
        description="Startup consulting, student-led leadership, and operations — real accountability outside the classroom."
      />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl space-y-8">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.org}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-7"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <Badge>{exp.type}</Badge>
                  <h3 className="mt-3 font-display text-xl font-semibold text-[var(--color-text)]">
                    {exp.role}
                  </h3>
                  <p className="text-[var(--color-cyan)]">{exp.org}</p>
                </div>
                <p className="font-mono text-sm text-[var(--color-text-faint)]">
                  {exp.duration}
                </p>
              </div>

              <p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">
                {exp.description}
              </p>

              <ul className="mt-4 space-y-1.5">
                {exp.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-2 text-sm text-[var(--color-text-muted)]"
                  >
                    <span className="text-[var(--color-accent)]">▸</span>
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
