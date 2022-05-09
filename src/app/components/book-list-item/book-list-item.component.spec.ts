import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogModule, DialogService } from '@ngneat/dialog';
import { BooksService } from 'src/app/services/books/books.service';

import { BookListItemComponent } from './book-list-item.component';

describe('BookListItemComponent', () => {
  let component: BookListItemComponent;
  let fixture: ComponentFixture<BookListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookListItemComponent ],
      imports: [ HttpClientTestingModule,  DialogModule.forRoot() , HttpClientModule],
      providers: [ BooksService, DialogService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create book list item', () => {
    expect(component).toBeTruthy();
  });
});
