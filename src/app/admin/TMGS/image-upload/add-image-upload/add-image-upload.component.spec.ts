import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImageUploadComponent } from './add-image-upload.component';

describe('AddImageUploadComponent', () => {
  let component: AddImageUploadComponent;
  let fixture: ComponentFixture<AddImageUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddImageUploadComponent]
    });
    fixture = TestBed.createComponent(AddImageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
