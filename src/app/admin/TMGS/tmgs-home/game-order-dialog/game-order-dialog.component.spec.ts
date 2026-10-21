import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOrderDialogComponent } from './game-order-dialog.component';

describe('GameOrderDialogComponent', () => {
  let component: GameOrderDialogComponent;
  let fixture: ComponentFixture<GameOrderDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameOrderDialogComponent]
    });
    fixture = TestBed.createComponent(GameOrderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
