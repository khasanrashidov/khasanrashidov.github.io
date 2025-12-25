import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { notFound } from 'next/navigation';

const projectData: Record<
  string,
  {
    title: string;
    description: string;
    tags: string[];
    year: string;
    problem: string;
    approach: string;
    outcome: string;
    links?: { label: string; href: string }[];
  }
> = {
  moliyachi: {
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
    year: 'November 2025 – December 2025',
    problem:
      'A significant number of Agrobank\'s customers live on a strict salary cycle, facing stress and uncertainty every month. Key challenges include aggressive spending after salary arrival, mid-month financial stress and uncertainty, no visibility into spending behavior, lack of personalized budgeting guidance, and current banking apps that provide transactions but not intelligence. Users need a way to understand their financial behavior—not just view their balance.',
    approach:
      'Developed Moliyachi, a smart financial assistant fully embedded into Agrobank Mobile that transforms it from a transaction tool into a financial partner. Key features include: AI Spending Insights providing short, actionable explanations of where money goes; Smart Monthly Planning with warnings when spending is too fast and balance predictions; Financial Health Score (0–100) explaining financial stability; Goal Planning where AI calculates timelines and suggests improvements; Personalized Recommendations based on spending patterns, habits, income, and goals; Agrobank Product Matching suggesting Microloans, Deposits, Savings, and Installment options; and AI Shop Agent for finding products with AI-powered recommendations, installment options via Opencard by Agrobank, price comparisons, and personalized insights.',
    outcome:
      'Helping individuals and families improve financial decision-making, reduce stress, and better manage budgets. Selected as a finalist in the AI500 Hackathon 2025 (Top 50 out of 1,345 teams). The product received interest from Agrobank for potential acquisition.',
    links: [
      { label: 'Demo', href: 'https://moliyachi-landing.vercel.app/' },
      { label: 'Hackathon Link', href: 'https://ai500.agrobank.uz/' },
      { label: 'GitHub', href: 'https://github.com/khasanrashidov/Fast-Forward-AI500' },
    ],
  },
  dassyor: {
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
    year: 'March 2025 – July 2025',
    problem:
      'First-time founders, students, and youth lack structured guidance to transform startup ideas into real products. Unlike traditional incubators or lecture-based courses, there\'s a need for hands-on, efficient startup building without equity demands.',
    approach:
      'Built an AI-driven platform (dassyor.com) providing structured, personalized, multi-phase roadmaps guiding users through idea validation, MVP development, and future marketing phases. Developed using .NET 8, ASP.NET Web API, Angular 18 (Signals, RxJS, NgRx), Python, React, GCP, OpenAI Assistants API, OpenAI Agents, REST, WebSocket, and Docker. Eliminated equity requirements and focused on efficient, hands-on startup building.',
    outcome:
      'Platform aligns with Uzbekistan\'s governmental efforts to promote youth entrepreneurship and startup innovation. Provides accessible startup incubation without equity requirements, enabling rapid transformation of ideas into real products.',
    links: [
      { label: 'Website', href: 'https://dassyor.com' },
      { label: 'GitHub Repository', href: 'https://github.com/khasanrashidov/dassyor-project' },
    ],
  },
  sally: {
    title: 'Sally',
    description:
      'AI assistant that accelerates pre-sales and Product Development Workshop phases by transforming client meeting transcripts into actionable project plans.',
    tags: ['NLP', 'AI Assistant', '.NET', 'Vector Database', 'Project Planning Automation', 'Document Generation'],
    year: 'September 2024',
    problem:
      'The pre-sales and Product Development Workshop (PDW) phases require weeks of manual effort to transform client meeting transcripts into actionable project plans, solution ideas, and detailed documentation.',
    approach:
      'Developed an AI assistant using NLP, .NET, and Vector Database technology that automatically processes client meeting transcripts, generates multiple solution ideas, supports sales and technical lead approvals, and produces detailed documentation including feature breakdowns, estimates, team structures, and development roadmaps.',
    outcome:
      'By automating these tasks, Sally reduces weeks of manual effort and enables faster, clearer decision-making for project teams and clients.',
  },
  'autonomous-robot-slam': {
    title: 'Autonomous Robot SLAM and Navigation — Capstone Design Project',
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
    year: 'March 2024',
    problem:
      'Autonomous mobile robots require robust systems for simultaneous localization and mapping (SLAM), pose estimation, obstacle avoidance, and waypoint-based navigation under real-world constraints.',
    approach:
      'Developed an autonomous navigation system for a TurtleBot mobile robot, addressing core robotics challenges including SLAM, pose estimation, obstacle avoidance, and waypoint-based navigation. The project integrated sensing, localization, and navigation into a cohesive autonomous system.',
    outcome:
      'The robot autonomously explored and mapped its environment, localized itself within the map, and navigated safely toward predefined waypoints under real-world constraints. Achieved first-place ranking among capstone teams at Inha University in Tashkent.',
  },
  huquqai: {
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
    year: 'February 2024',
    problem:
      'Legal information is often inaccessible and difficult to navigate. Users struggle to find accurate legal guidance from reliable sources including the constitution, laws, and social codes.',
    approach:
      'Built a legal assistant leveraging open legal data, including the constitution, laws, and social codes. Utilized the OpenAI Assistants API (powered by GPT-4 Turbo) to interpret user queries and deliver reliable responses. Developed using Python, Flask, Flask-SQLAlchemy, PyJWT, React, JavaScript, TypeScript, Bootstrap, Material UI, OpenAI Assistants API, AWS, Docker, and PostgreSQL.',
    outcome:
      'The platform simplifies legal research, making information more accessible for both individuals and organizations while maintaining high standards of accuracy. Supports responses in English and Russian.',
  },
  auctionify: {
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
    year: 'September 2023 – March 2024',
    problem:
      'Existing auction platforms lack real-time bidding capabilities and engaging user experiences. Users need seamless bidding experiences, post-auction communication, and analytics to make informed decisions.',
    approach:
      'Developed a full-stack web application using ASP.NET Web API, .NET C#, Angular, Material UI, TypeScript, HTML, SCSS, JSON, REST, CQRS + MediatR, MS SQL Server, Azure Blob Storage, SignalR for real-time bidding, Quartz.NET for scheduling, NLog for logging, Google Authentication, Google Maps API, Google Places API, QuestPDF for document generation, ApexCharts for analytics, GitHub Actions for CI/CD, and JWT authorization. Implemented post-auction chat communication features and a pro-subscription model offering analytics.',
    outcome:
      'Delivered an engaging and reliable user experience with real-time bidding capabilities. Platform provides seamless bidding workflows, post-auction communication, and subscription-based analytics. Features user-friendly exploration and transaction processes. Developed as an internship project at Vention.',
    links: [
      { label: 'GitHub Repository', href: 'https://github.com/khasanrashidov/Auctionify' },
    ],
  },
  'utilization-reports': {
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
    year: 'June 2023 – August 2023',
    problem:
      'Organizations struggle to track employee utilization across multiple departments. Manual collection and processing of worklogs from various sources is time-consuming and error-prone. Management needs automated insights and flexible reporting formats.',
    approach:
      'Built a modular Web API solution using C#, ASP.NET Web API, Azure Cloud Platform, Azure Functions, In-Memory Caching, REST, JSON, XML, CSV, xUnit for testing, NLog for logging, and Handlebars.NET for templating. Integrated with the Atlassian Tempo API to collect employee worklogs from different company departments. Developed Azure Functions for automated weekly email reporting. Implemented support for multiple output formats (JSON, XML, CSV) for individual or team-based reporting across custom date periods. Used Polly for resilience patterns.',
    outcome:
      'Streamlined employee utilization tracking and enabled automated insights for management. The modular API can be integrated into various company systems, reducing manual effort and improving reporting accuracy. Generates weekly reports and sends worklogs to employees by email.',
    links: [
      { label: 'Web API Repository', href: 'https://github.com/khasanrashidov/utilization-reports' },
      { label: 'Azure Function Repository', href: 'https://github.com/khasanrashidov/azure-function' },
    ],
  },
};

// Generate static params for all project IDs
export async function generateStaticParams() {
  return Object.keys(projectData).map((id) => ({
    id,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectData[id];

  if (!project) {
    notFound();
  }

  return (
    <main className="container mx-auto max-w-4xl px-6 py-16 md:py-24">
      <div className="space-y-12">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to Projects
        </Link>

        {/* Header */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight">{project.title}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
            <Badge variant="outline">{project.year}</Badge>
          </div>
        </div>

        <Separator />

        {/* Problem */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Problem</h2>
          <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
        </section>

        <Separator />

        {/* Approach */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Approach</h2>
          <p className="text-muted-foreground leading-relaxed">{project.approach}</p>
        </section>

        <Separator />

        {/* Outcome */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Outcome</h2>
          <p className="text-muted-foreground leading-relaxed">{project.outcome}</p>
        </section>

        {/* Links */}
        {project.links && project.links.length > 0 && (
          <>
            <Separator />
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">Resources</h2>
              <div className="flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <Button key={link.label} variant="outline" asChild>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  </Button>
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  );
}
