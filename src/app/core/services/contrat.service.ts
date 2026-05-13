import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contrat } from '../models/contrat.model';
import { ApiConfigService } from './api-config.service';

@Injectable({ providedIn: 'root' })
export class ContratService {
  constructor(
    private http: HttpClient,
    private apiConfig: ApiConfigService
  ) {}

  private get apiUrl(): string {
    return this.apiConfig.contratApiUrl;
  }

  getAll(): Observable<Contrat[]> {
    return this.http.get<Contrat[]>(this.apiUrl);
  }

  getById(id: string): Observable<Contrat> {
    return this.http.get<Contrat>(`${this.apiUrl}/${id}`);
  }

  getByClientId(clientId: string): Observable<Contrat[]> {
    return this.http.get<Contrat[]>(`${this.apiUrl}?clientId=${clientId}`);
  }

  create(contrat: Contrat): Observable<Contrat> {
    return this.http.post<Contrat>(this.apiUrl, contrat);
  }

  update(id: string, contrat: Contrat): Observable<Contrat> {
    return this.http.put<Contrat>(`${this.apiUrl}/${id}`, contrat);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
