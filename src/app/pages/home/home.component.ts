import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { CatalogComponent } from '../../components/catalog/catalog.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, CarouselComponent, CatalogComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
