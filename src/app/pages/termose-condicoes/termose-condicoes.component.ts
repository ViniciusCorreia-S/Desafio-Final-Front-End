import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-termose-condicoes',
  imports: [ HeaderComponent ],
  templateUrl: './termose-condicoes.component.html',
  styleUrl: './termose-condicoes.component.css'
})
export class TermoseCondicoesComponent {

  returnTop() {
    window.scrollTo(0, 0);
  }
}
