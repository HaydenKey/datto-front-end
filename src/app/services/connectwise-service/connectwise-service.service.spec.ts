import { TestBed } from '@angular/core/testing';

import { ConnectwiseService } from './connectwise-service.service';

describe('ConnectwiseServiceService', () => {
  let service: ConnectwiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectwiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
