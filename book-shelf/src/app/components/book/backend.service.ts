import { Injectable, Type } from '@angular/core';

import { Logger } from './logger.service';
import { Book } from './book';

const BOOKS = [
        new Book('"Трудно быть богом"', 'Аркадий Стругацкий, Борис Стругацкий'),
        new Book('"Конец Вечности"', 'Айзек Азимов'),
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
