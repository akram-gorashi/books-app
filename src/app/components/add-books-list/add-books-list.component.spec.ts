import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule, DialogService } from '@ngneat/dialog';
import { BooksService } from 'src/app/services/books/books.service';

import { AddBooksListComponent } from './add-books-list.component';

describe('AddBooksListComponent', () => {
  let component: AddBooksListComponent;
  let fixture: ComponentFixture<AddBooksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBooksListComponent],
      imports: [
        HttpClientTestingModule,
        DialogModule.forRoot(),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [BooksService, DialogService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
