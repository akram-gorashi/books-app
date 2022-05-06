import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from '../add-book/add-book.component';
import { BooksListComponent } from './books-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DialogModule } from '@ngneat/dialog';
import { BookListItemComponent } from '../book-list-item/book-list-item.component';
import { AddBooksListComponent } from '../add-books-list/add-books-list.component';



@NgModule({
  declarations: [
    BooksListComponent,
    AddBookComponent,
    BookListItemComponent,
    AddBooksListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    DialogModule.forRoot()
  ],
  exports: [
    BooksListComponent,
    AddBookComponent,
    BookListItemComponent,
    AddBooksListComponent
  ]
})
export class BooksModule { }
