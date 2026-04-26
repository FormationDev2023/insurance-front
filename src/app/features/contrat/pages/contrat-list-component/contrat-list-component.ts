import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContratFormComponent } from '../contrat-form-component/contrat-form-component';

export interface Contrat {
  id?: string;
  numeroContrat: string;
  nomClient: string;
  type: string;
  niveauGarantie?: string;
  dateEffet: string;
  dateEcheance: string;
  primeAnnuelle: number;
  franchise?: number;
  statut: string;
}

@Component({
  selector: 'app-contrat-list-component',
  standalone: true,
  imports: [CommonModule, FormsModule, ContratFormComponent],
  templateUrl: './contrat-list-component.html',
  styleUrls: ['./contrat-list-component.css']
})
export class ContratListComponent implements OnInit {

  contrats: Contrat[] = [
    { numeroContrat: 'CTR-004', nomClient: 'Pierre Durand',  type: 'RC Pro',     dateEffet: '2024-01-01', dateEcheance: '2025-01-01', primeAnnuelle: 2400, statut: 'Actif' },
    { numeroContrat: 'CTR-005', nomClient: 'Pierre Durand',  type: 'Habitation', dateEffet: '2023-09-15', dateEcheance: '2024-09-15', primeAnnuelle: 380,  statut: 'Résilié' },
    { numeroContrat: 'CTR-003', nomClient: 'Sophie Martin',  type: 'Auto',       dateEffet: '2024-03-01', dateEcheance: '2025-03-01', primeAnnuelle: 680,  statut: 'Actif' },
    { numeroContrat: 'CTR-006', nomClient: 'Luc Bernard',    type: 'Auto',       dateEffet: '2024-05-01', dateEcheance: '2025-05-01', primeAnnuelle: 920,  statut: 'Actif' },
    { numeroContrat: 'CTR-002', nomClient: 'Jean Dupont',    type: 'Habitation', dateEffet: '2023-06-01', dateEcheance: '2024-06-01', primeAnnuelle: 520,  statut: 'Actif' },
    { numeroContrat: 'CTR-001', nomClient: 'Jean Dupont',    type: 'Auto',       dateEffet: '2024-01-15', dateEcheance: '2025-01-15', primeAnnuelle: 850,  statut: 'Actif' },
    { numeroContrat: 'CTR-007', nomClient: 'Marie Leroy',    type: 'Habitation', dateEffet: '2024-02-01', dateEcheance: '2025-02-01', primeAnnuelle: 450,  statut: 'Suspendu' },
  ];

  showForm = false;
  searchTerm = '';
  filterType = '';
  filterStatut = '';

  ngOnInit(): void {}

  get contratsFiltres(): Contrat[] {
    return this.contrats.filter(c => {
      const matchSearch = !this.searchTerm ||
        c.numeroContrat.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        c.nomClient.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchType   = !this.filterType   || c.type   === this.filterType;
      const matchStatut = !this.filterStatut || c.statut === this.filterStatut;
      return matchSearch && matchType && matchStatut;
    });
  }

  statutClass(statut: string): string {
    const map: Record<string, string> = {
      'Actif':    'badge badge-actif',
      'Résilié':  'badge badge-resilie',
      'Suspendu': 'badge badge-suspendu',
    };
    return map[statut] || 'badge';
  }

  voirDetail(contrat: Contrat): void {
    console.log('Détail contrat', contrat);
  }

  onContratCree(nouveauContrat: any) {
    this.showForm = false;
  }
}
