
"use client";

import { useState, useTransition } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { generateCoverLetterSnippet, type GenerateCoverLetterSnippetInput } from '@/ai/flows/generate-cover-letter-snippet-flow';
import { Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const schema = z.object({
  jobKeywords: z.string().min(5, { message: "Please enter at least 5 characters for job keywords." }).max(200, { message: "Keywords are too long (max 200 characters)." }),
});
type FormValues = z.infer<typeof schema>;

export function AiCoverLetterSnippetGenerator() {
  const [snippet, setSnippet] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    startTransition(async () => {
      try {
        setSnippet(null); // Clear previous snippet
        const result = await generateCoverLetterSnippet({ jobKeywords: data.jobKeywords });
        setSnippet(result.snippet);
        toast({
          title: "Snippet Generated!",
          description: "Your personalized cover letter snippet is ready.",
        });
      } catch (error) {
        console.error("Error generating snippet:", error);
        toast({
          variant: "destructive",
          title: "Generation Failed",
          description: "Could not generate snippet. Please try again.",
        });
        setSnippet(null);
      }
    });
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Sparkles className="h-6 w-6 text-primary" />
          AI Cover Letter Assistant
        </CardTitle>
        <CardDescription>
          Enter keywords from a job description (e.g., "React, fintech, agile development")
          and let AI craft a personalized snippet for your cover letter, highlighting Muhammad's relevant skills and projects.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="jobKeywords">Job Description Keywords</Label>
            <Textarea
              id="jobKeywords"
              placeholder="e.g., UI/UX design, Next.js, problem-solving"
              {...register('jobKeywords')}
              className={errors.jobKeywords ? "border-destructive" : ""}
              rows={3}
            />
            {errors.jobKeywords && (
              <p className="text-sm text-destructive mt-1">{errors.jobKeywords.message}</p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-4">
          <Button type="submit" disabled={isPending} className="w-full sm:w-auto">
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Generate Snippet
              </>
            )}
          </Button>
          
          {snippet && (
            <Card className="w-full bg-muted/50">
              <CardHeader>
                <CardTitle className="text-lg">Generated Snippet:</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground italic leading-relaxed">"{snippet}"</p>
              </CardContent>
            </Card>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}
