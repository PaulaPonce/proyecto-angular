import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVerseFormComponent } from './add-verse-form.component';

describe('AddVerseFormComponent', () => {
  let component: AddVerseFormComponent;
  let fixture: ComponentFixture<AddVerseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVerseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVerseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
