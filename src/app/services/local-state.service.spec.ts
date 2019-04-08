import { TestBed } from '@angular/core/testing';

import { LocalStateService } from './local-state.service';

describe('LocalStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalStateService = TestBed.get(LocalStateService);
    expect(service).toBeTruthy();
  });
});
