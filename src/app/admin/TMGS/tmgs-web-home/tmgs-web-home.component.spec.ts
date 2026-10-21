import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmgsWebHomeComponent } from './tmgs-web-home.component';

describe('TmgsWebHomeComponent', () => {
  let component: TmgsWebHomeComponent;
  let fixture: ComponentFixture<TmgsWebHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TmgsWebHomeComponent]
    });
    fixture = TestBed.createComponent(TmgsWebHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
