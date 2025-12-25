import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink } from 'lucide-react';
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
            <a
              href="https://rxresu.me/khasanr/software-engineer"
              target="_blank"
              rel="noopener noreferrer"
            >
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
                <CardTitle className="text-lg">
                  Bachelor of Science in Computer Science and Software Engineering
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Inha University in Tashkent • September 2020 – August 2024
                </p>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  <strong>GPA:</strong> 4.27/4.50, <strong>Rank:</strong> 4/300
                </p>
                <p className="text-sm text-muted-foreground">Member of Dean&apos;s List</p>
                <p className="text-sm text-muted-foreground">
                  <strong>Core Courses:</strong> Artificial Intelligence, Big Data Analytics,
                  Capstone Design, Multimedia Computing, Software Engineering, Database Application
                  & Design, Computer Networks
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Programming Courses:</strong> Object-Oriented Programming, Application
                  Programming in Java, Data Structure, System Programming, Operating System,
                  Database, Mobile Programming, Computer Algorithm, Unix Programming, Embedded
                  Software & Design
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Math Courses:</strong> Calculus, Linear Algebra, Discrete Mathematics,
                  Engineering Mathematics, Probability and Statistics
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Summer School Program</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Inha University (Incheon, South Korea) • July 2023 – August 2023
                </p>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  <strong>Courses:</strong> Korean Culture, Introduction to the Korean Business and
                  Economy, Business Communication in English
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Experience */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Work Experience</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Senior Software Engineer</CardTitle>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <a
                    href="https://ventionteams.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors flex items-center gap-1"
                  >
                    Vention
                    <ExternalLink className="h-3 w-3" />
                  </a>{' '}
                  • August 2023 – Present
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Stack: .NET, Angular, TypeScript, Python, Azure, RabbitMQ, RxJS, NgRx, EF Core, MS
                  SQL Server
                </p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  <li>
                    Design, develop, and maintain production-scale full-stack systems using Angular
                    (RxJS, NgRx) and ASP.NET Core, leading backend development of high-performance
                    RESTful APIs with Entity Framework Core
                  </li>
                  <li>
                    Integrate AI-powered systems, including LLMs and external AI services/APIs, into
                    production applications and collaborate on AI-assisted workflows
                  </li>
                  <li>
                    Optimize MS SQL Server databases through query tuning, indexing strategies, and
                    schema design to support performance-critical workloads
                  </li>
                  <li>
                    Architect and deploy cloud-native solutions on Microsoft Azure utilizing Azure
                    Functions, Blob Storage, and DevOps best practices
                  </li>
                  <li>
                    Participate in technical decision-making, code reviews, and mentoring of junior
                    engineers
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Software Engineer Intern</CardTitle>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <a
                    href="https://leverx.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors flex items-center gap-1"
                  >
                    LeverX
                    <ExternalLink className="h-3 w-3" />
                  </a>{' '}
                  • March 2023 – August 2023
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Stack: .NET (C#), Azure, REST, Microservices, GitLab CI/CD, In-memory Caching,
                  xUnit, Moq, NLog
                </p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  <li>
                    Designed and implemented a scalable ASP.NET Web API solution aligned with
                    enterprise requirements and modular architecture principles
                  </li>
                  <li>
                    Integrated third-party APIs (Atlassian Tempo API) to automate employee worklog
                    collection and reporting workflows
                  </li>
                  <li>
                    Developed and deployed Azure Functions for automated weekly email reporting
                  </li>
                  <li>
                    Configured GitLab CI/CD pipelines to automate builds, testing, and deployments
                  </li>
                  <li>
                    Implemented unit and integration testing using xUnit and Moq, achieving 90%+
                    test coverage
                  </li>
                  <li>
                    Successfully completed the internship program, ranking top 1 among interns based
                    on performance evaluations
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Skills */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Skills & Expertise</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-sm font-medium">Core Programming & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">.NET (C#)</Badge>
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">C/C++</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">Java</Badge>
                <Badge variant="secondary">Kotlin</Badge>
                <Badge variant="secondary">Golang</Badge>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-medium">Web Technologies & Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Angular</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">HTML</Badge>
                <Badge variant="outline">SCSS</Badge>
                <Badge variant="outline">RxJS</Badge>
                <Badge variant="outline">NgRx</Badge>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-medium">.NET Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">ASP.NET Core</Badge>
                <Badge variant="outline">ADO.NET</Badge>
                <Badge variant="outline">EF Core</Badge>
                <Badge variant="outline">SignalR</Badge>
                <Badge variant="outline">In-memory Caching</Badge>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-medium">Python Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Flask</Badge>
                <Badge variant="outline">FastAPI</Badge>
                <Badge variant="outline">Django</Badge>
                <Badge variant="outline">Flask-SQLAlchemy</Badge>
                <Badge variant="outline">Celery</Badge>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-medium">Databases</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">MS SQL Server</Badge>
                <Badge variant="outline">T-SQL</Badge>
                <Badge variant="outline">MySQL</Badge>
                <Badge variant="outline">PostgreSQL</Badge>
                <Badge variant="outline">MongoDB</Badge>
                <Badge variant="outline">Redis</Badge>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-medium">Testing Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">xUnit</Badge>
                <Badge variant="outline">NUnit</Badge>
                <Badge variant="outline">MSTest</Badge>
                <Badge variant="outline">Moq</Badge>
                <Badge variant="outline">FluentAssertions</Badge>
                <Badge variant="outline">Vitest</Badge>
                <Badge variant="outline">Jasmine</Badge>
                <Badge variant="outline">Karma</Badge>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-medium">DevOps, Cloud & Tools</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Git</Badge>
                <Badge variant="outline">NuGet</Badge>
                <Badge variant="outline">npm</Badge>
                <Badge variant="outline">Docker</Badge>
                <Badge variant="outline">RabbitMQ</Badge>
                <Badge variant="outline">Azure</Badge>
                <Badge variant="outline">AWS</Badge>
                <Badge variant="outline">GCP</Badge>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-medium">AI, Data Science, Analytics</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Python (NumPy, pandas, scikit-learn)</Badge>
                <Badge variant="outline">TensorFlow</Badge>
                <Badge variant="outline">PyTorch</Badge>
                <Badge variant="outline">LLMs</Badge>
                <Badge variant="outline">RAG</Badge>
                <Badge variant="outline">AI System Integrations</Badge>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-medium">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">English (Proficient)</Badge>
                <Badge variant="secondary">Russian (Native)</Badge>
                <Badge variant="secondary">Uzbek (Native)</Badge>
                <Badge variant="secondary">Korean (Intermediate)</Badge>
                <Badge variant="secondary">Turkish (Basic)</Badge>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Awards & Honors */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Awards & Achievements</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Finalist, AI500 Hackathon 2025</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Agrobank & IT Community of Uzbekistan • December 2025
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Selected as one of the Top 50 teams (~3.7% of 1,345 teams) in the AI500 Agrobank
                  Hackathon, a national AI & fintech competition. Developed a fully functional MVP
                  within 5 days, demonstrating rapid prototyping and applied AI/ML skills in a
                  real-world financial context. The product received interest from Agrobank for
                  potential acquisition, reflecting practical impact and quality of the solution.
                </p>
                <div className="flex flex-wrap gap-3 text-xs">
                  <a
                    href="https://ai500.agrobank.uz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                  >
                    Hackathon Link
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <a
                    href="https://github.com/khasanrashidov/Fast-Forward-AI500"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                  >
                    GitHub
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Third Award, ICPC 2022 and ICPC 2023 Regional Contests
                </CardTitle>
                <p className="text-sm text-muted-foreground">November 2022</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Participant in ICPC 2022 and ICPC 2023 Regional Contests. Achieved a Top 30 finish
                  out of 158 teams at the 2022 ICPC Uzbekistan Regional Contest, ranking 1st among
                  all IUT teams.
                </p>
                <div className="flex flex-wrap gap-3 text-xs">
                  <a
                    href="https://official.contest.yandex.com/uz2022icpc/contest/43836/standings"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                  >
                    ICPC Standings
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Winner, Best Educational Project — NASA Space Apps Challenge
                </CardTitle>
                <p className="text-sm text-muted-foreground">October 2022</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Developed ZeroX, an educational mobile game helping users learn about the scale of
                  the universe and humanity&apos;s potential advancements through the James Webb
                  Space Telescope (JWST).
                </p>
                <div className="flex flex-wrap gap-3 text-xs">
                  <a
                    href="https://2022.spaceappschallenge.org/challenges/2022-challenges/through-the-looking-glass/teams/team-zero-3/project/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                  >
                    Project Details
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <a
                    href="https://inha.uz/competition/a-team-of-iut-students-won-the-best-educational-project-nomination-in-the-nasa-space-apps-challenge/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                  >
                    News Article
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Recipient, Sturgeon Capital Scholarship for Talented Students in STEM
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  The Sturgeon Foundation • October 2022
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Awarded the Sturgeon Capital Scholarship for talented STEM students during junior
                  year at IUT; selected as a member of the Sturgeon Foundation.
                </p>
                <div className="flex flex-wrap gap-3 text-xs">
                  <a
                    href="https://thesturgeonfoundation.org.uk/our-scholars"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                  >
                    Foundation Link
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Recipient, IUT Academic Excellence Scholarship
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Inha University in Tashkent • 2020 – 2024
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Five-time Academic Excellence Scholarship recipient, awarded for ranking among the
                  top 10 GPAs out of 300 students, including multiple 1st-place rankings.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Extracurricular Activities */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Extracurricular Activities</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tech Support Coordinator</CardTitle>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <a
                    href="https://linkedin.com/company/iut-student-association/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors flex items-center gap-1"
                  >
                    IUT Student Association
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  ,{' '}
                  <a
                    href="http://inha.uz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors flex items-center gap-1"
                  >
                    Inha University in Tashkent
                    <ExternalLink className="h-3 w-3" />
                  </a>{' '}
                  • September 2023 – May 2024
                </p>
                <p className="text-xs text-muted-foreground mt-1">Tashkent, Uzbekistan</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Provided technical support for university events and activities, assisting with
                  troubleshooting, setting up equipment, and ensuring smooth operations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Exam Proctor</CardTitle>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <a
                    href="https://collegeboard.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors flex items-center gap-1"
                  >
                    The College Board
                    <ExternalLink className="h-3 w-3" />
                  </a>{' '}
                  • October 2021 – December 2021
                </p>
                <p className="text-xs text-muted-foreground mt-1">Tashkent, Uzbekistan</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Assisted in administering and supervising SAT examinations for large groups of
                  students (100+ per session), ensuring compliance with testing procedures and
                  maintaining a secure testing environment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Exam Invigilator</CardTitle>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <a
                    href="https://ielts.idp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors flex items-center gap-1"
                  >
                    IDP Education Ltd
                    <ExternalLink className="h-3 w-3" />
                  </a>{' '}
                  • August 2021 – December 2021
                </p>
                <p className="text-xs text-muted-foreground mt-1">Tashkent, Uzbekistan</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Supervised the administration of IELTS exams for 500+ candidates, ensuring strict
                  adherence to testing protocols and maintaining a fair testing environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
