import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogRef, DialogService } from '@ngneat/dialog';
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
  booksListId: string = "";

  constructor(
    private booksService: BooksService,
    private formBuilder: FormBuilder,
    private dialogRef: DialogRef,
    private dialog: DialogService

  ) { }
  ngOnInit(): void {
    this.initCreateBookForm();
    this.booksListId = this.dialogRef.data.booksListId;
    console.log('id passed throw model dialog', this.booksListId)
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
        .addBookListItem(this.createBookFormGroup.value, this.booksListId);
      this.dialog.closeAll();
      this.booksService.getBooksList();

    }
  }
}
