import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import projects from "../data/projects";

export default function FeaturedProjects() {
  return (
    <section id="featured-projects" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="selected work"
          title="Featured Projects"
          description="Full-stack builds, end to end — architecture, real-time logic, and AI integration."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Card key={project.name} delay={i * 0.1} className="flex flex-col">
              <p className="font-mono text-xs uppercase tracking-wide text-[var(--color-cyan)]">
                {project.tagline}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-[var(--color-text)]">
                {project.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button as="a" href={project.github} target="_blank" rel="noreferrer" variant="outline">
                  GitHub ↗
                </Button>
                {project.live && (
                  <Button as="a" href={project.live} target="_blank" rel="noreferrer" variant="ghost">
                    Live Demo ↗
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
