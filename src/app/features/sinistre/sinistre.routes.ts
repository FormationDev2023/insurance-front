import { Routes } from '@angular/router';
import { SinistreList } from './pages/sinistre-list/sinistre-list';
import { SinistreForm } from './pages/sinistre-form/sinistre-form';
import { SinistreDetail } from './pages/sinistre-detail/sinistre-detail';

export const SINISTRE_ROUTES: Routes = [
  { path: '', component: SinistreList },
  { path: 'new', component: SinistreForm },
  { path: ':id', component: SinistreDetail },
  { path: ':id/edit', component: SinistreForm }
];
