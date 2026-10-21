import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTmgsPartnerComponent } from './add-tmgs-partner.component';

describe('AddTmgsPartnerComponent', () => {
  let component: AddTmgsPartnerComponent;
  let fixture: ComponentFixture<AddTmgsPartnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTmgsPartnerComponent]
    });
    fixture = TestBed.createComponent(AddTmgsPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
