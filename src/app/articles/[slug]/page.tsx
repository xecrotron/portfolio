import { getArticleBySlug, getArticles } from "@/lib/articles";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/site/Header";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const articles = await getArticles();
  return (articles.map(t => ({ slug: t.slug})));
}

export default async function ArticlePage({ params }: Props) {
  const article = await getArticleBySlug(params.slug);
  console.log("Article:", article);

  if (!article) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-primary hover:underline mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
          <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight mb-4">
            {article.title}
          </h1>
          <p className="text-muted-foreground mb-8">
            Published on{" "}
            {new Date(article.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover"
              priority
              data-ai-hint="article hero"
            />
          </div>
          <div className="markdown">
             {/* <p>{article.content}</p> */}
            <ReactMarkdown>{article.content}</ReactMarkdown>
          </div>
          
        </div>
      </main>
    </div>
  );
}

export async function generateMetadata({ params }: Props) {
  const article = await getArticleBySlug(params.slug);
  if (!article) {
    return {
      title: "Article Not Found",
    };
  }
  return {
    title: `${article.title} | ProfolioFlow`,
    description: article.content.substring(0, 150),
  };
}
