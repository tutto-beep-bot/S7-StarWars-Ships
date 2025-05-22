import { Routes } from '@angular/router';
import { ShipListComponent } from './ship-list/ship-list.component';
import { ShipDetailsComponent } from './ship-details/ship-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'ships/:id', component: ShipDetailsComponent},
    { path: 'home', component: HomeComponent},
    { path: 'starships', component: ShipListComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent}
];
