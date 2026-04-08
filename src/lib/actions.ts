
// src/lib/actions.ts
"use server";

import { z } from "zod";
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

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: [personalInfo.email],
      subject: `New Contact Form Message: ${validatedFields.data.subject}`,
      text: `Name: ${validatedFields.data.name}\nEmail: ${validatedFields.data.email}\n\nMessage:\n${validatedFields.data.message}`,
      replyTo: validatedFields.data.email,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        message: "Failed to send the email. Ensure RESEND_API_KEY is properly configured.",
        success: false,
      };
    }
  } catch (error) {
    console.error("Unexpected error:", error);
    return {
      message: "An unexpected error occurred. Please try again.",
      success: false,
    };
  }

  return {
    message: "Your message has been sent successfully!",
    success: true,
  };
}
