import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CV',
};

export default function CV() {
  return (
    <main className="container mx-auto max-w-4xl px-6 py-16 md:py-24">
      <div className="space-y-12">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight">Curriculum Vitae</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Academic and professional experience
            </p>
          </div>
          <Button asChild>
            <a href="/cv.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </a>
          </Button>
        </div>

        <Separator />

        {/* Education */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Education</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ph.D. in Computer Science</CardTitle>
                <p className="text-sm text-muted-foreground">University Name • 2021 – Present</p>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Dissertation: Intelligent Interaction Paradigms for AI-Assisted Creative Tools
                </p>
                <p className="text-sm text-muted-foreground">Advisor: Prof. [Name]</p>
                <p className="text-sm text-muted-foreground">GPA: 4.0/4.0</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">M.S. in Computer Science</CardTitle>
                <p className="text-sm text-muted-foreground">University Name • 2019 – 2021</p>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Thesis: Distributed Systems for Real-Time Collaboration
                </p>
                <p className="text-sm text-muted-foreground">GPA: 3.9/4.0</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">B.S. in Computer Science</CardTitle>
                <p className="text-sm text-muted-foreground">University Name • 2015 – 2019</p>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">Summa Cum Laude</p>
                <p className="text-sm text-muted-foreground">GPA: 3.95/4.0</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Experience */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Research Intern</CardTitle>
                <p className="text-sm text-muted-foreground">Tech Company • Summer 2023</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  <li>Developed ML models for user intent prediction in collaborative editing</li>
                  <li>Improved prediction accuracy by 35% through novel architecture</li>
                  <li>Published findings at UIST 2023</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Software Engineer</CardTitle>
                <p className="text-sm text-muted-foreground">Startup • 2017 – 2019</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  <li>Built scalable backend systems handling 1M+ daily active users</li>
                  <li>Designed and implemented ML infrastructure for recommendation engine</li>
                  <li>Led team of 3 engineers on core platform features</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Research Assistant</CardTitle>
                <p className="text-sm text-muted-foreground">University Lab • 2016 – 2019</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  <li>Conducted research on human-computer interaction and accessibility</li>
                  <li>Co-authored 3 papers published in CHI and UIST</li>
                  <li>Mentored 5 undergraduate researchers</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Publications */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Selected Publications</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium leading-relaxed">
                Intelligent Canvas: AI-Powered Design Assistance Through Behavioral Learning
              </p>
              <p className="text-sm text-muted-foreground">
                Your Name, Collaborator A, Collaborator B
              </p>
              <p className="text-sm text-muted-foreground">CHI &apos;24 • Best Paper Award</p>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium leading-relaxed">
                Conflict-Free Collaboration: Intent-Aware Merge Resolution in Real-Time IDEs
              </p>
              <p className="text-sm text-muted-foreground">Your Name, Collaborator C</p>
              <p className="text-sm text-muted-foreground">UIST &apos;23</p>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium leading-relaxed">
                Natural Gestures for 3D Modeling: A Participatory Design Approach
              </p>
              <p className="text-sm text-muted-foreground">
                Your Name, Collaborator D, Collaborator E
              </p>
              <p className="text-sm text-muted-foreground">CHI &apos;23</p>
            </div>
          </div>
        </section>

        <Separator />

        {/* Skills */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Skills & Expertise</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-sm font-medium">Research Areas</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Human-Computer Interaction</Badge>
                <Badge variant="secondary">Machine Learning</Badge>
                <Badge variant="secondary">Distributed Systems</Badge>
                <Badge variant="secondary">Human-AI Collaboration</Badge>
                <Badge variant="secondary">Accessibility</Badge>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-medium">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Python</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">PyTorch</Badge>
                <Badge variant="outline">TensorFlow</Badge>
                <Badge variant="outline">Node.js</Badge>
                <Badge variant="outline">PostgreSQL</Badge>
                <Badge variant="outline">Docker</Badge>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Awards & Honors */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Awards & Honors</h2>
          <div className="space-y-3">
            <div className="flex justify-between gap-4">
              <p className="text-sm">CHI Best Paper Award</p>
              <p className="text-sm text-muted-foreground">2024</p>
            </div>
            <div className="flex justify-between gap-4">
              <p className="text-sm">NSF Graduate Research Fellowship</p>
              <p className="text-sm text-muted-foreground">2021</p>
            </div>
            <div className="flex justify-between gap-4">
              <p className="text-sm">Outstanding Graduate Student Award</p>
              <p className="text-sm text-muted-foreground">2021</p>
            </div>
            <div className="flex justify-between gap-4">
              <p className="text-sm">Summa Cum Laude, B.S. Computer Science</p>
              <p className="text-sm text-muted-foreground">2019</p>
            </div>
          </div>
        </section>

        <Separator />

        {/* Service */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Service & Leadership</h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium">Program Committee Member</p>
              <p className="text-sm text-muted-foreground">CHI 2024, UIST 2023-2024</p>
            </div>
            <div>
              <p className="text-sm font-medium">Reviewer</p>
              <p className="text-sm text-muted-foreground">CHI, UIST, CSCW, TOCHI</p>
            </div>
            <div>
              <p className="text-sm font-medium">Graduate Student Mentor</p>
              <p className="text-sm text-muted-foreground">
                Mentored 8 undergraduate and graduate students
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
