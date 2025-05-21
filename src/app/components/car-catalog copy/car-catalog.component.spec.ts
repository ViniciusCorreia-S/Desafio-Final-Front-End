import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCatalogComponent } from './car-catalog.component';

describe('CarCatalogComponent', () => {
  let component: CarCatalogComponent;
  let fixture: ComponentFixture<CarCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarCatalogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
