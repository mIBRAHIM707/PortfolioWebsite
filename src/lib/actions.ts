// src/lib/actions.ts
"use server";

import { z } from "zod";
import { generatePortfolioSummary, type GeneratePortfolioSummaryInput } from "@/ai/flows/generate-portfolio-summary";
import { personalInfo } from "./data"; // For email address

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Form submission failed. Please check the errors below.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  // In a real application, you would send an email here.
  // For this example, we'll just log it and simulate success.
  console.log("Contact Form Data:", validatedFields.data);
  console.log(`Simulating sending email to: ${personalInfo.email}`);

  return {
    message: "Your message has been sent successfully! Muhammad will get back to you soon.",
    success: true,
  };
}


const aiSummaryFormSchema = z.object({
  name: z.string().min(1, "Name is required."),
  skills: z.string().min(1, "Skills are required. Please provide a comma-separated list."),
  experience: z.string().min(1, "Experience description is required."),
  achievements: z.string().min(1, "Achievements are required. Please provide a comma-separated list."),
  desiredTone: z.string().optional(),
});

export type AiSummaryFormState = {
  summary?: string;
  message: string;
  errors?: {
    name?: string[];
    skills?: string[];
    experience?: string[];
    achievements?: string[];
    desiredTone?: string[];
  };
  success: boolean;
};

export async function generateAiSummaryAction(
  prevState: AiSummaryFormState,
  formData: FormData
): Promise<AiSummaryFormState> {
  const validatedFields = aiSummaryFormSchema.safeParse({
    name: formData.get("name"),
    skills: formData.get("skills"),
    experience: formData.get("experience"),
    achievements: formData.get("achievements"),
    desiredTone: formData.get("desiredTone") || undefined, // Ensure it's undefined if empty
  });

  if (!validatedFields.success) {
    return {
      message: "AI summary generation failed. Please check the errors below.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  try {
    const input: GeneratePortfolioSummaryInput = {
      name: validatedFields.data.name,
      skills: validatedFields.data.skills.split(',').map(s => s.trim()).filter(s => s),
      experience: validatedFields.data.experience,
      achievements: validatedFields.data.achievements.split(',').map(s => s.trim()).filter(s => s),
      desiredTone: validatedFields.data.desiredTone || 'modern, innovative, visually appealing, and moderately technical',
    };
    
    const result = await generatePortfolioSummary(input);

    if (result.summary) {
      return {
        summary: result.summary,
        message: "Portfolio summary generated successfully!",
        success: true,
      };
    } else {
      return {
        message: "AI could not generate a summary. Please try adjusting your inputs.",
        success: false,
      };
    }
  } catch (error) {
    console.error("AI Summary Generation Error:", error);
    return {
      message: "An error occurred while generating the summary. Please try again.",
      success: false,
    };
  }
}
