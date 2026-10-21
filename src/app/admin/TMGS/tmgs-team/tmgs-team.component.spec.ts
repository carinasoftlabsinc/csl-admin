import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmgsTeamComponent } from './tmgs-team.component';

describe('TmgsTeamComponent', () => {
  let component: TmgsTeamComponent;
  let fixture: ComponentFixture<TmgsTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TmgsTeamComponent]
    });
    fixture = TestBed.createComponent(TmgsTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
