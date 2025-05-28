import { Component } from '@angular/core';
import { StarShip, StarshipService } from '../services/starship.service';
import { ActivatedRoute } from '@angular/router';
import { StarShipApiResponse } from '../services/starship.service';
import { RouterModule } from '@angular/router';
import { PilotComponent } from '../pilot/pilot.component';
import { Pilot } from '../services/starship.service'
import { MoviesComponent } from '../movies/movies.component';

@Component({
  selector: 'app-ship-details',
  standalone: true,
  imports: [RouterModule, PilotComponent, MoviesComponent],
  templateUrl: './ship-details.component.html',
  styleUrl: './ship-details.component.scss'
})
export class ShipDetailsComponent {
  ship!: StarShip;
  pilots: Pilot[] = [];

  constructor(private route: ActivatedRoute, private shipService: StarshipService){}

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    this.shipService.getStarshipId(id!).subscribe((data: StarShip) => {
      this.ship = data;

      if (data.pilots && data.pilots.length > 0) {
        data.pilots.forEach((url) => {
          this.shipService.getPilot(url).subscribe((pilot) => {
            this.pilots.push(pilot);
          });
        });
      }
    });
  }
}
