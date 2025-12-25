import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Khasan Rashidov',
};

export default function Home() {
  return (
    <main className="container mx-auto max-w-5xl px-6 py-16 md:py-24">
      {/* Hero Section */}
      <section className="mb-18 space-y-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
          <Avatar className="h-32 w-32 sm:h-40 sm:w-40">
            <AvatarImage src="/avatar.jpg" alt="Khasan Rashidov" />
            <AvatarFallback className="text-3xl">KR</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              Khasan Rashidov
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl">Senior Software Engineer</p>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Full-stack engineer specializing in .NET, Angular, TypeScript, Python, and AI-powered
              systems. Building production-scale applications with a focus on cloud-native
              solutions, intelligent automation, and scalable architecture.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">.NET</Badge>
          <Badge variant="secondary">Angular</Badge>
          <Badge variant="secondary">Python</Badge>
          <Badge variant="secondary">AI/ML</Badge>
          <Badge variant="secondary">Cloud Computing</Badge>
        </div>
      </section>

      {/* Overview Cards */}
      <section className="grid gap-6 md:grid-cols-2">
        <Link href="/projects" className="group">
          <Card className="h-full transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle className="group-hover:text-primary transition-colors">Projects</CardTitle>
              <CardDescription>
                AI-powered applications, full-stack systems, and innovative software solutions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Explore projects including AI assistants, financial analytics platforms, startup
                incubation tools, and autonomous robotics systems.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/publications" className="group">
          <Card className="h-full transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle className="group-hover:text-primary transition-colors">
                Publications
              </CardTitle>
              <CardDescription>Technical writing and future publications</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Technical articles and blog posts about software engineering, AI integration, and
                full-stack development.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/about" className="group">
          <Card className="h-full transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle className="group-hover:text-primary transition-colors">About</CardTitle>
              <CardDescription>Background, experience, and technical expertise</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Learn more about my education, professional experience, and technical skills in
                software engineering and AI.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/contact" className="group">
          <Card className="h-full transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle className="group-hover:text-primary transition-colors">Contact</CardTitle>
              <CardDescription>Get in touch for opportunities</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Open to software engineering opportunities, technical collaborations, and consulting
                engagements.
              </p>
            </CardContent>
          </Card>
        </Link>
      </section>
    </main>
  );
}
