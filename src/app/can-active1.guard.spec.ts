import { TestBed } from '@angular/core/testing';

import { CanActive1Guard } from './can-active1.guard';

describe('CanActive1Guard', () => {
  let guard: CanActive1Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActive1Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
