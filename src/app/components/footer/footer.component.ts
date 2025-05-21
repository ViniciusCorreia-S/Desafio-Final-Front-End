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
  
 navigationTerms() {
    this.router.navigate(['/termos-e-condicoes']);
    window.scrollTo(0, 0);
  }
}
