import { Injectable, computed, signal } from '@angular/core';
import { Car , CarBrand } from '../models/Vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class CarFilterService {
  private readonly availableBrands: CarBrand[] = ['BMW', 'Ford', 'Mercedes-Benz'];
  private selectedBrands = signal<CarBrand[]>([]);
  
  readonly selectedBrandsSignal = computed(() => this.selectedBrands());
  
  filterCars(cars: Car[]): Car[] {
    const selected = this.selectedBrands();
    
    if (selected.length === 0) {
      return cars;
    }
    
    return cars.filter(car => selected.includes(car.brand));
  }
  
  toggleBrand(brand: CarBrand): void {
    const current = this.selectedBrands();
    if (current.includes(brand)) {
      this.selectedBrands.set(current.filter(b => b !== brand));
    } else {
      this.selectedBrands.set([...current, brand]);
    }
  }

  getAvailableBrands(): CarBrand[] {
    return this.availableBrands;
  }
  
  isBrandSelected(brand: CarBrand): boolean {
    return this.selectedBrands().includes(brand);
  }
  
  getSelectedCount(): number {
    return this.selectedBrands().length;
  }
}
