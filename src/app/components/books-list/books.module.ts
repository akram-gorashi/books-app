import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from '../add-book/add-book.component';
import { BooksListComponent } from './books-list.component';



@NgModule({
  declarations: [
    BooksListComponent,
    AddBookComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BooksListComponent,
    AddBookComponent
  ]
})
export class BooksModule { }
