import { Component , Input } from '@angular/core';
import { Car } from '../../models/Vehicle.model';

@Component({
  selector: 'app-car-card',
  imports: [],
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.css'
})
export class CarCardComponent {
  @Input({ required: true }) carro!: Car;
  @Input() badgeClass = '';
}
