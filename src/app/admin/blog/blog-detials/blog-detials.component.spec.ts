import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetialsComponent } from './blog-detials.component';

describe('BlogDetialsComponent', () => {
  let component: BlogDetialsComponent;
  let fixture: ComponentFixture<BlogDetialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogDetialsComponent]
    });
    fixture = TestBed.createComponent(BlogDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
