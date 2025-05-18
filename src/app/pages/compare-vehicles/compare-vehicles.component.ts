import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';


@Component({
  selector: 'app-compare-vehicles',
  templateUrl: './compare-vehicles.component.html',
  styleUrls: ['./compare-vehicles.component.css'],
  imports: [ CommonModule, ReactiveFormsModule, FormsModule, HeaderComponent, DashboardComponent ],
  standalone: true,
})
export class CompareVehiclesComponent {
  // dataCar!: any;
 
  // constructor(private dataVehicle : DataService) {  }


  // dataCar$ = this.dataVehicle.getData().pipe(
  //   tap((resp) => {
  //     this.dataCar.set(resp);
  //     this.selectCar(this.dataCar()[0].id);
  //   })
  // )

  // selectCar(id: number|string) {
  //   const car = this.dataCar().find(
  //     (carro: any) => carro.id === Number(id)
  //   )!;
  // }



  // ngOnInit() {
  //   console.log('oi');
    // this.dataVehicles().subscribe((vehicle: any) => {
    //   if(vehicle) {
    //     this.vehicles = vehicle.dataCars;
    //   }
    // })

    // this.changesVehicles();
  // }

//   selectVehicle = new FormGroup ({
//     carro: new FormControl(null),
//   })

//   changesVehicles() {
//   this.selectVehicle.controls.carro.valueChanges.subscribe(id => {
//     if (this.vehicles.length > 0 && id) {
//       let carro = this.vehicles[Number(id) - 1];
//       this.selectCar = carro;
//     }
//   });
// }
}
