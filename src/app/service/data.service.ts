import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Car } from '../models/Vehicle.model';
import { CarroFilter } from '../models/Vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private carsData: Car[] = [
    {
      id: 1,
      brand: 'BMW',
      model: 'X6 M Competition',
      year: 2023,
      price: 1298950,
      power: 625,
      torque: 750,
      motorization: 'V8',
      motorizationL: 4.4,
      acceleration: 3.8,
      vmax: 290,
      featured: false,
      mostSold: false,
      recent: false,
      salesMonth: 100,
      imageUrl: 'Img/BMW X6 M Competition-Photoroom.png',
      selected: false
    },
    {
      id: 2,
      brand: 'BMW',
      model: 'M4 CS',
      year: 2024,
      price: 1399950,
      power: 550,
      torque: 660,
      motorization: 'S58',
      motorizationL: 3.0,
      acceleration: 3.4,
      vmax: 302,
      featured: true,
      mostSold: true,
      recent: false,
      salesMonth: 100,
      imageUrl: 'Img/BMW M4 CS.png',
      selected: false
    },
    {
      id: 3,
      brand: 'Ford',
      model: 'Mustang GT',
      year: 2024,
      price: 549000,
      power: 492,
      torque: 564,
      motorization: 'Coyote V8',
      motorizationL: 5.0,
      acceleration: 4.3,
      vmax: 250,
      featured: true,
      mostSold: true,
      recent: false,
      salesMonth: 100,
      imageUrl: 'Img/Mustang GT.png',
      selected: false
    },
    {
      id: 4,
      brand: 'Ford',
      model: 'Ranger XLS V6',
      year: 2025,
      price: 238900,
      power: 250,
      torque: 600,
      motorization: 'V6',
      motorizationL: 3.0,
      acceleration: 9.2,
      vmax: 187,
      featured: false,
      mostSold: false,
      recent: true,
      salesMonth: 100,
      imageUrl: 'Img/Ford Ranger XLS V6.png',
      selected: false
    },
    {
      id: 5,
      brand: 'Mercedes-Benz',
      model: 'EQA SUV',
      year: 2022,
      price: 399900,
      power: 	190,
      torque: 375,
      motorization: 'Híbrido / Elétrico',
      motorizationL: 66.5,
      acceleration: 8.6,
      vmax: 160,
      featured: false,
      mostSold: true,
      recent: false,
      salesMonth: 100,
      imageUrl: 'Img/Mercedes EQA SUV.png',
      selected: false
    },
    {
      id: 6,
      brand: 'Mercedes-Benz',
      model: 'AMG CLA Coupé',
      year: 2019,
      price:  297900,
      power: 306,
      torque: 400,
      motorization: 'Turbo',
      motorizationL: 2.0,
      acceleration: 4.9,
      vmax: 250,
      featured: false,
      mostSold: false,
      recent: false,
      salesMonth: 100,
      imageUrl: 'Img/Mercedes-AMG CLA Coupé.png',
      selected: false
    }
  ];

  private cars = new BehaviorSubject<Car[]>(this.carsData);
  private selectedCars = new BehaviorSubject<Car[]>([]);

  cars$ = this.cars.asObservable();
  selectedCars$ = this.selectedCars.asObservable();

  constructor() { }

  getAllCars(): Observable<Car[]> {
    return this.cars$;
  }

  getSelectedCars(): Observable<Car[]> {
    return this.selectedCars$;
  }

  toggleCarSelection(carId: number): void {
    const updatedCars = this.cars.value.map(car => {
      if (car.id === carId) {
        return { ...car, selected: !car.selected };
      }
      return car;
    });
    
    this.cars.next(updatedCars);
    
    const selected = updatedCars.filter(car => car.selected);
    this.selectedCars.next(selected);
  }

  selectAllCars(): void {
    const updatedCars = this.cars.value.map(car => {
      return { ...car, selected: true };
    });
    
    this.cars.next(updatedCars);
    
    const selected = updatedCars.filter(car => car.selected);
    this.selectedCars.next(selected);
  }

  deselectAllCars(): void {
    const updatedCars = this.cars.value.map(car => {
      return { ...car, selected: false };
    });
    
    this.cars.next(updatedCars);
    this.selectedCars.next([]);
  }

  
  carros = [...this.carsData];

  getFilteredCarros(filter: CarroFilter) {
    return this.carros.filter((carro: any) => {
      let match = true;
      
      if (filter.type === 'destaque' && !carro.featured) match = false;
      if (filter.type === 'mais-vendidos' && !carro.mostSold) match = false;
      if (filter.type === 'recem-chegados' && !carro.recent) match = false;
      if (filter.brand && !carro.brand.includes(filter.brand)) match = false;
      if (filter.maxPrice && carro.preco > filter.maxPrice) match = false;
      
      return match;
    });
  }

//   addCarro(novoCarro: Omit<Car, 'id'>) {
//   const newCar = { ...novoCarro, id: this.generateId() };
//   this.cars.next([...this.cars.value, newCar]);
// }

//   private generateId(): number {
//   return Math.max(...this.cars.value.map(c => c.id), 0) + 1;
// }
}

