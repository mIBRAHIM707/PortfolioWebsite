// src/ai/flows/generate-portfolio-summary.ts
'use server';

/**
 * @fileOverview A flow to generate a personalized portfolio summary for the 'About Me' section.
 *
 * - generatePortfolioSummary - A function that handles the generation of the portfolio summary.
 * - GeneratePortfolioSummaryInput - The input type for the generatePortfolioSummary function.
 * - GeneratePortfolioSummaryOutput - The return type for the generatePortfolioSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePortfolioSummaryInputSchema = z.object({
  name: z.string().describe('The name of the student.'),
  skills: z.array(z.string()).describe('A list of skills the student possesses.'),
  experience: z.string().describe('A description of the student\'s experience.'),
  achievements: z.array(z.string()).describe('A list of the student\'s achievements.'),
  desiredTone: z
    .string()
    .optional()
    .default('modern, innovative, visually appealing, and moderately technical')
    .describe('The desired tone and style of the portfolio summary.'),
});

export type GeneratePortfolioSummaryInput = z.infer<typeof GeneratePortfolioSummaryInputSchema>;

const GeneratePortfolioSummaryOutputSchema = z.object({
  summary: z.string().describe('The generated portfolio summary.'),
});

export type GeneratePortfolioSummaryOutput = z.infer<typeof GeneratePortfolioSummaryOutputSchema>;

export async function generatePortfolioSummary(input: GeneratePortfolioSummaryInput): Promise<GeneratePortfolioSummaryOutput> {
  return generatePortfolioSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePortfolioSummaryPrompt',
  input: {schema: GeneratePortfolioSummaryInputSchema},
  output: {schema: GeneratePortfolioSummaryOutputSchema},
  prompt: `You are an expert at writing compelling portfolio summaries for software engineering students.

  Given the following information about the student, generate a personalized portfolio summary that is {{desiredTone}}.

  Name: {{{name}}}
  Skills: {{#each skills}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
  Experience: {{{experience}}}
  Achievements: {{#each achievements}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

  Portfolio Summary:
  `,
});

const generatePortfolioSummaryFlow = ai.defineFlow(
  {
    name: 'generatePortfolioSummaryFlow',
    inputSchema: GeneratePortfolioSummaryInputSchema,
    outputSchema: GeneratePortfolioSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
