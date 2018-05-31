let nextId = 1;

export class Book {
  constructor(
    public bookTitle: string,
    public authors: Array,
    public pages: number,
    public publisherName?: string,
    public yearOfPublication?: number,
    public releaseDate?: number,
    public isbn?: string,
    public image?: string
  ) {}
}
