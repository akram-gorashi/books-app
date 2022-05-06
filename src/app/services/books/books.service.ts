import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { BookListItem } from 'src/app/models/BookListItem';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  baseAPIUrl = environment.baseAPIUrl;
  bookListBS = new BehaviorSubject<BookListItem[]>([]);
  constructor(private http: HttpClient) {}

  /**
   *
   * @returns Observable of books list
   */
  getBooks() {
    this.http.get<BookListItem[]>(this.baseAPIUrl + 'books').subscribe((books) => {
      this.bookListBS.next(books);
    });
  }
  /**
   * Add a new book to books list.
   *
   * @param book object from the form.
   */
  addBook(book: BookListItem) {
    console.log(book);
    return this.http.post(this.baseAPIUrl + 'books', book);
  }
  /**
   * remove a book from books list.
   *
   * @param bookId string from the book list.
   */
  deleteBook(bookId: string) {
    return this.http.delete(this.baseAPIUrl + 'books/' + bookId);
  }
}
