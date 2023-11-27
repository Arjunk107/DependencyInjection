import { TestBed } from '@angular/core/testing';

import { OfficialDetailsService } from './official-details.service';

describe('OfficialDetailsService', () => {
  let service: OfficialDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfficialDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
