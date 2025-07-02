import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Project Alpha",
        description: "An innovative platform for project management, designed to streamline workflows and enhance team collaboration. The idea came from seeing inefficiencies in existing tools.",
        imageUrl: "https://placehold.co/600x400.png",
        tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
        link: "#",
        imageHint: "office collaboration"
    },
    {
        title: "Project Beta",
        description: "A mobile-first social networking app for hobbyists. I wanted to create a space for people to connect over shared interests without the noise of major platforms.",
        imageUrl: "https://placehold.co/600x400.png",
        tags: ["React Native", "Firebase", "GraphQL"],
        link: "#",
        imageHint: "mobile app interface"
    },
    {
        title: "Project Gamma",
        description: "An e-commerce site with a focus on sustainable products. This project was born from a passion for environmentalism and a desire to make eco-friendly shopping easier.",
        imageUrl: "https://placehold.co/600x400.png",
        tags: ["Next.js", "Shopify API", "Styled Components"],
        link: "#",
        imageHint: "sustainable products"
    }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">My Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that I'm proud of. Each one was a unique challenge.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden group flex flex-col">
                    <div className="relative aspect-video">
                         <Image 
                            src={project.imageUrl} 
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={project.imageHint}
                        />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <CardHeader>
                          <CardTitle className="font-headline flex justify-between items-center">
                              {project.title}
                               <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                  <ExternalLink className="h-5 w-5"/>
                                  <span className="sr-only">View Project</span>
                               </a>
                          </CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col flex-grow">
                          <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                           <div className="flex flex-wrap gap-2 mt-auto">
                              {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                          </div>
                      </CardContent>
                    </div>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
