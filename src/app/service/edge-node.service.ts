import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EdgeNodeService {

  parameterBaseUrl = environment.appUrl + 'edgeNode';

  constructor(private http:HttpClient) { }

  updateNode(newData: any) {
    return this.http.put(this.parameterBaseUrl, newData);
  }

  createNode(newData: any) {
    return this.http.post(this.parameterBaseUrl, newData);
  }

  readNode(id: number) {
    return this.http.get(this.parameterBaseUrl + '/' + id);
  }

  findAll() {
   return this.http.get<[]>(this.parameterBaseUrl + '/all');
  }

}
