import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';


@Component({
  selector: 'app-compare-vehicles',
  templateUrl: './compare-vehicles.component.html',
  styleUrls: ['./compare-vehicles.component.css'],
  imports: [CommonModule,ReactiveFormsModule,FormsModule,HeaderComponent],
  standalone: true,
})
export class CompareVehiclesComponent {
}
