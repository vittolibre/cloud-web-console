import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KubeDeploymentService {
  
  deploymentBaseUrl = environment.appUrl + 'deployment';
  
  constructor(private http: HttpClient) { }
  
  findAll(){
    return this.http.get<[]>(this.deploymentBaseUrl + '/all');
  
  }
  createDeployment(newData: any) {
   return this.http.post(this.deploymentBaseUrl, newData);
  }

  updateDeployment(newData: any) {
    return this.http.post(this.deploymentBaseUrl, newData);
  }

  deleteDeployment(id: any) {
    return this.http.delete(this.deploymentBaseUrl + '/' + id);
  }
}
