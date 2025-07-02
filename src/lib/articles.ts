import type { Article } from "@/types";

// In-memory store: To add, edit, or remove an article, modify this array.
// The slug should be a URL-friendly version of the title.
let articles: Article[] = [
  {
    id: "1",
    title: "The Future of Web Development",
    slug: "the-future-of-web-development",
    content: "The web is constantly evolving. In this article, we explore the upcoming trends in web development, from AI-powered tools to the rise of serverless architectures. We'll delve into how these technologies are shaping the future for developers and businesses alike.",
    imageUrl: "https://placehold.co/600x400.png",
    createdAt: new Date("2023-10-26T10:00:00Z").toISOString(),
  },
  {
    id: "2",
    title: "A Deep Dive into UI/UX Design",
    slug: "a-deep-dive-into-ui-ux-design",
    content: "UI/UX design is more than just aesthetics; it's about creating intuitive and enjoyable user experiences. This piece covers the fundamental principles of great design, user research methodologies, and the tools that top designers use to create stunning and effective interfaces.",
    imageUrl: "https://placehold.co/600x400.png",
    createdAt: new Date("2023-10-24T14:30:00Z").toISOString(),
  },
  {
    id: "3",
    title: "Mastering SEO in a Changing Landscape",
    slug: "mastering-seo-in-a-changing-landscape",
    content: "Search Engine Optimization is a critical skill for digital marketers. With algorithms constantly updating, staying ahead of the curve is essential. Learn about the latest SEO strategies, from content optimization to technical SEO, and improve your website's visibility.",
    imageUrl: "https://placehold.co/600x400.png",
    createdAt: new Date("2023-10-22T09:00:00Z").toISOString(),
  },
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
