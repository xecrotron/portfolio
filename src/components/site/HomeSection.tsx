import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center py-16">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter">
              Hi, I'm Lakshay
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              A passionate developer creating modern and interactive web applicationss — and building resilient infrastructure . This portfolio is a showcase of my journey, skills, and the projects I've brought to life.
            </p>
            <div className="flex gap-4">
                <Button asChild size="lg">
                    <a href="#projects">View Projects</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                    <a href="#experience">My Experience</a>
                </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="https://placehold.co/500x500.png"
              alt="Portrait"
              width={500}
              height={500}
              className="rounded-full object-cover aspect-square shadow-lg"
              data-ai-hint="professional portrait"
              priority
            />
          </div>
        </div>
         <div className="text-center pt-10 pb-4">
            <h2 className="text-2xl font-headline font-semibold mb-2">Explore My Work</h2>
            <p className="text-muted-foreground mb-4">Scroll down to learn more about me.</p>
            <a href="#experience" aria-label="Scroll down to experience section">
              <ArrowDown className="h-8 w-8 mx-auto text-primary animate-bounce" />
            </a>
        </div>
      </div>
    </section>
  );
}
