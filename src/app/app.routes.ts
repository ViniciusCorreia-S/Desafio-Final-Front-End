import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { CompareVehiclesComponent } from './pages/compare-vehicles/compare-vehicles.component';
import { TestDriveComponent } from './pages/test-drive/test-drive.component';
import { TermoseCondicoesComponent } from './pages/termose-condicoes/termose-condicoes.component';
import { ConfirmTestDriveComponent } from './components/confirm-test-drive/confirm-test-drive.component';

export const routes: Routes = [
    {path : 'home', component:HomeComponent},
    {path: 'vehicles', component:VehiclesComponent},
    {path: 'compare-vehicles', component:CompareVehiclesComponent},
    {path: 'test-drive', component:TestDriveComponent},
    {path: 'termos-e-condicoes', component:TermoseCondicoesComponent},
    {path: 'confirmacao-test-drive', component:ConfirmTestDriveComponent},
    {path : '**', redirectTo:'/home', pathMatch:'full'},
];
