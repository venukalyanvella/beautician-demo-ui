import { TestBed } from '@angular/core/testing';

import { AdminCommonServiceService } from './admin-common-service.service';

describe('AdminCommonServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminCommonServiceService = TestBed.get(AdminCommonServiceService);
    expect(service).toBeTruthy();
  });
});
