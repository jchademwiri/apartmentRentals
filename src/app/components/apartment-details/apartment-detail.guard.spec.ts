import { TestBed } from '@angular/core/testing';

import { ApartmentDetailGuard } from './apartment-detail.guard';

describe('ApartmentDetailGuard', () => {
  let guard: ApartmentDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ApartmentDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
