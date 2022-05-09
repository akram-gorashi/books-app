import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksListComponent } from './books-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BooksService } from 'src/app/services/books/books.service';
import { DialogModule, DialogService } from '@ngneat/dialog';
describe('BooksListComponent', () => {
  let component: BooksListComponent;
  let fixture: ComponentFixture<BooksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksListComponent ],
       imports: [ HttpClientTestingModule,  DialogModule.forRoot() ],
       providers: [ BooksService, DialogService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create book-list', () => {
    expect(component).toBeTruthy();
  });
});
