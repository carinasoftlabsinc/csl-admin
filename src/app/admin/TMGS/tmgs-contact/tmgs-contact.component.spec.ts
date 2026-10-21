import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmgsContactComponent } from './tmgs-contact.component';

describe('TmgsContactComponent', () => {
  let component: TmgsContactComponent;
  let fixture: ComponentFixture<TmgsContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TmgsContactComponent]
    });
    fixture = TestBed.createComponent(TmgsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
