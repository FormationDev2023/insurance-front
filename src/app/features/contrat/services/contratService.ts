import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Contrat {
    private apiUrl = 'http://localhost:8082/api/contrats';

  constructor(private http: HttpClient) {}
  
}
