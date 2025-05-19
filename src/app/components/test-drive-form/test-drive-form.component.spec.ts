import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDriveFormComponent } from './test-drive-form.component';

describe('TestDriveFormComponent', () => {
  let component: TestDriveFormComponent;
  let fixture: ComponentFixture<TestDriveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestDriveFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestDriveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
