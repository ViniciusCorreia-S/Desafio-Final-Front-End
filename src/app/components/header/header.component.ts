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
    window.scrollTo(0, 0);
  }

  navigateVehicles(){
    this.router.navigate(['/vehicles']);
    window.scrollTo(0, 0);
  }

  navigateCompareVehicles(){
    this.router.navigate(['/compare-vehicles']);
    window.scrollTo(0, 0);
  }

  navigateTestDrive(){
    this.router.navigate(['/test-drive']);
    window.scrollTo(0, 0);
  }

  menuBtn: boolean = false;

  toggleMenu() {
    this.menuBtn = true;
  }

  closeMenu() {
    this.menuBtn = false;
  }
}
