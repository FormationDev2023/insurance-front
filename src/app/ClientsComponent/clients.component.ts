import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../app.service';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients.component.html'
})
export class ClientsComponent implements OnInit {

  message = '';

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getClientHello()
      .subscribe(res => this.message = res);
  }
}