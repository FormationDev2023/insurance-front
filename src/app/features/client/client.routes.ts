import { Routes } from '@angular/router';
import { ClientFormComponent } from './pages/client-form-component/client-form-component';
import { ClientDetailComponent } from './pages/client-detail-component/client-detail-component';
import { ClientListComponent } from './pages/client-list-component/client-list-component';


export const CLIENT_ROUTES: Routes = [
  { path: '', component: ClientListComponent },
  { path: 'new', component: ClientFormComponent },
  { path: ':id', component: ClientDetailComponent },
  { path: ':id/edit', component: ClientFormComponent }
];