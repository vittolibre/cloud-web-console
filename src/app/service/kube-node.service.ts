import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerDataSource } from 'ng2-smart-table';

@Injectable({
  providedIn: 'root'
})
export class KubeNodeService {
  
  nodeBaseUrl = environment.appUrl + 'node';

  constructor(private http: HttpClient) {}

  getAllNodes(){
    return this.http.get<[]>(this.nodeBaseUrl + '/all');
  }

  updateNode(newData: any) {
    return this.http.put(this.nodeBaseUrl, newData);
  }
  deleteNode(id: any) {
    return this.http.delete(this.nodeBaseUrl + '/' + id);
  }
  createNode(newData: any) {
    return this.http.post(this.nodeBaseUrl, newData);
  }

}
