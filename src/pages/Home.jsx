import Hero from "../sections/Hero";
import Stats from "../sections/Stats";
import TechStack from "../sections/TechStack";
import FeaturedProjects from "../sections/FeaturedProjects";
import Button from "../components/ui/Button";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <TechStack />
      <FeaturedProjects />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-8 py-14 text-center">
          <p className="font-mono text-xs uppercase tracking-wide text-[var(--color-accent)]">
            let's build something
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-[var(--color-text)] sm:text-4xl">
            Open to SWE internships & full-time roles
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[var(--color-text-muted)]">
            Currently sharpening DSA and shipping full-stack projects. Always up for a good technical conversation.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Button as="a" href="/contact" variant="primary">
              Get in Touch
            </Button>
            <Button as="a" href="/projects" variant="outline">
              See All Projects
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
