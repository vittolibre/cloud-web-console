import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParameterService {
  
  parameterBaseUrl = environment.appUrl + 'parameter';
  
  constructor(private http: HttpClient) { }
  
  updateStrategy(newData: any) {
    return this.http.put(this.parameterBaseUrl, newData);
  }

  findAll() {
   return this.http.get<[]>(this.parameterBaseUrl + '/all');
  }
}
