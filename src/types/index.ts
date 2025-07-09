export type Article = {
  id: string;
  title: string;
  slug: string;
  content: string;
  imageUrl: string;
  createdAt: string;
  external: boolean;
  url?: string;
};
