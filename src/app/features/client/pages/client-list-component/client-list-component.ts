import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ClientFormComponent } from '../client-form-component/client-form-component';
import { ClientService } from '../../services/ClientService';
import { Client } from '../../models/client.model';

@Component({
  selector: 'app-clients',
  standalone: true,
    imports: [
    CommonModule, ClientFormComponent
  ],
  templateUrl: './client-list-component.html',
  styleUrls: ['./client-list-component.css']
})
export class ClientListComponent implements OnInit {

  showForm = false;
  clients: Client[] = [];
  isLoading = false;
  errorMessage = '';


  constructor(private clientService: ClientService) {} 

  ngOnInit(): void {
    this.chargerClients(); 
  }


  segmentClass(segment: string) {
    return {
      'badge-premium': segment === 'Premium',
      'badge-pro': segment === 'Pro',
      'badge-standard': segment === 'Standard'
    };
  }

  statusClass(statut: string) {
    return {
      'status-actif': statut === 'Actif',
      'status-suspendu': statut === 'Suspendu'
    };
  }
  chargerClients(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.clientService.getAllClients().subscribe({
      next: (data) => {
        this.clients = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors du chargement des clients.';
        console.error(err);
        this.isLoading = false;
      }
    });
  }
   onClientCree(nouveauClient: any) {
    this.showForm = false;
    this.chargerClients(); 
  }

  scoreClass(score: number) {
    return {
      'score-low': score < 40,
      'score-medium': score >= 40 && score < 70,
      'score-high': score >= 70
    };
  }
}