import { Routes } from '@angular/router';
import { ShipListComponent } from './ship-list/ship-list.component';
import { ShipDetailsComponent } from './ship-details/ship-details.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'ships/:id', component: ShipDetailsComponent},
    { path: 'home', component: HomeComponent},
    { path: 'starships', component: ShipListComponent, canActivate: [AuthGuard]},
    {
        path: 'login',
        loadComponent: () =>
            import('./auth/login/login.component').then((m) => m.LoginComponent)
    },     
    {
        path: 'register',
        loadComponent: () =>
            import('./auth/register/register.component').then((m) => m.RegisterComponent),
  }
];
