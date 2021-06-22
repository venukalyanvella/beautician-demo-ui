import { TestBed } from '@angular/core/testing';

import { BeauticianserviceService } from './beauticianservice.service';

describe('BeauticianserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeauticianserviceService = TestBed.get(BeauticianserviceService);
    expect(service).toBeTruthy();
  });
});
