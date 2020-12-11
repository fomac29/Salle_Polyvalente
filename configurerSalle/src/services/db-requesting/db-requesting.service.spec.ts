import { TestBed } from '@angular/core/testing';

import { DbRequestingService } from './db-requesting.service';

describe('DbRequestingService', () => {
  let service: DbRequestingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbRequestingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
