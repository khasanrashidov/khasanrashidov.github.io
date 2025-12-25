import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
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
            <AvatarImage src="/avatar.jpg" alt="Khasan Rashidov" />
            <AvatarFallback className="text-2xl">KR</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight">About</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Senior Software Engineer building production-scale full-stack applications with AI
              integration and cloud-native solutions.
            </p>
          </div>
        </div>

        <Separator />

        {/* Bio */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Background</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a Full Stack Software Engineer with 3+ years of commercial experience
              building scalable and maintainable web applications using .NET, Python, and Angular.
              Currently, I work as a Senior Software Engineer at Vention, where I design and develop
              production-scale full-stack systems using Angular and ASP.NET Core. My work focuses on
              building high-performance RESTful APIs, integrating AI-powered systems including LLMs
              into production applications, and architecting cloud-native solutions on Microsoft
              Azure.
            </p>
            <p>
              I&apos;m familiar with cloud platforms like Azure and Google Cloud Platform (GCP),
              including tools such as Azure Functions and Blob Storage. I&apos;m skilled in
              designing and optimizing relational databases (SQL Server, PostgreSQL, MySQL) with a
              good understanding of database design, query optimization, and principles like SOLID,
              OOP, ACID, and FIRST. I focus on writing clean, efficient, and maintainable code.
            </p>
            <p>
              I graduated from Inha University in Tashkent with a Bachelor of Science in Computer
              Science and Software Engineering, ranking 4th out of 300 students with a GPA of
              4.27/4.50. During my studies, I was a member of the Dean&apos;s List and received
              multiple Academic Excellence Scholarships.
            </p>
            <p>
              I&apos;m experienced in Agile environments (Scrum, Kanban) and capable of integrating
              AI-driven features into applications. I&apos;m a motivated team player who also works
              well independently, always open to learning and exploring new technologies. My
              experience spans full-stack development, AI integration, database optimization, and
              cloud architecture. I&apos;ve worked on projects ranging from AI-powered financial
              analytics platforms to autonomous robotics systems, and I&apos;m passionate about
              building scalable, intelligent software solutions.
            </p>
          </div>
        </section>

        <Separator />

        {/* Research Interests */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Research Interests</h2>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">Full-Stack Development</Badge>
            <Badge variant="outline">AI/ML Integration</Badge>
            <Badge variant="outline">Cloud Architecture</Badge>
            <Badge variant="outline">.NET & Angular</Badge>
            <Badge variant="outline">Python</Badge>
            <Badge variant="outline">Database Optimization</Badge>
            <Badge variant="outline">Microservices</Badge>
            <Badge variant="outline">DevOps</Badge>
            <Badge variant="outline">Software Engineering</Badge>
          </div>
        </section>

        <Separator />

        {/* Timeline */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Senior Software Engineer</CardTitle>
                <p className="text-sm text-muted-foreground">Vention • August 2023 – Present</p>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Software Engineer Intern</CardTitle>
                <p className="text-sm text-muted-foreground">LeverX • March 2023 – August 2023</p>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  B.S. Computer Science and Software Engineering
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Inha University in Tashkent • September 2020 – August 2024
                </p>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Summer School Program</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Inha University (Incheon, South Korea) • July 2023 – August 2023
                </p>
              </CardHeader>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
