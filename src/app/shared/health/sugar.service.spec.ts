import { TestBed } from '@angular/core/testing';

import { SugarService } from './sugar.service';

describe('SugarService', () => {
  let service: SugarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SugarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
