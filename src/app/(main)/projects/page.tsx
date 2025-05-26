import { ProjectCard } from '@/components/project-card';
import { projects } from '@/lib/data';

export default function ProjectsPage() {
  return (
    <div className="space-y-12 py-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">My Projects</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A collection of academic, personal, and professional projects I've worked on.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </div>
  );
}
