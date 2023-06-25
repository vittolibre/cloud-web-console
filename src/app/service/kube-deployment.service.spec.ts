import { TestBed } from '@angular/core/testing';

import { KubeDeploymentService } from './kube-deployment.service';

describe('KubeDeploymentService', () => {
  let service: KubeDeploymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KubeDeploymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
