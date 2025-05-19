import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { StarshipService } from '../services/starship.service';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-ship-list',
  standalone: true,
  imports: [LogoComponent, RouterModule],
  templateUrl: './ship-list.component.html',
  styleUrl: './ship-list.component.scss'
})
export class ShipListComponent implements OnInit {
  starships: {name: string; model: string; url: string;}[] = [];

  constructor(private starshipService: StarshipService) {}

  ngOnInit(): void {
    this.starshipService.getStarShips().subscribe((response) =>{
      this.starships = response.results;
    })
  }

  getId(url: string): string {
    const parts = url.split('/').filter(Boolean);
    return parts[parts.length - 1];
  }
}
