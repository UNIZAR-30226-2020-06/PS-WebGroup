import { TestBed } from '@angular/core/testing';

import { VisitUserService } from './visit-user.service';

describe('VisitUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VisitUserService = TestBed.get(VisitUserService);
    expect(service).toBeTruthy();
  });
});
