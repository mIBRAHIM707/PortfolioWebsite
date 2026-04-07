import Link from "next/link";
import { personalInfo, skillCategories, achievements, education, projects } from "@/lib/data";
import {
  Download,
  ExternalLink,
  MapPin,
  Calendar,
  GraduationCap,
  Trophy,
  Code2,
  BrainCircuit,
  Gamepad2,
  Database,
  Cpu,
  Wrench,
  Star,
  Github,
} from "lucide-react";

const categoryMeta: Record<string, { icon: React.ElementType; color: string }> = {
  "Languages & Core":      { icon: Code2, color: "text-blue-400" },
  "Web & Edge":            { icon: BrainCircuit, color: "text-purple-400" },
  "Architecture & Config": { icon: Database, color: "text-cyan-400" },
  "Machine Learning":      { icon: Cpu, color: "text-orange-400" },
  "Algorithms & Logic":    { icon: Wrench, color: "text-rose-400" },
};

export default function ResumePage() {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden">
      {/* ── Ambient background ── */}
      <div className="fixed inset-0 -z-10 bg-background">
        <div className="absolute inset-0 bg-dot-grid opacity-100" />
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top right, hsl(265 89% 70% / 0.05) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="w-full max-w-5xl mx-auto px-6">

        {/* ════════════════════════════════════════════ */}
        {/* HEADER                                       */}
        {/* ════════════════════════════════════════════ */}
        <section className="pt-36 pb-16 md:pt-44 md:pb-20">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px flex-1 max-w-[48px] bg-border/60" />
            <span className="text-xs font-mono text-muted-foreground/60 uppercase tracking-[0.2em]">
              Résumé
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <h1
                className="font-display font-black tracking-tighter text-foreground mb-4"
                style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", lineHeight: 1.05 }}
              >
                Muhammad
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--foreground) / 0.4) 100%)",
                  }}
                >
                  Ibrahim.
                </span>
              </h1>
              <p className="text-muted-foreground font-light text-base md:text-lg max-w-xl leading-relaxed">
                {personalInfo.title} at GIKI · Dean&apos;s List · ICPC National Top 12
              </p>

              {/* Meta chips */}
              <div className="flex flex-wrap gap-3 mt-6">
                {[
                  { icon: MapPin, text: "Topi, Pakistan" },
                  { icon: Calendar, text: "Class of 2027" },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-border/40 bg-card/50 text-sm text-muted-foreground"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {text}
                  </div>
                ))}
              </div>
            </div>

            {/* Download CTA */}
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href={personalInfo.resumeUrl}
                target="_blank"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background text-sm font-semibold hover:bg-foreground/85 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg cursor-pointer"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </Link>
              <Link
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border/50 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-border/80 hover:bg-card/50 transition-all duration-200 cursor-pointer"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
            </div>
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="section-divider" />

        {/* ════════════════════════════════════════════ */}
        {/* EDUCATION                                    */}
        {/* ════════════════════════════════════════════ */}
        <section className="py-16 md:py-20">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px flex-1 max-w-[48px] bg-border/60" />
            <span className="text-xs font-mono text-muted-foreground/60 uppercase tracking-[0.2em]">
              Education
            </span>
          </div>

          <div className="space-y-4">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="group relative rounded-2xl border border-border/50 bg-card p-6 md:p-7 overflow-hidden card-lift cursor-default"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at top left, hsl(142 71% 45% / 0.05) 0%, transparent 60%)",
                  }}
                />
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-muted/60 text-green-400 shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-base md:text-lg text-foreground tracking-tight mb-1 leading-snug">
                        {edu.institution}
                      </h3>
                      <p className="text-sm font-medium text-muted-foreground mb-2">{edu.degree}</p>
                      {edu.description && (
                        <p className="text-xs text-muted-foreground/70 font-light leading-relaxed max-w-xl">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  </div>
                  <span className="shrink-0 text-xs font-mono text-muted-foreground/60 bg-muted/60 px-3 py-1.5 rounded-xl border border-border/40 h-fit">
                    {edu.years}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="section-divider" />

        {/* ════════════════════════════════════════════ */}
        {/* EXPERIENCE / PROJECTS                        */}
        {/* ════════════════════════════════════════════ */}
        <section className="py-16 md:py-20">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px flex-1 max-w-[48px] bg-border/60" />
            <span className="text-xs font-mono text-muted-foreground/60 uppercase tracking-[0.2em]">
              Projects &amp; Experience
            </span>
          </div>

          <div className="space-y-4">
            {projects.map((project, i) => (
              <div
                key={project.id}
                className="group relative rounded-2xl border border-border/50 bg-card p-6 md:p-7 overflow-hidden card-lift cursor-default"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at top right, hsl(212 95% 68% / 0.05) 0%, transparent 60%)",
                  }}
                />
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-display font-semibold text-base md:text-lg text-foreground tracking-tight mb-1">
                        {project.title}
                      </h3>
                      <p className="text-xs font-medium text-muted-foreground/70 mb-3">
                        Role: {project.role}
                      </p>
                    </div>
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 p-2 rounded-xl border border-border/40 text-muted-foreground hover:text-foreground hover:border-border/80 transition-all duration-200 cursor-pointer opacity-0 group-hover:opacity-100"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </Link>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="section-divider" />

        {/* ════════════════════════════════════════════ */}
        {/* SKILLS — compact inline layout               */}
        {/* ════════════════════════════════════════════ */}
        <section className="py-16 md:py-20">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px flex-1 max-w-[48px] bg-border/60" />
            <span className="text-xs font-mono text-muted-foreground/60 uppercase tracking-[0.2em]">
              Technical Skills
            </span>
          </div>

          <div className="space-y-4">
            {skillCategories.map((category) => {
              const meta = categoryMeta[category.name] ?? { icon: Code2, color: "text-muted-foreground" };
              const Icon = meta.icon;
              return (
                <div
                  key={category.name}
                  className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 py-4 border-b border-border/20 last:border-0"
                >
                  <div className={`flex items-center gap-2 shrink-0 w-52`}>
                    <Icon className={`h-3.5 w-3.5 ${meta.color}`} />
                    <span className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider">
                      {category.name}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span key={skill.name} className="tag">{skill.name}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="section-divider" />

        {/* ════════════════════════════════════════════ */}
        {/* ACHIEVEMENTS — compact list                  */}
        {/* ════════════════════════════════════════════ */}
        <section className="py-16 md:py-20">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px flex-1 max-w-[48px] bg-border/60" />
            <span className="text-xs font-mono text-muted-foreground/60 uppercase tracking-[0.2em]">
              Achievements &amp; Awards
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="group flex items-start gap-4 p-5 rounded-2xl border border-border/40 bg-card/50 hover:border-border/70 hover:bg-card transition-all duration-300 cursor-default"
              >
                <div className="p-2 rounded-xl bg-muted/60 text-muted-foreground/60 group-hover:text-foreground transition-colors shrink-0">
                  <Trophy className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm text-foreground tracking-tight mb-1 leading-snug">
                    {achievement.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    {achievement.year && (
                      <span className="text-xs font-mono text-muted-foreground/50">
                        {achievement.year}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground/70 leading-relaxed font-light">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="section-divider" />

        {/* ════════════════════════════════════════════ */}
        {/* PDF PREVIEW                                  */}
        {/* ════════════════════════════════════════════ */}
        <section className="py-16 md:py-20">
          <div className="flex items-center justify-between gap-3 mb-8">
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 max-w-[48px] bg-border/60" />
              <span className="text-xs font-mono text-muted-foreground/60 uppercase tracking-[0.2em]">
                PDF Preview
              </span>
            </div>
            <Link
              href={personalInfo.resumeUrl}
              target="_blank"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border/50 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-border/80 transition-all duration-200 cursor-pointer"
            >
              <Download className="h-3.5 w-3.5" />
              Download
            </Link>
          </div>

          <div className="relative rounded-2xl border border-border/50 bg-card overflow-hidden shadow-2xl shadow-black/30">
            {/* Top bar decoration */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40 bg-muted/30">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <span className="text-xs font-mono text-muted-foreground/50 mx-auto">
                resume_muhammad_ibrahim.pdf
              </span>
            </div>
            <div className="w-full" style={{ aspectRatio: "1 / 1.4142" }}>
              <iframe
                src={`${personalInfo.resumeUrl}#view=Fit&page=1&toolbar=0&scrollbar=0`}
                className="w-full h-full border-0"
                title="Muhammad Ibrahim Resume"
                aria-label="Muhammad Ibrahim Resume PDF Preview"
                scrolling="no"
              />
            </div>
          </div>
          <p className="text-center text-xs text-muted-foreground/40 font-mono mt-4">
            If the preview doesn&apos;t load, use the download button above.
          </p>
        </section>

      </div>
    </div>
  );
}
