import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book Shelf';
  bookList = [
    {
      bookTitle: '"Трудно быть богом"',
      authors: [
        'Аркадий Стругацкий',
        'Борис Стругацкий'
      ],
      pages: 157,
      publisherName: 'Издательство «Китеж»',
      yearOfPublication: 1991,
      releaseDate: 1964,
      isbn: '5-87110-001-5',
      image: 'Here should be right URL'
    },
    {
      bookTitle: '"Конец Вечности"',
      authors: ['Айзек Азимов'],
      pages: 233,
      publisherName: 'Издательство «Эксмо»',
      yearOfPublication: 2008,
      releaseDate: 1955,
      isbn: '978-5-699-29966-9',
      image: 'Here should be right URL'
    }
  ];
  add (title: string, author) {
    this.bookList.push({
      bookTitle: title,
      authors: author
    });
  };
  delete (index) {
    this.bookList.splice(index, 1);
  };
  render (book) {
    let bookTemplate = document.querySelector('#book')
      .querySelector('.book__form');
    let index = this.bookList.indexOf(book);
    let renderBookInfo = function (book) {
      var bookElement = bookTemplate.cloneNode(true);
      bookElement.querySelector('#newTitle').value = book.bookTitle;
      bookElement.querySelector('#newAuthors').value = book.authors[0];
      if (book.authors.length > 1) {
        var element = document.createElement('input');
        element.setAttribute('type', 'text');
        element.value = book.authors[1];
        console.log(document.querySelector('.book__authors'));
        // document.querySelector('.book__authors').appendChild(element);
      }
      bookElement.querySelector('#newPages').value = book.pages;
      bookElement.querySelector('#newPublisherName').value = book.publisherName;
      bookElement.querySelector('#newYearOfPublication').value = book.yearOfPublication;
      bookElement.querySelector('#newReleaseDate').value = book.releaseDate;
      bookElement.querySelector('#newIsbn').value = book.isbn;
      return bookElement;
    };
    let renderFragment = function () {
      var fragment = document.createDocumentFragment();
      var listItem = document.querySelectorAll('.book__content');
      fragment.appendChild(renderBookInfo(book));
      if (listItem[index].childNodes.length > 1) {
        return;
      };
      listItem[index].appendChild(fragment);
    };
    renderFragment();
  };
  show (book) {

    this.render(book);
    let formInfo = document.querySelector('.book__form');
    let removeForm = function () {
      formInfo.parentNode.removeChild(formInfo);
    };
    if (formInfo.parentNode.childNodes.length > 2) {
      removeForm();
    }
    if (formInfo.classList.contains('form__shown')) {
      formInfo.classList.remove('form__shown');
      removeForm();
      return;
    }
    formInfo.classList.add('form__shown');
  }
}
