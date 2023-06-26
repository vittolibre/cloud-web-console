import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  parameterBaseUrl = environment.appUrl + 'device';

  constructor(private http:HttpClient) { }

  updateDevice(newData: any) {
    return this.http.put(this.parameterBaseUrl, newData);
  }

  createDevice(newData: any) {
    return this.http.post(this.parameterBaseUrl, newData);
  }

  readDevice(id: number) {
    return this.http.get(this.parameterBaseUrl + '/' + id);
  }

  findAll() {
   return this.http.get<[]>(this.parameterBaseUrl + '/all');
  }
}
