import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Book } from 'src/app/models/book';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  baseAPIUrl = environment.baseAPIUrl;
  constructor(private http: HttpClient) { }

  /**
    *
    * @returns Observable of books list 
    */
  getBooks() {
    return this.http.get<Book[]>(this.baseAPIUrl + 'books');
  }
  /**
       * Add a new book to books list.
       *
       * @param book object from the form.
       */
  addBook(book: Book) {
    console.log(book)
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
