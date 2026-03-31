import { Routes } from '@angular/router';
import { DashboardComponent } from './DashboardComponent/dashboard.component';

import { HomeComponent } from './HomeComponent/home.component';


export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'dashboard', component: HomeComponent },

      {
        path: 'clients',
        loadChildren: () =>
          import('./features/client/client.routes')
            .then(m => m.CLIENT_ROUTES)
      },

    

    
    ]
  }
];
