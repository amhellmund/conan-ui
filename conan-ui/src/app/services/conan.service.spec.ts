import { TestBed } from '@angular/core/testing';

import { ConanService } from './conan.service';

describe('ConanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConanService = TestBed.get(ConanService);
    expect(service).toBeTruthy();
  });
});
