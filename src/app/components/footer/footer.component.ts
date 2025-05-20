import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private router: Router) {}
  
  navigateHome(){
    this.router.navigate(['/home']);
  }

  navigateVehicles(){
    this.router.navigate(['/vehicles']);
  }

  navigateCompareVehicles(){
    this.router.navigate(['/compare-vehicles']);
  }

  navigateTestDrive(){
    this.router.navigate(['/test-drive']);
  }
}
