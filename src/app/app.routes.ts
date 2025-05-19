import { Routes } from '@angular/router';
import { ShipListComponent } from './ship-list/ship-list.component';
import { ShipDetailsComponent } from './ship-details/ship-details.component';

export const routes: Routes = [
    { path: '', component: ShipListComponent},
    { path: 'ships/:id', component: ShipDetailsComponent}
];
