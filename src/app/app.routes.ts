import { Routes } from '@angular/router';
import { ShipListComponent } from './ship-list/ship-list.component';
import { ShipDetailsComponent } from './ship-details/ship-details.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'ships/:id', component: ShipDetailsComponent},
    { path: 'home', component: HomeComponent},
    { path: 'starships', component: ShipListComponent}
];
