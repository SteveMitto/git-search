import { TestBed } from '@angular/core/testing';

import { FinalRepoUrlService } from './final-repo-url.service';

describe('FinalRepoUrlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinalRepoUrlService = TestBed.get(FinalRepoUrlService);
    expect(service).toBeTruthy();
  });
});
