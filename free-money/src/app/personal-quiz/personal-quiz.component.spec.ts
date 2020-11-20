import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalQuizComponent } from './personal-quiz.component';

describe('PersonalQuizComponent', () => {
  let component: PersonalQuizComponent;
  let fixture: ComponentFixture<PersonalQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
