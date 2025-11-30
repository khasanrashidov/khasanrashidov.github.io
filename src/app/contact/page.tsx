import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <main className="container mx-auto max-w-3xl px-6 py-16 md:py-24">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Open to research collaborations, speaking opportunities, and consulting engagements.
          </p>
        </div>

        <Separator />

        {/* Contact Methods */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Email</CardTitle>
              <CardDescription>Best for detailed inquiries and collaboration proposals</CardDescription>
            </CardHeader>
            <CardContent>
              <a 
                href="mailto:khasanrashidov2002@gmail.com" 
                className="text-lg hover:text-primary transition-colors"
              >
                khasanrashidov2002@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Academic Profile</CardTitle>
              <CardDescription>Publications and citation metrics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <a 
                href="https://scholar.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm hover:text-primary transition-colors"
              >
                Google Scholar →
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Professional Networks</CardTitle>
              <CardDescription>Connect on academic and professional platforms</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <a 
                href="https://www.linkedin.com/in/khasanr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm hover:text-primary transition-colors"
              >
                LinkedIn →
              </a>
              <a 
                href="https://github.com/khasanrashidov" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm hover:text-primary transition-colors"
              >
                GitHub →
              </a>

              <a 
                href="https://developers.google.com/profile/u/khasan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm hover:text-primary transition-colors"
              >
                Google Developers →
              </a>

              <a 
                href="https://x.com/khasanrashidov" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm hover:text-primary transition-colors"
              >
                Twitter / X →
              </a>
            </CardContent>
          </Card>
        </div>

        <Separator />

        {/* Additional Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Office Hours</h2>
          <p className="text-muted-foreground leading-relaxed">
            I hold virtual office hours on Thursdays from 2-4 PM EST for students and 
            early-career researchers. Email to schedule a slot.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Speaking & Media</h2>
          <p className="text-muted-foreground leading-relaxed">
            Available for invited talks, podcast interviews, and panel discussions on topics 
            related to HCI, AI, and systems design. Please include event details and expected 
            audience in your inquiry.
          </p>
        </div>
      </div>
    </main>
  );
}

