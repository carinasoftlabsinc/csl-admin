import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTmgsComponent } from './dashboard-tmgs.component';

describe('DashboardTmgsComponent', () => {
  let component: DashboardTmgsComponent;
  let fixture: ComponentFixture<DashboardTmgsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardTmgsComponent]
    });
    fixture = TestBed.createComponent(DashboardTmgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
