import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Khasan Rashidov',
};

export default function Home() {
  return (
    <main className="container mx-auto flex max-w-5xl flex-1 flex-col justify-center px-6 py-24 md:py-32">
      <section className="flex flex-col items-start gap-10 sm:flex-row sm:items-center sm:gap-14">
        <Avatar className="h-36 w-36 sm:h-44 sm:w-44">
          <AvatarImage src="/avatar.jpg" alt="Khasan Rashidov" />
          <AvatarFallback className="text-3xl">KR</AvatarFallback>
        </Avatar>
        <div className="space-y-6">
          <h1 className="text-5xl leading-[1.05] md:text-6xl">Khasan Rashidov</h1>
          <p className="font-display text-xl italic text-muted-foreground">
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
      </section>
    </main>
  );
}
