import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';


@Component({
  selector: 'app-compare-vehicles',
  templateUrl: './compare-vehicles.component.html',
  styleUrls: ['./compare-vehicles.component.css'],
  imports: [ HeaderComponent, DashboardComponent ],
  standalone: true,
})
export class CompareVehiclesComponent {
 
}
