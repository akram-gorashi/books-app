import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from '../add-book/add-book.component';
import { BooksListComponent } from './books-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



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
    AddBookComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BooksModule { }