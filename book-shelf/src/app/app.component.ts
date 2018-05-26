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
      authors: 'Айзек Азимов',
      pages: 233,
      publisherName: 'Издательство «Эксмо» [Эксмо-Пресс; Эксмо-Маркет]',
      yearOfPublication: 2008,
      releaseDate: 1955,
      isbn: '978-5-699-29966-9',
      image: 'Here should be right URL'
    }
  ]
}