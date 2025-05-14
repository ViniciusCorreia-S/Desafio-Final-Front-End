import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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

    const leftBar = document.querySelector('.side-bar') as HTMLElement;
  }

  closeBar() {
    this.barButton = false;

    const leftBar = document.querySelector('.side-bar') as HTMLElement;
  }
}
