import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmgsJobApplicationComponent } from './tmgs-job-application.component';

describe('TmgsJobApplicationComponent', () => {
  let component: TmgsJobApplicationComponent;
  let fixture: ComponentFixture<TmgsJobApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TmgsJobApplicationComponent]
    });
    fixture = TestBed.createComponent(TmgsJobApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
