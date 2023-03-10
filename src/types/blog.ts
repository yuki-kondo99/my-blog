export type Blog = {
  id: string;
  content: string;
  title: string;
  category: Category;
  tags: Tag[];
  image: Image;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type Tag = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type Category = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type Image = {
  url: string;
  height: number;
  width: number;
};
