import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Khasan Rashidov",
};

export default function Home() {
  return (
    <main className="container mx-auto max-w-5xl px-6 py-16 md:py-24">
      {/* Hero Section */}
      <section className="mb-18 space-y-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
          <Avatar className="h-32 w-32 sm:h-40 sm:w-40">
            <AvatarImage src="/avatar.jpg" alt="Khasan Rashidov" />
            <AvatarFallback className="text-3xl">KR</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              Khasan Rashidov
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl">
              Researcher & Full Stack Engineer
            </p>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Building intelligent systems at the intersection of human-computer interaction, 
              machine learning, and distributed systems.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">HCI</Badge>
          <Badge variant="secondary">Machine Learning</Badge>
          <Badge variant="secondary">Systems</Badge>
          <Badge variant="secondary">Design</Badge>
        </div>
      </section>

      {/* Overview Cards */}
      <section className="grid gap-6 md:grid-cols-2">
        <Link href="/projects" className="group">
          <Card className="h-full transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle className="group-hover:text-primary transition-colors">
                Projects
              </CardTitle>
              <CardDescription>
                Research and engineering work across HCI, AI, and systems design
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Explore recent projects including intelligent interfaces, 
                distributed systems, and human-AI collaboration tools.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/publications" className="group">
          <Card className="h-full transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle className="group-hover:text-primary transition-colors">
                Publications
              </CardTitle>
              <CardDescription>
                Peer-reviewed research and technical writing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Papers published in CHI, UIST, and other top-tier venues 
                exploring novel interaction paradigms.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/about" className="group">
          <Card className="h-full transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle className="group-hover:text-primary transition-colors">
                About
              </CardTitle>
              <CardDescription>
                Background, experience, and research interests
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Learn more about my academic journey, research philosophy, 
                and areas of expertise.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/contact" className="group">
          <Card className="h-full transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle className="group-hover:text-primary transition-colors">
                Contact
              </CardTitle>
              <CardDescription>
                Get in touch for collaborations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Open to research collaborations, speaking opportunities, 
                and consulting engagements.
              </p>
            </CardContent>
          </Card>
        </Link>
      </section>
    </main>
  );
}
