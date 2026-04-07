"use client";

import { useFormStatus } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { submitContactForm, type ContactFormState } from "@/lib/actions";
import { useEffect, useActionState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const initialState: ContactFormState = {
  message: "",
  success: false,
};

// Shared field wrapper styles
const fieldClass = "flex flex-col gap-1.5";
const labelClass = "text-xs font-mono text-muted-foreground/60 uppercase tracking-widest";
const inputClass = cn(
  "w-full px-4 py-3 rounded-xl text-sm font-light text-foreground",
  "bg-muted/40 border border-border/50",
  "placeholder:text-muted-foreground/30",
  "focus:outline-none focus:ring-1 focus:ring-ring/50 focus:border-border/80",
  "transition-all duration-200"
);
const errorClass = "text-xs text-destructive/80 font-light mt-0.5";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={cn(
        "w-full inline-flex items-center justify-center gap-2",
        "px-6 py-3.5 rounded-xl text-sm font-semibold",
        "bg-foreground text-background",
        "hover:bg-foreground/85 hover:scale-[1.01] active:scale-[0.99]",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
        "transition-all duration-200 shadow-lg shadow-black/20 cursor-pointer"
      )}
    >
      {pending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          Send Message
          <Send className="h-4 w-4" />
        </>
      )}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({ title: "Message sent!", description: state.message });
        form.reset();
      } else {
        toast({ variant: "destructive", title: "Error", description: state.message });
      }
    }
  }, [state, toast, form]);

  return (
    <form action={formAction} className="flex flex-col gap-5">
      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className={fieldClass}>
          <label htmlFor="name" className={labelClass}>Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            required
            className={inputClass}
          />
          {state.errors?.name && (
            <p className={errorClass}>{state.errors.name[0]}</p>
          )}
        </div>
        <div className={fieldClass}>
          <label htmlFor="email" className={labelClass}>Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            className={inputClass}
          />
          {state.errors?.email && (
            <p className={errorClass}>{state.errors.email[0]}</p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div className={fieldClass}>
        <label htmlFor="subject" className={labelClass}>Subject</label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="What's this about?"
          required
          className={inputClass}
        />
        {state.errors?.subject && (
          <p className={errorClass}>{state.errors.subject[0]}</p>
        )}
      </div>

      {/* Message */}
      <div className={fieldClass}>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell me about your project, idea, or opportunity..."
          rows={6}
          required
          className={cn(inputClass, "resize-none")}
        />
        {state.errors?.message && (
          <p className={errorClass}>{state.errors.message[0]}</p>
        )}
      </div>

      {/* Divider */}
      <div className="h-px bg-border/30" />

      <SubmitButton />
    </form>
  );
}
