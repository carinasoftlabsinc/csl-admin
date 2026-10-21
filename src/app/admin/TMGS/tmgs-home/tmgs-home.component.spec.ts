import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmgsHomeComponent } from './tmgs-home.component';

describe('TmgsHomeComponent', () => {
  let component: TmgsHomeComponent;
  let fixture: ComponentFixture<TmgsHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TmgsHomeComponent]
    });
    fixture = TestBed.createComponent(TmgsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
