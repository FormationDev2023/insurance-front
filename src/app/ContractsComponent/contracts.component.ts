import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../app.service';

@Component({
  selector: 'app-contracts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contracts.component.html'
})
export class ContractsComponent implements OnInit {

  message = '';

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getContractHello()
      .subscribe(res => this.message = res);
  }
}