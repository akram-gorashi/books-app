import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from '../add-book/add-book.component';
import { BooksListComponent } from './books-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    BooksListComponent,
    AddBookComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  exports: [
    BooksListComponent,
    AddBookComponent,
  
  ]
})
export class BooksModule { }
