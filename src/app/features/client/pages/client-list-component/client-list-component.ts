import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ClientFormComponent } from '../client-form-component/client-form-component';
import { ClientService, Client } from '../../../../core';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, ClientFormComponent],
  templateUrl: './client-list-component.html',
  styleUrls: ['./client-list-component.css']
})
export class ClientListComponent implements OnInit {
  showForm = false;
  clients: Client[] = [];
  isLoading = false;

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.chargerClients();
  }

  chargerClients(): void {
    this.isLoading = true;
    this.clientService.getAll().subscribe({
      next: (clients) => {
        this.clients = clients;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  onClientCree(nouveauClient: Client): void {
    this.showForm = false;
    this.chargerClients();
  }

  segmentClass(segment: string) {
    return {
      'badge-premium': segment === 'PREMIUM',
      'badge-vip': segment === 'VIP',
      'badge-standard': segment === 'STANDARD'
    };
  }

  statusClass(statut: string) {
    return {
      'status-actif': statut === 'ACTIF',
      'status-inactif': statut === 'INACTIF',
      'status-suspendu': statut === 'SUSPENDU'
    };
  }

  scoreClass(score: number) {
    return {
      'score-low': score < 40,
      'score-medium': score >= 40 && score < 70,
      'score-high': score >= 70
    };
  }
}
