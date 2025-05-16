import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles-list',
  standalone: true,
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent {
  
  constructor(private router: Router) {}

  information() {
    this.router.navigate(['/compare-vehicles']);
  }
}
