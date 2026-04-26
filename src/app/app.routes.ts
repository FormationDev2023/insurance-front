import { Routes } from '@angular/router';
import { DashboardComponent } from './DashboardComponent/dashboard.component';
import { ClientsComponent } from './ClientsComponent/clients.component';
import { ContractsComponent } from './ContractsComponent/contracts.component';
import { SinistresComponent } from './SinistresComponent/sinistres.component';
import { HomeComponent } from './HomeComponent/home.component';



export const routes: Routes = [
     {
    path: '',
    component: DashboardComponent ,
    children: [
      { path: 'dashboard', component: HomeComponent },
<<<<<<< Updated upstream
      { path: 'clients', component: ClientsComponent },
      { path: 'contracts', component: ContractsComponent },
      { path: 'sinistres', component: SinistresComponent },
=======

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
      },

    
>>>>>>> Stashed changes
    ]
 }
  
];
