import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDriveComponent } from './test-drive.component';

describe('TestDriveComponent', () => {
  let component: TestDriveComponent;
  let fixture: ComponentFixture<TestDriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestDriveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
