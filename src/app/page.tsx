import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Khasan Rashidov',
};

export default function Home() {
  return (
    <main className="container mx-auto max-w-5xl px-6 py-16 md:py-24">
      <section className="space-y-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
          <Avatar className="h-32 w-32 border-2 border-foreground shadow-brutal sm:h-40 sm:w-40">
            <AvatarImage src="/avatar.jpg" alt="Khasan Rashidov" />
            <AvatarFallback className="text-3xl">KR</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-5">
            <h1 className="text-4xl md:text-5xl lg:text-6xl">Khasan Rashidov</h1>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Senior Full Stack Engineer
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">.NET</Badge>
              <Badge variant="secondary">Angular</Badge>
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Kotlin</Badge>
              <Badge variant="secondary">Flutter</Badge>
              <Badge variant="secondary">AI Agents</Badge>
              <Badge variant="secondary">ML</Badge>
              <Badge variant="secondary">AWS</Badge>
              <Badge variant="secondary">Azure</Badge>
              <Badge variant="secondary">GCP</Badge>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
