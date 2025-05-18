import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/Vehicle.model';
import { DataService } from '../../service/data.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-catalog',
  imports: [ CommonModule ],
  templateUrl: './car-catalog.component.html',
  styleUrls: ['./car-catalog.component.css']
})
export class CarCatalogComponent implements OnInit {
  cars: Car[] = [];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.getAllCars().subscribe(cars => {
      this.cars = cars;
    });
  }

  toggleSelection(carId: number): void {
    this.dataService.toggleCarSelection(carId);
  }

  dashboardRouter(){
    this.router.navigate(['/compare-vehicles']);
  }
}