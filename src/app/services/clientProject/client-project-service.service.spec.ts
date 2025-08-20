import { TestBed } from '@angular/core/testing';

import { ClientProjectServiceService } from './client-project-service.service';

describe('ClientProjectServiceService', () => {
  let service: ClientProjectServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientProjectServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
