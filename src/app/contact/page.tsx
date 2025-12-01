'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'khasanrashidov2002@gmail.com';

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
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
              <CardDescription>
                Best for detailed inquiries and collaboration proposals
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href={`mailto:${email}`}
                  className="text-lg hover:text-primary transition-colors break-all"
                >
                  {email}
                </a>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyEmail}
                  className="w-full sm:w-auto"
                >
                  {copied ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy Email
                    </>
                  )}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                I typically respond within 24-48 hours on weekdays.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Academic Profile</CardTitle>
              <CardDescription>Publications and citation metrics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <a
                href="https://scholar.google.com/citations?user=azx4R-cAAAAJ&hl=en"
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
            I hold virtual office hours on Thursdays from 2-4 PM EST for students and early-career
            researchers. Email to schedule a slot.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Speaking & Media</h2>
          <p className="text-muted-foreground leading-relaxed">
            Available for invited talks, podcast interviews, and panel discussions on topics related
            to HCI, AI, and systems design. Please include event details and expected audience in
            your inquiry.
          </p>
        </div>
      </div>
    </main>
  );
}
