import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CarCatalogComponent } from "../../components/car-catalog/car-catalog.component";
import { FooterComponent } from '../../components/footer/footer.component';


@Component({
  selector: 'app-vehicles',
  imports: [ HeaderComponent, CarCatalogComponent, FooterComponent],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.css'
})
export class VehiclesComponent {

}
