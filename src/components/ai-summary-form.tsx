"use client";

import { useFormState, useFormStatus } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { generateAiSummaryAction, type AiSummaryFormState } from "@/lib/actions";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { personalInfo } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";
import { Sparkles } from "lucide-react";

const aiSummaryFormSchema = z.object({
  name: z.string().min(1, "Name is required.").default(personalInfo.name),
  skills: z.string().min(1, "Skills are required. Please provide a comma-separated list."),
  experience: z.string().min(1, "Experience description is required."),
  achievements: z.string().min(1, "Achievements are required. Please provide a comma-separated list."),
  desiredTone: z.string().optional().default("modern, innovative, visually appealing, and moderately technical"),
});

type AiSummaryFormValues = z.infer<typeof aiSummaryFormSchema>;

const initialState: AiSummaryFormState = {
  message: "",
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Sparkles className="mr-2 h-4 w-4 animate-pulse" /> Generating...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" /> Generate Summary
        </>
      )}
    </Button>
  );
}

export function AiSummaryForm() {
  const [state, formAction] = useFormState(generateAiSummaryAction, initialState);
  const { toast } = useToast();
  const [generatedSummary, setGeneratedSummary] = useState<string | undefined>(undefined);

  const form = useForm<AiSummaryFormValues>({
    resolver: zodResolver(aiSummaryFormSchema),
    defaultValues: {
      name: personalInfo.name,
      skills: "",
      experience: "",
      achievements: "",
      desiredTone: "modern, innovative, visually appealing, and moderately technical",
    },
  });

  useEffect(() => {
    if (state.message) {
      if (state.success && state.summary) {
        toast({
          title: "Success!",
          description: state.message,
        });
        setGeneratedSummary(state.summary);
      } else if (!state.success) {
        toast({
          variant: "destructive",
          title: "Error",
          description: state.message,
        });
        setGeneratedSummary(undefined);
      }
    }
  }, [state, toast]);
  
  const handleCopyToClipboard = () => {
    if (generatedSummary) {
      navigator.clipboard.writeText(generatedSummary);
      toast({ title: "Copied!", description: "Summary copied to clipboard." });
    }
  };


  return (
    <div className="space-y-8">
      <form action={formAction} className="space-y-6">
        <div>
          <Label htmlFor="name">Your Name</Label>
          <Input id="name" name="name" defaultValue={personalInfo.name} required />
          {state.errors?.name && (
            <p className="text-sm font-medium text-destructive mt-1">
              {state.errors.name[0]}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="skills">Skills (comma-separated)</Label>
          <Textarea id="skills" name="skills" placeholder="e.g., Python, React, Team Leadership, Problem Solving" required />
          {state.errors?.skills && (
            <p className="text-sm font-medium text-destructive mt-1">
              {state.errors.skills[0]}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="experience">Experience (brief description)</Label>
          <Textarea id="experience" name="experience" placeholder="e.g., Developed a full-stack web application for a university project, interned at XYZ focusing on mobile app development..." rows={3} required />
          {state.errors?.experience && (
            <p className="text-sm font-medium text-destructive mt-1">
              {state.errors.experience[0]}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="achievements">Achievements (comma-separated)</Label>
          <Textarea id="achievements" name="achievements" placeholder="e.g., Dean's List, ICPC Top 12, Hackathon Winner" required />
          {state.errors?.achievements && (
            <p className="text-sm font-medium text-destructive mt-1">
              {state.errors.achievements[0]}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="desiredTone">Desired Tone (optional)</Label>
          <Input id="desiredTone" name="desiredTone" placeholder="e.g., professional, enthusiastic, concise" defaultValue="modern, innovative, visually appealing, and moderately technical" />
           {state.errors?.desiredTone && (
            <p className="text-sm font-medium text-destructive mt-1">
              {state.errors.desiredTone[0]}
            </p>
          )}
        </div>
        <SubmitButton />
      </form>

      {generatedSummary && (
        <Card className="mt-8 shadow-lg">
          <CardHeader>
            <CardTitle>Generated Portfolio Summary</CardTitle>
            <CardDescription>
              Here&apos;s a draft for your &apos;About Me&apos; section. You can copy and edit it as needed.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea value={generatedSummary} readOnly rows={8} className="bg-muted/50" />
            <Button onClick={handleCopyToClipboard} variant="outline">Copy to Clipboard</Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
