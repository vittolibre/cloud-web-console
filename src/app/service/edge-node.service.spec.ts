import { TestBed } from '@angular/core/testing';

import { EdgeNodeService } from './edge-node.service';

describe('EdgeNodeService', () => {
  let service: EdgeNodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdgeNodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
