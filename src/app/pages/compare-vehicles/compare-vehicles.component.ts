import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { FooterComponent } from "../../components/footer/footer.component";


@Component({
  selector: 'app-compare-vehicles',
  templateUrl: './compare-vehicles.component.html',
  styleUrls: ['./compare-vehicles.component.css'],
  imports: [HeaderComponent, DashboardComponent, FooterComponent],
  standalone: true,
})
export class CompareVehiclesComponent {
 
}
