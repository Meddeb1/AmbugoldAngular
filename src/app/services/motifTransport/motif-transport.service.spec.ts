import { TestBed } from '@angular/core/testing';

import { MotifTransportService } from './motif-transport.service';

describe('MotifTransportService', () => {
  let service: MotifTransportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotifTransportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
