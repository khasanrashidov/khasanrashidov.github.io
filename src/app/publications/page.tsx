'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const publications = [
  {
    id: 1,
    type: 'conference',
    title: 'Intelligent Canvas: AI-Powered Design Assistance Through Behavioral Learning',
    authors: 'Your Name, Collaborator A, Collaborator B',
    venue: "CHI '24",
    year: 2024,
    abstract:
      'We present Intelligent Canvas, a design tool that learns from user behavior to provide contextual suggestions and automate repetitive tasks. Through a 4-week deployment study with 12 professional designers, we demonstrate a 40% reduction in time spent on repetitive tasks while maintaining design quality.',
    pdf: '#',
    doi: '10.1145/example.chi24',
  },
  {
    id: 2,
    type: 'conference',
    title: 'Conflict-Free Collaboration: Intent-Aware Merge Resolution in Real-Time IDEs',
    authors: 'Your Name, Collaborator C',
    venue: "UIST '23",
    year: 2023,
    abstract:
      'We introduce a novel approach to real-time collaborative coding that uses machine learning to predict and prevent merge conflicts. Our system reduces conflicts by 75% compared to traditional operational transformation approaches.',
    pdf: '#',
    doi: '10.1145/example.uist23',
  },
  {
    id: 3,
    type: 'conference',
    title: 'Natural Gestures for 3D Modeling: A Participatory Design Approach',
    authors: 'Your Name, Collaborator D, Collaborator E',
    venue: "CHI '23",
    year: 2023,
    abstract:
      'Through participatory design sessions with 20 novice and expert 3D modelers, we developed a gesture vocabulary for 3D modeling that achieves 95% recognition accuracy and reduces learning time by 3x compared to traditional interfaces.',
    pdf: '#',
    doi: '10.1145/example.chi23',
  },
  {
    id: 4,
    type: 'journal',
    title: 'Distributed Conflict Resolution in Collaborative Editing Systems',
    authors: 'Your Name, Collaborator F',
    venue: 'ACM TOCHI',
    year: 2022,
    abstract:
      'A comprehensive survey and novel framework for conflict resolution in distributed collaborative editing systems. We present a taxonomy of conflict types and evaluate existing approaches across multiple dimensions.',
    pdf: '#',
    doi: '10.1145/example.tochi22',
  },
  {
    id: 5,
    type: 'conference',
    title: 'Visual Explanations for Deep Learning Models: A Unified Framework',
    authors: 'Your Name, Collaborator G, Collaborator H',
    venue: "VIS '21",
    year: 2021,
    abstract:
      'We present a unified framework for visualizing and explaining deep learning model predictions, integrating SHAP values, attention mechanisms, and counterfactual explanations in a single interactive interface.',
    pdf: '#',
    doi: '10.1109/example.vis21',
  },
  {
    id: 6,
    type: 'workshop',
    title: 'Accessibility-First Design Tools: Challenges and Opportunities',
    authors: 'Your Name, Collaborator I',
    venue: 'CHI Workshop on Inclusive Design',
    year: 2021,
    abstract:
      'A position paper exploring the challenges of building design tools that prioritize accessibility from the ground up, based on interviews with 15 designers and developers.',
    pdf: '#',
  },
];

const blogPosts = [
  {
    id: 1,
    title: 'Building Intelligent Interfaces: Lessons from 3 Years of Research',
    date: 'March 2024',
    excerpt:
      "Reflections on what I've learned about designing AI-powered tools that actually help users rather than get in their way.",
  },
  {
    id: 2,
    title: 'The State of Real-Time Collaboration in 2023',
    date: 'December 2023',
    excerpt:
      'A technical deep-dive into modern approaches to building collaborative applications, from CRDTs to operational transformation.',
  },
  {
    id: 3,
    title: "Why Gesture Interfaces Haven't Taken Off (And How We Can Fix That)",
    date: 'June 2023',
    excerpt:
      'An analysis of the challenges facing gesture-based interfaces and potential solutions based on recent research.',
  },
];

export default function Publications() {
  const [selectedType, setSelectedType] = useState<string>('all');

  useEffect(() => {
    document.title = 'Publications | Khasan Rashidov';
  }, []);

  const filteredPublications =
    selectedType === 'all' ? publications : publications.filter((p) => p.type === selectedType);

  return (
    <main className="container mx-auto max-w-4xl px-6 py-16 md:py-24">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight">Publications</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Peer-reviewed research and technical writing on HCI, systems, and machine learning.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="papers" className="space-y-8">
          <TabsList>
            <TabsTrigger value="papers">Research Papers</TabsTrigger>
            <TabsTrigger value="writing">Writing</TabsTrigger>
          </TabsList>

          {/* Research Papers */}
          <TabsContent value="papers" className="space-y-8">
            <div className="flex gap-2">
              <Button
                variant={selectedType === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedType('all')}
              >
                All
              </Button>
              <Button
                variant={selectedType === 'conference' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedType('conference')}
              >
                Conference
              </Button>
              <Button
                variant={selectedType === 'journal' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedType('journal')}
              >
                Journal
              </Button>
              <Button
                variant={selectedType === 'workshop' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedType('workshop')}
              >
                Workshop
              </Button>
            </div>

            <div className="space-y-6">
              {filteredPublications.map((pub) => (
                <Card key={pub.id}>
                  <CardHeader>
                    <div className="space-y-3">
                      <CardTitle className="text-lg leading-relaxed">{pub.title}</CardTitle>
                      <CardDescription className="space-y-1">
                        <div className="text-sm">{pub.authors}</div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="font-medium">{pub.venue}</span>
                          <span>•</span>
                          <span>{pub.year}</span>
                        </div>
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">{pub.abstract}</p>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" asChild>
                        <a href={pub.pdf} target="_blank" rel="noopener noreferrer">
                          PDF
                        </a>
                      </Button>
                      {pub.doi && (
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={`https://doi.org/${pub.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            DOI
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Blog Posts */}
          <TabsContent value="writing" className="space-y-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-md transition-all cursor-pointer">
                <CardHeader>
                  <div className="space-y-2">
                    <CardTitle className="text-lg">{post.title}</CardTitle>
                    <CardDescription>{post.date}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
