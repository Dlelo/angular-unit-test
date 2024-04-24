import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FetchDataService } from './fetch-data.service';
import { Car } from './car.interface';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[FetchDataService]
})
export class AppComponent implements OnInit {

  isCarsAvailableSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true,
  );

  readonly isCarsAvailableState$: Observable<boolean> = this.isCarsAvailableSubject$.asObservable();

  title = 'angular-testing';
  cars!: Car[];
 

  constructor(private fetchDataService:FetchDataService){}

ngOnInit(): void {
    this.cars = this.fetchDataService.getCars();
    this.checkCarLength();
}

removeCar(): void{
  this.fetchDataService.removeCar();
  this.checkCarLength();
}

private checkCarLength(){
  if(this.cars === undefined || this.cars.length < 1){
    this.isCarsAvailableSubject$.next(false);
  }
}
  
}
