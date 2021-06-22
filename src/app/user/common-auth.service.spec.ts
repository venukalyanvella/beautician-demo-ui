import { TestBed } from '@angular/core/testing';

import { CommonAuthService } from './common-auth.service';

describe('CommonAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonAuthService = TestBed.get(CommonAuthService);
    expect(service).toBeTruthy();
  });
});
