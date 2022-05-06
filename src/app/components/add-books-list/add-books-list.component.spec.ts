import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBooksListComponent } from './add-books-list.component';

describe('AddBooksListComponent', () => {
  let component: AddBooksListComponent;
  let fixture: ComponentFixture<AddBooksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBooksListComponent ]
    })
    .compileComponents();
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
