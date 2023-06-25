import { TestBed } from '@angular/core/testing';

import { KubeNodeService } from './kube-node.service';

describe('KubeNodeService', () => {
  let service: KubeNodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KubeNodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
