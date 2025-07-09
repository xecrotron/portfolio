import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import Markdown from "react-markdown";  

const experiences = [
    {
        role: "Software Engineer",
        company: "WebMD",
        period: "July 2024 - Present",
        description: `
-   Maintaining and enhancing WebMDHelios Web Applications, a comprehensive internal platform used for managing many organizational workflows.

-   Collaborating with the DevOps team to manage infrastructure across the Europe vertical, overseeing migrations, and working closely with developers to troubleshoot and resolve application issues.
`
    },
    {
        role: "Associate Research Intern",
        company: "Mantra Softech",
        period: " March 2024 - July 2024",
        description: `
-   Developed and maintained client websites, focusing on responsive design and user experience.
-   Worked with a variety of technologies to meet diverse project requirements.
`
    }
];

const jobInterests = {
    roles: ["DevOps Engineer", "Software Engineer", "Full Stack Developer"],
    industries: ["SaaS", "FinTech", "E-commerce", "HealthTech"]
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Experience & Ambitions</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and what I'm looking for next.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
            <div>
                <h3 className="text-2xl font-headline font-semibold mb-6 flex items-center">
                    <Briefcase className="mr-3 h-6 w-6 text-primary" />
                    Work History
                </h3>
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-border before:opacity-50">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-12">
                             <div className="absolute left-[1.1rem] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-background"></div>
                            <h4 className="font-bold text-lg font-headline">{exp.role}</h4>
                            <p className="font-semibold text-primary">{exp.company}</p>
                            <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                            {/* <p className="text-foreground/80">{exp.description}</p> */}
                            <p className="markdown text-foreground/80">
                                <Markdown >{exp.description}</Markdown>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            
            <Card className="bg-background">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Career Goals</CardTitle>
                    <CardDescription>The roles and industries I'm passionate about exploring.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                     <div>
                        <h4 className="font-semibold mb-2">Ideal Roles</h4>
                        <div className="flex flex-wrap gap-2">
                            {jobInterests.roles.map(role => (
                                <span key={role} className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium">{role}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Industries of Interest</h4>
                         <div className="flex flex-wrap gap-2">
                            {jobInterests.industries.map(industry => (
                                <span key={industry} className="px-3 py-1 text-sm rounded-full bg-accent/20 text-accent-foreground font-medium">{industry}</span>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
