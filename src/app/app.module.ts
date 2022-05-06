import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './components/books-list/books.module';
import { BookCategoryComponent } from './components/book-category/book-category.component';
import { BookListItemComponent } from './components/book-list-item/book-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BookCategoryComponent,
    BookListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BooksModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
