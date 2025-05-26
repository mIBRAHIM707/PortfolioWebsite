
'use server';
/**
 * @fileOverview AI flow to generate cover letter snippets.
 *
 * - generateCoverLetterSnippet - A function that generates a personalized cover letter snippet.
 * - GenerateCoverLetterSnippetInput - The input type for the function.
 * - GenerateCoverLetterSnippetOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { personalInfo, skillCategories, projects } from '@/lib/data';

const GenerateCoverLetterSnippetInputSchema = z.object({
  jobKeywords: z.string().min(3).describe('Keywords from a job description, e.g., "React, API integration, agile".'),
});
export type GenerateCoverLetterSnippetInput = z.infer<typeof GenerateCoverLetterSnippetInputSchema>;

const GenerateCoverLetterSnippetOutputSchema = z.object({
  snippet: z.string().describe('A concise, impactful cover letter snippet (max 50 words).'),
});
export type GenerateCoverLetterSnippetOutput = z.infer<typeof GenerateCoverLetterSnippetOutputSchema>;

// Prepare portfolio context string once
const skillsSummary = skillCategories
  .map(category => `- ${category.name}: ${category.skills.map(skill => skill.name).join(', ')}`)
  .join('\n');

const projectsSummary = projects
  .map(project => `- ${project.title}: ${project.description.substring(0,150)}... (Tech: ${project.technologies.join(', ')})`)
  .join('\n');

const portfolioContext = `
Portfolio Information for Muhammad Ibrahim:
Title: ${personalInfo.title}
Professional Summary: ${personalInfo.heroStatement}

Key Skills:
${skillsSummary}

Featured Projects:
${projectsSummary}
`;

const coverLetterPrompt = ai.definePrompt({
  name: 'coverLetterSnippetPrompt',
  input: { schema: GenerateCoverLetterSnippetInputSchema },
  output: { schema: GenerateCoverLetterSnippetOutputSchema },
  prompt: `You are an expert career assistant specializing in crafting compelling cover letter snippets.
Your task is to generate a concise and impactful sentence or two (strictly under 50 words) that Muhammad Ibrahim can use in a cover letter.
This snippet should highlight his suitability for a role based on the provided job keywords and his portfolio information.
Focus on aligning his most relevant skills and project experiences with the job keywords.

Portfolio Context:
${portfolioContext}

Job Keywords: {{{jobKeywords}}}

Generate the cover letter snippet:
`,
});

const generateCoverLetterSnippetFlow = ai.defineFlow(
  {
    name: 'generateCoverLetterSnippetFlow',
    inputSchema: GenerateCoverLetterSnippetInputSchema,
    outputSchema: GenerateCoverLetterSnippetOutputSchema,
  },
  async (input) => {
    const { output } = await coverLetterPrompt(input);
    if (!output) {
      throw new Error('Failed to generate cover letter snippet.');
    }
    return output;
  }
);

export async function generateCoverLetterSnippet(input: GenerateCoverLetterSnippetInput): Promise<GenerateCoverLetterSnippetOutput> {
  return generateCoverLetterSnippetFlow(input);
}
