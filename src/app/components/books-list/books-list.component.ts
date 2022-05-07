import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DialogService } from '@ngneat/dialog';
import { BooksList } from 'src/app/models/BooksList';
import { BooksService } from 'src/app/services/books/books.service';
import { AddBooksListComponent } from '../add-books-list/add-books-list.component';
@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit {
  booksList: BooksList[] = [];
  constructor(private booksService: BooksService, private dialog: DialogService) { }

  ngOnInit(): void {
    this.getBooksList()
  }
  getBooksList() {
    this.booksService.getBooksList();
    this.booksService.bookListBS.subscribe(res => {
      console.log(res)
      this.booksList = res;
    })
  }

  openAddBooksListForm() {
    this.dialog.open(AddBooksListComponent);

  }
}
