import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  imports: [],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {

  constructor(private router: Router) {}

  navigateVehicles(){
    this.router.navigate(['/vehicles']);
  }
}
