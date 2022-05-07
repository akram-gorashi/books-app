import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { DialogService } from '@ngneat/dialog';
import { BookListItem } from 'src/app/models/BookListItem';
import { BooksList } from 'src/app/models/BooksList';
import { BooksService } from 'src/app/services/books/books.service';
import { AddBookComponent } from '../add-book/add-book.component';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.scss']
})
export class BookListItemComponent implements OnInit {
  @Input() booksList!: BooksList;

  constructor(
    private booksService: BooksService,
    private dialog: DialogService
  ) {}

  ngOnInit(): void {
  }
 

  deleteBook(bookId: string) {
    let booksList = this.booksService.bookListBS.value;
    booksList.forEach(booksList => {
      if(booksList.id === this.booksList.id) {
        booksList.books = booksList.books.filter(books => books.id !== bookId);
      }
    })
  }

  openAddBookForm() {
    this.dialog.open(AddBookComponent, {
      data: {
        booksListId: this.booksList.id
      }
    });
  }
  drop(event: CdkDragDrop<BookListItem[]>) {
    moveItemInArray(this.booksList.books, event.previousIndex, event.currentIndex);
  }

  deleteBooksList(booksListId: string) {
    this.booksService.deleteBooksList(booksListId).subscribe((res:any) => {
      this.booksService.getBooksList();
    });
  }
}
