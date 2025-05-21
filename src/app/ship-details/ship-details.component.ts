import { Component } from '@angular/core';
import { StarShip, StarshipService } from '../services/starship.service';
import { ActivatedRoute } from '@angular/router';
import { StarShipApiResponse } from '../services/starship.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ship-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './ship-details.component.html',
  styleUrl: './ship-details.component.scss'
})
export class ShipDetailsComponent {
  ship!: StarShip;

  constructor(private route: ActivatedRoute, private shipService: StarshipService){}

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    this.shipService.getStarshipId(id!).subscribe((data: StarShip) => {
      this.ship = data;
    })
  }
}
