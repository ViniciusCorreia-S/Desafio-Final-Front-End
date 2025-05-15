import { Component } from '@angular/core';
import { VehiclesListComponent } from '../../components/vehicles-list/vehicles-list.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-vehicles',
  imports: [ VehiclesListComponent, HeaderComponent ],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.css'
})
export class VehiclesComponent {

}
