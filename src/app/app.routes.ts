import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';

export const routes: Routes = [
    {path : 'home', component:HomeComponent},
    {path : 'vehicles', component:VehiclesComponent},
    {path : '**', redirectTo:'/home', pathMatch:'full'}
];
