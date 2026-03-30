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
      { path: 'clients', component: ClientsComponent },
      { path: 'contracts', component: ContractsComponent },
      { path: 'sinistres', component: SinistresComponent },
    ]
 }
  
];
