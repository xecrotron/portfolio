import type { Article } from "@/types";
import article from "./articles/[id]/1/page";
import article2 from "./articles/[id]/2/page";
import article3 from "./articles/[id]/1/page";

// In-memory store: To add, edit, or remove an article, modify this array.
// The slug should be a URL-friendly version of the title.
let articles: Article[] = [
  article,
  article2,
  article3,
];

export const getArticles = async (): Promise<Article[]> => {
  return articles.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
};

export const getArticleBySlug = async (slug: string): Promise<Article | undefined> => {
  return articles.find((article) => article.slug === slug);
};

export const getArticleById = async (id: string): Promise<Article | undefined> => {
  return articles.find((article) => article.id === id);
};
