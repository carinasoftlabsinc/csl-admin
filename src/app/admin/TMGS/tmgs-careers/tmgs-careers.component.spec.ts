import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmgsCareersComponent } from './tmgs-careers.component';

describe('TmgsCareersComponent', () => {
  let component: TmgsCareersComponent;
  let fixture: ComponentFixture<TmgsCareersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TmgsCareersComponent]
    });
    fixture = TestBed.createComponent(TmgsCareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
