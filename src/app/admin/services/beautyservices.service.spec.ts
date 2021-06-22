import { TestBed } from '@angular/core/testing';

import { BeautyservicesService } from './beautyservices.service';

describe('BeautyservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeautyservicesService = TestBed.get(BeautyservicesService);
    expect(service).toBeTruthy();
  });
});
