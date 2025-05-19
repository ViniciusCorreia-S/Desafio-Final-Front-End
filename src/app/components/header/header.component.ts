import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ CommonModule , SideBarComponent ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

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

  menuBtn: boolean = false;

  toggleMenu() {
    this.menuBtn = true;
  }

  closeMenu() {
    this.menuBtn = false;
  }
}
