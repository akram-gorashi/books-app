import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService } from '@ngneat/dialog';
import { BooksService } from 'src/app/services/books/books.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent implements OnInit {
  createBookFormGroup!: FormGroup;
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
    this.createBookFormGroup = this.formBuilder.group({
      id: [],
      title: [null, [Validators.required]],
      imageUrl: ['https://images-na.ssl-images-amazon.com/images/I/51I9v1NPTVS._SX328_BO1,204,203,200_.jpg', [Validators.required]],
      year: [null, [Validators.required]],
      authorName: [null, [Validators.required]],
    });
  }
  get bookFormCtrl() {
    return this.createBookFormGroup.controls;
  }
  submitCreateBook() {
    if (this.createBookFormGroup.invalid) {
      return;
    } else {
      this.createBookFormGroup.value.id = this.bookId;
      this.booksService
        .addBook(this.createBookFormGroup.value, "1")
        .subscribe((res) => {
          this.dialog.closeAll();
          // this.booksService.getBooks();
        });
    }
  }
}
