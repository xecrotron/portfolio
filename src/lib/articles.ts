import type { Article } from "@/types";
const articleIds = ["1"];

const allarticles: Promise<Article[]> = Promise.all(
  articleIds.map((id) => import(`./articles/[id]/${id}/page`).then((mod) => mod.default))
);

let articles: Article[] 
async function renderArticles(){
  articles = await allarticles;
}

export const getArticles = async (): Promise<Article[]> => {
  await renderArticles();
  return articles.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
};

export const getArticleBySlug = async (slug: string): Promise<Article | undefined> => {
  await renderArticles();
  return articles.find((article) => article.slug === slug);
};

export const getArticleById = async (id: string): Promise<Article | undefined> => {
  await renderArticles();
  return articles.find((article) => article.id === id);
};
