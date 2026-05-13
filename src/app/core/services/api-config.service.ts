import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  readonly clientApiUrl = environment.apiUrls.client;
  readonly contratApiUrl = environment.apiUrls.contrat;
  readonly sinistreApiUrl = environment.apiUrls.sinistre;

  getClientUrl(path: string = ''): string {
    return `${this.clientApiUrl}${path}`;
  }

  getContratUrl(path: string = ''): string {
    return `${this.contratApiUrl}${path}`;
  }

  getSinistreUrl(path: string = ''): string {
    return `${this.sinistreApiUrl}${path}`;
  }
}