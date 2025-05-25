import { Component , inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Car, CarroFilter } from '../../models/Vehicle.model';
import { CommonModule } from '@angular/common';
import { DataService } from '../../service/data.service';
import { FormsModule } from '@angular/forms';
import { GraphicsComponent } from '../../components/graphics/graphics.component';
import { CarCardComponent } from '../../components/car-card/car-card.component';
import { ReactiveFormsModule , FormControl , NgModel } from '@angular/forms';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-destaques',
  imports: [CommonModule, GraphicsComponent, CarCardComponent, ReactiveFormsModule, FormsModule, HeaderComponent, FooterComponent],
  standalone: true,
  templateUrl: './destaques.component.html',
  styleUrl: './destaques.component.css'
})
export class DestaquesComponent {
//   carsDestaque$: Observable<Car[]>;
//   maisVendidos$: Observable<Car[]>;
//   recemChegados$: Observable<Car[]>;
  
//   constructor(private dataService: DataService) {}

//   ngOnInit() {
//     this.carsDestaque$ = this.dataService.getCarrosDestaque();
//     this.maisVendidos$ = this.dataService.getMaisVendidos();
//     this.recemChegados$ = this.dataService.getRecemChegados();
//   }

//   formatarPreco(preco: number): string {
//     return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco);
//   }

  private carrosService = inject( DataService );

  // Filtros com two-way binding
  filtro: CarroFilter = { type: 'destaque' };

  // Carros filtrados computados
  get carrosFiltrados() {
    return this.carrosService.getFilteredCarros(this.filtro);
  }

  // Contadores para estatísticas
  get totalCarros() {
    return this.carrosService.carros.length;
  }

  // Método para formatação condicional
  getBadgeClass(carro: Car): string {
    if (carro.mostSold) return 'badge-vendido';
    if (carro.recent && carro.year >= 2024) return 'badge-novo';
    return '';
  }
}
