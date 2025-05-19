import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StarshipService } from '../services/starship.service';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-ship-list',
  imports: [LogoComponent],
  templateUrl: './ship-list.component.html',
  styleUrl: './ship-list.component.scss'
})
export class ShipListComponent implements OnInit {
  starships: {name: string; model: string;}[] = [];

  constructor(private starshipService: StarshipService) {}

  ngOnInit(): void {
    this.starshipService.getStarShips().subscribe((response) =>{
      this.starships = response.results;
    })
  }
}
