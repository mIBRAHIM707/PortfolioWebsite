import { ContactForm } from '@/components/contact-form';
import { personalInfo, socialLinks } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <div className="py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Get In Touch</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Send me a message</CardTitle>
            <CardDescription>Fill out the form below and I&apos;ll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Contact Information</CardTitle>
              <CardDescription>You can also reach me through the following channels.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">Email</h3>
                <Link href={`mailto:${personalInfo.email}`} className="text-primary hover:underline">
                  {personalInfo.email}
                </Link>
              </div>
              <div>
                <h3 className="font-semibold">Connect with me</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {socialLinks.map(link => (
                    <Button key={link.name} variant="outline" asChild>
                      <Link href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <link.icon className="h-4 w-4" />
                        {link.name}
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
