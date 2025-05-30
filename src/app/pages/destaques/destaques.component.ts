import { Component  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GraphicsComponent } from '../../components/graphics/graphics.component';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
=======
import { ReactiveFormsModule , FormControl , NgModel } from '@angular/forms';
>>>>>>> 4ef6222ad5071f095578441ce667d7860c20a998
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
