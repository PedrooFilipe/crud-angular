import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrodDialogComponent } from './errod-dialog.component';

describe('ErrodDialogComponent', () => {
  let component: ErrodDialogComponent;
  let fixture: ComponentFixture<ErrodDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrodDialogComponent]
    });
    fixture = TestBed.createComponent(ErrodDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
