import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books/books.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  createBookFormGroup!: FormGroup;
  bookId = uuid.v4();

  constructor(private booksService: BooksService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initCreateBookForm();
  }

  initCreateBookForm() {
    this.createBookFormGroup = this.formBuilder.group({
      title: [null, [Validators.required]],
      imageUrl: [null, [Validators.required]],
      year: [null, [Validators.required]],
      authorName: [null, [Validators.required]],
    })
    // this.submitCreateBook();
  }
  get bookFormCtrl() {
    return this.createBookFormGroup.controls;
  }
  submitCreateBook() {
    // mocking submit request

    let tempBook: Book = Object.assign({}, {
      id: this.bookId,
      title: "Ender's Game",
      imageUrl: "",
      year: 1985,
      authorName: "Orson Scott Card"
    })
    this.booksService.addBook(tempBook).subscribe(res => {
      console.log('success')
    })
  }
}
