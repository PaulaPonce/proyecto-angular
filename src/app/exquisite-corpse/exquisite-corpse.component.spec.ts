import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExquisiteCorpseComponent } from './exquisite-corpse.component';

describe('ExquisiteCorpseComponent', () => {
  let component: ExquisiteCorpseComponent;
  let fixture: ComponentFixture<ExquisiteCorpseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExquisiteCorpseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExquisiteCorpseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
