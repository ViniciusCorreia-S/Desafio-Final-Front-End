import { Component } from '@angular/core';
// import { VehiclesListComponent } from '../../components/vehicles-list/vehicles-list.component';
import { HeaderComponent } from '../../components/header/header.component';
import { CarCatalogComponent } from "../../components/car-catalog/car-catalog.component";

@Component({
  selector: 'app-vehicles',
  imports: [ HeaderComponent, CarCatalogComponent],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.css'
})
export class VehiclesComponent {

}
