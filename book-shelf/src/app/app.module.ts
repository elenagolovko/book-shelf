import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms';
import { NgModule } from '@angular/core';
// import { DxButtonModule } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { BookService }         from './components/book/book.service';
import { BackendService }      from './components/book/backend.service';
import { Logger }              from './components/book/logger.service';
import { BookListComponent }   from './components/book/book-list.component';
import { BookDetailComponent } from './components/book/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BookDetailComponent,
    BookListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    BackendService,
    BookService,
    Logger
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
