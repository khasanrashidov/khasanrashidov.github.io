import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="container mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
      <div className="space-y-6">
        <div className="space-y-3">
          <h1 className="text-8xl md:text-9xl">404</h1>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em]">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-6 sm:flex-row sm:justify-center">
          <Button asChild>
            <Link href="/">← Back to Home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/projects">View Projects</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
