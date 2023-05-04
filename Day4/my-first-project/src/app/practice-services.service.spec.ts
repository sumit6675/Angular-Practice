import { TestBed } from '@angular/core/testing';

import { PracticeServicesService } from './practice-services.service';

describe('PracticeServicesService', () => {
  let service: PracticeServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PracticeServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
