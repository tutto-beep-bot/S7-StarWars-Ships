import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { StarshipService } from '../services/starship.service';
import { LogoComponent } from '../logo/logo.component';
import { signal } from '@angular/core';

@Component({
  selector: 'app-ship-list',
  standalone: true,
  imports: [LogoComponent, RouterModule],
  templateUrl: './ship-list.component.html',
  styleUrl: './ship-list.component.scss'
})
export class ShipListComponent implements OnInit {
  starships: {name: string; model: string; url: string;}[] = [];
  ships = signal([])

  constructor(public starshipService: StarshipService) {}

  ngOnInit(): void {
    // this.starshipService.getStarShips().subscribe((response) =>{
    //   this.starships = response.results;
    // })
    this.starshipService.resetShips();
  }

  loadMore(): void {
    this.starshipService.fetchNextPage();
  }

  getId(url: string): string {
    const parts = url.split('/').filter(Boolean);
    return parts[parts.length - 1];
  }
}
