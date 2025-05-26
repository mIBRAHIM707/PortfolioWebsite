import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/data';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card id={project.id} className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
          data-ai-hint={project.imageHint}
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl">{project.title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow space-y-3 text-sm">
        <p className="text-muted-foreground">{project.description}</p>
        <div>
          <h4 className="font-semibold">Role & Contributions:</h4>
          <p className="text-muted-foreground">{project.role}</p>
        </div>
        <div>
          <h4 className="font-semibold">Key Features / Challenges:</h4>
          <ul className="list-disc list-inside text-muted-foreground">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="gap-2 flex-wrap">
        <Button asChild variant="outline">
          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> GitHub
          </Link>
        </Button>
        {project.liveDemoUrl && project.liveDemoUrl !== "#" && (
          <Button asChild>
            <Link href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
