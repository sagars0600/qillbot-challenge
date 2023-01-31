import { TestBed } from '@angular/core/testing';

import { DiscoverModuleService } from './discover-module.service';

describe('DiscoverModuleService', () => {
  let service: DiscoverModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscoverModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
