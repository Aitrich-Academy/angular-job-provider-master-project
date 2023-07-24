import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewHomeComponent } from './interview-home.component';

describe('InterviewHomeComponent', () => {
  let component: InterviewHomeComponent;
  let fixture: ComponentFixture<InterviewHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterviewHomeComponent]
    });
    fixture = TestBed.createComponent(InterviewHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
