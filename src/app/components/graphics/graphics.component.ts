import { Component , Input } from '@angular/core';
import { Car } from '../../models/Vehicle.model';
import { ChartConfiguration } from 'chart.js';
import { computed, signal } from '@angular/core';

@Component({
  selector: 'app-graphics',
  imports: [],
  templateUrl: './graphics.component.html',
  styleUrl: './graphics.component.css'
})
export class GraphicsComponent {
  @Input({ required: true }) set carros(value: Car[]) {
    this._carros.set(value);
  }
  
  private _carros = signal<Car[]>([]);
  
  chartData = computed(() => {
    const carros = this._carros();
    return {
      labels: carros.map(c => `${c.brand} ${c.model}`),
      datasets: [{
        data: carros.map(c => c.mostSold || 0),
        label: 'Vendas no mês',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    };
  });

  chartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    scales: {
      x: { title: { display: true, text: 'Modelos' } },
      y: { 
        beginAtZero: true,
        title: { display: true, text: 'Vendas no mês' }
      }
    }
  };
}