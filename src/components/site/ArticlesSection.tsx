import type { Article } from "@/types";
import { ArticleCard } from "@/components/site/ArticleCard";

type ArticlesSectionProps = {
    articles: Article[];
}

export function ArticlesSection({ articles }: ArticlesSectionProps) {
  return (
    <section id="articles" className="py-20 md:py-24 bg-muted/50">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Latest Articles</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on technology and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
       </div>
    </section>
  );
}
