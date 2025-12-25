import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
};

const projects = [
  {
    id: 'moliyachi',
    title: 'Moliyachi',
    description:
      'AI-powered personal finance platform integrated into Agrobank Mobile app that transforms banking data into actionable financial guidance.',
    tags: [
      'AI',
      'Personal Finance',
      'Predictive Analytics',
      'LLMs',
      'LangChain',
      'Python',
      'Super App Integration',
      'Next.js',
      'Tailwind CSS',
      'Recharts',
      'Lucide React',
      'TypeScript',
      'Mobile First',
      'Flask',
      'SQLAlchemy',
      'PostgreSQL',
      'REST API',
      'Mathematical computations',
      'OpenAI GPT-5.1/4.1/4o',
      'Open-source LLM models',
      'Custom Rules and Instructions',
      'Machine Learning',
      'RAG',
      'Vercel',
      'Supabase',
      'Render',
      'LangSmith',
    ],
    year: 'Nov–Dec 2025',
  },
  {
    id: 'dassyor',
    title: 'Dassyor',
    description:
      'AI-driven platform empowering first-time founders, students, and youth to quickly transform startup ideas into real products through structured roadmaps.',
    tags: [
      'AI',
      '.NET 8',
      'ASP.NET Web API',
      'Angular 18',
      'RxJS',
      'NgRx',
      'Python',
      'React',
      'GCP',
      'OpenAI Assistants API',
      'OpenAI Agents',
      'REST',
      'WebSocket',
      'Docker',
    ],
    year: 'Mar–Jul 2025',
  },
  {
    id: 'sally',
    title: 'Sally',
    description:
      'AI assistant that accelerates pre-sales and Product Development Workshop phases by transforming client meeting transcripts into actionable project plans.',
    tags: ['NLP', 'AI Assistant', '.NET', 'Vector Database', 'Project Planning Automation', 'Document Generation'],
    year: 'Sep 2024',
  },
  {
    id: 'autonomous-robot-slam',
    title: 'Autonomous Robot SLAM and Navigation',
    description:
      'Capstone design project developing an autonomous navigation system for a TurtleBot mobile robot with SLAM, localization, and obstacle avoidance.',
    tags: [
      'Robotics',
      'SLAM',
      'Autonomous Navigation',
      'Localization',
      'Obstacle Avoidance',
      'Motion Planning',
      'C/C++',
      'Qt',
      'Ubuntu',
      'Linux',
      'ROS',
    ],
    year: 'Mar 2024',
  },
  {
    id: 'huquqai',
    title: 'HuquqAI — Legal Assistant',
    description:
      'AI-powered legal assistant leveraging open legal data to provide users with accurate legal guidance using OpenAI GPT-4 Turbo.',
    tags: [
      'Python',
      'Flask',
      'Flask-SQLAlchemy',
      'PyJWT',
      'React',
      'JavaScript',
      'TypeScript',
      'Bootstrap',
      'Material UI',
      'OpenAI Assistants API',
      'AWS',
      'Docker',
      'PostgreSQL',
    ],
    year: 'Feb 2024',
  },
  {
    id: 'auctionify',
    title: 'Auctionify',
    description:
      'Interactive auction platform that enables users to buy and sell unique products through real-time bidding with seamless bidding, post-auction chat, and subscription-based analytics.',
    tags: [
      'ASP.NET Web API',
      '.NET C#',
      'Angular',
      'Material UI',
      'TypeScript',
      'SignalR',
      'CQRS + MediatR',
      'MS SQL Server',
      'Azure Blob Storage',
      'xUnit',
      'Quartz.NET',
      'NLog',
      'Google Maps API',
      'QuestPDF',
      'ApexCharts',
      'GitHub Actions',
      'CI/CD',
      'JWT',
    ],
    year: 'Sep 2023–Mar 2024',
  },
  {
    id: 'utilization-reports',
    title: 'Employee Utilization Reports',
    description:
      'Web API solution that collects and processes employee worklogs from different company departments via Atlassian Tempo API, generating weekly reports and supporting multiple output formats.',
    tags: [
      'C#',
      'ASP.NET Web API',
      'Azure Cloud Platform',
      'Azure Functions',
      'In-Memory Caching',
      'REST',
      'JSON',
      'XML',
      'CSV',
      'xUnit',
      'NLog',
      'Handlebars.NET',
      'Polly',
    ],
    year: 'Jun–Aug 2023',
  },
];

export default function Projects() {
  return (
    <main className="container mx-auto max-w-5xl px-6 py-16 md:py-24">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            AI-powered applications, full-stack systems, and innovative software solutions spanning
            finance, startup incubation, automation, robotics, and legal assistance.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`} className="group">
              <Card className="h-full transition-all hover:shadow-md">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {project.year}
                    </span>
                  </div>
                  <CardDescription className="leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
