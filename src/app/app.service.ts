import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {}

  getClientHello(): Observable<string> {
    return this.http.get('http://localhost:8081/api/clients', { responseType: 'text' });
  }

  getContractHello(): Observable<string> {
    return this.http.get('http://localhost:8082/api/contrats', { responseType: 'text' });
  }

  getSinistreHello(): Observable<string> {
    return this.http.get('http://localhost:8083/api/sinistres', { responseType: 'text' });
  }
}