import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  imports: [ CommonModule ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

  barButton: boolean = false;
  openBar() {

    this.barButton = true;
  }

  closeBar() {
    this.barButton = false;
  }

  constructor(private router: Router) {
  }

  Home() {
    this.router.navigate(['/home']);
  }

  Veiculos() {
    this.router.navigate(['/vehicles']);
  }
  
  detalhesVeiculos() {
    this.router.navigate(['/compare-vehicles']);
  }

  testDrive() {
    this.router.navigate(['/test-drive']);
  }

  destaques() {
    this.router.navigate(['/destaques']);
  }
}
