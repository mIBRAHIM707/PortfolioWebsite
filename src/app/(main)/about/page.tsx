import Image from 'next/image';
import { personalInfo, skillCategories, achievements, education } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Award, School, Briefcase } from 'lucide-react'; // Assuming Briefcase for experience, or use a generic one.

export default function AboutPage() {
  return (
    <div className="space-y-16 py-8">
      {/* About Me Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1 flex justify-center">
          <Avatar className="w-48 h-48 md:w-64 md:h-64 border-4 border-primary shadow-lg">
            <AvatarImage src="https://placehold.co/256x256.png" alt={personalInfo.name} data-ai-hint="profile portrait" />
            <AvatarFallback>{personalInfo.name.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
        </div>
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">{personalInfo.name}</h1>
          <h2 className="text-2xl text-primary mb-4">{personalInfo.title}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hello! I'm Muhammad Ibrahim, a passionate Software Engineering student currently in my third year at GIKI.
            My journey in tech is driven by a curiosity for solving complex problems and building innovative solutions.
            I have a strong foundation in algorithms and data structures, proven by my performance in competitive programming like ICPC.
            Beyond academics, I've dived into practical development, exploring game development, full-stack web applications, and the fascinating world of machine learning.
            I thrive in collaborative environments and am always eager to learn new technologies and methodologies.
            My goal is to leverage my skills to contribute to impactful projects and grow as a versatile software engineer.
          </p>
        </div>
      </section>

      {/* Key Skills Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.name} className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {category.icon && <category.icon className="h-6 w-6 text-primary" />}
                  {category.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill.name} variant="secondary">
                      {skill.icon && <skill.icon className="mr-1 h-4 w-4" />}
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Achievements</h2>
        <div className="space-y-6">
          {achievements.map((achievement) => (
            <Card key={achievement.id} className="shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-medium flex items-center gap-2">
                  {achievement.icon && <achievement.icon className="h-6 w-6 text-primary" />}
                  {achievement.title}
                </CardTitle>
                {achievement.year && <Badge variant="outline">{achievement.year}</Badge>}
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Education</h2>
        <div className="space-y-6">
          {education.map((edu) => (
            <Card key={edu.id} className="shadow-md">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-medium flex items-center gap-2">
                       {edu.icon && <edu.icon className="h-6 w-6 text-primary" />}
                      {edu.institution}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{edu.degree}</p>
                  </div>
                  <Badge variant="outline" className="ml-auto whitespace-nowrap">{edu.years}</Badge>
                </div>
              </CardHeader>
              {edu.description && (
                <CardContent>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
