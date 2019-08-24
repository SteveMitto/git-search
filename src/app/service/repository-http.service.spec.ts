import { TestBed } from '@angular/core/testing';

import { RepositoryHttpService } from './repository-http.service';

describe('RepositoryHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepositoryHttpService = TestBed.get(RepositoryHttpService);
    expect(service).toBeTruthy();
  });
});
