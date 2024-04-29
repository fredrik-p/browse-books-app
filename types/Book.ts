export interface Book {
  title: string;
  authors?: string[];
  description?: string;
  imageLinks?: {
    thumbnail?: string;
  };
  publishedDate?: string;
}
