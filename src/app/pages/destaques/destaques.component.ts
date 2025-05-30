import { Component  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GraphicsComponent } from '../../components/graphics/graphics.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-destaques',
  imports: [CommonModule, GraphicsComponent, ReactiveFormsModule, FormsModule, HeaderComponent, FooterComponent],
  standalone: true,
  templateUrl: './destaques.component.html',
  styleUrl: './destaques.component.css'
})
export class DestaquesComponent {

}
