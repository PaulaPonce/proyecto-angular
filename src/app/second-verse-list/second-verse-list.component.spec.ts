import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondVerseListComponent } from './second-verse-list.component';

describe('SecondVerseListComponent', () => {
  let component: SecondVerseListComponent;
  let fixture: ComponentFixture<SecondVerseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondVerseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondVerseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
