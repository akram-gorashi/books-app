import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService } from '@ngneat/dialog';
import { BooksService } from 'src/app/services/books/books.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-add-books-list',
  templateUrl: './add-books-list.component.html',
  styleUrls: ['../add-book/add-book.component.scss']
})
export class AddBooksListComponent implements OnInit {
  createBooksListFormGroup!: FormGroup;
  bookId = uuid.v4();

  constructor(
    private booksService: BooksService,
    private formBuilder: FormBuilder,
    private dialog: DialogService
  ) {}
  ngOnInit(): void {
    this.initCreateBookForm();
  }

  initCreateBookForm() {
    this.createBooksListFormGroup = this.formBuilder.group({
      id: [],
      title: [null, [Validators.required]],
    });
  }
  get bookFormCtrl() {
    return this.createBooksListFormGroup.controls;
  }
  submitCreateBook() {
    if (this.createBooksListFormGroup.invalid) {
      return;
    } else {
      this.createBooksListFormGroup.value.id = this.bookId;
      this.booksService
        .addBook(this.createBooksListFormGroup.value)
        .subscribe((res) => {
          this.dialog.closeAll();
           this.booksService.getBooksList();
        });
    }
  }
}
