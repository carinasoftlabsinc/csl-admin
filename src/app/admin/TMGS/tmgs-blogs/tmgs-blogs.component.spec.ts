import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmgsBlogsComponent } from './tmgs-blogs.component';

describe('TmgsBlogsComponent', () => {
  let component: TmgsBlogsComponent;
  let fixture: ComponentFixture<TmgsBlogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TmgsBlogsComponent]
    });
    fixture = TestBed.createComponent(TmgsBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
