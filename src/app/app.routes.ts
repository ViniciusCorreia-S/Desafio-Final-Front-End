import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { CompareVehiclesComponent } from './pages/compare-vehicles/compare-vehicles.component';

export const routes: Routes = [
    {path : 'home', component:HomeComponent},
    // {path : '**', redirectTo:'/home', pathMatch:'full'},
    {path: 'vehicles', component:VehiclesComponent},
    {path: 'compare-vehicles', component:CompareVehiclesComponent}
];
