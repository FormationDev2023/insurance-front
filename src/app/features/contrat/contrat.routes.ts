import { Routes } from '@angular/router';
import { ContratList } from './pages/contrat-list/contrat-list';
import { ContratForm } from './pages/contrat-form/contrat-form';
import { ContratDetail } from './pages/contrat-detail/contrat-detail';

export const CONTRAT_ROUTES: Routes = [
  { path: '', component: ContratList },
  { path: 'new', component: ContratForm },
  { path: ':id', component: ContratDetail },
  { path: ':id/edit', component: ContratForm }
];
