
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { personalInfo, achievements, projects } from '@/lib/data';
import { ArrowRight, Download, Send, Award as AwardIcon, Code, Users, Briefcase, Eye, Sparkles, Atom } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);
  const keyAchievements = achievements.slice(0, 2); // Show 2 key achievements

  return (
    <div className="space-y-20 md:space-y-28 py-8">
      {/* Hero Section */}
      <section className="text-center pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="container mx-auto px-4">
              <Avatar className="w-48 h-48 md:w-[300px] md:h-[300px] mx-auto mb-8 border-4 border-primary shadow-xl">
            <AvatarImage src="/pik400x400.jpg" alt={personalInfo.name} data-ai-hint="profile portrait"/>
            <AvatarFallback>{personalInfo.name.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            Hey, I'm {personalInfo.name.split(" ")[1]} 👋 {/* Or [1] if you prefer last name */}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            A {personalInfo.title} at GIKI & award winning hackathon competitor (Microsoft Club 3rd, GDSC 2nd), driven to build impactful solutions across game development, full-stack web, and machine learning.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" asChild className="shadow-lg hover:shadow-primary/50 transition-shadow">
              <Link href="/projects">
                <Eye className="mr-2 h-5 w-5" /> View My Work
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={personalInfo.resumeUrl} target="_blank" download>
                <Download className="mr-2 h-5 w-5" /> Download Resume
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Snippet */}
      <section className="py-12 md:py-16 bg-card text-card-foreground rounded-xl shadow-lg">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A Bit About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Hello! I'm Muhammad Ibrahim. My journey into Software Engineering is fueled by the drive to transform 
              innovative ideas into tangible, impactful solutions. This isn't just a statement - it's a practice, 
              proven through successes like achieving <b>3rd place at the Microsoft Club GIKI Hackathon and 2nd place at 
              the GDGoC GIKI Hackathon</b>, and brought to life through hands-on development in game design, full stack web 
              applications, and machine learning. I'm energized by continuous learning and thrive in collaborative 
              environments where creative problem solving leads to impactful software.
            </p>
            <Button variant="secondary" asChild>
              <Link href="/about">
                Learn More About Me <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="hidden md:flex justify-center items-center">
             <Image 
                src="/400.png" // Replace with a meaningful image
                alt="Abstract representation of coding"
                width={300}
                height={300}
                className="rounded-lg shadow-2xl object-cover"
                data-ai-hint="abstract technology"
              />
          </div>
        </div>
      </section>
      
      {/* Key Skills Section */}
      <section className="py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What I Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
              {
                title: "Web Development",
                description: "Crafting seamless, user-centric web experiences with cutting-edge frameworks (like Next.js, React) to deliver high-performance, modern applications.",
                icon: Code // Replace with your actual icon component
              },
              {
                title: "Problem Solving",
                description: "Applying proven algorithmic expertise, sharpened by hackathon successes, to dissect complex challenges and engineer efficient, innovative solutions.",
                icon: Sparkles // Replace with your actual icon component
              },
              {
                title: "Machine Learning",
                description: "Leveraging data to build and deploy intelligent models (using TensorFlow, scikit-learn, etc.) that drive insights, automation, and smarter application features.",
                icon: Atom // Replace with your actual icon component (or another suitable ML icon)
              }
            ].map(skill => (
            <Card key={skill.title} className="text-center shadow-md hover:shadow-xl transition-shadow duration-300 bg-card">
              <CardHeader>
                <div className="mx-auto bg-primary/20 text-primary rounded-full p-4 w-fit mb-4">
                  <skill.icon className="h-10 w-10" />
                </div>
                <CardTitle className="text-2xl">{skill.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden bg-card">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-t-lg object-cover aspect-[3/2]"
                data-ai-hint={project.imageHint}
              />
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground pt-1">{project.technologies.join(' • ')}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm line-clamp-3 text-foreground/80">{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="p-0 text-base">
                  <Link href={`/projects#${project.id}`}>
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="default" size="lg" className="shadow-md hover:shadow-lg transition-shadow">
            <Link href="/projects">Explore All Projects</Link>
          </Button>
        </div>
      </section>

      {/* Key Achievements Section */}
      {keyAchievements.length > 0 && (
        <section className="py-12 md:py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyAchievements.map((achievement) => {
              const Icon = achievement.icon || AwardIcon;
              return (
                <Card key={achievement.id} className="shadow-md hover:shadow-xl transition-shadow duration-300 bg-card">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-primary/20 text-primary rounded-lg p-3">
                      <Icon className="h-8 w-8" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{achievement.title}</CardTitle>
                      {achievement.year && <p className="text-sm text-muted-foreground">{achievement.year}</p>}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
           <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link href="/about#achievements">See All Achievements</Link>
              </Button>
            </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="py-16 md:py-24 text-center bg-gradient-to-r from-primary/80 to-accent/80 dark:from-primary/50 dark:to-accent/50 rounded-xl shadow-xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Let&apos;s Create Something Amazing!
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-xl mx-auto">
            Have a project in mind, a question, or just want to connect? I&apos;d love to hear from you.
          </p>
          <Button size="lg" variant="secondary" asChild className="text-lg py-6 px-10 shadow-lg hover:shadow-xl transition-shadow">
            <Link href="/contact">
              Get In Touch <Send className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
