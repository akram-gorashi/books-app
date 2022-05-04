import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  booksList: Book[] = [];

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.getBooks();
  }
  getBooks() {
    this.booksService.getBooks().subscribe(res => {
      this.booksList = res;
      console.log(this.booksList)
    })
  }

  deleteBook(bookId: string) {
    this.booksService.deleteBook(bookId).subscribe(res => {
      console.log('success')
      this.getBooks();
    })
  }
}
