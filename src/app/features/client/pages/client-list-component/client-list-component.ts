import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ClientFormComponent } from '../client-form-component/client-form-component';

interface Client {
  code: string;
  numeroClient: string;
  nom: string;
  prenom: string;
  email: string;
  segment: string; 
  statut: string; 
  scoreRisqueGlobal: number;
}

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

  ngOnInit(): void {
    this.clients = [
      { code: 'CLI-001', numeroClient: 'NUM-001', nom: 'Jean', prenom: 'Dupont', email: 'jean.dupont@email.fr', segment: 'Premium', statut: 'Actif', scoreRisqueGlobal: 35 },
      { code: 'CLI-003', numeroClient: 'NUM-003', nom: 'Pierre', prenom: 'Durand', email: 'pierre.durand@email.fr', segment: 'Pro', statut: 'Actif', scoreRisqueGlobal: 62 },
      { code: 'CLI-005', numeroClient: 'NUM-005', nom: 'Luc', prenom: 'Bernard', email: 'luc.bernard@email.fr', segment: 'Premium', statut: 'Actif', scoreRisqueGlobal: 22 },
      { code: 'CLI-004', numeroClient: 'NUM-004', nom: 'Marie', prenom: 'Leroy', email: 'marie.leroy@email.fr', segment: 'Standard', statut: 'Suspendu', scoreRisqueGlobal: 78 },
      { code: 'CLI-002', numeroClient: 'NUM-002', nom: 'Sophie', prenom: 'Martin', email: 'sophie.martin@email.fr', segment: 'Standard', statut: 'Actif', scoreRisqueGlobal: 15 },
    ];
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
    chargerClients() {
    // ton appel HTTP existant
  }
   onClientCree(nouveauClient: any) {
    this.showForm = false;
    this.chargerClients(); // recharge la liste après création
  }

  scoreClass(score: number) {
    return {
      'score-low': score < 40,
      'score-medium': score >= 40 && score < 70,
      'score-high': score >= 70
    };
  }
}