import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface StarShipApiResponse {
  results: {name: string; model: string;}[];
}

@Injectable({
  providedIn: 'root'
})
export class StarshipService {
  private apiUrl = 'https://swapi.py4e.com/api/starships/'

  constructor(private http: HttpClient) {}

  getStarShips(): Observable<StarShipApiResponse> {
    return this.http.get<StarShipApiResponse>(this.apiUrl);
  }
}
