import { TestBed } from '@angular/core/testing';

import { ViewWorkService } from './view-work.service';

describe('ViewWorkService', () => {
  let service: ViewWorkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewWorkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
