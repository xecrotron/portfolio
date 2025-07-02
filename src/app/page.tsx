import { getArticles } from "@/lib/articles";
import { Header } from "@/components/site/Header";
import { HomeSection } from "@/components/site/HomeSection";
import { ExperienceSection } from "@/components/site/ExperienceSection";
import { ProjectsSection } from "@/components/site/ProjectsSection";
import { ArticlesSection } from "@/components/site/ArticlesSection";

export default async function Home() {
  const articles = await getArticles();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HomeSection />
        <ExperienceSection />
        <ProjectsSection />
        <ArticlesSection articles={articles} />
      </main>
      <footer className="py-6 text-center text-muted-foreground text-sm bg-muted/50">
        <p>&copy; {new Date().getFullYear()} ProfolioFlow. All rights reserved.</p>
      </footer>
    </div>
  );
}
