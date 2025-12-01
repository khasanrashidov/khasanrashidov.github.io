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
  'intelligent-canvas': {
    title: 'Intelligent Canvas',
    description:
      'An AI-powered design tool that learns from user behavior to suggest contextual improvements and automate repetitive tasks.',
    tags: ['HCI', 'Machine Learning', 'Design Tools'],
    year: '2024',
    problem:
      'Designers spend significant time on repetitive tasks and struggle to maintain consistency across complex projects. Existing tools lack contextual awareness of design intent.',
    approach:
      'Developed a machine learning system that observes user interactions, learns design patterns, and provides intelligent suggestions. Implemented using transformer-based models for pattern recognition and a novel interaction paradigm for accepting/rejecting suggestions.',
    outcome:
      'User studies showed 40% reduction in time spent on repetitive tasks and improved design consistency. Published at CHI 2024. System is being piloted by 3 design teams.',
    links: [
      { label: 'Paper (PDF)', href: '#' },
      { label: 'Demo Video', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
  },
  'collaborative-ide': {
    title: 'Collaborative IDE',
    description: 'Real-time collaborative coding environment with intelligent conflict resolution.',
    tags: ['Systems', 'HCI', 'Distributed Systems'],
    year: '2023',
    problem:
      "Real-time collaborative coding suffers from merge conflicts and lack of awareness of collaborators' intent, leading to frustration and lost work.",
    approach:
      'Built a distributed system using CRDTs for conflict-free replication and developed an ML model to predict and prevent conflicts based on code context and user behavior.',
    outcome:
      'Reduced merge conflicts by 75% in user studies. System handles 100+ concurrent users with sub-100ms latency. Published at UIST 2023.',
    links: [
      { label: 'Paper (PDF)', href: '#' },
      { label: 'Live Demo', href: '#' },
    ],
  },
  'gesture-interface': {
    title: 'Gesture-Based Interface',
    description: 'Novel interaction paradigm using computer vision and ML for 3D modeling.',
    tags: ['HCI', 'Computer Vision', '3D Graphics'],
    year: '2023',
    problem:
      'Traditional 3D modeling interfaces have steep learning curves and require specialized hardware, limiting accessibility.',
    approach:
      'Developed a computer vision system using MediaPipe and custom ML models to recognize natural hand gestures. Created an intuitive gesture vocabulary through participatory design sessions.',
    outcome:
      'Novice users achieved proficiency 3x faster than with traditional tools. System works with standard webcams. Presented at CHI 2023.',
    links: [
      { label: 'Paper (PDF)', href: '#' },
      { label: 'Video Demo', href: '#' },
    ],
  },
  'accessibility-toolkit': {
    title: 'Accessibility Toolkit',
    description: 'Open-source toolkit for building accessible web applications.',
    tags: ['Accessibility', 'Web', 'Open Source'],
    year: '2022',
    problem:
      'Web developers lack tools for real-time accessibility testing and often discover issues late in development.',
    approach:
      'Created an open-source library with automated testing, real-time feedback, and remediation suggestions. Integrated with popular frameworks and CI/CD pipelines.',
    outcome:
      'Adopted by 50+ companies. 10k+ GitHub stars. Reduced accessibility issues by 60% in adopting teams.',
    links: [
      { label: 'GitHub', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'NPM Package', href: '#' },
    ],
  },
  'data-viz-library': {
    title: 'Data Visualization Library',
    description: 'Declarative library for creating interactive, accessible data visualizations.',
    tags: ['Visualization', 'JavaScript', 'Open Source'],
    year: '2022',
    problem:
      'Existing visualization libraries require extensive code and often produce inaccessible outputs.',
    approach:
      'Built a declarative API inspired by Vega-Lite with built-in accessibility features. Optimized for performance using WebGL rendering.',
    outcome:
      'Used in 100+ projects. All visualizations are keyboard-navigable and screen-reader friendly by default.',
    links: [
      { label: 'GitHub', href: '#' },
      { label: 'Examples', href: '#' },
    ],
  },
  'ml-explainability': {
    title: 'ML Explainability Tool',
    description:
      'Interactive tool for understanding ML model predictions through visual explanations.',
    tags: ['Machine Learning', 'Visualization', 'Interpretability'],
    year: '2021',
    problem:
      'ML practitioners struggle to debug and understand model behavior, especially for complex deep learning models.',
    approach:
      'Developed interactive visualizations using SHAP values, attention mechanisms, and counterfactual explanations. Created a unified interface for multiple explanation methods.',
    outcome:
      'Helped identify and fix biases in 5 production models. Published at VIS 2021. Open-sourced with 5k+ GitHub stars.',
    links: [
      { label: 'Paper (PDF)', href: '#' },
      { label: 'GitHub', href: '#' },
      { label: 'Interactive Demo', href: '#' },
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
