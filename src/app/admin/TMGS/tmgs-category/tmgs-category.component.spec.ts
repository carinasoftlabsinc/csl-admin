import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmgsCategoryComponent } from './tmgs-category.component';

describe('TmgsCategoryComponent', () => {
  let component: TmgsCategoryComponent;
  let fixture: ComponentFixture<TmgsCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TmgsCategoryComponent]
    });
    fixture = TestBed.createComponent(TmgsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
