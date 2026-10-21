import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTmgsCareersComponent } from './add-tmgs-careers.component';

describe('AddTmgsCareersComponent', () => {
  let component: AddTmgsCareersComponent;
  let fixture: ComponentFixture<AddTmgsCareersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTmgsCareersComponent]
    });
    fixture = TestBed.createComponent(AddTmgsCareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
