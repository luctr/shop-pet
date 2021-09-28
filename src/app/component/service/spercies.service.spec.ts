import { TestBed } from '@angular/core/testing';

import { SperciesService } from './spercies.service';

describe('SperciesService', () => {
  let service: SperciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SperciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
