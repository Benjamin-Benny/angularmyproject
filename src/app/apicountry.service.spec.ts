import { TestBed } from '@angular/core/testing';

import { ApicountryService } from './apicountry.service';

describe('ApicountryService', () => {
  let service: ApicountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApicountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
