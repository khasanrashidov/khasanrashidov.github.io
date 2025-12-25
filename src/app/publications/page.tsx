'use client';

import { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const publications: never[] = [];

const blogPosts = [
  {
    id: 1,
    title: '.NET Web API Deployment in Azure (GitLab CI/CD Pipeline, Webhooks and Runners)',
    date: 'July 13, 2023',
    excerpt:
      'A comprehensive guide on setting up CI/CD pipeline in GitLab for proper deployment of ASP.NET Core Web API in Azure. Covers GitLab CI/CD configuration, Azure Web App setup, webhook configuration, and automated deployment workflows.',
    url: 'https://khasanr.blogspot.com/2023/07/net-web-api-deployment-in-azure-gitlab.html',
    tags: ['.NET', 'ASP.NET Core', 'Azure', 'GitLab CI/CD', 'DevOps', 'Web API'],
  },
  {
    id: 2,
    title: 'Why is Python One of the Best Programming Languages for Software Engineers?',
    date: 'December 28, 2022',
    excerpt:
      'An analysis of Python as a programming language for software engineers, covering its advantages, ease of learning, versatility, and why it\'s essential for developers in today\'s technology industry.',
    url: 'https://khasanr.blogspot.com/2022/12/why-is-python-one-of-best-programming.html',
    tags: ['Python', 'Programming', 'Software Engineering', 'Computer Science'],
  },
  {
    id: 3,
    title: 'How to Become a Straight-A+ Student & Get GPA of 4.5',
    date: 'December 28, 2022',
    excerpt:
      'A guide on achieving high GPA with all grades of A+, focusing on self-discipline, time management skills, and effective study strategies. Based on personal experience achieving a 4.1/4.5 GPA average.',
    url: 'https://khasanr.blogspot.com/2022/12/how-to-become-straight-student-and-get.html',
    tags: ['Education', 'Study Tips', 'Academic Excellence', 'GPA'],
  },
  {
    id: 4,
    title: 'How to Get Better at Playing Chess?',
    date: 'December 28, 2022',
    excerpt:
      'Tips and strategies for improving chess skills, covering various aspects of chess gameplay and techniques to enhance performance.',
    url: 'https://khasanr.blogspot.com/2022/12/how-to-get-better-at-playing-chess.html',
    tags: ['Chess', 'Strategy', 'Games'],
  },
];

export default function Publications() {
  useEffect(() => {
    document.title = 'Publications | Khasan Rashidov';
  }, []);

  return (
    <main className="container mx-auto max-w-4xl px-6 py-16 md:py-24">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight">Publications</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Technical writing and future publications on software engineering, AI integration, and
            full-stack development.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="papers" className="space-y-8">
          <TabsList>
            <TabsTrigger value="papers">Research Papers</TabsTrigger>
            <TabsTrigger value="writing">Blog Posts</TabsTrigger>
          </TabsList>

          {/* Research Papers */}
          <TabsContent value="papers" className="space-y-8">
            <Card>
              <CardContent className="pt-6">
                <p className="text-center text-muted-foreground">
                  Publications coming soon. Check back later for research papers and technical
                  articles.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Blog Posts */}
          <TabsContent value="writing" className="space-y-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-md transition-all">
                <CardHeader>
                  <div className="space-y-3">
                    <CardTitle className="text-lg leading-relaxed">{post.title}</CardTitle>
                    <CardDescription>{post.date}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      Read Article
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
