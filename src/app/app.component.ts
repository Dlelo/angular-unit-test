import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FetchDataService } from './fetch-data.service';
import { Car } from './car.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[FetchDataService]
})
export class AppComponent implements OnInit {
  title = 'angular-testing';
  cars!: Car[];
 

  constructor(private fetchDataService:FetchDataService){}

ngOnInit(): void {
    this.cars = this.fetchDataService.getCars();
}
  
}
