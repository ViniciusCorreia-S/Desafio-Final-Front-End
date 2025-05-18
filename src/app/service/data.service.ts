import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Car } from '../models/Vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // constructor(private http : HttpClient) { }

  // private urlData = 'http://localhost:3001/listCars'

  // getData(): Observable<Car[]> { 
  //   return this.http.get<{ dataVehicle : Car[]}>(this.urlData)
  //     .pipe(map((resp) => resp.dataVehicle));
  // }

  // Dados de exemplo - em um caso real, você buscaria de uma API
  private carsData: Car[] = [
    {
      id: 1,
      brand: 'BMW',
      model: 'X6 M Competition',
      year: 2023,
      price: 1298950,
      imageUrl: 'Img/BMW X6 M Competition-Photoroom.png',
      description: '',
      selected: false
    },
    {
      id: 2,
      brand: 'BMW',
      model: 'M4 CS',
      year: 2024,
      price: 1399950,
      imageUrl: 'Img/BMW M4 CS.png',
      description: '',
      selected: false
    },
    {
      id: 3,
      brand: 'Ford',
      model: 'Mustang GT',
      year: 2024,
      price: 549000,
      imageUrl: 'Img/Mustang GT.png',
      description: '',
      selected: false
    },
    {
      id: 4,
      brand: 'Ford',
      model: 'Ranger XLS V6',
      year: 2025,
      price: 238900,
      imageUrl: 'Img/Ford Ranger XLS V6.png',
      description: '',
      selected: false
    },
    {
      id: 5,
      brand: 'Mercedes-Benz',
      model: 'EQA SUV',
      year: 2022,
      price: 399900,
      imageUrl: 'Img/Mercedes EQA SUV.png',
      description: '',
      selected: false
    },
    {
      id: 6,
      brand: 'Mercedes-Benz',
      model: 'AMG CLA Coupé',
      year: 2019,
      price:  297900,
      imageUrl: 'Img/Mercedes-AMG CLA Coupé.png',
      description: '',
      selected: false
    }
  ];

  // Subjects para gerenciar carros e carros selecionados
  private cars = new BehaviorSubject<Car[]>(this.carsData);
  private selectedCars = new BehaviorSubject<Car[]>([]);

  // Observables que os componentes podem assinar
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
    
    // Atualiza a lista de carros selecionados
    const selected = updatedCars.filter(car => car.selected);
    this.selectedCars.next(selected);
  }
}

