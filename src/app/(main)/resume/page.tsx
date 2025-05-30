import { Button } from '@/components/ui/button';
import { personalInfo } from '@/lib/data';
import { Download } from 'lucide-react';
import Link from 'next/link';

export default function ResumePage() {
  return (
    <div className="space-y-12 py-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">My Resume</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          View my professional experience, skills, and qualifications.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href={personalInfo.resumeUrl} target="_blank" download>
            <Download className="mr-2 h-5 w-5" /> Download PDF
          </Link>
        </Button>
      </section>

      <section className="bg-card p-4 sm:p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center sr-only">Resume Preview</h2> 
<div className="w-2/3 mx-auto h-[calc(100vh-200px)] min-h-[1340px] border rounded-md bg-muted/50 flex items-center justify-center">           <iframe 
            src={`${personalInfo.resumeUrl}#view=FitH&toolbar=0`}
            className="w-full h-full border-0"
            title="Muhammad Ibrahim Resume"
            aria-label="Muhammad Ibrahim Resume PDF Preview"
            />
         </div>
         <p className="text-center text-sm text-muted-foreground mt-4">
           If the preview doesn&apos;t load, please use the download button above.
         </p>
      </section>
    </div>
  );
}
