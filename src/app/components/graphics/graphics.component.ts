import { Component, Input, computed, signal , OnInit} from '@angular/core';
// import { Car } from '../../models/Vehicle.model';
// import { ChartConfiguration } from 'chart.js';
// import { BaseChartDirective } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart , registerables } from 'chart.js';

@Component({
  selector: 'app-graphics',
  imports: [CommonModule /*, BaseChartDirective*/],
  standalone: true,
  templateUrl: './graphics.component.html',
  styleUrl: './graphics.component.css'
})
export class GraphicsComponent implements OnInit {
  // @Input({ required: true }) set carros(value: Car[]) {
  //   this._carros.set(value);
  // }
  
  // private _carros = signal<Car[]>([]);
  
  // chartData = computed(() => {
  //   const carros = this._carros();
    
  //   return {
  //     labels: carros.map(c => `${c.brand} ${c.model}`),
  //     datasets: [{
  //       data: carros.map(c => c.mostSold || 0),
  //       label: 'Vendas no mês',
  //       backgroundColor: 'rgba(3, 15, 22, 0.5)',
  //       borderColor: 'rgba(54, 162, 235, 1)',
  //       borderWidth: 1
  //     }]
  //   };
  // });

  // chartOptions: ChartConfiguration<'bar'>['options'] = {
  //   responsive: true,
  //   scales: {
  //     x: { 
  //       title: { display: true, text: 'Modelos' },
  //       ticks: { autoSkip: false }
  //     },
  //     y: { 
  //       beginAtZero: true,
  //       title: { display: true, text: 'Vendas no mês' }
  //     }
  //   }
  // };


    featuredCars: any[] = [];
  topSellingCars: any[] = [];
  newArrivalCars: any[] = [];

  ngOnInit(): void {
    Chart.register(...registerables);
    this.loadData();
  }

  loadData(): void {
    // Dados simulados - substitua por chamadas à API real
    this.featuredCars = [
      { model: 'BMW M4 CS', price: 1399950, stock: 8 },
      { model: 'Ford Mustang GT', price: 549000, stock: 5 },
    ];

    this.topSellingCars = [
      { model: 'BMW M4 CS', sales: 42 },
      { model: 'Ford Mustang GT', sales: 38 },
      { model: 'Mercedes EQA SUV', sales: 35 },
    ];

    this.newArrivalCars = [
      { model: 'Ford Ranger XLS V6', arrivalDate: '05/2025' },
    ];

    this.createCharts();
  }

  createCharts(): void {
    this.createFeaturedCarsChart();
    this.createTopSellingChart();
    this.createNewArrivalsChart();
  }

  createFeaturedCarsChart(): void {
    const ctx = document.getElementById('featuredChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.featuredCars.map(car => car.model),
        datasets: [{
          label: 'Preço (R$)',
          data: this.featuredCars.map(car => car.price),
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }, {
          label: 'Estoque',
          data: this.featuredCars.map(car => car.stock),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          type: 'line',
          yAxisID: 'y1'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Carros em Destaque'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Preço (R$)'
            }
          },
          y1: {
            beginAtZero: true,
            position: 'right',
            title: {
              display: true,
              text: 'Estoque'
            },
            grid: {
              drawOnChartArea: false
            }
          }
        }
      }
    });
  }

  createTopSellingChart(): void {
    const ctx = document.getElementById('topSellingChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: this.topSellingCars.map(car => car.model),
        datasets: [{
          data: this.topSellingCars.map(car => car.sales),
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Carros Mais Vendidos'
          },
          legend: {
            position: 'right'
          }
        }
      }
    });
  }

  createNewArrivalsChart(): void {
    const ctx = document.getElementById('newArrivalsChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'polarArea',
      data: {
        labels: this.newArrivalCars.map(car => car.model),
        datasets: [{
          data: this.newArrivalCars.map((_, index) => this.newArrivalCars.length - index),
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Carros Recém-Chegados'
          }
        }
      }
    });
  }
}