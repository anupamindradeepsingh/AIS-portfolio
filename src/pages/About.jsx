import { motion } from "framer-motion";
import PageHeader from "../components/ui/PageHeader";
import { education } from "../data/achievements";
import Button from "../components/ui/Button";

const storyBlocks = [
  {
    label: "the foundation",
    title: "ECE by degree, engineer by instinct",
    body: "I'm a B.Tech Electronics and Communication Engineering student at BIT Mesra — but most of my hours go into software: reading system internals, breaking down problems into data structures, and shipping full-stack products end to end.",
  },
  {
    label: "the discipline",
    title: "DSA as a daily practice",
    body: "Competitive programming is where I sharpen precision — 550+ problems solved across LeetCode, Codeforces, and GeeksforGeeks, and a Pupil rating on Codeforces that I'm actively pushing past. It's less about the rating and more about building pattern recognition I can pull from instantly.",
  },
  {
    label: "the craft",
    title: "Full-stack, with real users in mind",
    body: "Whether it's syncing video playback across distributed clients in Syncly or wiring AI into a resume builder in Jioresume, I care about the system working correctly under real constraints — latency, concurrency, and edge cases — not just the happy path.",
  },
  {
    label: "beyond the code",
    title: "Consulting, strategy, and leadership",
    body: "As Consulting Head at 180 Degrees Consulting, BIT Mesra, and through my engagement with Clientell AI, I've worked on the business side too — market research, GTM strategy, and growth — which shapes how I think about the products I build.",
  },
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="$ cat about.md"
        title="Hi, I'm Anupam."
        description="ECE student, competitive programmer, and full-stack builder — currently prepping for software engineering roles at product companies."
      />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl space-y-14">
          {storyBlocks.map((block, i) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="grid gap-3 border-l-2 border-[var(--color-border)] pl-6 md:grid-cols-[180px_1fr] md:gap-8"
            >
              <p className="font-mono text-xs uppercase tracking-wide text-[var(--color-cyan)]">
                {block.label}
              </p>
              <div>
                <h3 className="font-display text-xl font-semibold text-[var(--color-text)]">
                  {block.title}
                </h3>
                <p className="mt-2 leading-relaxed text-[var(--color-text-muted)]">
                  {block.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-8 font-mono text-xs uppercase tracking-wide text-[var(--color-text-faint)]">
            education
          </p>
          <div className="space-y-4">
            {education.map((edu) => (
              <div
                key={edu.institution + edu.degree}
                className="flex flex-col justify-between gap-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-5 sm:flex-row sm:items-center"
              >
                <div>
                  <p className="font-display font-medium text-[var(--color-text)]">
                    {edu.degree}
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    {edu.institution} · {edu.location}
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="font-mono text-sm text-[var(--color-accent)]">{edu.detail}</p>
                  <p className="font-mono text-xs text-[var(--color-text-faint)]">
                    {edu.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button as="a" href="/experience" variant="outline">
              See Experience →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
