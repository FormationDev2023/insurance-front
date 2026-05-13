import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: HomeComponent },
      {
        path: 'clients',
        loadChildren: () =>
          import('./features/client/client.routes')
            .then(m => m.CLIENT_ROUTES)
      },
      {
        path: 'contracts',
        loadChildren: () =>
          import('./features/contrat/contrat.routes')
            .then(m => m.CONTRAT_ROUTES)
      },
      {
        path: 'sinistres',
        loadChildren: () =>
          import('./features/sinistre/sinistre.routes')
            .then(m => m.SINISTRE_ROUTES)
      }
    ]
  }
];
