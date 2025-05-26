import { AiSummaryForm } from "@/components/ai-summary-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AiSummaryPage() {
  return (
    <div className="py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">AI Portfolio Summary Generator</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Need help crafting your &apos;About Me&apos; section? Provide some details, and let AI generate a personalized summary for your portfolio!
        </p>
      </section>

      <Card className="max-w-2xl mx-auto shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl">Generate Your Summary</CardTitle>
          <CardDescription>Fill in the fields below to get an AI-generated draft.</CardDescription>
        </CardHeader>
        <CardContent>
          <AiSummaryForm />
        </CardContent>
      </Card>
    </div>
  );
}
