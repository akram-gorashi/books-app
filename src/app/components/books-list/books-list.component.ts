import { Component, OnInit } from '@angular/core';
import { DialogService, DialogRef } from '@ngneat/dialog';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books/books.service';
import { AddBookComponent } from '../add-book/add-book.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit {
  booksList: Book[] = [];

  constructor(
    private booksService: BooksService,
    private dialog: DialogService
  ) {}

  ngOnInit(): void {
    this.getBooks();
  }
  getBooks() {
    this.booksService.getBooks();
    this.booksService.bookListBS.subscribe((books) => {
      this.booksList = books;
    });
  }

  deleteBook(bookId: string) {
    this.booksService.deleteBook(bookId).subscribe((res) => {
      this.getBooks();
    });
  }

  openAddBookForm() {
    this.dialog.open(AddBookComponent);
  }
  drop(event: CdkDragDrop<Book[]>) {
    console.log(event);
    moveItemInArray(this.booksList, event.previousIndex, event.currentIndex);
  }
}
