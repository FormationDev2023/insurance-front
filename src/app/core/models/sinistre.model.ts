export type TypeSinistre = 'ACCIDENT' | 'VOL' | 'INCENDIE' | 'DEGAT_DES_EAUX' | 'AUTRE';
export type StatutSinistre = 'DECLARE' | 'EN_COURS' | 'CLOTURE' | 'REJETE';

export interface Sinistre {
  id?: string;
  numeroSinistre?: string;
  contratId: string;
  clientId: string;
  type: TypeSinistre;
  dateDeclaration: string;
  dateSurvenance: string;
  description: string;
  montantEstime?: number;
  montantIndemnise?: number;
  statut: StatutSinistre;
  dateCreation?: string;
}
