import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { TbDatabase } from "react-icons/tb";
import SectionHeading from "../components/ui/SectionHeading";
import techStack from "../data/techStack";

const ICONS = {
  react: SiReact,
  nextjs: SiNextdotjs,
  javascript: SiJavascript,
  python: SiPython,
  cpp: SiCplusplus,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  sql: TbDatabase,
  tailwind: SiTailwindcss,
  html5: SiHtml5,
  css3: SiCss,
  git: SiGit,
  github: SiGithub,
};

// Brand-accurate colors for icons that read poorly in flat white on dark cards.
const BRAND_COLOR = {
  react: "#61DAFB",
  nextjs: "#ffffff",
  javascript: "#F7DF1E",
  python: "#3776AB",
  cpp: "#00599C",
  nodejs: "#5FA04E",
  express: "#ffffff",
  mongodb: "#47A248",
  sql: "var(--color-cyan)",
  tailwind: "#38BDF8",
  html5: "#E34F26",
  css3: "#1572B6",
  git: "#F05032",
  github: "#ffffff",
};

export default function TechStack() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="toolkit"
          title="Tech Stack"
          description="Languages, frameworks, and fundamentals I reach for across the stack — and lean on hardest in DSA rounds."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {techStack.map((tech, i) => {
            const Icon = ICONS[tech.icon];
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: (i % 10) * 0.04 }}
                className="group flex flex-col items-center gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent-dim)] hover:shadow-lg hover:shadow-black/30"
              >
                <Icon
                  className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: BRAND_COLOR[tech.icon] }}
                />
                <div>
                  <p className="font-display text-sm font-medium text-[var(--color-text)]">
                    {tech.name}
                  </p>
                  <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wide text-[var(--color-text-faint)]">
                    {tech.role}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
