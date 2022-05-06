import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { BookListItem } from 'src/app/models/BookListItem';
import { BooksList } from 'src/app/models/BooksList';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  baseAPIUrl = environment.baseAPIUrl;
  bookListBS = new BehaviorSubject<BooksList[]>([]);
  constructor(private http: HttpClient) {}

  /**
   *
   * @returns Observable of books list
   */
  getBooksList() {
    this.http.get<BooksList[]>(this.baseAPIUrl + 'books-list').subscribe((books) => {
      this.bookListBS.next(books);
    });
  }
  /**
   * Add a new book to books list.
   *
   * @param book object from the form.
   */
  addBook(book: BookListItem, bookId: string) {
    console.log(book);
    this.http.get(this.baseAPIUrl + 'books-list')
    return this.http.post(this.baseAPIUrl + 'books-list', book);
  }
  /**
   * remove a book from books list.
   *
   * @param bookId string from the book list.
   */
  deleteBook(bookId: string) {
    return this.http.delete(this.baseAPIUrl + 'books-list/' + bookId);
  }

  deleteBooksList(booksListId: string) {
    return this.http.delete(this.baseAPIUrl + 'books-list/' + booksListId);
  }
}
