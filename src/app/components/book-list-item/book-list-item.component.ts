import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { DialogService } from '@ngneat/dialog';
import { BookListItem } from 'src/app/models/BookListItem';
import { BooksService } from 'src/app/services/books/books.service';
import { AddBookComponent } from '../add-book/add-book.component';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.scss']
})
export class BookListItemComponent implements OnInit {
  booksList: BookListItem[] = [];

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
  drop(event: CdkDragDrop<BookListItem[]>) {
    console.log(event);
    moveItemInArray(this.booksList, event.previousIndex, event.currentIndex);
  }
}
