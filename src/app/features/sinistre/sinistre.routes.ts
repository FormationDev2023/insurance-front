import { Routes } from '@angular/router';
import { SinistreFormComponent } from './pages/sinistre-form-component/sinistre-form-component';
import { SinistreDetailComponent } from './pages/sinistre-detail-component/sinistre-detail-component';
import { SinistreListComponent } from './pages/sinistre-list-component/sinistre-list-component';


export const SINISTRE_ROUTES: Routes = [
  { path: '', component: SinistreListComponent },
  { path: 'new', component: SinistreFormComponent },
  { path: ':id', component: SinistreDetailComponent },
  ];