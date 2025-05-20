import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/Vehicle.model';
import { DataService } from '../../service/data.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [ CommonModule ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedCars: Car[] = [];
  totalValue: number = 0;
  averageYear: number = 0;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.getSelectedCars().subscribe(cars => {
      this.selectedCars = cars;
    });
  }

  backRouter() {
    this.router.navigate(['/vehicles']);
  }
}