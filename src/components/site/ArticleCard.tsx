import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  const shortDescription = article.content.substring(0, 100) + "...";
  
  return (
    <Link href={`/articles/${article.slug}`} className="group block">
      <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
        <CardHeader>
          <div className="aspect-video relative mb-4">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover rounded-md"
              data-ai-hint="technology abstract"
            />
          </div>
          <CardTitle className="font-headline text-xl leading-tight group-hover:text-primary transition-colors">
            {article.title}
          </CardTitle>
          <CardDescription>
            {new Date(article.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">{shortDescription}</p>
          <div className="mt-4 flex items-center text-primary font-semibold text-sm">
            Read More
            <ArrowUpRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
