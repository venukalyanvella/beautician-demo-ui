import { TestBed } from '@angular/core/testing';

import { BeautyUserService } from './beauty-user.service';

describe('BeautyUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeautyUserService = TestBed.get(BeautyUserService);
    expect(service).toBeTruthy();
  });
});
