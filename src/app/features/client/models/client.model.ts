export type Segment = 'STANDARD' | 'PREMIUM' | 'VIP';
export type Statut = 'ACTIF' | 'INACTIF' | 'SUSPENDU';
// client.model.ts
export interface Client {
  id?:                string;       
  numeroClient?:      string;       
  nom:                string;
  prenom:             string;
  dateNaissance?:     string;     
  email:              string;
  telephone?:         string;
  adresse?:           string;
  segment:            string;      
  scoreRisqueGlobal?: number;      
  statut:             string;       
  dateCreation?:      string;       
}