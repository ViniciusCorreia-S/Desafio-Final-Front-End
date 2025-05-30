import { Component, OnInit , inject , computed } from '@angular/core';
import { Car , CarroFilter } from '../../models/Vehicle.model';
import { DataService } from '../../service/data.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CarFilterComponent } from '../car-filter/car-filter.component';
import { CarFilterService } from '../../service/car-filter.service';

@Component({
  selector: 'app-car-catalog',
  imports: [ CommonModule , FormsModule , CarFilterComponent ],
  templateUrl: './car-catalog.component.html',
  styleUrls: ['./car-catalog.component.css']
})
export class CarCatalogComponent implements OnInit {
  cars: Car[] = [];

  constructor(private dataService: DataService, private router: Router) { }

  carFilter = inject(CarFilterService);
  
  filteredCars = computed(() => {
    return this.carFilter.filterCars(this.cars);
  });

   getSelectedBrandsText(): string {
    const selected = this.carFilter.selectedBrandsSignal();
    return selected.join(', ');
  }

  private carrosService = inject( DataService );
  
  filtro: CarroFilter = { type: 'todos' };

  get carrosFiltrados() {
    return this.carrosService.getFilteredCarros(this.filtro);
  }

  ngOnInit() {

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