
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

  console.log("Contact Form Data:", validatedFields.data);
  console.log(`Simulating sending email to: ${personalInfo.email}`);

  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: "Your message has been sent successfully! Muhammad Ibrahim will get back to you soon.",
    success: true,
  };
}
