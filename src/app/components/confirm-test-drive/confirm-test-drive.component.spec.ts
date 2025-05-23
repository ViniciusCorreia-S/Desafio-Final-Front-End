import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmTestDriveComponent } from './confirm-test-drive.component';

describe('ConfirmTestDriveComponent', () => {
  let component: ConfirmTestDriveComponent;
  let fixture: ComponentFixture<ConfirmTestDriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmTestDriveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmTestDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
