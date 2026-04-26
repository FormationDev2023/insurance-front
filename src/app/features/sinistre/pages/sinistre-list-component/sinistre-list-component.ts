import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SinistreFormComponent } from '../sinistre-form-component/sinistre-form-component';

export interface Sinistre {
  id?: string;
  numeroSinistre: string;
  nomClient: string;
  contratId?: string;
  type: string;
  dateSurvenance: string;
  dateDeclaration?: string;
  montantEstime: number;
  montantIndemnise?: number;
  description?: string;
  statut: string;
}

@Component({
  selector: 'app-sinistre-list-component',
  standalone: true,
  imports: [CommonModule, FormsModule, SinistreFormComponent],
  templateUrl: './sinistre-list-component.html',
  styleUrls: ['./sinistre-list-component.css']
})
export class SinistreListComponent implements OnInit {

  sinistres: Sinistre[] = [
    { numeroSinistre: 'SIN-002', nomClient: 'Jean Dupont',   type: 'Dégât des eaux',  dateSurvenance: '2024-09-18', montantEstime: 5800,  montantIndemnise: undefined, statut: 'En cours' },
    { numeroSinistre: 'SIN-004', nomClient: 'Pierre Durand', type: 'Responsabilité',  dateSurvenance: '2024-08-08', montantEstime: 15000, montantIndemnise: 12500,     statut: 'Clôturé' },
    { numeroSinistre: 'SIN-001', nomClient: 'Jean Dupont',   type: 'Bris de glace',   dateSurvenance: '2024-06-14', montantEstime: 1200,  montantIndemnise: 900,       statut: 'Clôturé' },
    { numeroSinistre: 'SIN-005', nomClient: 'Pierre Durand', type: 'Incendie',         dateSurvenance: '2024-11-28', montantEstime: 8000,  montantIndemnise: undefined, statut: 'Refusé' },
    { numeroSinistre: 'SIN-003', nomClient: 'Sophie Martin', type: 'Responsabilité',  dateSurvenance: '2024-11-04', montantEstime: 3500,  montantIndemnise: undefined, statut: 'Déclaré' },
  ];

  showForm = false;
  searchTerm = '';
  filterStatut = '';
  filterType = '';

  ngOnInit(): void {}

  get sinistresFiltres(): Sinistre[] {
    return this.sinistres.filter(s => {
      const matchSearch  = !this.searchTerm  ||
        s.numeroSinistre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        s.nomClient.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchStatut  = !this.filterStatut || s.statut === this.filterStatut;
      const matchType    = !this.filterType   || s.type   === this.filterType;
      return matchSearch && matchStatut && matchType;
    });
  }

  statutClass(statut: string): string {
    const map: Record<string, string> = {
      'En cours': 'badge badge-encours',
      'Clôturé':  'badge badge-cloture',
      'Refusé':   'badge badge-refuse',
      'Déclaré':  'badge badge-declare',
    };
    return map[statut] || 'badge';
  }

  voirDetail(sinistre: Sinistre): void {
    console.log('Détail sinistre', sinistre);
  }

  onSinistreCree(sinistre: Sinistre): void {
    this.sinistres.unshift(sinistre);
    this.showForm = false;
  }
}
