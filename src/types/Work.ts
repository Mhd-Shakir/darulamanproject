export interface Work {
  id: string;
  title: string;
  category: 'poetry' | 'books';
  content: string;
  Author: string;
  datePublished: string;
  featured?: boolean;
  imageUrl?: string;
}
