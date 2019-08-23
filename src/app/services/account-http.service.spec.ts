import { TestBed } from '@angular/core/testing';

import { AccountHttpService } from './account-http.service';

describe('AccountHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountHttpService = TestBed.get(AccountHttpService);
    expect(service).toBeTruthy();
  });
});
