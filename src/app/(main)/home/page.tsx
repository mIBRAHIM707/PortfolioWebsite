import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { personalInfo, achievements, projects } from '@/lib/data';
import { ArrowRight, Download, Send, Award as AwardIcon, Sparkles, Target } from 'lucide-react';

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);
  const keyAchievements = achievements.slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="py-16 md:py-24 text-center bg-gradient-to-br from-background to-accent/30 rounded-xl shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {personalInfo.name}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {personalInfo.title}
          </p>
          <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">
            {personalInfo.heroStatement}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" asChild>
              <Link href="/projects">
                View My Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={personalInfo.resumeUrl} target="_blank" download>
                Download Resume <Download className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get In Touch <Send className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Key Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {keyAchievements.map((achievement) => {
            const Icon = achievement.icon || AwardIcon;
            return (
              <Card key={achievement.id} className="text-center shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/20 text-primary rounded-full p-3 w-fit mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-t-lg object-cover aspect-[3/2]"
                data-ai-hint={project.imageHint}
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">{project.technologies.join(', ')}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm line-clamp-3">{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="p-0">
                  <Link href={`/projects#${project.id}`}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="default" size="lg">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
