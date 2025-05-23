import { TestBed } from '@angular/core/testing';

import { CarFilterService } from './car-filter.service';

describe('CarFilterService', () => {
  let service: CarFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
