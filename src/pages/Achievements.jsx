import PageHeader from "../components/ui/PageHeader";
import Card from "../components/ui/Card";
import codingProfiles from "../data/codingProfiles";
import { achievements } from "../data/achievements";

export default function Achievements() {
  return (
    <>
      <PageHeader
        eyebrow="$ cat achievements.log"
        title="Competitive programming & wins"
        description="Consistency over grind — daily practice that compounds into rating and pattern recognition."
      />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-6 font-mono text-xs uppercase tracking-wide text-[var(--color-text-faint)]">
            coding profiles
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {codingProfiles.map((p, i) => (
              <Card key={p.platform} delay={i * 0.06} className="text-center">
                <p className="font-mono text-xs uppercase tracking-wide text-[var(--color-cyan)]">
                  {p.platform}
                </p>
                <p className="mt-3 font-display text-2xl font-semibold text-[var(--color-accent)]">
                  {p.stat}
                </p>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                  {p.statLabel}
                </p>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block font-mono text-xs text-[var(--color-text-faint)] hover:text-[var(--color-accent)]"
                >
                  @{p.handle} ↗
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 font-mono text-xs uppercase tracking-wide text-[var(--color-text-faint)]">
            achievements & recognitions
          </p>
          <div className="space-y-4">
            {achievements.map((a, i) => (
              <Card key={a.title} delay={i * 0.06} className="flex flex-col gap-1">
                <h3 className="font-display font-semibold text-[var(--color-text)]">
                  {a.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {a.detail}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
