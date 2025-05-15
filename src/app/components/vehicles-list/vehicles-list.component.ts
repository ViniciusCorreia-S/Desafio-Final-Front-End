import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicles-list',
  standalone: true,
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent {
  // Lista de filtros disponíveis
  filters: string[] = ['Todos', 'Toyota', 'Ford', 'Chevrolet']; // exemplo
  activeFilter = 'Todos';

  // Lista de veículos (exemplo)
  vehicles = [
    { brand: 'Toyota', model: 'Corolla' },
    { brand: 'Ford', model: 'Focus' },
    { brand: 'Chevrolet', model: 'Onix' },
    { brand: 'Toyota', model: 'Yaris' },
  ];

  // Método chamado ao clicar no botão de filtro
  setFilter(filter: string) {
    this.activeFilter = filter;
  }

  // Método para saber se deve exibir o card
  shouldShowCard(brand: string): boolean {
    return this.activeFilter === 'Todos' || this.activeFilter === brand;
  }
}
