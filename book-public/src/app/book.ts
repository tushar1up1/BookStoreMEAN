export class Author {
  _id: string;
  firstName: string;
  lastName: string;
  bestTitle: string;
}

export class Publisher {
  _id: string;
  name: string;
  city: string;
}

export class Book {
  _id: string;
  title: string;
  author: Author;
  publisher: Publisher;
  available: number;
  pages: number;
  genre: string;
  language: string;
}
