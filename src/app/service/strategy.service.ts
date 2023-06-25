import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StrategyService {
  
  strategyBaseUrl = environment.appUrl + 'strategy';

  constructor(
    private http: HttpClient
  ) { }

  getAllStrategies() {
    return this.http.get<[]>(this.strategyBaseUrl + '/all');
  }

  updateStrategy(newData: any) {
    return this.http.put(this.strategyBaseUrl, newData);
  }

  enableAllStrategies(enable: boolean){
    return this.http.put(this.strategyBaseUrl + '/enable/all', enable);
  }

}
