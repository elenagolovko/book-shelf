import { Injectable } from '@angular/core';

import { Book } from './book';
import { BackendService } from './backend.service';
import { Logger } from './logger.service';

@Injectable()
export class BookService {
  private bookList: Book[] = [];

  constructor(
    private backend: BackendService,
    private logger: Logger) { }

  getBooks() {
    this.backend.getAll(Book).then( (bookList: Book[]) => {
      this.logger.log(`Fetched ${bookList.length} books.`);
      this.bookList.push(...bookList); // fill cache
    });
    return this.bookList;
  }
}
