import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ShipListComponent } from './ship-list/ship-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LogoComponent } from './logo/logo.component';


@Component({
  selector: 'app-app',
  standalone: true,
  imports: [RouterModule, ShipListComponent, NavBarComponent, LogoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
