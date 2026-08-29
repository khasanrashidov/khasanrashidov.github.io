'use client';

import { useState, type ReactNode } from 'react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { PageLead } from '@/components/page-lead';
import { Check, Copy, ExternalLink } from 'lucide-react';

const profiles = [
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=azx4R-cAAAAJ&hl=en',
  },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/khasanr/' },
  { label: 'GitHub', href: 'https://github.com/khasanrashidov' },
  { label: 'Google Developers', href: 'https://developers.google.com/profile/u/khasan' },
  { label: 'Twitter / X', href: 'https://x.com/khasanrashidov' },
];

const ContactRow = ({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
}) => {
  return (
    <div className="grid gap-3 border-b border-border py-8 last:border-b-0 last:pb-0 first:pt-0 sm:grid-cols-[11rem_1fr] sm:items-start sm:gap-10">
      <div className="space-y-1">
        <h2 className="text-base">{label}</h2>
        {hint ? <p className="text-sm leading-relaxed text-muted-foreground">{hint}</p> : null}
      </div>
      <div className="min-w-0 space-y-2">{children}</div>
    </div>
  );
};

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'khasanrashidov2002@gmail.com';

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="container mx-auto max-w-3xl px-6 py-20 md:py-28">
      <div className="space-y-16">
        <PageLead title="Contact">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Open to software engineering opportunities, technical collaborations, and consulting
            engagements.
          </p>
        </PageLead>

        <Separator />

        <div>
          <ContactRow label="Email" hint="Best for detailed inquiries and collaboration proposals">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <a
                href={`mailto:${email}`}
                className="break-all text-base transition-colors hover:text-primary"
              >
                {email}
              </a>
              <Button variant="outline" size="sm" onClick={copyEmail} className="w-fit shrink-0">
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy
                  </>
                )}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              I typically respond within 24–48 hours on weekdays.
            </p>
          </ContactRow>

          <ContactRow label="Phone" hint="Available for calls and Telegram">
            <a href="tel:+998906756075" className="text-base transition-colors hover:text-primary">
              +998 90 675 60 75
            </a>
          </ContactRow>

          <ContactRow label="Location">
            <p className="text-base">Tashkent, Uzbekistan</p>
          </ContactRow>

          <ContactRow label="Profiles" hint="Academic and professional networks">
            <ul className="space-y-2">
              {profiles.map((profile) => (
                <li key={profile.href}>
                  <a
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-base transition-colors hover:text-primary"
                  >
                    {profile.label}
                    <ExternalLink className="size-3.5 text-muted-foreground" />
                  </a>
                </li>
              ))}
            </ul>
          </ContactRow>
        </div>
      </div>
    </main>
  );
}
