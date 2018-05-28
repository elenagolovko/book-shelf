import { Component, Input } from '@angular/core';

import { Book } from './book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html'
})
export class BookDetailComponent {
  @Input() book: Book;
}
