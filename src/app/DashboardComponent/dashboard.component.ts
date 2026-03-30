import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,       
    RouterLink,        
    RouterLinkActive 
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  clientMsg: string = '';
  sinistreMsg: string = '';
  contractMsg: string = '';

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.appService.getClientHello()
      .subscribe({
        next: (res) => this.clientMsg = res,
        error: (err) => this.clientMsg = 'Erreur client'
      });
       this.appService.getContractHello()
      .subscribe({
        next: (res) => this.contractMsg = res,
        error: (err) => this.contractMsg = 'Erreur contrat'
      });

    this.appService.getSinistreHello()
      .subscribe({
        next: (res) => this.sinistreMsg = res,
        error: (err) => this.sinistreMsg = 'Erreur sinistre'
      });

   
  }
}