import { Injectable, Type } from '@angular/core';

import { Logger } from './logger.service';
import { Book } from './book';

const BOOKS = [
        new Book(
          'Трудно быть богом',
          ["Аркадий Стругацкий", "Борис Стругацкий"],
          157,
          'Издательство «Китеж»',
          1991,
          1964,
          '5-87110-001-5',
          'assets/img/upload-default-image2.jpg'
        ),
        new Book(
          'Конец Вечности',
          ['Айзек Азимов'],
          233,
          'Издательство «Эксмо»',
          2008,
          1955,
          '978-5-699-29966-9',
          'assets/img/upload-default-image1.jpg'
        ),
      ];

@Injectable()
export class BackendService {
  constructor(private logger: Logger) {}

  getAll(type: Type<any>): PromiseLike<any[]> {
    if (type === Book) {
      // TODO: get from the database
      return Promise.resolve<Book[]>(BOOKS);
    }
    let err = new Error('Cannot get object of this type');
    this.logger.error(err);
    throw err;
  }
}
