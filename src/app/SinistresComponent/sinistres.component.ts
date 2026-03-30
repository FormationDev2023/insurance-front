import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../app.service';

@Component({
  selector: 'app-sinistres',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sinistres.component.html'
})
export class SinistresComponent implements OnInit {

  message = '';

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getSinistreHello()
      .subscribe(res => this.message = res);
  }
}