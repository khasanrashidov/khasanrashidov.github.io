import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

export default function About() {
  return (
    <main className="container mx-auto max-w-4xl px-6 py-16 md:py-24">
      <div className="space-y-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:gap-8 sm:text-left">
          <Avatar className="h-28 w-28 sm:h-32 sm:w-32">
            <AvatarImage src="/avatar.jpg" alt="Your Name" />
            <AvatarFallback className="text-2xl">YN</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight">About</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Researcher and engineer focused on building systems that amplify human capabilities.
            </p>
          </div>
        </div>

        <Separator />

        {/* Bio */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Background</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a researcher working at the intersection of human-computer interaction,
              machine learning, and systems design. My work focuses on creating intelligent
              interfaces that enhance human decision-making and creativity.
            </p>
            <p>
              Currently pursuing a Ph.D. at [University], where I explore novel interaction
              paradigms for AI-assisted tools. Previously, I worked on distributed systems at
              [Company] and contributed to open-source projects in the ML ecosystem.
            </p>
            <p>
              My research has been published in top-tier venues including CHI, UIST, and CSCW, and
              I&apos;ve collaborated with labs at MIT, Stanford, and CMU.
            </p>
          </div>
        </section>

        <Separator />

        {/* Research Interests */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Research Interests</h2>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">Human-Computer Interaction</Badge>
            <Badge variant="outline">Machine Learning</Badge>
            <Badge variant="outline">Intelligent Interfaces</Badge>
            <Badge variant="outline">Human-AI Collaboration</Badge>
            <Badge variant="outline">Distributed Systems</Badge>
            <Badge variant="outline">Design Tools</Badge>
            <Badge variant="outline">Accessibility</Badge>
            <Badge variant="outline">Information Visualization</Badge>
          </div>
        </section>

        <Separator />

        {/* Timeline */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ph.D. Candidate</CardTitle>
                <p className="text-sm text-muted-foreground">University Name • 2021 – Present</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Researching intelligent interaction paradigms for AI-assisted creative tools.
                  Advised by Prof. [Name].
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Research Intern</CardTitle>
                <p className="text-sm text-muted-foreground">Tech Company • Summer 2023</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Developed novel ML models for user intent prediction in collaborative editing
                  environments.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">M.S. Computer Science</CardTitle>
                <p className="text-sm text-muted-foreground">University Name • 2019 – 2021</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Thesis on distributed systems for real-time collaboration.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Software Engineer</CardTitle>
                <p className="text-sm text-muted-foreground">Startup • 2017 – 2019</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Built scalable backend systems and ML infrastructure.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
