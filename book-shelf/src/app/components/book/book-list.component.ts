import { Component, OnInit }   from '@angular/core';

import { Book }                from './book';
import { BookService }         from './book.service';

@Component({
  selector:    'app-book-list',
  templateUrl: './book-list.component.html',
  providers:  [ BookService ]
})
export class BookListComponent implements OnInit {
  bookList: Book[];
  selectedBook: Book;

  constructor(private service: BookService) { }

  ngOnInit() {
    this.bookList = this.service.getBooks();
  }

  selectBook(book: Book) { this.selectedBook = book; }
}
