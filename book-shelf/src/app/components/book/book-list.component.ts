import { Component, OnInit }   from '@angular/core';

import { Book }                from './book';
import { BookService }         from './book.service';

@Component({
  selector:    'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css', './book-detail.component.css'],
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

  addItem(bookTitle: string,
          bookAuthor: string,
          bookPages: number,
          bookPublisher?: string,
          bookYearPublished?: number,
          bookReleaseDate?: number,
          bookIsbn?: string,
          bookImage?: string) {
    if(bookTitle && bookAuthor && bookPages) {
      this.bookList.push(new Book(bookTitle,
                                  bookAuthor,
                                  bookPages,
                                  bookPublisher,
                                  bookYearPublished,
                                  bookReleaseDate,
                                  bookIsbn,
                                  bookImage
                                  ));
      return this.bookList;
    }
  }


  clearInputs() {
    var inputs = document.querySelectorAll('input');
    for (let input of inputs) {
      input.value = '';
    }
  }

  uploadImage() {
    var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
    var fileChooser = document.querySelector('.img-upload__input');
    var imageValueInput = document.querySelector('.img-hiddden__input');

    var file = fileChooser.files[0];
    var fileName = file.name.toLowerCase();

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });


    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        imageValueInput.value = reader.result;
      });

      reader.readAsDataURL(file);
    }
  }

  delete(book, index){
    this.bookList.splice(index, 1);
  }
}
