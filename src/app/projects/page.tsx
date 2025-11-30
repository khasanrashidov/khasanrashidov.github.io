import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

const projects = [
  {
    id: "intelligent-canvas",
    title: "Intelligent Canvas",
    description: "An AI-powered design tool that learns from user behavior to suggest contextual improvements and automate repetitive tasks.",
    tags: ["HCI", "Machine Learning", "Design Tools"],
    year: "2024",
  },
  {
    id: "collaborative-ide",
    title: "Collaborative IDE",
    description: "Real-time collaborative coding environment with intelligent conflict resolution and context-aware suggestions.",
    tags: ["Systems", "HCI", "Distributed Systems"],
    year: "2023",
  },
  {
    id: "gesture-interface",
    title: "Gesture-Based Interface",
    description: "Novel interaction paradigm using computer vision and ML to enable natural gesture control for 3D modeling applications.",
    tags: ["HCI", "Computer Vision", "3D Graphics"],
    year: "2023",
  },
  {
    id: "accessibility-toolkit",
    title: "Accessibility Toolkit",
    description: "Open-source toolkit for building accessible web applications with automated testing and real-time feedback.",
    tags: ["Accessibility", "Web", "Open Source"],
    year: "2022",
  },
  {
    id: "data-viz-library",
    title: "Data Visualization Library",
    description: "Declarative library for creating interactive, accessible data visualizations with minimal code.",
    tags: ["Visualization", "JavaScript", "Open Source"],
    year: "2022",
  },
  {
    id: "ml-explainability",
    title: "ML Explainability Tool",
    description: "Interactive tool for understanding and debugging machine learning model predictions through visual explanations.",
    tags: ["Machine Learning", "Visualization", "Interpretability"],
    year: "2021",
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
            Research and engineering projects exploring intelligent interfaces, 
            human-AI collaboration, and systems design.
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

