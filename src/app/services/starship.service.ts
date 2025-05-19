import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface StarShipApiResponse {
  results: {name: string; model: string; url: string;}[];
}

export interface StarShip {
  name: string;
  model: string;
  url: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
}

@Injectable({
  providedIn: 'root'
})
export class StarshipService {
  private apiUrl = 'https://swapi.py4e.com/api/starships/'

  constructor(private http: HttpClient) {}

  getStarshipId(id: string): Observable<StarShip> {
    return this.http.get<StarShip>(`${this.apiUrl}${id}/`)
  }

  getStarShips(): Observable<StarShipApiResponse> {
    return this.http.get<StarShipApiResponse>(this.apiUrl);
  }
}
