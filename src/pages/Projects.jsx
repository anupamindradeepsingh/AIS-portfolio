import PageHeader from "../components/ui/PageHeader";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import projects from "../data/projects";

export default function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="$ ls projects/"
        title="Things I've built"
        description="Full-stack systems, built end to end — real-time infrastructure and AI-integrated products."
      />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl space-y-8">
          {projects.map((project, i) => (
            <Card key={project.name} delay={i * 0.08} className="md:p-8">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wide text-[var(--color-cyan)]">
                    {project.tagline}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-[var(--color-text)] sm:text-3xl">
                    {project.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button as="a" href={project.github} target="_blank" rel="noreferrer" variant="outline">
                    GitHub ↗
                  </Button>
                  {project.live && (
                    <Button as="a" href={project.live} target="_blank" rel="noreferrer" variant="primary">
                      Live Demo ↗
                    </Button>
                  )}
                </div>
              </div>

              <p className="mt-5 max-w-3xl leading-relaxed text-[var(--color-text-muted)]">
                {project.description}
              </p>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="mb-2 font-mono text-xs uppercase tracking-wide text-[var(--color-text-faint)]">
                    key features
                  </p>
                  <ul className="space-y-1.5">
                    {project.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm text-[var(--color-text-muted)]">
                        <span className="text-[var(--color-accent)]">▸</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-2 font-mono text-xs uppercase tracking-wide text-[var(--color-text-faint)]">
                    tech stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
