export type TypeContrat = 'AUTO' | 'HABITATION' | 'SANTE' | 'VIE';
export type StatutContrat = 'ACTIF' | 'SUSPENDU' | 'RESILIE' | 'EN_ATTENTE';

export interface Contrat {
  id?: string;
  numeroContrat?: string;
  clientId: string;
  type: TypeContrat;
  dateDebut: string;
  dateFin?: string;
  montantPrime: number;
  statut: StatutContrat;
  dateCreation?: string;
}
