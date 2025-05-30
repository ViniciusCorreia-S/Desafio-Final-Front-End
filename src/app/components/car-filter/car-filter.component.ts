import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarFilterService } from '../../service/car-filter.service';
import { CarBrand } from '../../models/Vehicle.model';
import { Car , CarroFilter } from '../../models/Vehicle.model';
import { DataService } from '../../service/data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car-filter',
  imports: [ CommonModule , FormsModule  ],
  templateUrl: './car-filter.component.html',
  styleUrl: './car-filter.component.css'
})
export class CarFilterComponent {
  carFilterService = inject(CarFilterService);
  availableBrands: CarBrand[] = this.carFilterService.getAvailableBrands();
  
  onBrandToggle(brand: CarBrand): void {
    this.carFilterService.toggleBrand(brand);
  }
<<<<<<< HEAD
=======
  
  // clearFilters(): void {
  //   this.carFilterService.clearFilters();
  // }
>>>>>>> 4ef6222ad5071f095578441ce667d7860c20a998
}
