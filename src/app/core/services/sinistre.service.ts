import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sinistre } from '../models/sinistre.model';
import { ApiConfigService } from './api-config.service';

@Injectable({ providedIn: 'root' })
export class SinistreService {
  constructor(
    private http: HttpClient,
    private apiConfig: ApiConfigService
  ) {}

  private get apiUrl(): string {
    return this.apiConfig.sinistreApiUrl;
  }

  getAll(): Observable<Sinistre[]> {
    return this.http.get<Sinistre[]>(this.apiUrl);
  }

  getById(id: string): Observable<Sinistre> {
    return this.http.get<Sinistre>(`${this.apiUrl}/${id}`);
  }

  getByClientId(clientId: string): Observable<Sinistre[]> {
    return this.http.get<Sinistre[]>(`${this.apiUrl}?clientId=${clientId}`);
  }

  getByContratId(contratId: string): Observable<Sinistre[]> {
    return this.http.get<Sinistre[]>(`${this.apiUrl}?contratId=${contratId}`);
  }

  create(sinistre: Sinistre): Observable<Sinistre> {
    return this.http.post<Sinistre>(this.apiUrl, sinistre);
  }

  update(id: string, sinistre: Sinistre): Observable<Sinistre> {
    return this.http.put<Sinistre>(`${this.apiUrl}/${id}`, sinistre);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
