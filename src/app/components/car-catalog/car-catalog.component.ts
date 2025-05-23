import { Component, OnInit , inject , computed } from '@angular/core';
import { Car } from '../../models/Vehicle.model';
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

  ngOnInit() {

    this.dataService.getAllCars().subscribe(cars => {
      this.cars = cars;
    });
  }

  toggleSelection(carId: number): void {
    this.dataService.toggleCarSelection(carId);
  }

  selectAllCars(): void {
    this.dataService.selectAllCars();
  }

  deselectAllCars(): void {
    this.dataService.deselectAllCars();
  }

  dashboardRouter(){
    this.router.navigate(['/compare-vehicles']);
  }
}

  // filterCar: Car[] = [];
  // availableBrands: string[] = [];
  // selectedBrands: Set<string> = new Set();
  // showAllBrands: boolean = true;

  // ngOnInit() {
  //   this.initializeBrands();
  //   this.updatefilterCar();

  //   this.dataService.getAllCars().subscribe(cars => {
  //     this.cars = cars;
  //   });
  // }

  // initializeBrands() {
  //   this.availableBrands = [...new Set(this.cars.map(car => car.brand))];
  //   this.selectedBrands = new Set(this.availableBrands);
  // }

  // updatefilterCar() {
  //   if (this.showAllBrands || this.selectedBrands.size === 0) {
  //     this.filterCar = [...this.cars];
  //   } else {
  //     this.filterCar = this.cars.filter(car => 
  //       this.selectedBrands.has(car.brand)
  //     );
  //   }
  // }

  // onShowAllBrandsChange() {
  //   if (this.showAllBrands) {
  //     this.selectedBrands = new Set(this.availableBrands);
  //   } else {
  //     this.selectedBrands.clear();
  //   }
  //   this.updatefilterCar();
  // }

  // onBrandFilterChange(brand: string, event: any) {
  //   this.showAllBrands = false;
    
  //   if (event.target.checked) {
  //     this.selectedBrands.add(brand);
  //   } else {
  //     this.selectedBrands.delete(brand);
  //   }

  //   if (this.selectedBrands.size === this.availableBrands.length) {
  //     this.showAllBrands = true;
  //   }

  //   this.updatefilterCar();
  // }

  // getBrandNumber(): Observable<Car[]> {
  //   return this.dataService.selectedCars$;
  // }

  // toggleSelection(carId: number): void {
  //   this.dataService.toggleCarSelection(carId);
  // }

  // selectAllCars(): void {
  //   this.dataService.selectAllCars();
  // }

  // deselectAllCars(): void {
  //   this.dataService.deselectAllCars();
  // }

  // dashboardRouter(){
  //   this.router.navigate(['/compare-vehicles']);
  // } 
// }