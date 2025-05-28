import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipService } from '../services/starship.service';

@Component({
  selector: 'app-movies',
  imports: [CommonModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit {
  @Input() shipUrl!: string;
  movies: string[] = [];

  constructor(private starshipService: StarshipService) {}

  ngOnInit(): void {
    if(this.shipUrl) {
      this.starshipService.getMoviesForShip(this.shipUrl).subscribe((movies) => {
        this.movies = movies;
      });
    }
  }
}
