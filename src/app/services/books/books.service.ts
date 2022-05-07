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
  constructor(private http: HttpClient) { }

  /* -------------------------------------------------------------------------- */
  /*                                 Books List                                 */
  /* -------------------------------------------------------------------------- */

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
   * Add a new books list .
   *
   * @param book object from the form.
   */
  addBooksList(booksList: BooksList) {
    console.log(booksList);
    return this.http.post(this.baseAPIUrl + 'books-list', booksList);
  }
  /**
     * remove a book from books list.
     *
     * @param booksListId string from the book list.
     */
  deleteBooksList(booksListId: string) {
    console.log('deleting ....')
    return this.http.delete(this.baseAPIUrl + 'books-list/' + booksListId);
  }

  /* -------------------------------------------------------------------------- */
  /*                               Book List Items                              */
  /* -------------------------------------------------------------------------- */

  /**
   * remove a book list item.
   *
   * @param bookId string from the book list item card.
   */
  deleteBookListItem(bookId: string) {
    return this.http.delete(this.baseAPIUrl + 'books-list/' + bookId);
  }
  addBookListItem(bookListItem: BookListItem, booksListId: string) {
    let booksList = this.bookListBS.value;
    console.log(booksList);
    booksList.forEach(booklist => {
      if(booklist.id === booksListId) {
        booklist.books.push(bookListItem);
        this.deleteBooksList(booksListId).subscribe(res => {
          this.addBooksList(booklist).subscribe(res => {this.getBooksList();})
        })
      }
    })
    console.log('book list after update', booksList)
  }
}
