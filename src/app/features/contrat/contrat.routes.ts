import { Routes } from '@angular/router';
import { ContratFormComponent } from './pages/contrat-form-component/contrat-form-component';
import { ContratDetailComponent } from './pages/contrat-detail-component/contrat-detail-component';
import { ContratListComponent } from './pages/contrat-list-component/contrat-list-component';


export const CONTRAT_ROUTES: Routes = [
  { path: '', component: ContratListComponent },
  { path: 'new', component: ContratFormComponent },
  { path: ':id', component: ContratDetailComponent },
  { path: ':id/edit', component: ContratFormComponent }
];