import { TestBed } from '@angular/core/testing';

import { DattoService } from './datto-service.service';

describe('DattoServiceService', () => {
  let service: DattoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DattoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
