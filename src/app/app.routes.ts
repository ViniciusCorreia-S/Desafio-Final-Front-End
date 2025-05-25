import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { CompareVehiclesComponent } from './pages/compare-vehicles/compare-vehicles.component';
import { TestDriveComponent } from './pages/test-drive/test-drive.component';
import { TermoseCondicoesComponent } from './pages/termose-condicoes/termose-condicoes.component';
import { DestaquesComponent } from './pages/destaques/destaques.component';

export const routes: Routes = [
    {path : 'home', component:HomeComponent},
    {path: 'vehicles', component:VehiclesComponent},
    {path: 'compare-vehicles', component:CompareVehiclesComponent},
    {path: 'test-drive', component:TestDriveComponent},
    {path: 'termos-e-condicoes', component:TermoseCondicoesComponent},
    {path: 'destaques', component:DestaquesComponent},
    {path : '**', redirectTo:'/home', pathMatch:'full'},
];
