export type Segment = 'STANDARD' | 'PREMIUM' | 'VIP';
export type Statut = 'ACTIF' | 'INACTIF' | 'SUSPENDU';

export interface Client {
  id?: string;
  numeroClient?: string;
  nom: string;
  prenom: string;
  dateNaissance?: string;
  email: string;
  telephone?: string;
  adresse?: string;
  segment: Segment;
  scoreRisqueGlobal?: number;
  statut: Statut;
  dateCreation?: string;
}
